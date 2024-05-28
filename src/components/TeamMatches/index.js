import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {url: '', latestMatch: {}, matchCardList: [], isLoaded: false}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(this.props)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data.team_banner_url)
    const latestMatch = data.latest_match_details
    const updatedLatestMatchDetaile = {
      team: latestMatch.competing_team,
      date: latestMatch.date,
      location: latestMatch.venue,
      result: latestMatch.result,
      logoUrl: latestMatch.competing_team_logo,
      firstInnings: latestMatch.first_innings,
      secondInnings: latestMatch.second_innings,
      manOfTheMatch: latestMatch.man_of_the_match,
      umpires: latestMatch.umpires,
    }

    const recentMatches = data.recent_matches
    const updatedRecentMatchesList = recentMatches.map(eachObject => ({
      id: recentMatches.id,
      competingTeam: eachObject.competing_team,
      competingTeamLogo: eachObject.competing_team_logo,
      result: eachObject.result,
      matchStatus: eachObject.match_status,
    }))
    console.log(updatedRecentMatchesList)

    this.setState({
      url: data.team_banner_url,
      latestMatch: updatedLatestMatchDetaile,
      matchCardList: updatedRecentMatchesList,
      isLoaded: true,
    })
  }

  render() {
    const {url, latestMatch, matchCardList, isLoaded} = this.state
    if (isLoaded === true) {
      return (
        <div className="team-matches-container">
          <img src={url} className="banner-image" alt="team banner" />
          <h1 className="heading">Latest Matches</h1>
          <LatestMatch object={latestMatch} />
          <ul className="match-card-list">
            {matchCardList.map(eachObject => (
              <MatchCard object={eachObject} key={eachObject.id} />
            ))}
          </ul>
        </div>
      )
    } else {
      return (
        <div testid="loader">
          {' '}
          <Loader type="Oval" color="#000000" height={100} width={100} />{' '}
        </div>
      )
    }
  }
}

export default TeamMatches
