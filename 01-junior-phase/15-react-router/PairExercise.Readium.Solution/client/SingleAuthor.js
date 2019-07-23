import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import axios from 'axios'
import Stories from './Stories'
import Comments from './Comments'

export default class SingleAuthor extends Component {
  constructor () {
    super()
    this.state = {
      author: {}
    }
  }

  async componentDidMount () {
    try {
      const authorId = this.props.match.params.authorId
      const authorPath = `/api/authors/${authorId}`
      const responses = await Promise.all([
        axios.get(authorPath),
        axios.get(`${authorPath}/stories`),
        axios.get(`${authorPath}/comments`)
      ])
      const [author, stories, comments] = responses.map(res => res.data)
      author.stories = stories
      author.comments = comments
      this.setState({author})
    }
    catch (error) {
      console.error(error)
    }
  }

  render () {
    const author = this.state.author

    return (
      <div id='single-author' className='column'>
        <div id='single-author-detail' className='row'>
          <div className='column mr1'>
            <h1>{author.name}</h1>
            <p>{author.bio}</p>
          </div>
          <img src={author.imageUrl} />
        </div>
        <div id='single-author-nav'>
          <Link to={`/authors/${author.id}/comments`}>Comments</Link>
          <Link to={`/authors/${author.id}/stories`}>Stories</Link>
        </div>
        <hr />
        <div>
          <Route path='/authors/:authorId/comments' render={() => <Comments comments={author.comments} />} />
          <Route path='/authors/:authorId/stories' render={() => <Stories stories={author.stories} />} />
        </div>
      </div>
    )
  }
}
