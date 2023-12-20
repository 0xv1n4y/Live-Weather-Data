import React from "react";

import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: black;
  color: gray;
  height: 70px;
  
  ${mobile({ width: "100dvw" })}
`;
const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-Between",
    gap: "20px",
    paddingTop: "10px",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  margin-top: 10px;
  font-weight: 700;
  ${mobile({ fontSize: "20px", marginLeft: "10px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "flex", alignItems: "center", justifyContent: "center" })}
`;

const Input = styled.input`
  border: 1px solid white;
  border-radius: 20px;
  padding: 8px;
  background-color: transparent;
  width: 200px;
  color: wheat;
  ${mobile({ width: "120px" })}
`;

const Btn = styled.button`
  transition: all 0.3s ease-in-out;
  font-family: "Dosis", sans-serif;
  width: 100px;
  height: 40px;
  border-radius: 50px;
  background-image: linear-gradient(135deg, #feb692 0%, #ea5455 100%);

  outline: none;
  cursor: pointer;
  border: none;
  font-size: 14px;
  color: white;
  margin-left: 40px;

  &:hover {
    transform: translateY(3px);
    box-shadow: none;
  }

  &:active {
    opacity: 0.5;
  }
  ${mobile({
    width: "70px",
    fontSize: "12px",
    marginRight: "30px",
    fontWeight: "900",
  })}
`;
const Header = ({ location, reload, handlecheck }) => {
  return (
    <Container>
      <Items>
        <Left>
          <Title>Weather </Title>
        </Left>
        <Right>
          <Input value={location} onChange={handlecheck} placeholder="Search" />
          <Btn onClick={reload}>Reload</Btn>
        </Right>
      </Items>
    </Container>
  );
};

export default Header;
