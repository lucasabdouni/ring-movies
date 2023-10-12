import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Header } from '../../components/Header'
import { Container, ContainerItems } from './styles'
import { Card } from '../../components/Card'

export interface CardProps {
  _id: string
  name: string
  rottenTomatoesScore: number
  runtimeInMinutes: number
  boxOfficeRevenueInMillions: number
  academyAwardWins: number
  budgetInMillions: number
  academyAwardNominations: number
}

export function Home() {
  const [movies, setMovies] = useState<CardProps[]>([])

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const { data } = await api.get('movie')

    setMovies(data.docs)
  }

  return (
    <Container>
      <Header />

      <ContainerItems>
        {movies &&
          movies.map((movie) => <Card movieData={movie} key={movie._id} />)}
      </ContainerItems>
    </Container>
  )
}
