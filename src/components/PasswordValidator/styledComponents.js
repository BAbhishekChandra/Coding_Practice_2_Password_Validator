// Style your elements here

import styled from 'styled-components'

export const PasswordValidatorBackGroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #24263c;
`

export const PasswordValidatorMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
  background-color: #383a4e;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 1px #434451;
`

export const TitleHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 15px;
  text-align: center;
  @media screen and (min-width: 576px) {
    font-size: 48px;
  }
`

export const DescriptionParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 400;
  color: #f8fafc;
  text-align: center;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const PasswordInput = styled.input`
  width: 80%;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #475569;
  background-color: #edeeff;
  border: none;
  border-radius: 2px;
  padding: 10px 20px 10px 20px;
  margin-top: 50px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    width: 60%;
  }
`

export const ErrorParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  color: #ef4444;
  text-align: center;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`
