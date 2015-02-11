$ = require('jquery')(window)
Backbone = require 'backbone'
Backbone.$ = $

module.exports = Chore = Backbone.Model.extend
    defaults:
        name: ""
        date: ""
        finished: false
    url: "/chore"
