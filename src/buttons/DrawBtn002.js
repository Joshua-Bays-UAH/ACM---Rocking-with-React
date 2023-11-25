import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn002(){
	const[btnColor002, setBtnColor002] = useState(localStorage.getItem("savedBtnColor002"));
	useEffect(() => { localStorage.setItem("savedBtnColor002", btnColor002);}, [btnColor002]);
	return(
		<div>
		<button
			className = {btnColor002} 
			onClick = {() => setBtnColor002((btnColor002) => (btnColor002 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn002
