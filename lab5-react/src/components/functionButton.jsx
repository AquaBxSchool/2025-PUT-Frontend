import {Component, useState} from 'react'

export function ButtonFunction() {

  let [buttonValue, setButtonValue] = useState(0);

  const increment = () => {
    setButtonValue(buttonValue+1)
  }


  return <button onClick={increment}>{buttonValue}</button>;

}
