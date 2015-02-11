React = require 'react'
ChoreView = require './choreView'

module.exports = ChoresView = React.createClass
  render: () ->
    choreNodes = this.props.data.map (chore) ->
      (<ChoreView data={chore} />)

    (<div className="chores">
      {choreNodes}
    </div>)
