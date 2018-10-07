import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {num: 1}
    }

    increase() {
        this.setState({num: (this.state.num === this.props.max) ? this.props.max : (this.state.num + 1)});
    }

    decrease() {
        this.setState({num: (this.state.num === this.props.min) ? this.props.min : (this.state.num - 1)});
    }

    render() {
        return (<div>
            <input type="button" value='-' onClick={this.decrease.bind(this)}/>
            <input type="text" size="5" value={this.state.num}/>
            <input type="button" value='+' onClick={this.increase.bind(this)}/>
        </div>)
    }
}

export  default Counter;

