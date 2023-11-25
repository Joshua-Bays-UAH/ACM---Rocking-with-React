import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn117(){
	const[btnColor117, setBtnColor117] = useState(localStorage.getItem("savedBtnColor117"));
	useEffect(() => { localStorage.setItem("savedBtnColor117", btnColor117);}, [btnColor117]);
	return(
		<div>
		<button
			className = {btnColor117} 
			onClick = {() => setBtnColor117((btnColor117) => (btnColor117 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn117
