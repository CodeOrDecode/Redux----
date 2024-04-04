import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Todoitem from "./Todoitem";
import { getTodoData } from "../Redux/Todo/action";

const Todo = () => {
  const dispatch = useDispatch();

  const tododata = useSelector((state) => {
    return state.todo;
  });
//   console.log(tododata);



  useEffect(() => {
    dispatch(getTodoData)
  }, []);

  return <div>
    {tododata.map((ele)=>{
        return <Todoitem key={ele.id} {...ele}/>
    })}
  </div>;
};

export default Todo;
