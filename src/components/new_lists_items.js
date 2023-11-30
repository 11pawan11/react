import React from 'react'

const NewItem = ({item}) => {
  return (
    <div>
        <h1>{item.title}</h1>
        <div>
          {item.feed} 
        </div>
      </div>
  )
}

export default NewItem;