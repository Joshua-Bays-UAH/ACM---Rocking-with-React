import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn199(){
	const[btnColor199, setBtnColor199] = useState(localStorage.getItem("savedBtnColor199"));
	useEffect(() => { localStorage.setItem("savedBtnColor199", btnColor199);}, [btnColor199]);
	return(
		<div>
		<button
			className = {btnColor199} 
			onClick = {() => setBtnColor199((btnColor199) => (btnColor199 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn199
