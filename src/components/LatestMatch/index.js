import './index.css'

const LatestMatch = props => {
  const {object} = props
  const {
    team,
    date,
    location,
    result,
    logoUrl,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = object

  return (
    <div className="latest-match-container">
      <div className="box-1">
        <h1>{team}</h1>
        <p className="para">{date}</p>
        <p className="para">{location}</p>
        <p className="para">{result}</p>
      </div>
      <img src={logoUrl} className="logo" />
      <div className="box-2">
        <p className="big-para">First Innings</p>

        <p className="para">{firstInnings}</p>

        <p className="big-para">Second Innings</p>
        <p className="para">{secondInnings}</p>

        <p className="big-para">Man Of The Match</p>
        <p className="para">{manOfTheMatch}</p>

        <p className="big-para">Umpires</p>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
