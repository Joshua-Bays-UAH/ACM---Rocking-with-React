import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn151(){
	const[btnColor151, setBtnColor151] = useState(localStorage.getItem("savedBtnColor151"));
	useEffect(() => { localStorage.setItem("savedBtnColor151", btnColor151);}, [btnColor151]);
	return(
		<div>
		<button
			className = {btnColor151} 
			onClick = {() => setBtnColor151((btnColor151) => (btnColor151 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn151
