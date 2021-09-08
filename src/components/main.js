import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Forecast from './newforecast';
import Movie from './movie';
class Main extends Component {
constructor(props) {
        super(props);
        this.state = {
            lat: '',
            lon: '',
            description: '',
            data: '',
            displayName: '',
            mapFlag: false,
            displayErorr: false,
            weatherData: [],
            movieData: []

        };

    };
    Formhandler = async (event) => {
        event.preventDefault();
        const cityName = event.target.text.value;
        const URL = `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_MAP_KEY}&q=${cityName}`;
        const URL2 = `https://cityexploermarwan.herokuapp.com/weather?city=${cityName}`;
        const URL3 = `  https://cityexploermarwan.herokuapp.com/movie?title=${cityName}`;
        try {
            let apiData = await axios.get(URL);
            let apiData2 = await axios.get(URL2);
            let apiData3 = await axios.get(URL3);
            this.setState({
                lat: apiData.data[0].lat,
                lon: apiData.data[0].lon,
                displayName: cityName,
                mapFlag: true,
                displayErorr: false,
                weatherData: apiData2.data,
                movieData: apiData3.data


            });
        }
        catch
        {

            this.setState({
                displayErorr: true
            });



        }
    }
    render() {
        return (
            <>

                <Form onSubmit={this.Formhandler} >
                    <Form.Group className="mb-3" controlId="text">
                        <Form.Control type="text" placeholder=" please write the name of the city that want to see the map of ." />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        explore!!
                    </Button>
                </Form>
                <div className='body'>
                    <Container className='body2'>
                        <Row>
                            <Col> <Card style={{ width: 'rem' }}>
                                <Card.Img variant="top" style={{ width: '600px' }} src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.state.lat},${this.state.lon}&zoom=1-18`} />
                                <Card.Body>
                                    <Card.Title>You explored</Card.Title>
                                    <Card.Text>
                                        City Name  : {this.state.displayName}    <br />        latitude  :  {this.state.lat}     <br />       longitude : {this.state.lon}     <br />


                                        {this.state.displayErorr && <p style={{ color: 'red' }} >There was a problem connecting to the server(console.error(404))</p>}

                                    </Card.Text>
                                </Card.Body>
                            </Card></Col>
                        </Row>
                    </Container>
                    <Row>
                        {
                            this.state.weatherData.map(item => {
                                return<Col> <Forecast item={item} /></Col>;
                            })
                        }  </Row>

                    <Row>
                        {
                            this.state.movieData.map(item => {
                                return <Col><Movie item={item} />  </Col>;
                            })
                        }  </Row>
                </div>

            </>
        );
    }
}

export default Main;
