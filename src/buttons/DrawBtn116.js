import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn116(){
	const[btnColor116, setBtnColor116] = useState(localStorage.getItem("savedBtnColor116"));
	useEffect(() => { localStorage.setItem("savedBtnColor116", btnColor116);}, [btnColor116]);
	return(
		<div>
		<button
			className = {btnColor116} 
			onClick = {() => setBtnColor116((btnColor116) => (btnColor116 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn116
