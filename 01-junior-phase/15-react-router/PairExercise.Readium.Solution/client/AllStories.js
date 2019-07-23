import React, {Component} from 'react'
import axios from 'axios'
import Stories from './Stories'

export default class AllStories extends Component {
  constructor () {
    super()
    this.state = {
      stories: []
    }
  }

  async componentDidMount () {
    try {
      const response = await axios.get('/api/stories')
      this.setState({ stories: response.data })
    }
    catch (error) {
      console.trace(error)
    }
  }

  render () {
    const stories = this.state.stories

    return (
      <Stories stories={stories} />
    )
  }
}
