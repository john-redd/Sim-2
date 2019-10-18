import React from 'react';
import styled from 'styled-components';
import DeleteButton from '../images/delete_button.png';

const House = (props) => {
    return (
      <HouseMC>
        <PropertyImgContainer>
          <PropertyImg src={props.img} />
        </PropertyImgContainer>
        <PropertyDetailsContainer>
          <PropertyDetails>Property Name: {props.houseName}</PropertyDetails>
          <PropertyDetails>Address: {props.address}</PropertyDetails>
          <PropertyDetails>City: {props.city}</PropertyDetails>
          <PropertyDetails>State: {props.state}</PropertyDetails>
          <PropertyDetails>Zip: {props.zip}</PropertyDetails>
        </PropertyDetailsContainer>
        <PropertyFinancialDetailsContainer>
          <PropertyDetails>Mortgage: {props.mortgage}</PropertyDetails>
          <PropertyDetails>Rent: {props.rent}</PropertyDetails>
        </PropertyFinancialDetailsContainer>
        <DeleteButtonContainer>
          <DeleteButtonImg id={props.id} src={DeleteButton} onClick={e => props.deleteFn(e)} />
        </DeleteButtonContainer>
      </HouseMC>
    )
}

export default House;

const HouseMC = styled.section`
  background-color: #DEDEDE
  height: 200px;

  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`

const PropertyImgContainer = styled.section`
  width: 33%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  `
  
  const PropertyImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const PropertyDetailsContainer = styled.section`
  width: 33%;
  height: 100%;

  display: flex;
  flex-direction: column;
`  
  
const PropertyDetails = styled.p`
  margin-left: 10px;
  font-size: 16px;
  padding: 5px;
`

const PropertyFinancialDetailsContainer = styled.section`
  width: 33%;
  height: 100%;

  display: flex;
  flex-direction: column;
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