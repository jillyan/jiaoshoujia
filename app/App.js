import React from 'react'
import {Grid, Row, Col, Image, Thumbnail} from 'react-bootstrap';
import {hot} from 'react-hot-loader'
import Counter from './Counter';
import './jsj.css';

class StuffList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            unitNum: 1,
            unitPrice: 3,
            banziNum: 0,
            banziPrice: 2,
            jietouNum: 0,
            jietouPrice: 1,
            lunziNum: 0,
            lunziPrice: 3,
        }
    }

    changeUnitNum(num) {
        this.setState({
            unitNum: num
        })
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

    getTotal() {
        const s = this.state;
        return s.unitNum * s.unitPrice + s.banziNum * s.banziPrice + s.jietouNum * s.jietouNum + s.lunziNum * s.lunziPrice;
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={2} md={2}>
                        <Thumbnail href="#" alt="板子" src="app/picture/banzi.jpg"/>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="common"> {this.state.unitPrice}元/每天每套</div>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="common">
                            <Counter min='0' max='100' num={this.state.unitNum}
                                     changeNum={num => this.changeUnitNum(num)}/>
                        </div>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="common"> 总价{this.state.unitPrice * this.state.unitNum}元</div>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={2} md={2}>
                        <Thumbnail href="#" alt="板子" src="app/picture/banzi.jpg"/>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="common"> {this.state.banziPrice}元/每天</div>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="common">
                            <Counter min='0' max='100' num={this.state.banziNum}
                                     changeNum={num => this.changeBanziNum(num)}/>
                        </div>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="common"> 总价{this.state.banziPrice * this.state.banziNum}元</div>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={2} md={2}>
                        <Thumbnail href="#" alt="接头" src="app/picture/jietou.jpg"/>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="common"> {this.state.jietouPrice}元/每天</div>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="common">
                            <Counter min='0' max='100' num={this.state.jietouNum}
                                     changeNum={num => this.changeJietouNum(num)}/>
                        </div>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="common"> 总价{this.state.jietouPrice * this.state.jietouNum}元</div>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={2} md={2}>
                        <Thumbnail href="#" alt="轮子" src="app/picture/lunzi.jpg"/>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="common"> {this.state.lunziPrice}元/每天</div>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="common">
                            <Counter min='0' max='100' num={this.state.lunziNum}
                                     changeNum={num => this.changeLunziNum(num)}/>
                        </div>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="common"> 总价{this.state.lunziPrice * this.state.lunziNum}元</div>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} md={6}>
                    </Col>
                    <Col xs={2} md={2}>
                        总计{this.getTotal()}元
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default hot(module)(StuffList);