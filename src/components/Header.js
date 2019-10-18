import React from 'react';
import styled from 'styled-components';
import HouserLogo from '../images/houser_logo.png';

const Header = () => {
    return (
      <HeaderMC>
        <LogoAndTitleContainer>
          <Logo src={HouserLogo}/>
          <Title>Houser</Title>
        </LogoAndTitleContainer>
      </HeaderMC>
    )
}

export default Header;

const HeaderMC = styled.header`
  background-color: #519872;
  width: 100%;
  height: 8vh;

  display: flex;
  align-items: center;
`

const LogoAndTitleContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-left: 20%;
`

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;

  margin-right: 10px;

  `
  
  const Title = styled.h1`
  font-size: 25px;
  font-weight: bolder;
  color: white;
`