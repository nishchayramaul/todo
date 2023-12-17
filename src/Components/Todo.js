import React from 'react'
import { MdDelete } from "react-icons/md";

export const Todo = (props) => {
  return (
    <div className='list-container'>
        <div className='row'>
        <div className='list'>
    <li className='list-item'> {props.item} </li>
    </div>
    <div className='icns'>
    <MdDelete onClick={(e)=>{props.delete(props.index)}}/>
    </div>
    </div>
    </div>
  )
}
