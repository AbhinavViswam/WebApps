import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { stringify, v4 as uuidv4 } from 'uuid';
import "./App.css"


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showfinished, setshowfinished] = useState(true);

  useEffect(() => {
    let todostr = localStorage.getItem("todos")
    if (todostr) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const savToLs = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    savToLs();
  }
  const togglefinished = (e) => {
    setshowfinished(!showfinished);
  }
  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    let Confirm = confirm(`Are You Sure You Want To Delete?`)
    Confirm ? setTodos(newTodos) : "";
    savToLs();
  }
  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos)
    savToLs();
  }
  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  const handleCheck = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    savToLs();
  }


  return (
    <>
  
      <Navbar />
      <div className="container  py-[30px] flex flex-col items-center   h-[91vh]">
        <div className='flex flex-col bg-slate-600 items-center border-2 border-slate-800 rounded-lg w-[70vw] h-[60vw] overflow-y-auto overflow-x-hidden'>
        <div className="addtodo  flex flex-col justify-center items-center w-[80vw]">
          <h1 className='text-white text-[20px] font-mono font-extrabold'>ADD TASK</h1>
          <div className='flex gap-2'>
            <input className="border-2 border-slate-800 rounded-md" type="text" value={todo} onChange={handleChange} />
            <button className='border border-white text-white font-sans px-2 flex justify-center items-center bg-slate-800 rounded-md w-[60px] h-[30px]' disabled={todo.length < 3} onClick={handleAdd}>SAVE</button></div>
        </div>
        <div className='flex gap-1 text-white'>
        <input type="checkbox" onChange={togglefinished} checked={showfinished} />show finished</div>
        <div className="todos flex-col w-[50vw]">
          {todos.length == 0 && <div className="">No Todos To Display</div>}
          {todos.map((item) => {

            return (showfinished || !item.isCompleted) && <div key={item.id} className="todo flex gap-2 justify-between">
              <div className='flex gap-4 text-white'>
              <input onChange={handleCheck} type="checkbox" name={item.id} checked={item.isCompleted} id="" />
              <div className={item.isCompleted ? "line-through" : ""}>
                {item.todo}
              </div>
              </div>
              <div className="btns flex gap-1">
                <button className='border border-white text-white font-sans px-2 flex justify-center items-center bg-slate-800 rounded-md w-[60px] h-[30px]' onClick={(e) => handleEdit(e, item.id)}>Edit</button>
                <button className='border border-white text-white font-sans px-2 flex justify-center items-center bg-slate-800 rounded-md w-[60px] h-[30px]' onClick={(e) => handleDelete(e, item.id)}>Delete</button>
              </div>
            </div>
          })}
        </div>
        </div>
      </div>
    </>
  )
}

export default App
