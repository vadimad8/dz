import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Button';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
    		<div className="wrapper">
    			<h1>Hello World!</h1>
      			<SayFullName name="Ivan" surmane="Sousopavlashvile" link="vk.com" />
      			<SayFullName name="Ivan" surmane="Sousopavlashvile" link="vk.com" />
      			<SayFullName name="Ivan" surmane="Sousopavlashvile" link="vk.com" />
      		</div>
    );
  }
}

function SayFullName(props) {
	return (
		<div>
			<h1> Мое имя {props.name}, фамилия - {props.surmane}</h1>
			<a href={props.link}>Ссылка на мой профиль</a>
		</div>
		)
}

export default App;
