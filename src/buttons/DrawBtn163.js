import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn163(){
	const[btnColor163, setBtnColor163] = useState(localStorage.getItem("savedBtnColor163"));
	useEffect(() => { localStorage.setItem("savedBtnColor163", btnColor163);}, [btnColor163]);
	return(
		<div>
		<button
			className = {btnColor163} 
			onClick = {() => setBtnColor163((btnColor163) => (btnColor163 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn163
