import styled from 'styled-components'

export const TopHeader = styled.div`
  background: #4c16c9;
  height: 56px;
  width: 100vw;

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
  max-width: 1008px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 40px 0;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 2px;

  .ave-values {
    display: flex;
    justify-content: space-between;

    input {
      height: 40px;
      width: 200px;
      border-radius: 5px;
      border: 2px solid #f0f0f0;
      padding-left: 5px;
    }
  }
`
