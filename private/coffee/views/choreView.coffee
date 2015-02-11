React = require 'react'

module.exports = ChoreView = React.createClass
    handleChange: (event) ->
        console.log event.target.value

        return

    render: () ->
        (<div className="chore">
            <span>{this.props.data.get("name")}</span>
            <input type="checkbox" className="toggle" onClick={this.handleChange} />
        </div>)
