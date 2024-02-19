import VariablesAndConstants
  from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariablesType";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import add from "./functions/ESSFunction";
import subtract from "./functions/ArrowFunctions";
import multiply from "./functions/ImpliedReturn";
import { square, plusOne } from './functions/FunctionParenthesisAndParameters';
import { functionScoped, blockScoped, constant1, numberArray1, stringArray1, variableArray1 } from './arrays/WorkingWithArrays';
import { length1,index1} from './arrays/ArrayIndexAndLength';
import { numberArray12,stringArray12} from './arrays/AddingAndRemovindDataToFromArrays';
import { squares, cubes} from './arrays/MapFunction';
import JsonStringify from "./json/JsonStringify";
import { four,string3 } from "./arrays/FindFunction";
import { fourIndex, string3Index } from "./arrays/FindIndex";
import { evenNumbers, numbersGreaterThan2,oddNumbers } from "./arrays/FilterFunction";
import { greeting1, result1, result2,greeting2 } from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDesctructing";
function JavaScript() {
    console.log('Hello World!');
    const twoPlusFour = add(2, 4);
    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);
    const fourTimesFive = multiply(4, 5);
    const twoSquared = square(2);
    const threePlusOne = plusOne(3); 
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = stringArray1.map(string => string.toUpperCase()).join(''); 
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
         <IfElse/>
         <TernaryOperator/>
         <h2>Functions</h2>
      <h3>Legacy ES5 functions</h3>
      twoPlusFour =  {twoPlusFour} <br />
      add(2, 4) = { add(2, 4) }<br />
      <h3>New ES6 arrow functions</h3>
        threeMinusOne = {threeMinusOne}<br />
        subtract(3, 1) = {subtract(3, 1)}<br />
        <h3>Implied Return</h3>
        fourTimesFive = {fourTimesFive}<br /> 
        multiply(4, 5) = { multiply(5, 4) }<br />
        <h3>Parenthesis and Parameters</h3>
        twoSquared = {twoSquared}<br /> 
        squre(2) = {twoSquared}<br /> 
        threePlusOne = {threePlusOne}<br /> 
        plusOne(3)= {threePlusOne}<br /> 

        <h2>Working with Arrays</h2>
        numberArray1 = {numberArray1}<br /> 
        stringArray1 = {stringArray1}<br /> 
        variableArray1 = {variableArray1}<br />

        <h2>Array index and length</h2>
        length1 = {length1}<br /> 
        index1 = {index1}<br /> 

        <h2>Add and remove data to arrays</h2>
        numberArray1 = {numberArray12}<br /> 
        stringArray1 = {stringArray12}<br /> 

       
  <h2>Looping through arrays</h2>
  <div>stringArray2 = {stringArray2}</div> {/* This will display STRING1STRING3 */}


        <h3>Map</h3>
        squares = {squares}<br /> 
        cubes = {cubes}<br /> 

    
        <JsonStringify />


        <h3>Find function</h3>
        four = {four}<br /> 
        string3 = {string3}<br /> 

        <h3>FindIndex function</h3>
        fourIndex = {fourIndex}<br /> 
        string3Index = {string3Index}<br /> 

        <h3>Filter function</h3>
        numbersGreaterThan2 = {numbersGreaterThan2}<br /> 
        evenNumbers = {evenNumbers}<br /> 
        oddNumbers = {oddNumbers}<br /> 


        <h3>Template Literals</h3>
        result1 = {result1}<br /> 
        result2 = {result2}<br /> 
        greeting1 = {greeting1}<br/>
        greeting2 = {greeting2}<br/>

        <House/>
        <Spreading/>
        <Destructing/>
        <FunctionDestructing/>

      </div>
      
      
   );
}
export default JavaScript