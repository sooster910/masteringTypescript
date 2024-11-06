
/*
  ┌──────────────────────────┐
  │      Return Type         │
  └──────────────────────────┘
*/

import {Expect, Equal} from "../../utils";

const myFunc = ()=>{
    return "hello"
}

type MyReturn = ReturnType<typeof myFunc>



type tests = [ Expect<Equal<MyReturn,string>>]


