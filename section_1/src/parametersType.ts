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

type TestFuncParameter = [Expect<Equal<FuncParameter, [string, { bar:number; bas:boolean; }]>>]

/**
 * 2.
 * @param locationId
 * @param details
 */
const getDetailedWeather = (
    locationId: string,
    details?: {
        tempUnit?: 'C' | 'F';
        includeForecast?: boolean;
    },
) => {
};


type GetDetailedWeather= Parameters <typeof getDetailedWeather>

type test= Expect<Equal<GetDetailedWeather,[locationId:string,details?: {
    tempUnit?: 'C' | 'F';
    includeForecast?: boolean;
} ] >>