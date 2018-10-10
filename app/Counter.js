import React from 'react';
import {Row, Col, Thumbnail} from 'react-bootstrap';

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

    handlerNumChange(e){
       this.updateNum(e.target.value);
    }

    render(){
        return (<Row className="show-grid">
            <Col xs={2} md={2}>
                <Thumbnail href="#" alt="轮子" src={this.props.image}/>
            </Col>
            <Col xs={2} md={2}>
                <div className="common"> {this.props.price}元/每天</div>
            </Col>
            <Col xs={2} md={2}>
                <div className="common">
                    套数：
                        <input type="button" value='-' onClick={this.decrease.bind(this)}/>
                        <input type="text" size="5" value={this.state.num} onChange={e => this.handlerNumChange(e)}/>
                        <input type="button" value='+' onClick={this.increase.bind(this)}/>
                </div>
            </Col>
            <Col xs={2} md={2}>
                <div className="common"> 总价{this.props.price * this.state.num}元</div>
            </Col>
        </Row>);
    }
}

export default Counter;

