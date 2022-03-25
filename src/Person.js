import React, { Component } from "react"//라이브러리 호출 

//비구조화 할당 => 객체의 프로파티 값들을 변수에 풀어서 복제해준다.
const Person=({name, age}) => {
  return (
    <>
      <h3>{name}</h3>
      <h4>{age}</h4>
    </>
  )
}
export default Person