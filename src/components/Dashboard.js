import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import House from './House';

class Dashboard extends Component {
  constructor(){
    super()

    this.state = {
      houses: []
    }
  }

  deleteHouse(e){
    axios.delete(`/api/houses/${e.target.id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  componentDidMount(){
    axios.get('/api/houses')
    .then(res => this.setState({houses: res.data}))
    .catch(err => console.log(err))
  }

  componentDidUpdate(){
    axios.get('/api/houses')
    .then(res => this.setState({houses: res.data}))
    .catch(err => console.log(err))
  }

  render(){
    return (
      <DashboardMC>
        <DashboardHeader>
          <TitleAndButtonContainer>
            <DashboardTitle>Dashboard</DashboardTitle>
            <Link to="/wizard/step1"><DashboardBtn>Add New Property</DashboardBtn></Link>
          </TitleAndButtonContainer>
          <HouseListings>Home Listings</HouseListings>
        </DashboardHeader>
        {this.state.houses.map((e, i) => (
          <House 
            key={i}
            id={e.house_id}
            houseName={e.name}
            address={e.address}
            city={e.city}
            state={e.state}
            zip={e.zip}
            img={e.img}
            mortgage={e.mortgage}
            rent={e.rent}
            deleteFn={this.deleteHouse}
          />
        ))}
      </DashboardMC>
    )
  }
}

export default Dashboard;

const DashboardMC = styled.section`
  background-color: #e5f4ec;
  width: 48%;
  min-height: 86.5vh;
  height: fit-content;

  padding: 20px;

  color: black;

  display: flex;
  flex-direction: column;
`

const DashboardHeader = styled.header`
  width: calc(100% - 40px);
  height: 20%;

  display: flex;
  flex-direction: column;
  `
  
  const TitleAndButtonContainer = styled.section`
  width 100%;
  height: 40%;
  
  display: flex;
  justify-content: space-between;

  padding: 20px;
  `
  
  const DashboardTitle = styled.h1`
  font-size: 30px;
  
  `
  
  const DashboardBtn = styled.button`
  background-color: #8AEA92;
  width: 160px;
  height 30px;

  border: none;
  
  font-size: 16px;
  font-weight: bold;
  `
  
  const HouseListings = styled.h2`
  width: 100%;
  padding: 20px;

  border-top: 1px grey solid;

  font-weight: bold;
  `

  const HouseContainer = styled.section`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `