import React from 'react'
import NewItem from './new_lists_items';

const NewsList = (props) => {
    
  const items =props.news.map((item) =>{
    return (
      <NewItem key={item.id} item={item}/>
    )
  });
  return (
   
    <div>
      {props.children}
    <div> {items} </div>
      </div>
  )
}

export default NewsList;    