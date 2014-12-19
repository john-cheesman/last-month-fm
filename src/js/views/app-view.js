var Backbone, $, config;

$              = require('jquery');
Backbone       = require('backbone');
Backbone.$     = $;
Backbone.Epoxy = require('backbone.epoxy');
config         = require('../config');

module.exports = Backbone.Epoxy.View.extend({
    el: '.js-app',
    events: {
        'click .js-user-search-button': 'userSearch'
    },
    userSearch: function() {
        return this.model.fetch();
    }
});
