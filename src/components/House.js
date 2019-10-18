import React from 'react';
import styled from 'styled-components';
import DeleteButton from '../images/delete_button.png';

const House = (props) => {
    return (
      <HouseMC>
        <PropertyDetailsContainer>
          <PropertyDetails>Property Name: {props.houseName}</PropertyDetails>
          <PropertyDetails>Address: {props.address}</PropertyDetails>
          <PropertyDetails>City: {props.city}</PropertyDetails>
          <PropertyDetails>State: {props.state}</PropertyDetails>
          <PropertyDetails>Zip: {props.zip}</PropertyDetails>
        </PropertyDetailsContainer>
        <DeleteButtonContainer>
          <DeleteButtonImg id={props.id} src={DeleteButton} onClick={e => props.deleteFn(e)} />
        </DeleteButtonContainer>
      </HouseMC>
    )
}

export default House;

const HouseMC = styled.section`
  background-color: #DEDEDE
  // height: 150px;

  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`

const PropertyDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  // justify-content: space-evenly;
  // align-items: center;
`  
  
const PropertyDetails = styled.p`
  margin-left: 10px;
  font-size: 16px;
  // margin-bottom: 5px;
  padding: 5px;
`

const DeleteButtonContainer = styled.section`

`

const DeleteButtonImg = styled.img`
  max-width: 100%;
  max-height: 100%;

  margin-right: 5px;
  margin-top: 5px;

  &:hover {
    cursor: pointer;
  }
`