import { useEffect, useRef, useState } from 'react'
import ConvIcon from '../../assets/conv-icon.svg'
import { Container, TopHeader } from './styles'
import { CardProps } from '../../pages/Home'

interface HeaderMovieProps {
  movies: CardProps[]
  setFilteredMovies: (movies: CardProps[]) => CardProps[]
}

export function Header({ movies, setFilteredMovies }: HeaderMovieProps) {
  const [aveValues, setAveValues] = useState({
    runtime: 0,
    budget: 0,
  })

  const input = useRef<HTMLInputElement>(null)

  function aveMovies(movies: CardProps[]) {
    const runtime =
      movies.reduce((acc, cur) => cur.runtimeInMinutes + acc, 0) / movies.length

    const budget =
      movies.reduce((acc, cur) => cur.budgetInMillions + acc, 0) / movies.length

    setAveValues({
      runtime,
      budget,
    })
  }

  function inputChange() {
    let inputInsered = ''

    if (input.current != null) {
      inputInsered = input.current.value
    }

    const moviesTypeds = movies.filter((movie) =>
      movie.name.toUpperCase().includes(inputInsered.toUpperCase()),
    )

    if (moviesTypeds) {
      setFilteredMovies(moviesTypeds)
      aveMovies(moviesTypeds)
    }
  }

  useEffect(() => {
    aveMovies(movies)
  }, [movies])

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
            <p>Ave. movie runtime: {aveValues.runtime} min</p>
            <p>Ave. movie budget: ${aveValues.budget}</p>
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
