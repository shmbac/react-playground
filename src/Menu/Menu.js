import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    {this.props.children}
                </ul>                
            </nav>
        )
    }
}

