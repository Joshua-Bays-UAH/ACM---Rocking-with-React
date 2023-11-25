import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn110(){
	const[btnColor110, setBtnColor110] = useState(localStorage.getItem("savedBtnColor110"));
	useEffect(() => { localStorage.setItem("savedBtnColor110", btnColor110);}, [btnColor110]);
	return(
		<div>
		<button
			className = {btnColor110} 
			onClick = {() => setBtnColor110((btnColor110) => (btnColor110 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn110
