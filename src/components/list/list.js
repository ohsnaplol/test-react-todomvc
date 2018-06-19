import React from 'react'

class List extends React.Component {

  deleteItem(index) {
    this.props.deleteItem(index)
  }

  itemRender() {
    return (
      this.props.items.map((item, index) => 
        <li className='list-group-item' key={index}>
          {item}
          <button className='btn btn-danger float-right' onClick={() => this.deleteItem(index)}>X</button>
        </li>
      )
    )
  }

  render() {
    const items = this.props

    return (
      <ul className='list-group'>
        {this.itemRender(items)}
      </ul>
    )
  }
}

export default List