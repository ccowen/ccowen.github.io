import React from 'react'


class ReactPlayerDuration extends React.Component {
    constructor(props) {
      super(props);
      }

    render () {
        return (
            <time dateTime={`P${Math.round(this.props.seconds)}S`}>
            {format(this.props.seconds)}
          </time>
        )
    }
}

function format (seconds) {
  const date = new Date(seconds * 1000)
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = pad(date.getUTCSeconds())
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`
  }
  return `${mm}:${ss}`
}

function pad (string) {
  return ('0' + string).slice(-2)
}

export default ReactPlayerDuration