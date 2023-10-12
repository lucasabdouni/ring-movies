import { useRef } from 'react'
import ConvIcon from '../../assets/conv-icon.svg'
import { Container, TopHeader } from './styles'

export function Header() {
  const input = useRef()

  function inputChange() {
    console.log(input.current.value)
  }

  return (
    <>
      <TopHeader>
        <img src={ConvIcon} alt="Logomarga Conv" />
        <p>Senior Front End Test</p>
      </TopHeader>
      <Container>
        <h1>Lord of the Rings Movies</h1>
        <div className="ave-values">
          <div>
            <p>Ave. movie runtime: xxx min</p>
            <p>Ave. movie budget: $XXM</p>
          </div>
          <div>
            <input
              placeholder="Filter movies by name"
              ref={input}
              onChange={inputChange}
            />
          </div>
        </div>
      </Container>
    </>
  )
}
