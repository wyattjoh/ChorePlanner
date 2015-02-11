$ = require('jquery')(window)
Backbone = require 'backbone'
Backbone.$ = $

module.exports = Chore = Backbone.Model.extend
    defaults:
        name: ""
        date: ""
        completed: false
    url: "/chore"
    toggle: () ->

        this.set "completed", !this.get("completed")

        return
