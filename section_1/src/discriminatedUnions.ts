//서로소 유니온 타입


type Response = {
    state: "LOADING" | "FAILED" | "SUCCESS",
    error?:{
        message:string
    },
    response?:{
        data: string
    }
}
// state 를 독립적으로 두어 서로소유니온 관계 better

type Loading = {
    state:"LOADING"
}

type Fail= {
    state:"FAILED",
    error:{
        message: string
    }
}
type Success = {
    state: "SUCCESS",
    response:{
        data: string
    }
}

type Responses= Loading | Fail | Success
type AnotherResponse = {
    state: "SUCCESS",
    response:{
        data: string
    } }|{
    state:"FAILED",
    error:{
        message: string
    }
}|{
    state:"LOADING"
}


const resp : Response = {
    state:"LOADING",
    error:{
        message:"ddd"
    }
}


function processResult(response:Responses){
    if  ("error" in response){
        console.log(response.error) // 타입 좁혀짐
    } else if ("response" in response){
        console.log(response.response)
    }else{
        console.log(response.state)
    }
}

//서로소 관계임을 이용한 접근
//state 속성의 리터럴 타입으로 인해 3개가 다른 서로소 유니온 관계가 된다.

function processResult1(response:Responses){
    if(response.state === "FAILED" ){
        console.log(response.error)
    }else if (response.state === "LOADING"){
        console.log(response.state)
    }
}





type A =
    | {
    type: "a";
    a: string;
}
    | {
    type: "b";
    b: string;
}
    | {
    type: "c";
    c: string;
    d: string;
};

type B = "a" | "b" | "c";

enum C {
    a = 'a',
    b = 'b',
    c = 'c'
}






