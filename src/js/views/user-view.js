var Backbone, $, template;

$              = require('jquery');
Backbone       = require('backbone');
Backbone.$     = $;
template       = require('../templates/user');

module.exports = Backbone.View.extend({
    template: template,

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        this.$el.html(this.template(this.model.get('user')))
    }
});
