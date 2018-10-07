import React from 'react'
import {Grid, Row, Col, Image, Thumbnail} from 'react-bootstrap';
import {hot} from 'react-hot-loader'
import Counter from './Counter';

class StuffList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            banziNum: 1,
            banziPrice: 2,
            jietouNum: 1,
            jietouPrice: 1,
            lunziNum: 1,
            lunziPrice: 3,
        }
    }

    changeBanziNum(num) {
        this.setState({
            banziNum: num
        })
    }
    changeJietouNum(num) {
        this.setState({
            jietouNum: num
        })
    }
    changeLunziNum(num) {
        this.setState({
            lunziNum: num
        })
    }
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={2} md={2}>
                        <Thumbnail href="#" alt="300x180" src="app/picture/banzi.jpg"/>
                    </Col>
                    <Col xs={2} md={2}>
                        {this.state.banziPrice}元/每天
                    </Col>
                    <Col xs={2} md={2}>
                        <Counter min='0' max='100' num={this.state.banziNum} changeNum={num => this.changeBanziNum(num)}/>
                    </Col>
                    <Col xs={2} md={2}>
                        总价{this.state.banziPrice * this.state.banziNum}元
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={2} md={2}>
                        <Thumbnail href="#" alt="300x180" src="app/picture/jietou.jpg"/>
                    </Col>
                    <Col xs={2} md={2}>
                        {this.state.jietouPrice}元/每天
                    </Col>
                    <Col xs={2} md={2}>
                        <Counter min='0' max='100' num={this.state.jietouNum} changeNum={num => this.changeJietouNum(num)}/>
                    </Col>
                    <Col xs={2} md={2}>
                        总价{this.state.jietouPrice * this.state.jietouNum}元
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={2} md={2}>
                        <Thumbnail href="#" alt="300x180" src="app/picture/lunzi.jpg"/>
                    </Col>
                    <Col xs={2} md={2}>
                        {this.state.lunziPrice}元/每天
                    </Col>
                    <Col xs={2} md={2}>
                        <Counter min='0' max='100' num={this.state.lunziNum} changeNum={num => this.changeLunziNum(num)}/>
                    </Col>
                    <Col xs={2} md={2}>
                        总价{this.state.lunziPrice * this.state.lunziNum}元
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default hot(module)(StuffList);