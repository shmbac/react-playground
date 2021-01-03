import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state ={
            num: 0
        };
    }

    increase() {
            //console.log(this.state.num);
            //this.state.num = ++;
            this.setState({
                num: this.state.num + 1
            });
    }

    decrease() {
        //console.log(this.state.num);
        //this.state.num = ++;
        this.setState({
            num: this.state.num - 1
        });
}

    render() {
        return (
            <div>
                The number is:
                {this.state.num}What a great number!
                <button onClick={this.increase.bind(this)}>Increase</button>
                <button onClick={this.decrease.bind(this)}>Decrease</button>               
            </div>
        );
    }
}

export default Counter;
