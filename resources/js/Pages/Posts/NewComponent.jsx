import React,{Component} from 'react';
export default class NewComponent extends Component
{
    constructor(props) {
        super(props);

        this.state={
            count:0
        };

        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }

    increment(){
        this.setState(state=>({
            count:state.count+1
        }));
    }

    decrement(){
        this.setState(state=>({
            count:state.count-1
        }));
    }

    reset()
    {
        this.setState(state=>({
            count:0
        }));
    }

render(){
return(
    <div>

        <div>
            <button onClick={this.increment} className="btn btn-dark">Increment</button>
            <button onClick={this.decrement} className="btn btn-dark">Decrement</button>
            <button onClick={this.reset} className="btn btn-danger">Reset</button>
            <h1 className="h1">Current: {this.state.count}</h1>
        </div>


       <h2>This is something from Petition</h2>
        <p>Details</p>
        <br/>
        <a href="/dashboard" className="btn btn-success">Back</a>

    </div>
)
}
}
