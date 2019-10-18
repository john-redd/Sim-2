import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import store, {UPDATE_STEP_ONE} from '../../redux/store';

class Step1 extends Component {
  constructor(){
    super()
    const reduxState = store.getState();

    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  updateStepOne = () => {
    store.dispatch({
      type: UPDATE_STEP_ONE,
      payload: {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
      }
    })
  }

  componentDidMount(){
    const reduxState = store.getState();
    store.subscribe(() => {
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
      })  
    })
  }

  render(){
    return (
      <Step1MC>
          <InputContainer>
            <LabelAndInputContainer>
              <Label>Property Name</Label>
              <Input name="name" onChange={e => this.handleChange(e)} value={this.state.name}/>
            </LabelAndInputContainer>
            <LabelAndInputContainer>
              <Label>Address</Label>
              <Input style={{width: 100 + "%"}} name="address" onChange={e => this.handleChange(e)} value={this.state.address} />
            </LabelAndInputContainer>
            <CityStateZipContainer>
              <LabelAndInputContainer>
                <Label>City</Label>
                <Input name="city" onChange={e => this.handleChange(e)} value={this.state.city} />
              </LabelAndInputContainer>
              <LabelAndInputContainer>
                <Label>State</Label>
                <Input style={{width: 60 + "px"}} name="state" onChange={e => this.handleChange(e)} value={this.state.state} />
              </LabelAndInputContainer>
              <LabelAndInputContainer>
                <Label>Zip</Label>
                <Input style={{width: 100 + "px"}} name="zip" onChange={e => this.handleChange(e)} value={this.state.zip} />
              </LabelAndInputContainer>
            </CityStateZipContainer>
          </InputContainer>
          <Link to='/wizard/step2' onClick={() => this.updateStepOne()}><NavButton>Next Step</NavButton></Link>
      </Step1MC>
    )
  }
}

export default Step1;

const Step1MC = styled.section`
  
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

  margin: auto;
`

const LabelAndInputContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const NavButton = styled.button`
  background-color: #3b5249;
  width: 85px;
  height: 35px;

  position: fixed;
  bottom: 40px;
  right: 450px;

  border: none;

  font-size: 16px;
  color: white;
`