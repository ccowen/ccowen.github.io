import React from 'react'


class ReactPlayerDuration extends React.Component {
    constructor(props) {
      super(props);
      }

    render () {
        return (
            <time dateTime={`P${Math.round(this.props.seconds)}S`}>
            {format(this.props.seconds, this.props.length)}
          </time>
        )
    }
}

function format (seconds, length) {
  const date = new Date(seconds * 1000)
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = pad(date.getUTCSeconds())
  const ms = date.getUTCMilliseconds()
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}${(length === 'long' ? `:${ms}` : ``)}`
  }
  return `${mm}:${ss}${(length === 'long' ? `:${ms}` : ``)}`
}

function pad (string) {
  return ('0' + string).slice(-2)
}

export default ReactPlayerDuration