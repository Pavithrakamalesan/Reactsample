import React, { Component } from 'react'

class Body1 extends Component{
    constructor(){
        super();
        this.state={count:0}
    }

    Increment(){
        this.setState({count:this.state.count + 1})
    }

    Decrement(){
        this.setState({count:this.state.count - 1})
    }
    render(){
        return(
            <div>
                <p>
                    count:{this.state.count}
                </p>
                <button onClick={()=>this.Increment()}>Increment</button>
                <button onMouseOver={()=>this.Decrement()}>Decrement</button>
            </div>
        )
    }

}

export default Body1