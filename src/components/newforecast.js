/* eslint-disable no-trailing-spaces */
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './card.scss';
class Forecast extends Component {
    render() {
        return (
            <div> 
       <Container className='body2'>
        
           
               <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text>
              The weather :  {this.props.item.description}
                  </Card.Text>
                  date : {this.props.item.date}
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
              
          </Container>
            </div>
        );
    }
}

export default Forecast;
