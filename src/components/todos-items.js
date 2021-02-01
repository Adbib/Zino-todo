import React, {useState} from 'react'

export default function Todositems({todoi, onDelete}) {

    // const removeTodo = () => {
    //     const li = todos.indexOf(todoi)
    //    delete todos[li]
    //    settodos(todos)
    // }
    const [Check, setCheck] = useState(false)
    const doneTodo = () => {
     const todocheck = !Check
     setCheck(todocheck)
    }

    return (
        <li id="todo" key={todoi} data-id="U1612171960680" className={Check ? "danger" : " "}>
  <div className="checkbox">
    <span className="close">
      <i className="fa fa-times" onClick={() => onDelete(todoi)}>
      </i>
    </span>
    <label>

    <input onChange={doneTodo} type="checkbox"/>
      {todoi}</label>
  </div>
</li>
    )
}
