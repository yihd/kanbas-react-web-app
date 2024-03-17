import React from "react";
import ClickEvent from "./ClickEvent";
import TodoList from "./ReduxExamples/todos/TodoList";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import 'bootstrap/dist/css/bootstrap.min.css';
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjextStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import Acme from "./test";
const sayHello = () => {
    alert("Hello!");
  };

const Assignment4 = () => {
  return(
    <>
      <h1>Assignment 4</h1>
      <ReduxExamples/>
      <ClickEvent/>
      <PassingFunctions theFunction={sayHello} />
      <PassingDataOnEvent/>
      <EventObject/>
      <TodoList/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ParentStateComponent/>
      {/* <Acme/> */}
    </>
  );
};
export default Assignment4;

