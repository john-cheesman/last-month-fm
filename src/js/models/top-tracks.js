var Backbone, $, config;

$              = require('jquery');
Backbone       = require('backbone');
Backbone.$     = $;
config         = require('../config');

module.exports = Backbone.Model.extend({
    defaults: {
        username: '',
        topartists: {
            artist: []
        },
        monthlyStats: {}
    },

    urlRoot: config.urlRoot,

    url: function() {
        return this.urlRoot +
            'method=user.gettoptracks&user=' +
            this.get('username') +
            '&limit=1000' +
            '&period=3month' +
            '&api_key=' +
            config.apiKey +
            '&format=json';
    }
});
