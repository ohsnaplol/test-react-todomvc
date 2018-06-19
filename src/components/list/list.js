import React from 'react'
import './style.css'

class List extends React.Component {

  deleteItem(index) {
    this.props.deleteItem(index)
  }

  itemRender() {
    return (
      this.props.items.map((item, index) =>
        <li className='list-group-item todo-item' key={index}>
          {item}
          <button className='btn btn-sm btn-danger float-right destroy-item' onClick={() => this.deleteItem(index)}>X</button>
        </li>
      )
    )
  }

  render() {
    const items = this.props

    return (
      <div>
        <h2>
          <strong>{this.props.items.length} </strong>
          {this.props.items.length === 1 ? (<span>Item</span>) : (<span>Items</span>)}
        </h2>
        {this.props.items.length > 0 &&
          <div className="border border-primary rounded">
          <h3>List section</h3>
            <ul className='list-group'>
              {this.itemRender(items)}
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default List