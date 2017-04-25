// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

export default React.createClass({

  onEnter(nextState, replace){
    console.log('nextState: ', nextState, 'replace: ', replace);
  },

  render() {
    var {children, to} = this.props;
    return <a href="#" 
                onClick={e => {
                    e.preventDefault();
                    browserHistory.replace(to);
                }}>
                {children}

            </a>

    // return <Link {...this.props} activeClassName="active" onEnter={this.onEnter}/>
  }
})
