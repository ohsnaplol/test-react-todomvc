import React from 'react'

class Input extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.add(this.state.value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form className="input-group mb-3">
        <input value={this.state.value} onChange={this.handleChange} type="text" className="form-control" placeholder="What do you have to do?" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit" onClick={this.handleSubmit}>+</button>
        </div>
      </form>
    )
  }
}

export default Input