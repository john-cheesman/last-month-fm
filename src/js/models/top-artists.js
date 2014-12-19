var Backbone, $, config;

$              = require('jquery');
Backbone       = require('backbone');
Backbone.$     = $;
Backbone.Epoxy = require('backbone.epoxy');
config         = require('../config');

module.exports = Backbone.Epoxy.Model.extend({
    defaults: {
        username: '',
        topartists: {
            artist: []
        },
        fetch: function() {
            return this.fetch();
        }
    },
    computeds: {
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
        }
    },
    urlRoot: 'http://ws.audioscrobbler.com/2.0/?',
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
