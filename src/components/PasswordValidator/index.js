// Write your code here
import {useState} from 'react'
import {
  PasswordValidatorBackGroundContainer,
  PasswordValidatorMainContainer,
  TitleHeading,
  DescriptionParagraph,
  PasswordInput,
  ErrorParagraph,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputPassword, setOnChangePassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(
    'Your password must be at least 8 characters',
  )

  const onChangeUpdatePassword = event => {
    setOnChangePassword(event.target.value)
    if (inputPassword.length !== 0 && inputPassword.length < 8) {
      setErrorMessage('Your password must be at least 8 characters')
    }
    if (inputPassword.length >= 8) {
      setErrorMessage('greater than or equal to eight characters')
    }
  }

  return (
    <PasswordValidatorBackGroundContainer>
      <PasswordValidatorMainContainer>
        <TitleHeading>Password Validator</TitleHeading>
        <DescriptionParagraph>
          Check how strong and secure is your password
        </DescriptionParagraph>
        <PasswordInput
          type="password"
          value={inputPassword}
          onChange={onChangeUpdatePassword}
        />
        <ErrorParagraph>{errorMessage}</ErrorParagraph>
      </PasswordValidatorMainContainer>
    </PasswordValidatorBackGroundContainer>
  )
}

export default PasswordValidator
