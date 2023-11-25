import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn345(){
	const[btnColor345, setBtnColor345] = useState(localStorage.getItem("savedBtnColor345"));
	useEffect(() => { localStorage.setItem("savedBtnColor345", btnColor345);}, [btnColor345]);
	return(
		<div>
		<button
			className = {btnColor345} 
			onClick = {() => setBtnColor345((btnColor345) => (btnColor345 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn345
