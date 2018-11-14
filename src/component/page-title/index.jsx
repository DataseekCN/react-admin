import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title=this.props.title+' - HAPPY MALL';
    }

    render(){
        return(
            <div>
                <h1 className="page-header">{this.props.title}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default PageTitle;