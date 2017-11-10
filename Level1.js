import React from 'react';
import Level2 from './Level2';
class Level1 extends React.Component
{
constructor(props)
{
super(props);
this.state={num1:1,num2:2,num3:3,num4:4,num5:5};
}
componentWillReceiveProps()
{
/*
this.setState({num1:this.state.num1+this.props.num1});
this.setState({num2:this.state.num2+this.props.num2});
this.setState({num3:this.state.num3+this.props.num3});
this.setState({num4:this.state.num4+this.props.num4});
this.setState({num5:this.state.num5+this.props.num5});
*/
    this.setState((prevState,props)=>({num1:prevState.num1+props.num1}));
    this.setState((prevState,props)=>({num2:prevState.num2+props.num2}));
    this.setState((prevState,props)=>({num3:prevState.num3+props.num3}));
    this.setState((prevState,props)=>({num4:prevState.num4+props.num4}));
    this.setState((prevState,props)=>({num5:prevState.num5+props.num5}));
}
render()
{
const nums={num1:this.state.num1,num2:this.state.num2,num3:this.state.num3,num4:this.state.num4,num5:this.state.num5};
return (<div>
<div>Level1TotalSubscribers
<span style={{margin:'3%'}}>{this.state.num1}</span>
<span style={{margin:'3%'}}>{this.state.num2}</span>
<span style={{margin:'3%'}}>{this.state.num3}</span>
<span style={{margin:'3%'}}>{this.state.num4}</span>
<span style={{margin:'3%'}}>{this.state.num5}</span>
<Level2 {...nums}/>
</div>
</div>);
}
}
export default Level1;