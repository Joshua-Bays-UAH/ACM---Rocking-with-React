import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn124(){
	const[btnColor124, setBtnColor124] = useState(localStorage.getItem("savedBtnColor124"));
	useEffect(() => { localStorage.setItem("savedBtnColor124", btnColor124);}, [btnColor124]);
	return(
		<div>
		<button
			className = {btnColor124} 
			onClick = {() => setBtnColor124((btnColor124) => (btnColor124 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn124
