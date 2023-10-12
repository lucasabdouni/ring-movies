import { Container } from './styles'
import { CardProps } from '../../pages/Home'

import MovieIcon from '../../assets/movie-icon.svg'
import AwardIcon from '../../assets/award-icon.svg'

interface movieDataProps {
  movieData: CardProps
}

export function Card({ movieData }: movieDataProps) {
  return (
    <Container>
      <div className="wrapper-image-logo">
        <img src={MovieIcon} alt="Icone de filme" />
      </div>

      <div className="container-items">
        <div className="wrapper-items">
          <h3>{movieData.name}</h3>
          <p>{movieData.runtimeInMinutes} min</p>
        </div>

        <div className="wrapper-awards">
          <img src={AwardIcon} alt="Estatueta de Oscar" />
          <p>
            {movieData.academyAwardWins} Wins &{' '}
            {movieData.academyAwardNominations} Nominations
          </p>
        </div>

        <div className="wrapper-budget">
          <div>
            <h4>Budget</h4>
            <p>${movieData.budgetInMillions}M</p>
          </div>

          <div>
            <h4>Revenue</h4>
            <p>${movieData.boxOfficeRevenueInMillions}M</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
