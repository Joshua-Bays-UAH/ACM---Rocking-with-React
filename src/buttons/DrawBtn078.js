import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn078(){
	const[btnColor078, setBtnColor078] = useState(localStorage.getItem("savedBtnColor078"));
	useEffect(() => { localStorage.setItem("savedBtnColor078", btnColor078);}, [btnColor078]);
	return(
		<div>
		<button
			className = {btnColor078} 
			onClick = {() => setBtnColor078((btnColor078) => (btnColor078 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn078
