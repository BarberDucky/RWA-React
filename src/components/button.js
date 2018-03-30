import React, {Component} from 'react'

export default class MyButton extends Component {
    render () {
        return (
            <button className={this.props.selected ? "selected" : ""} onClick={this.props.clicked}>{this.props.naslov}</button>
        )
    }
}