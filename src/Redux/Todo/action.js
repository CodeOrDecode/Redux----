import axios from "axios";
import { TODODATA } from "./actionitems";

export function getdata(value) {
    return { type: TODODATA, payload: value };
}


export async function getTodoData(dispatch) {
    try {
      let { data } = await axios({
        method: "get",
        url: "http://localhost:3000/todos",
      });
    //   console.log(data);
      dispatch(getdata(data));
    } catch (error) {
      console.log(error);
    }
  }