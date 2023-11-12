import React, { Component } from 'react';
import Header from '../header';
import Main from '../main';
import './app.css'

export default class App extends Component {
  
  render (){
    return (
      <section className = 'todo-app'>
          <Header/>
          <Main />
      </section>
      )
  }
}