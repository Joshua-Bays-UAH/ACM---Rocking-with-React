import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn057(){
	const[btnColor057, setBtnColor057] = useState(localStorage.getItem("savedBtnColor057"));
	useEffect(() => { localStorage.setItem("savedBtnColor057", btnColor057);}, [btnColor057]);
	return(
		<div>
		<button
			className = {btnColor057} 
			onClick = {() => setBtnColor057((btnColor057) => (btnColor057 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn057
