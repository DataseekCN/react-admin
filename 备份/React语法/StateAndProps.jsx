import React from 'react';
import ReactDOM from 'react-dom';


class Component extends React.Component{
    render(){
        return (<h1>I am {this.props.name} in es6</h1>);
    }
}

ReactDOM.render(
    <Component name='sam 123'/>,
    document.getElementById('app')
);