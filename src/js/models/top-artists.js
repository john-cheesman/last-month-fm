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
        monthlyStats: {
            monthlyArtists: '',
            monthlyTracks: ''
        }
    },
    monthlyArtists: function() {
        var artists;

        artists = this.get('topartists').artist;

        return artists.length;
    },
    monthlyTracks: function() {
        var artists, tracks, i;

        artists = this.get('topartists').artist;
        tracks  = 0;

        for (i=0; i<artists.length; i++) {
            tracks += parseInt(artists[i].playcount);
        }

        return tracks;
    },
    urlRoot: config.urlRoot,
    url: function() {
        return this.urlRoot +
            'method=user.gettopartists&user=' +
            this.get('username') +
            '&limit=1000' +
            '&period=1month' +
            '&api_key=' +
            config.apiKey +
            '&format=json';
    }
});
