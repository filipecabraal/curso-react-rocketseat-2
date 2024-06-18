import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const ButtonVariantsValue = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: none;
  margin: 3px;
  font-weight: bold;
  color: #fff;

  /* background-color: ${(props) => props.theme['green-500']}; */

  ${(props) => {
    return css`
      background-color: ${ButtonVariantsValue[props.variant]};
    `
  }}
`
