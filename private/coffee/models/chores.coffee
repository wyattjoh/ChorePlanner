Chore = require './chore'

$ = require('jquery')(window)
Backbone = require 'backbone'
Backbone.$ = $

module.exports = Chores = Backbone.Collection.extend
    model: Chore
    url: "/chores"
