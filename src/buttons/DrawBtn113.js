import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn113(){
	const[btnColor113, setBtnColor113] = useState(localStorage.getItem("savedBtnColor113"));
	useEffect(() => { localStorage.setItem("savedBtnColor113", btnColor113);}, [btnColor113]);
	return(
		<div>
		<button
			className = {btnColor113} 
			onClick = {() => setBtnColor113((btnColor113) => (btnColor113 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn113
