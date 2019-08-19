import React from "react";
import Card from 'react-bootstrap/Card';
import formatDate from '../utils/formatDate';

const Policy = ({ id, premium, period: { start, end }, insuranceDetails: { owners, kilometers }, car: { brand, model } }) => {
   return (
      <div>
         <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>{id}</Card.Header>
            <Card.Body>
               <Card.Title><strong>{brand}</strong> {model}</Card.Title>
               <Card.Text>
            Premium: {premium}
               </Card.Text>
               <Card.Text>
            Owners: {owners}
               </Card.Text>
               <Card.Text>
            Milleage: {kilometers} km
               </Card.Text>
               <Card.Text>
            Valid from {formatDate(start)} to {formatDate(end)}
               </Card.Text>
            </Card.Body>
         </Card>
         <br />
      </div>
   );
};


export default Policy;
