require [
  'backbone',
  'react'
], (Backbone, React) ->

  Chore = Backbone.Model.extend
    defaults:
      name: ""
      date: ""
      finished: false
    url: "/chore"

  Chores = Backbone.Collection.extend
    model: Chore
    url: "/chores"

  chores = new Chores()

  # Populate from the global modal
  chores.reset choresJSON

  ChoreView = React.createClass
    render: () ->
      `<div className="chore">
        {this.props.data.get("name")}
      </div>`

  ChoresView = React.createClass
    render: () ->
      choreNodes = this.props.data.map (chore) ->
        `<ChoreView data={chore} />`

      `<div className="chores">
        {choreNodes}
      </div>`

  React.render `<ChoresView data={chores} />`, document.getElementById('chores')

  return
