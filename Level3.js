import React from 'react';
import Level4 from './Level4';
class Level3 extends React.Component
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
if(this.props.updatestatus=="yes")
{
this.setState((prevState,props)=>({num1:prevState.num1+props.num1}));
this.setState((prevState,props)=>({num2:prevState.num2+props.num2}));
this.setState((prevState,props)=>({num3:prevState.num3+props.num3}));
this.setState((prevState,props)=>({num4:prevState.num4+props.num4}));
this.setState((prevState,props)=>({num5:prevState.num5+props.num5}));
}
else if(this.props.updatestatus=="no")
{
this.setState((prevState,props)=>({num1:prevState.num1-props.num1}));
this.setState((prevState,props)=>({num2:prevState.num2-props.num2}));
this.setState((prevState,props)=>({num3:prevState.num3-props.num3}));
this.setState((prevState,props)=>({num4:prevState.num4-props.num4}));
this.setState((prevState,props)=>({num5:prevState.num5-props.num5}));
}
}
render()
{
const nums={num1:this.state.num1,num2:this.state.num2,num3:this.state.num3,num4:this.state.num4,num5:this.state.num5,updatestatus:this.props.updatestatus};
return (<div>
<div>Level3TotalSubscribers
<span style={{margin:'3%'}}>{this.state.num1}</span>
<span style={{margin:'3%'}}>{this.state.num2}</span>
<span style={{margin:'3%'}}>{this.state.num3}</span>
<span style={{margin:'3%'}}>{this.state.num4}</span>
<span style={{margin:'3%'}}>{this.state.num5}</span>
<Level4 {...nums}/>
</div>
</div>);
}
}
export default Level3;