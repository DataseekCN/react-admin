import React from 'react';
import ReactDOM from 'react-dom';


class Component extends React.Component{
	render(){
		return (<h1>I am Sam in es6</h1>);
	}
}

ReactDOM.render(
		<Component/>,
		document.getElementById('app')
		);