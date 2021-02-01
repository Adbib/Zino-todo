import React, {useState} from 'react'
import logo from './logo.png'
import './App.css';
import Todositems from './components/todos-items';
import Footer from './components/footer';

function App() {

  const [todos, settodos] = useState([])
  const [intodo, setintodo] = useState("")
  const [Checkin, setCheckin] = useState(false)
  const addTodo = () =>{
    const toinlen = intodo.length
    if ( toinlen < 1 ){
      setCheckin(true)
    }else{
      setCheckin(false)
      settodos( [...todos, intodo] )

    }
    
  }
  const removeTodo = (todo)=>{
    settodos(todos.filter((task)=> task !== todo ))
  }
  return (
    <>
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" className="logoimg"/>
      </div>
      <div className="container">
            <div className="today"></div>
            <div className="row">
               <div className="col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3">
                  <div className="add-control">
                     <div className="form-group has-feedback">
                        <input type="text" className="form-control" value={intodo} onChange={(e)=>setintodo(e.target.value)} placeholder="✍️ Add item..."/>
                        <i className="fa fa-plus form-control-feedback add-btn" title="Add item" onClick={addTodo}></i>
                     </div>
                  </div>

                      <p className={Checkin ? "err text-danger text-center ": "err text-danger text-center hidden"}><i className="fa fa-warning"></i> Oops Honey! Please, enter name item</p>
                        <ul className="todo-list ui-sortable">


                    {
                    todos.map((todo) =>(
                      <Todositems key={todo} todoi={todo} onDelete={removeTodo}></Todositems>

                    ))}
                    
                  </ul>
                      
                      
                    
                    

                    <p className={todos.length === 0 ? "no-items text-muted text-center " : "no-items text-muted text-center hidden" }><i className="fa fa-ban"></i></p>

                  

                  
                  
               </div>
            </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
