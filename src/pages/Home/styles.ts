import { styled } from 'styled-components'
import hero from '../../assets/hero-bg.svg'

export const BannerContainer = styled.div`
  display: flex;
  padding: 8.75rem 1.25rem;

  background-image: url(${hero});
  background-size: cover;

  
`

export const BannerTitle = styled.div`
  max-width: 36rem;
  >div{
    margin-bottom: 2rem;
  }
`

export const Heading = styled.div`
  max-width: 72.5rem;
  
  margin: 0 auto;

  
  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: flex-start;
  justify-content: space-between;

  > div {

    flex-direction: column;
    gap: 2rem;
  }


    img {
        max-width: 29.75rem;
        max-height: 22.5rem;
        flex-shrink: 0;
        object-fit: cover;
    }

`

export const BannerInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      border-radius: 999px;
    }
  }
`


export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const CoffeeMenu = styled.div`
  width: 16rem;
  height: 19.37rem;
`
