React = require 'react'

module.exports = ChoreView = React.createClass
    render: () ->
        (<div className="chore">
            <span>{this.props.data.get("name")}</span>
            <input
                type="checkbox"
                className="toggle"
                onClick={this.props.data.toggle}
                checked={this.props.data.get("completed")}
            />
        </div>)
