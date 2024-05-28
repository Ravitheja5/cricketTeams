import './index.css'

const MatchCard = props => {
  const {object} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = object

  return (
    <li className="match-card-container">
      <img src={competingTeamLogo} className="img" alt="competing team" />
      <h1 className="team-heading">{competingTeam}</h1>
      <p className="paragraph">{result}</p>
      <p className="red-para">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
