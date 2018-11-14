import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class A extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>component A</div>
        );
    }
}

class B extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>component B</div>
        );
    }
}

class Wrapper extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Link to='/a'>组件A</Link>
                <br/>
                <Link to='/b'>组件B</Link>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path='/a' component={A}></Route>
            <Route path='/b' component={B}></Route>
        </Wrapper>
    </Router>
    ,
    document.getElementById('app')
);
