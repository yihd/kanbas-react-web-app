import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoList";
import TodoItem from "./todos/TodoItem";
import { useSelector } from "react-redux";
import { LabState } from "../store";
import {Fds, Abc, Abc2,Abc3,Rew,Abc4,Jkl,Mnb,Abc6,Abc7,Dsa} from "./newfile";
function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
 return (
   <div>
     <h1>Assignment 3</h1>
     <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <PathParameters/>
     <JavaScript/>
     <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <Add a={3} b={4} /><br/>
     <TodoList /> 
     <Fds/>
     <Abc/>
     <Abc2/>
     <Abc3/>
     
     <Rew d={{ b: "a" }} />
     <Abc4/>
     <Jkl/>
     <Mnb d={["a"]} />
     <Abc6/>
     <Abc7/>
     <Dsa/>
   </div>
);}

 
export default Assignment3