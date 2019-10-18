import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

class Wizard extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0,
      img: '',
      mortgage: 0,
      rent: 0
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  cancel = (e) => {
    this.setState({
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0,
      img: '',
      mortgage: 0,
      rent: 0
    })
  }

  addHouse = (e) => {
    const body = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      img: this.state.img,
      mortgage: this.state.mortgage,
      rent: this.state.rent
    }

    axios.post('/api/houses', body)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    this.cancel();
  }

  render(){
    console.log(this.state)
    return (
      <WizardMC>
        <HeaderContainer>
          <Title>Add New Listing</Title>
          <Link to="/"><CancelBtn onClick={() => this.cancel()}>Cancel</CancelBtn></Link>
        </HeaderContainer>
        <InputContainer>
          <LabelAndInputContainer>
            <Label>Property Name</Label>
            <Input name="name" onChange={e => this.handleChange(e)} />
          </LabelAndInputContainer>
          <LabelAndInputContainer>
            <Label>Address</Label>
            {/* <br /> */}
            <Input style={{width: 100 + "%"}} name="address" onChange={e => this.handleChange(e)} />
          </LabelAndInputContainer>
          <CityStateZipContainer>
            <LabelAndInputContainer>
              <Label>City</Label>
              {/* <br /> */}
              <Input name="city" onChange={e => this.handleChange(e)} />
            </LabelAndInputContainer>
            <LabelAndInputContainer>
              <Label>State</Label>
              {/* <br /> */}
              <Input style={{width: 60 + "px"}} name="state" onChange={e => this.handleChange(e)} />
            </LabelAndInputContainer>
            <LabelAndInputContainer>
              <Label>Zip</Label>
              {/* <br /> */}
              <Input style={{width: 100 + "px"}} name="zip" onChange={e => this.handleChange(e)} />
            </LabelAndInputContainer>
          </CityStateZipContainer>
        </InputContainer>
        <Link to="/"><CompleteButton onClick={() => this.addHouse()}>Complete</CompleteButton></Link>
      </WizardMC>
    )
  }
}

export default Wizard;

const WizardMC = styled.section`
  background-color: #e5f4ec;
  width: 48%;
  min-height: 92vh;

  // display: flex;
  // flex-direction: column;
`

const HeaderContainer = styled.section`
  width: calc(100% - 40px);

  display: flex;
  justify-content: space-between;

  padding: 20px;
`

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
`

const CancelBtn = styled.button`
  background-color: #fec2c2;

  border: none;

  font-weight: bold;
`

const InputContainer = styled.section`
  width: 70%;
  height: 200px;

  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  // align-items: center;

  margin: auto;
`

const LabelAndInputContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // justify-items: center;
`

const Label = styled.label`
  margin-left: 10px;
  margin-right: 20px;
  margin-bottom: 5px;

  font-weight: bold;
`

const Input = styled.input`
  border: 1px solid #519872;
  border-radius: 2px;
  margin-right: 20px;
`

const CityStateZipContainer = styled.section`
  width: 60%;

  display: flex;
  justify-content: space-between;
  
`

const CompleteButton = styled.button`
  background-color: #8aea92;
  width: 85px;
  height: 35px;

  position: fixed;
  bottom: 40px;
  right: 450px;

  border: none;

  font-size: 16px;
`