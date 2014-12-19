var config, TopArtists, AppView;

config     = require('./config');
TopArtists = require('./models/top-artists');
AppView    = require('./views/app-view');

module.exports = {
    init: function() {
        var topArtists = new TopArtists();
        var appView    = new AppView({
            model: topArtists
        });

        console.log(topArtists, config);
    }
}

module.exports.init();
