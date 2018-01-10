import React, {Component} from 'react'

export default class extends Component {
  state = {
    a: 1,
  }

  render() {
    return <div>
      <h2>Welcome to the Wonderful World of npm</h2>
      { a ? <p>asdasd</p > :< p>qweqwe</p > }
    </div>
  }
}
