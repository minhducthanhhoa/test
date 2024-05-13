import React, { Component } from 'react'
import Bai1 from './components/Bai1'
import ListCourse from './components/ListCourse'
import Calculation from './components/Calculation'
import UserInfo from './components/UserInfo'
import ColorBox from './components/ColorBox'
import FormatName from './components/FormatName'
import Bai5 from './components/Bai5'
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bai1></Bai1>
        <ListCourse></ListCourse>
        <Calculation></Calculation>
        <UserInfo></UserInfo>
        <ColorBox></ColorBox>
        <FormatName></FormatName>
        <Bai5></Bai5>
      </div>
    )
  }
}

