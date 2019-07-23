import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Navbar from './Navbar'
import AllStories from './AllStories'
import Authors from './Authors'
import SingleStory from './SingleStory'
import SingleAuthor from './SingleAuthor'

export default class Main extends React.Component {
  render () {
    return (
      <Router>
        <div id='main'>
          <div className='column container'>
            <div id='header'>
              <h1>Readium</h1>
            </div>
            <Navbar />
          </div>
          <Route exact path='/stories' component={AllStories} />
          <Route path='/stories/:storyId' component={SingleStory} />
          <Route exact path='/authors' component={Authors} />
          <Route path='/authors/:authorId' component={SingleAuthor} />
          <Route exact path='/' component={AllStories} />
        </div>
      </Router>
    )
  }
}
