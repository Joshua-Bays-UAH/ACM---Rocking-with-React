import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn306(){
	const[btnColor306, setBtnColor306] = useState(localStorage.getItem("savedBtnColor306"));
	useEffect(() => { localStorage.setItem("savedBtnColor306", btnColor306);}, [btnColor306]);
	return(
		<div>
		<button
			className = {btnColor306} 
			onClick = {() => setBtnColor306((btnColor306) => (btnColor306 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn306
