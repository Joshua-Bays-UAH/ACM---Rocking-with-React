import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn003(){
	const[btnColor003, setBtnColor003] = useState(localStorage.getItem("savedBtnColor003"));
	useEffect(() => { localStorage.setItem("savedBtnColor003", btnColor003);}, [btnColor003]);
	return(
		<div>
		<button
			className = {btnColor003} 
			onClick = {() => setBtnColor003((btnColor003) => (btnColor003 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn003
