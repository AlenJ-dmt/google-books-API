import React from 'react'

class Result extends React.Component{

    

    render(){
        
        return(
            <div>
                <h2>{this.props.title}</h2>
                <h3>{this.props.author}</h3>
                <p>{this.props.price}</p>
                <p>{this.props.description}</p>
                
            </div>
        )
    }
}
export default Result;