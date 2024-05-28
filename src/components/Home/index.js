import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoaded: false}
  componentDidMount() {
    console.log('component did mount called')
    this.getData()
  }
  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedListOfData = data.teams.map(eachObject => ({
      id: eachObject.id,
      name: eachObject.name,
      teamImageUrl: eachObject.team_image_url,
    }))

    this.setState({teamsData: updatedListOfData, isLoaded: true})
    const {teamsData} = this.state
  }
  render() {
    const {teamsData, isLoaded} = this.state
    if (isLoaded === true) {
      return (
        <div className="home-container">
          <div className="heading-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="logo"
              alt="ipl logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          <ul className="teams-container">
            {teamsData.map(eachObject => (
              <TeamCard teamData={eachObject} key={eachObject.id} />
            ))}
          </ul>
        </div>
      )
    } else {
      return (
        <div testid="loader">
          {' '}
          <Loader type="Oval" color="#000000" height={50} width={50} />{' '}
        </div>
      )
    }
  }
}

export default Home
