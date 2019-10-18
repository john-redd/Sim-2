import React from 'react';
import styled from 'styled-components';

const House = (props) => {
    return (
      <HouseMC>
        <PropertyDetails>Property Name: {props.houseName}</PropertyDetails>
        <PropertyDetails>Address: {props.address}</PropertyDetails>
        <PropertyDetails>City: {props.city}</PropertyDetails>
        <PropertyDetails>State: {props.state}</PropertyDetails>
        <PropertyDetails>Zip: {props.zip}</PropertyDetails>
      </HouseMC>
    )
}

export default House;

const HouseMC = styled.section`
  background-color: #DEDEDE
  // height: 150px;

  display: flex;
  flex-direction: column;
  // justify-content: space-evenly;
  // align-items: center;

  margin-bottom: 20px;
  `
  
const PropertyDetails = styled.p`
  margin-left: 10px;
  font-size: 16px;
  // margin-bottom: 5px;
  padding: 5px;
`