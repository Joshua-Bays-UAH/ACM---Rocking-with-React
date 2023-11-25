import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn196(){
	const[btnColor196, setBtnColor196] = useState(localStorage.getItem("savedBtnColor196"));
	useEffect(() => { localStorage.setItem("savedBtnColor196", btnColor196);}, [btnColor196]);
	return(
		<div>
		<button
			className = {btnColor196} 
			onClick = {() => setBtnColor196((btnColor196) => (btnColor196 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn196
