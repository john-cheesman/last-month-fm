var config     = require('./config');
var TopArtists = require('./models/top-artists');

module.exports = {
    init: function() {
        var topArtists = new TopArtists();

        topArtists.fetch();

        console.log(topArtists, config);
    }
}

module.exports.init();
