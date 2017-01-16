import React from 'react'

export default React.createClass({
  propTypes: {
    repoName: React.PropTypes.string
  },
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }


})
