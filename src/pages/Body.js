import React from 'react';
import moment from 'moment'; 
import {Container, Card,Row,Col,Image} from 'react-bootstrap';



const Body = ({weatherData}) => {
  
  return (
      <div >

            {weatherData ?(
                
            <Container className="mt-5" >
              <Card style={{backgroundColor:"#022D36",color:"white",width:900,height:500 }}>
                <Card.Body >
                  <Card.Title style={{ fontSize:40,paddingLeft:340,color:"",fontFamily:"sans-serif",fontWeight:900}}>{weatherData.name}</Card.Title>
                  <Card.Subtitle >{moment().format('dddd')}, {moment().format('LL')}</Card.Subtitle>
                    <Row>
                        <Col md={6}>
                          
                          <ul style={{ listStyleType: 'none', padding: 0,paddingTop:10, fontSize:30,fontWeight:600,fontFamily:"Georgia, serif" }}>
                            <li>Temprature: {weatherData.main.temp} &deg;C</li>
                            <li>Humidity: {weatherData.main.humidity} %</li>
                            <li>Longitude: {weatherData.coord.lon}</li>
                            
                          </ul>
                        </Col>

                        <Col md={6}>
                          
                          <ul style={{ listStyleType: 'none', padding:0,position:'absolute',fontSize:30,fontWeight:600,fontFamily:"Georgia, serif" }}>
                            <li>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</li>
                            <li>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</li>
                            
                            <li>Latitude: {weatherData.coord.lat}</li>
                          
                          </ul>
                        </Col>
                    </Row>
                  
                </Card.Body>
              </Card>
          </Container>
            ):<div>
                <h1>
                    <Image style={{height:"100%",width:"100%"}} src='https://wallpapercave.com/uwp/uwp3415642.jpeg' />
                  </h1>
              </div>}
          
        
      </div>
  );
}

export default Body;
