import React, {Component} from 'react'
import Button from './button'

export default class ButtonList extends Component {
    constructor () {
        super()
        this.state = {
            selected: -1,
            buttons: ["one", "two", "three"]
        }
    }
    onButtonClicked (index) {
        this.setState({
            selected: index
        })
    }

    render () {
        return (
            <div>
                {this.state.buttons.map((title, index) => {
                    return (
                        <Button naslov={title} key={index} selected={this.state.selected === index} clicked={() => this.onButtonClicked(index)}/>
                    )
                })}
            </div>
        )
    }
}