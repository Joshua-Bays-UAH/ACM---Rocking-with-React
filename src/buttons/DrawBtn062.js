import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn062(){
	const[btnColor062, setBtnColor062] = useState(localStorage.getItem("savedBtnColor062"));
	useEffect(() => { localStorage.setItem("savedBtnColor062", btnColor062);}, [btnColor062]);
	return(
		<div>
		<button
			className = {btnColor062} 
			onClick = {() => setBtnColor062((btnColor062) => (btnColor062 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn062
