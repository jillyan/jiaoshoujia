import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap';
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
            days:1,
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
        console.table(s);
        return (s.unitNum * s.unitPrice + s.banziNum * s.banziPrice + s.jietouNum * s.jietouNum + s.lunziNum * s.lunziPrice) * s.days;
    }

    handlerDaysChange(e){
        this.setState({
            days: e.target.value
        })
    }
    decreaseDays(){
        const newValue = this.state.days > 1 ? this.state.days -1 : 0;
        this.setState({
            days: newValue
        });
    }
    increaseDays(){
        const newValue = this.state.days + 1;
        this.setState({
            days: newValue,
        });
    }
    render() {
        return (
            <Grid>
                <Counter min='0' max='100'price={this.state.unitPrice} image="app/picture/banzi.jpg" num={this.state.unitNum}  changeNum={num => this.changeUnitNum(num)}/>
                <Counter min='0' max='100'price={this.state.banziPrice} image="app/picture/banzi.jpg" num={this.state.banziNum}  changeNum={num => this.changeBanziNum(num)}/>
                <Counter min='0' max='100'price={this.state.jietouPrice} image="app/picture/jietou.jpg" num={this.state.jietouNum}  changeNum={num => this.changeJietouNum(num)}/>
                <Counter min='0' max='100'price={this.state.lunziPrice} image="app/picture/lunzi.jpg" num={this.state.lunziNum}  changeNum={num => this.changeLunziNum(num)}/>
                <Row className="show-grid">
                    <Col xs={4} md={4}></Col>
                    <Col xs={2} md={2}>
                        <div>
                            天数：
                            <input type="button" value='-' onClick={this.decreaseDays.bind(this)}/>
                            <input type="text" size="5" value={this.state.days} onChange={this.handlerDaysChange.bind(this)}/>
                            <input type="button" value='+' onClick={this.increaseDays.bind(this)}/>
                        </div>
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