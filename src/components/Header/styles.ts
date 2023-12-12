import { MapPin, ShoppingCart } from 'phosphor-react'
import { styled } from 'styled-components'

export const HeaderContiner = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme['base-background']};

  .locarionDiv{
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 0.375rem;
    padding: 0.5rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .cartDiv{
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 0.375rem;
    padding: 0.5rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;
    gap: 2rem;
    margin: 2rem;
    margin-right: 10rem;
  }

  img{
    margin: 2rem;
    margin-left: 10rem;
  }
  
`

export const CustomMapPin = styled(MapPin)`
    color: ${(props) => props.theme['purple-dark']};
`

export const CustomShoppingCart = styled(ShoppingCart)`
  color: ${(props) => props.theme['yellow-dark']};
  
`