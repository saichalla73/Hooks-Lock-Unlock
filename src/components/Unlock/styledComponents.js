// Style your elements here
import styled from 'styled-components'

export const UnlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height:100vh;
`

export const LockImage = styled.img`
  width: 200px;
  height: 200px;
`

export const UnlockImage = styled.img`
  width: 200px;
  height: 200px;
`

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #ffffff;
`

export const Button = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3c2940;
  }
`
