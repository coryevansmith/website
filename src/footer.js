import React from "react";
import styled from "styled-components";

function Footer() {
  const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: static;
    height: 10vh;
  `;

  const CopyRight = styled.p`
    float: left;
    font-size: 1rem;
    margin-top: 2rem;
  `;
  return (
    <FooterContainer>
      <CopyRight>© 2024 Cory Evan Smith</CopyRight>
    </FooterContainer>
  );
}

export default Footer;
