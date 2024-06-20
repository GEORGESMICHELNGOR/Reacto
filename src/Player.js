import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Players from './Players';
const Player = () => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={Players.Image} alt="" />
      <Card.Body>
        <Card.Title>{Players.Name}</Card.Title>
        <Card.Text>
          <strong>Club:</strong> {Players.Club } <br />
          <strong>Nationalité:</strong> {Players.Nationalité} <br />
          <strong> Numéro:</strong> {Players.Numéro} <br />
          <strong>Age:</strong> {Players.Age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  Name: "Messi",
  Club: "Inter Miami",
  nationalité: "Argentin",
  Numéro: 10,
  Age: 38,
  Image: "https://scontent.fdkr7-1.fna.fbcdn.net/v/t39.30808-6/445077320_122210497490007387_2108378255260260074_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGZlgYl1WK7eeEY6y4lxmrALBtXzzgJnIIsG1fPOAmcgjBIeAtZ3BpMjp5ddnoF8iSZ4weWtm8-L2x50M5ybl1p&_nc_ohc=vFIEigp7GxAQ7kNvgEOhmsE&_nc_ht=scontent.fdkr7-1.fna&oh=00_AYALre-vjHcM4ie210D-jfaGpuoQRQ0ITX2p6je0C-HVFA&oe=6679E2BD"
};
  



export default Player;
