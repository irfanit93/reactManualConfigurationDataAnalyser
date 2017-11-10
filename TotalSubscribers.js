import React from 'react';
import ReactDOM from 'react-dom';
class TotalSubscribers extends React.Component
{
constructor(props)
{
super(props);
this.state={total:0};
}
subscribe()
{
setTimeout(()=>{
this.setState({total:this.state.total+this.props.initial});
},7000);
}
unsubscribe()
{
setTimeout(()=>{
this.setState({total:this.state.total-this.props.initial});
},3000);
}
render()
{
return (<div>
<div>TotalSubscribers: {this.state.total}</div>
<Button value="Subscribe" subscribetoggle={this.subscribe.bind(this)}/>
<Button value="Unsubscribe" subscribetoggle={this.unsubscribe.bind(this)}/>
</div>);
}
}
class Button extends React.Component
{
subscribetoggle()
{
this.props.subscribetoggle();
}
render()
{
return(
<div><button type="button" onClick={this.subscribetoggle.bind(this)}>{this.props.value}</button></div>
);
}
}
ReactDOM.render(<TotalSubscribers initial={1}/>,document.getElementById('subscribers'));