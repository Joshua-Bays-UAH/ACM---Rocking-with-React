import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn007(){
	const[btnColor007, setBtnColor007] = useState(localStorage.getItem("savedBtnColor007"));
	useEffect(() => { localStorage.setItem("savedBtnColor007", btnColor007);}, [btnColor007]);
	return(
		<div>
		<button
			className = {btnColor007} 
			onClick = {() => setBtnColor007((btnColor007) => (btnColor007 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn007
