import React from "react";
import './Todo.css'


export default function Todo(props) {
    console.log('inside todo.js')
  return <li>{props.text}</li>;
 
}
