import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            num: props.num,
        }
    }
    updateNum(num){
        this.setState({num: num});
        this.props.changeNum(num);
    }
    increase() {
        const result = (this.state.num === this.props.max) ? this.props.max : (this.state.num + 1);
        this.updateNum(result);
    }

    decrease() {
        const result = (this.state.num === this.props.min) ? this.props.min : (this.state.num - 1);
        this.updateNum(result);
    }

    handlerChange(e){
       this.updateNum(e.target.value);
    }

    render(){
        return (<div>
            <input type="button" value='-' onClick={this.decrease.bind(this)}/>
            <input type="text" size="5" value={this.state.num} onChange={e => this.handlerChange(e)}/>
            <input type="button" value='+' onClick={this.increase.bind(this)}/>
        </div>)
    }
}

export default Counter;

