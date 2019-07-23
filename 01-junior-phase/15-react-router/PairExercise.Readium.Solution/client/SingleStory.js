import React, {Component} from 'react'
import axios from 'axios'
import Comments from './Comments'

export default class SingleStory extends Component {
  constructor () {
    super()
    this.state = {
      story: {}
    }
  }

  async componentDidMount () {
    try {
      const storiesResponse = await axios.get(`/api/stories/${this.props.match.params.storyId}`)
      this.setState({ story: storiesResponse.data })
    }
    catch (error) {
      console.error(error)
    }
  }

  render () {
    const story = this.state.story
    const content = story.content || ''
    const comments = this.state.story.comments

    return (
      <div id='single-story' className='column'>
        <h1>{story.title}</h1>
        {
          content.split('\n').map((line, idx) => <p key={idx}>{line}</p>)
        }
        <h3>Responses:</h3>
        <Comments comments={comments} />
      </div>
    )
  }
}
