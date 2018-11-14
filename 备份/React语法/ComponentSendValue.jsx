import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'sam',
            age:18
        };
    }
    render(){
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>age:{this.state.age}</p>
                <button onClick={(e)=>{this.handleClick(e)}}>add</button>
                <input type='text'  onChange={(e)=>{this.onValueChange(e)}}></input>
            </div>
        );
    }

    handleClick(){
        console.log('onClick');
        this.setState({
            age:this.state.age+1
        });
    }

    onValueChange(e){
        this.setState({
            age:e.target.value
        });
    }
}

class Title extends React.Component{
    constructor(props){
        super(props);
    }

    render(props){
        return (
            <h1>
                {this.props.children}
            </h1>
        );
    }
}

class App extends React.Component{
    render(){
        return(
            <div className="">
                <Title>
                    <span>App span</span>
                    <br/>
                    <a href="">link</a>
                </Title>
                <hr/>
                <Component/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
