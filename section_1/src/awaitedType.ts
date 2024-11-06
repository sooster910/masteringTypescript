/*
  ┌──────────────────────────┐
  │      Awaited Type        │
  └──────────────────────────┘
*/

import {Equal, Expect} from "../../utils";

/**
 * 타입 추론시 감싸진 Promise를 제외한 내부 객체만 추출 할 수 있다.
 */

const getUser = ()=>{
    return Promise.resolve({
        id:"123",
        name:"John",
        email:"john@exmaple.com"
    })

}


type ReturnValue = ReturnType<typeof getUser> //Promise<{...}>

type UnWrappedPromiseReturnValue = Awaited<ReturnValue> //✅

type tests = [
    Expect<Equal<UnWrappedPromiseReturnValue, {
        id:string,
        name:string,
        email:string
    }>>
]

