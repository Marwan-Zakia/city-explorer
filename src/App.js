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
import Forecast from './components/newforecast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lon: '',
      description: '',
      data :'',
      displayName: '',
      mapFlag: false,
      displayErorr: false,


    };

  };
  Formhandler = async (event) => {
    event.preventDefault();
    const cityName = event.target.text.value;
    const URL = `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_MAP_KEY}&q=${cityName}`;
    const URL2 =`https://gpsapimarwan.herokuapp.com/citynames?name=${cityName}&?lat=${this.state.lat}&?lon=${this.state.lon}`;

    try {
      let apiData = await axios.get(URL);
      let apiData2 = await axios.get(URL2);
      this.setState({
        lat: apiData.data[0].lat,
        lon: apiData.data[0].lon,
        displayName:cityName,
        mapFlag: true,
        displayErorr: false,
        description:apiData2.data[0].description,
        date:apiData2.data[0].date,
        description1:apiData2.data[1].description,
        date1:apiData2.data[1].date,
         description2:apiData2.data[2].description,
        date2:apiData2.data[2].date,



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
        {/* <Forecast desc={this.state.description} date={this.state.date} /> */}
          <Container className='body2'>
            <Row>
              <Col> <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.state.lat},${this.state.lon}&zoom=1-18`} />
                <Card.Body>
                  <Card.Title>You explored</Card.Title>
                  <Card.Text>
                    City Name  : {this.state.displayName}    <br/>        latitude  :  {this.state.lat}     <br/>       longitude : {this.state.lon}     <br/>


                    {this.state.displayErorr && <p style={{ color: 'red' }} >There was a problem connecting to the server(console.error(404))</p>}

                  </Card.Text>
                </Card.Body>
              </Card></Col>
            </Row>
          </Container>
          <Forecast desc1={this.state.description} date1={this.state.date} desc2={this.state.description1} date2={this.state.date1} desc3={this.state.description2} date3={this.state.date2} />
        </div>

        <Footer />

      </>



    );

  }





};

export default App;
