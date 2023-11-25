import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn201(){
	const[btnColor201, setBtnColor201] = useState(localStorage.getItem("savedBtnColor201"));
	useEffect(() => { localStorage.setItem("savedBtnColor201", btnColor201);}, [btnColor201]);
	return(
		<div>
		<button
			className = {btnColor201} 
			onClick = {() => setBtnColor201((btnColor201) => (btnColor201 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn201
