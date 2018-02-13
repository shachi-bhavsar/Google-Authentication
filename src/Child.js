
import React from 'react'
export default class Child extends React.Component {

    render() {
        return (
        <div>
          <input
            id={this.props.id}
            name={this.props.value}
            type="checkbox"
            value={this.props.checked}
            onChange={this.props.handleChange}
          />
            <label htmlFor={this.props.value}>{this.props.value}</label>
          </div>
        )
    }
}