import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import store, {UPDATE_STEP_TWO} from '../../redux/store';


class Step2 extends Component {
  constructor(){
    super()

    const reduxState = store.getState();

    this.state = {
      img: reduxState.img
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  updateStepTwo = () => {
    store.dispatch({
      type: UPDATE_STEP_TWO,
      payload: {
        img: this.state.img
      }
    })
  }

  componentDidMount(){
    const reduxState = store.getState();
    store.subscribe(() => {
      this.setState({
        img: reduxState.img
      })  
    })
  }

  render(){
    return (
      <Step2MC>
        <InputContainer>
          <LabelAndInputContainer>
            <Label>Image URL</Label>
            <Input name="img" onChange={e => this.handleChange(e)} value={this.state.img} />
          </LabelAndInputContainer>
        </InputContainer>
        <Link to='/wizard/step1' onClick={this.updateStepTwo}><PreviousButton>Previous Step</PreviousButton></Link>
        <Link to='/wizard/step3' onClick={this.updateStepTwo}><NextButton>Next Step</NextButton></Link>
      </Step2MC>
    )
  }
}

export default Step2;

const Step2MC = styled.section`

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
  
  const NextButton = styled(NavButton)`
  right: 450px;
`

  const PreviousButton = styled(NavButton)`
  left: 450px;
  width: 115px;
`