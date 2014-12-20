var Backbone, $, app, User;

$              = require('jquery');
Backbone       = require('backbone');
Backbone.$     = $;
User           = require('../models/user');

module.exports = Backbone.View.extend({
    el: '.js-app',

    events: {
        'keyup .js-user-search-input': 'searchOnEnter'
    },

    initialize: function() {
        this.user = new User();

        this.input = this.$('.js-user-search-input');
        console.log(this.user);
    },

    render: function() {

    },

    searchOnEnter: function(e) {
        if (e.keyCode != 13) return;
        if (!this.input.val()) return;

        this.user.set('username', this.input.val());
    }
});

app = new module.exports();
