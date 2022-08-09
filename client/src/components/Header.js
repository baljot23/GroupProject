import { useContext } from "react";
import styled from "styled-components";
import { GiMountedKnight } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import watches from "../watches.jpg";

import { StoreContext } from "./context/StoreContext";

const Header = () => {
  const { cart } = useContext(StoreContext);

  return (
    <Wrapper>
      <Logo to="/home">
        <GiMountedKnight />
        BNTV.
      </Logo>
      <Links>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/cart">
          <FaShoppingCart /> Cart
          {cart.length ? <CartCount>{cart.length}</CartCount> : <></>}
        </StyledLink>
      </Links>
    </Wrapper>
  );
};

const Logo = styled(Link)`
  font-size: 60px;
  font-family: Georgia, serif;
  font-weight: bold;
  margin: 20px;
  text-decoration: none;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-image: url(${watches});
  padding: 20px;
  margin: 10px;
`;

const Links = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 20px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  font-family: Georgia, serif;
  font-weight: bold;
  margin-right: 50px;
  position: relative;
`;

const CartCount = styled.div`
  background-color: black;
  position: absolute;
  left: -20px;
  top: 10px;
  border-radius: 50%;
  padding: 5px;
`;

export default Header;
