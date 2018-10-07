import React from 'react'
import {hot} from 'react-hot-loader'
import {Grid, Row, Col, Image, Thumbnail} from 'react-bootstrap';
import Counter from './Counter';

class StuffList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={2} md={2}>
                        <Thumbnail href="#" alt="171x180" src="app/picture/banzi.jpg"/>
                    </Col>
                    <Col xs={2} md={2}>
                        2元/每天
                    </Col>
                    <Col xs={2} md={2}>
                        <Counter min='0' max='100'/>
                    </Col>
                    <Col xs={2} md={2}>
                        总价
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default hot(module)(StuffList);