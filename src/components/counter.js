import React from 'react';
import {connect} from 'react-redux';
class Counter extends React.Component{
    constructor(){
        super();
    this.state={
        count: 0
    }
}
 counterChangeHandler(action , value=1){
     let current= this.state.count;
     if(action === "inc")
      current= current + value;
     else
      current= current - value;
    this.setState({
        count:current
    })
 }
    render(){
        return(
            <div>
                <h1>Total count is: {this.props.ctr} . </h1>

                <button onClick={()=>this.props.onIncCounter}>
                    Inc
                </button>

                <button onClick={()=>this.counterChangeHandler("dec")}>
                    Dec
                </button>

                <button onClick={()=>this.counterChangeHandler("inc", 5)}>
                    Add 5
                </button>

                <button onClick={()=>this.counterChangeHandler("dec", 5)}>
                    Sub 5
                </button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
      ctr: state.count 
    };
    
};
const mapDispatchToProps = dispatch => {
    return{
        onIncCounter : () => dispatch({ type: 'INCREMENT'})
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);