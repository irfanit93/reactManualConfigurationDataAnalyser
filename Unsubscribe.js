import React from 'react';
import ReactDOM from 'react-dom';
import Level1 from './Level1';
class TotalSubscribers extends React.Component
{
constructor(props)
{
super(props);
this.state={num1:1,num2:2,num3:3,num4:4,num5:5,updatestatus:"yes"};
}
updatenum()
{
this.setState({updatestatus:"yes"});
this.setState({num1:++this.state.num1});
this.setState({num2:++this.state.num2});
this.setState({num3:++this.state.num3});
this.setState({num4:++this.state.num4});
this.setState({num5:++this.state.num5});
alert("UpdateStatus "+this.state.updatestatus);
}
undonum()
{
this.setState({updatestatus:"no"});
this.setState({num1:--this.state.num1});
this.setState({num2:--this.state.num2});
this.setState({num3:--this.state.num3});
this.setState({num4:--this.state.num4});
this.setState({num5:--this.state.num5});
alert("UndoStatus "+this.state.updatestatus);
}
componentWillUpdate()
{
alert("UpdatedUndo Status "+this.state.updatestatus);
}
componentDidUpdate()
{
alert("UpdatedUndo Status Completed "+this.state.updatestatus);
}
render()
{
const nums={num1:this.state.num1,num2:this.state.num2,num3:this.state.num3,num4:this.state.num4,num5:this.state.num5,updatestatus:this.state.updatestatus};
return (<div style={{border:'1px solid blue'}}>
<div>TopLvlTotalSubscribers
<span style={{margin:'3%'}}>{this.state.num1}</span>
<span style={{margin:'3%'}}>{this.state.num2}</span>
<span style={{margin:'3%'}}>{this.state.num3}</span>
<span style={{margin:'3%'}}>{this.state.num4}</span>
<span style={{margin:'3%'}}>{this.state.num5}</span>
<Level1 {...nums}/>
<button type="button" onClick={this.updatenum.bind(this)}>UpdateNum</button>
<button type="button" onClick={this.undonum.bind(this)}>UndoNum</button>
</div>
</div>);
}
}
ReactDOM.render(<TotalSubscribers initial={1}/>,document.getElementById('subscribers'));