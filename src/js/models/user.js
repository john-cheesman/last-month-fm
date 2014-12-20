var Backbone, $, config;

$              = require('jquery');
Backbone       = require('backbone');
Backbone.$     = $;
config         = require('../config');

module.exports = Backbone.Model.extend({
    defaults: {
        username: ''
    },
    urlRoot: config.urlRoot,
    url: function() {
        return this.urlRoot +
        'method=user.getinfo&user=' +
        this.get('username') +
        '&api_key=' +
        config.apiKey +
        '&format=json';
    }
});
