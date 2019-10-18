import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import wizardRoutes from './wizardRoutes';
import store, {CANCEL} from '../../redux/store';

class Wizard extends Component {

  cancel = (e) => {
    store.dispatch({
      type: CANCEL,
    })
  }

  render(){
    return (
      <WizardMC>
        <HeaderContainer>
            <Title>Add New Listing</Title>
            <Link to="/"><CancelBtn onClick={() => this.cancel()}>Cancel</CancelBtn></Link>
        </HeaderContainer>
        {wizardRoutes}
      </WizardMC>
    )
  }
}

export default Wizard;

const WizardMC = styled.section`
  background-color: #e5f4ec;
  width: 48%;
  min-height: 92vh;
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