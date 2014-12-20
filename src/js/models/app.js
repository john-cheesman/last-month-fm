var Backbone, $;

$              = require('jquery');
Backbone       = require('backbone');
Backbone.$     = $;

module.exports = Backbone.Model.extend({
    defaults: {
        username: ''
    }
});
