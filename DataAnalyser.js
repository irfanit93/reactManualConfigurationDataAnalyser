import React from 'react';
import ReactDOM from 'react-dom';
class DataAnalyser extends React.Component
{
render()
{
return (<div className='signuphead' style={{textAlign:'center',background:'#652356',color:'white'}}>
<h1 style={{padding:'3%'}}>DataAnalyser</h1>
<Division divisionname="Login">
<TextInput description="Username:"/>
<TextInputEncrypt description="Password: "/>
<ButtonGems value="Login"/>
</Division>
<Division divisionname="Subscription">	
<TextInput description="Email: "/>
<ButtonGems value="Subscribe"/>
</Division>
<Division divisionname="Comment">	
<TextInput description="Comments: "/>
<ButtonGems value="Throw"/>
</Division>
<Division divisionname="Mail">	
<TextInput description="To: "/>
<ButtonGems value="Send"/>
</Division>
</div>);
}
}
function Division(props)
{
return(
<div style={{textAlign:'center',paddingLeft:'10%',paddingRight:'10%',margin:'3.15%',background:'#335668',fontSize:'200%',float:'left'}}>
{props.divisionname}
<br/><br/>
<br/><br/>
{props.children}
</div>
);
}
function TextInput(props)
{
return(
<div>
<span>{props.description}</span>
<br/><br/>
<input type="text" value={props.value} style={{padding:'2%',width:'50%',borderRadius:'6px'}}/>
<br/><br/>
</div>
);
}
function TextInputEncrypt(props)
{
return(
<div>
<span>{props.description}</span>&nbsp;&nbsp;
<br/><br/>
<input type="password" style={{padding:'2%',width:'50%',borderRadius:'6px'}}/><br/><br/><br/>
</div>
);
}
function ButtonGems(props)
{
return(
<input type="submit" value={props.value} style={{padding:'2%',width:'50%',borderRadius:'6px'}}/>
);
}
ReactDOM.render(<DataAnalyser/>,document.getElementById('dataanalysermain'));