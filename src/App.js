import React, { Component } from 'react';
// import Login from './components/login/login';
// import Register from './components/regiter/register';
// import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

export default class App extends Component {
  render() {
    const obj = {
      name1: "Ishkhan",
      lastname1: "Davtyan",
      age1: 24,
      ser1: "txa",
      urish1:"urish1",
      name2: "Mayis",
      lastname2: "Tonoyan",
      age2: 24,
      ser2: "txa",
      urish2:"urish2",
      name3: "Mayis",
      lastname3: "Tonoyan",
      age3: 25,
      ser3: "txa",
      urish3:"urish3",
      name4: "Mayis",
      lastname4: "Tonoyan",
      age4: 25,
      ser4: "txa",
      urish4:"urish3"
    }
    
    //take all values in one array
    
    let arrAll = []
    let arr1 = []
    for (let [key, value] of Object.entries(obj)) {
      arrAll.push(value);
      if (arr1 === undefined) {
        arr1.push(key.slice(0, -1))
      }else {
        const isEl = (el) => el === key.slice(0, -1)
        if (arr1.some(isEl) === false) {
          arr1.push(key.slice(0, -1))
        }
      }
    }

    const header = arr1.map(arr => {
      return (
        <th>{arr}</th>
      )
    })


    // get array of arrays
    
    let newArr = [];
    for (let i = 0; i < arrAll.length / arr1.length; i++) {
      newArr.push(arrAll.slice(i * arr1.length, (i + 1) * arr1.length))
    }
    // get array of arrays of objects
    const any = newArr.map(arr => {
      return arr.map(ar => {
        return (
          <td>{ar}</td>
        )
      })
    })
    
    //each array of object put inside <tr> tag
    
    let any1 = []
    for (let i = 0; i < any.length; i++) {
      function objPush() {
        return (
          <tr>
            {any[i]}
          </tr>
        )
      }
      any1.push(objPush())
    }

    return (
      <div>
        <table>
          <tbody>
            <tr>
              {header}
            </tr>
            {any1}
          </tbody>
        </table>
      </div>
    )
  }
}
