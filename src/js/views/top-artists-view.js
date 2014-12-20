var Backbone, $;

$              = require('jquery');
Backbone       = require('backbone');
Backbone.$     = $;

module.exports = Backbone.View.extend({
    inintialize: function() {
        this.on('user-search', this.update(event, data));
    },
    update: function(event, data) {
        console.log('yo');
        this.model.set('username', data.username);
        this.model.fetch();
    },
    el: '.js-top-artists'
});
