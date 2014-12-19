var Backbone, $, config;

$              = require('jquery');
Backbone       = require('backbone');
Backbone.$     = $;
Backbone.Epoxy = require('backbone.epoxy');
config         = require('../config');

module.exports = Backbone.Epoxy.Model.extend({
    defaults: {
        username: '',
        fetch: function() {
            return this.fetch();
        }
    },
    urlRoot: 'http://ws.audioscrobbler.com/2.0/?',
    url: function() {
        return this.urlRoot +
            'method=user.gettopartists&user=' +
            this.defaults.username +
            '&limit=200' +
            '&period=1month' +
            '&api_key=' +
            config.apiKey +
            '&format=json';
    }
});
