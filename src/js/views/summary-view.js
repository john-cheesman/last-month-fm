var Backbone, $, template;

$          = require('jquery');
Backbone   = require('backbone');
Backbone.$ = $;
template   = require('../templates/summary');

module.exports = Backbone.View.extend({
    template: template,

    initialize: function() {
        this.listenTo(this.model, 'change:topartists', this.updateStats);
        this.listenTo(this.model, 'change:monthlyStats', this.render);
    },

    render: function() {
        this.$el.html(this.template(this.model.get('monthlyStats')))
    },

    updateStats: function() {
        this.model.set({
            monthlyStats: {
                monthlyArtists: this.model.monthlyArtists(),
                monthlyTracks: this.model.monthlyTracks()
            }
        });
    }
});
