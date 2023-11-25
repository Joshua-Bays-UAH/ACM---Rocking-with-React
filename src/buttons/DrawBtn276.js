import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn276(){
	const[btnColor276, setBtnColor276] = useState(localStorage.getItem("savedBtnColor276"));
	useEffect(() => { localStorage.setItem("savedBtnColor276", btnColor276);}, [btnColor276]);
	return(
		<div>
		<button
			className = {btnColor276} 
			onClick = {() => setBtnColor276((btnColor276) => (btnColor276 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn276
