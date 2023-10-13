import styled from 'styled-components'

export const TopHeader = styled.div`
  background: #4c16c9;
  height: 56px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.125rem;

  p {
    color: #ffffff;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1008px; // calc 4 x 280px (tamanho do card)
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 40px 0;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 2px;

  @media (max-width: 1061px) {
    width: 90%;
  }

  @media (max-width: 533px) {
    align-items: center;
    padding-bottom: 15px;
  }

  .ave-values {
    display: flex;
    justify-content: space-between;

    @media (max-width: 533px) {
      flex-direction: column;
      justify-content: flex-start;
    }

    .input-div {
      @media (max-width: 533px) {
        margin-top: 10px;
      }

      input {
        height: 40px;
        width: 200px;
        border-radius: 5px;
        border: 2px solid #f0f0f0;
        padding-left: 5px;

        @media (max-width: 533px) {
          width: 100%;
        }
      }
    }
  }
`
