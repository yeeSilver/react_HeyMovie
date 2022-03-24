import React from 'react';
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
      <FooterLinkContainer>
        <FooterLinkTitle>
          헤이 무비 대한민국
        </FooterLinkTitle>
        <FooterLinkContent>
          <FooterLink href='https://naver.com'>헤이 무비 소개</FooterLink>
          <FooterLink href='https://naver.com'>고객 센터(CS)</FooterLink>
          <FooterLink href='https://naver.com'>미디어 센터</FooterLink>
          <FooterLink href='https://naver.com'>이용 약관</FooterLink>
        </FooterLinkContent>
        <FooterDescContainer>
          <FooterDescRights>
            Hey Movie Rights Reserved.
          </FooterDescRights>
        </FooterDescContainer>
      </FooterLinkContainer>
      </FooterContent>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  z-index: 100;

  @media (max-width: 768px) {
    padding:  20px;
    padding-bottom: 30px;
  }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterLinkTitle = styled.div`
  color: gray;
  font-size: 17px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
  width: 110px;
  margin-bottom: 21px;
  color:gray;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.p`
  color: white;
  font-size: 14px;
  text-align: center;
`;

