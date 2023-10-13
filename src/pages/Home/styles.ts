import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10rem;
`
export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 240px);
  gap: 16px;

  @media (max-width: 1061px) {
    grid-template-columns: repeat(3, 240px);
  }

  @media (max-width: 789px) {
    grid-template-columns: repeat(2, 240px);
  }

  @media (max-width: 533px) {
    grid-template-columns: repeat(1, 240px);
  }
`
