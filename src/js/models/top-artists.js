var Backbone = require('backbone');
var $        = require('jquery');
var config   = require('../config');
Backbone.$   = $;

module.exports = Backbone.Model.extend({
    user: 'blues_driven',
    urlRoot: 'http://ws.audioscrobbler.com/2.0/?',
    url: function() {
        return this.urlRoot +
            'method=user.gettopartists&user=' +
            this.user +
            '&limit=200' +
            '&period=1month' +
            '&api_key=' +
            config.apiKey +
            '&format=json';
    }
});
