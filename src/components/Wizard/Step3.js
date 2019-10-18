import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import store, {UPDATE_STEP_THREE, CANCEL} from '../../redux/store';


class Step3 extends Component {
  constructor(){
    super()

    const reduxState = store.getState();

    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  updateStepThree = () => {
    store.dispatch({
      type: UPDATE_STEP_THREE,
      payload: {
        mortgage: this.state.mortgage,
        rent: this.state.rent
      }
    })
  }

  addHouse = (e) => {
    const reduxState = store.getState();
    const body = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip,
      img: reduxState.img,
      mortgage: this.state.mortgage,
      rent: this.state.rent
    }

    axios.post('/api/houses', body)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    store.dispatch({
      type: CANCEL,
      })
  }

  componentDidMount(){
    const reduxState = store.getState();
    store.subscribe(() => {
      this.setState({
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      })  
    })
  }

  render(){
    return (
      <Step3MC>
        <InputContainer>
          <RecommendedRentContainer><p>Recommended Rent: ${this.state.mortgage * 1.25}</p></RecommendedRentContainer>
          <LabelAndInputContainer>
            <Label>Monthly Mortgage Amoount</Label>
            <Input name="mortgage" onChange={e => this.handleChange(e)} value={this.state.mortgage} />
            <br />
            <Label>Desired Monthly Rent</Label>
            <Input name="rent" onChange={e => this.handleChange(e)} value={this.state.rent} />
          </LabelAndInputContainer>
        </InputContainer>
        <Link to='/wizard/step2' onClick={this.updateStepThree}><PreviousButton>Previous Step</PreviousButton></Link>
        <Link to="/"><CompleteButton onClick={() => this.addHouse()}>Complete</CompleteButton></Link>
      </Step3MC>
    )
  }
}

export default Step3;

const Step3MC = styled.section`

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
  width: 100%;

  border: 1px solid #519872;
  border-radius: 2px;
  margin-right: 20px;
`

const NavButton = styled.button`
  background-color: #3b5249;
  width: 85px;
  height: 35px;

  position: fixed;
  bottom: 40px;
  
  border: none;
  
  font-size: 16px;
  color: white;
  `
  
  const CompleteButton = styled(NavButton)`
  background-color: #8aea92;
  right: 450px;
  color: black;
`

  const PreviousButton = styled(NavButton)`
  left: 450px;
  width: 115px;
`

const RecommendedRentContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;

  font-weight: bold;
`