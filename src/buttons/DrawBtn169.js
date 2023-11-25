import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn169(){
	const[btnColor169, setBtnColor169] = useState(localStorage.getItem("savedBtnColor169"));
	useEffect(() => { localStorage.setItem("savedBtnColor169", btnColor169);}, [btnColor169]);
	return(
		<div>
		<button
			className = {btnColor169} 
			onClick = {() => setBtnColor169((btnColor169) => (btnColor169 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn169
