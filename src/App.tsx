import React, { FC, ChangeEvent , useState } from 'react';
import './App.css';
import {ITask} from "./interfaces/interface"
import TodoList from "./Components/TodoList";
import LogoName from "./test.png";

const App :FC = () => {

 const [title,setTitle] = useState<string>("");
 const [desc,setDesc] = useState<string>("");
 const [list,setList] = useState<ITask[]>([]);

 const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
       if(event.target.name === "title") {
             setTitle(event.target.value)
       }
       else {
            setDesc(event.target.value)
       }
 };

 const addList = ():void => {
       const newList = {title: title,desc: desc};
       setList([...list, newList]);
       setTitle("");
       setDesc("");
 }

const completeTask = (taskNameToDelete: string):void => {
     setList(list.filter((task) => {
         return task.title != taskNameToDelete;
     }))
}

  return (
    <div className="App">
        <header>
            <img src={LogoName} alt="Cannot find the image"/>
            <p>Typescript</p>
        </header>
        <div className="header">
        <div className="inputContainer">
              <div className="inputText">
        <input type="text" placeholder="Title" name="title" value={title} onChange={handleChange}/> <br/>
        <input type="text" placeholder="Description" name="desc" value={desc} onChange={handleChange}/> <br/>
              </div>
        </div>

        <button onClick={addList}>Add to list</button>
        </div>

        <div className="flex-container">
        <div className="todoList">
            <h4>TODO</h4>
            <hr/>
              {list.map((task:ITask) => {
                    return <TodoList task={task} completeTask={completeTask} />;
              })}
        </div>
        <div className="going">
            <h4>GOING</h4>
            <hr/>
        </div>
        <div className="finished">
            <h4>FINISHED</h4>
            <hr/>
        </div>
        </div>
        <footer>
            <div className="footer-gray">
                <div className="footer-custom">
                    <h3>2021-2022</h3>
                    <p>By a Typescript student</p>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
