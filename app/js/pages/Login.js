import React from 'react'
import {Link} from 'react-router'

class Login extends React.Component {
  render() {
    return {
      <div class="col-sm-12">
        <h1>Login</h1>
        <Link class="btn btn-danger">Login with Google</Link>
      </div>
    }
  }
}
