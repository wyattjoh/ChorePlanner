React = require 'react'
Chores = require './models/chores'
ChoresView = require './views/choresView'

chores = new Chores()

# Populate from the global modal
chores.reset choresJSON

React.render (<ChoresView data={chores} />), document.getElementById('chores')
