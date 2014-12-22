var Backbone, $, app, User, TopArtists,
    UserView, TopArtistsView, SummaryView;

$              = require('jquery');
Backbone       = require('backbone');
Backbone.$     = $;
User           = require('../models/user');
TopArtists     = require('../models/top-artists');
UserView       = require('../views/user-view');
TopArtistsView = require('../views/top-artists-view');
SummaryView    = require('../views/summary-view');

module.exports = Backbone.View.extend({
    el: '.js-app',

    events: {
        'keyup .js-user-search-input': 'searchOnEnter',
        'click .js-user-search-button': 'search'
    },

    initialize: function() {
        this.user = new User();
        this.topArtists = new TopArtists();

        this.userView = new UserView({
            model: this.user,
            el: '.js-user'
        });

        this.topArtistsView = new TopArtistsView({
            model: this.topArtists,
            el: '.js-top-artists'
        });

        this.summaryView = new SummaryView({
            model: this.topArtists,
            el: '.js-summary'
        })

        this.input = this.$('.js-user-search-input');
        console.log(this.user, this.topArtists, this.userView, this.topArtistsView, this.summaryView);
    },

    render: function() {

    },

    search: function() {
        this.user.set('username', this.input.val());
        this.topArtists.set('username', this.input.val());

        this.user.fetch();
        this.topArtists.fetch();
    },

    searchOnEnter: function(e) {
        if (this.input.val() && e.keyCode === 13) {
            this.search();
        }
        else {
            return;
        }
    }
});

app = new module.exports();
