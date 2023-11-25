import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn200(){
	const[btnColor200, setBtnColor200] = useState(localStorage.getItem("savedBtnColor200"));
	useEffect(() => { localStorage.setItem("savedBtnColor200", btnColor200);}, [btnColor200]);
	return(
		<div>
		<button
			className = {btnColor200} 
			onClick = {() => setBtnColor200((btnColor200) => (btnColor200 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn200
