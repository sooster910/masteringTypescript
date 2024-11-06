/*
  ┌──────────────────────────┐
  │      Parameters Type      │
  └──────────────────────────┘
*/

// 함수에 파라미터를 추론할 수 있는 타입 만들기

import {Equal, Expect} from "../../utils";

function func(foo:string, obj:{bar:number, bas:boolean}){

}

type FuncParameter = Parameters<typeof func>
// [foo:string, obj:{bar:number, bas:boolean}] 튜플로 추론됨 =>  명시적으로  고정되어 있음

type test = [Expect<Equal<FuncParameter, [string, { bar:number; bas:boolean; }]>>]

