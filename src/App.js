import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Header from './components/header';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lon: '',
      displayName: '',
      mapFlag: false,
      displayErorr: false
    };

  };
  Formhandler = async (event) => {
    event.preventDefault();
    const cityName = event.target.text.value;
    const key = 'pk.35669867e8107984b3cdf9f0c6f00aab';
    const URL = `https://api.locationiq.com/v1/autocomplete.php?key=${key}&q=${cityName}`;
    try {
      let apiData = await axios.get(URL);
      this.setState({
        lat: apiData.data[0].lat,
        lon: apiData.data[0].lon,
        displayName: apiData.data[0].display_name,
        mapFlag: true,
        displayErorr: false

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
        <Header />

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
              <Col> <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.35669867e8107984b3cdf9f0c6f00aab&center=${this.state.lat},${this.state.lon}&zoom=1-18`} />
                <Card.Body>
                  <Card.Title>You explored</Card.Title>
                  <Card.Text>
                    City Name  : {this.state.displayName}         longitude : {this.state.lon}             latitude  :  {this.state.lat}.


                    {this.state.displayErorr && <p style={{ color: 'red' }} >There was a problem connecting to the server(console.error(404))</p>}

                  </Card.Text>
                </Card.Body>
              </Card></Col>
            </Row>
          </Container>
        </div>
        <Footer />

      </>



    );

  }





};

export default App;
