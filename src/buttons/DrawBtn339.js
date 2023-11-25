import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn339(){
	const[btnColor339, setBtnColor339] = useState(localStorage.getItem("savedBtnColor339"));
	useEffect(() => { localStorage.setItem("savedBtnColor339", btnColor339);}, [btnColor339]);
	return(
		<div>
		<button
			className = {btnColor339} 
			onClick = {() => setBtnColor339((btnColor339) => (btnColor339 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn339
