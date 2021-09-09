import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './card.scss';

class Movie extends Component {
    render() {

        return (
            <div>
             <Container>

                        <Col> <Card style={{ width: '18rem' , height:'fit-content' } }>
                            <Card.Body>
                                <Card.Title>{this.props.item.title}</Card.Title>
                                <Card.Text>
                                {this.props.item.poster_path}
                                </Card.Text>
                            </Card.Body>
                        </Card></Col>
                </Container>
            </div>
        );
    }
}

export default Movie;
