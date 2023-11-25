import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn015(){
	const[btnColor015, setBtnColor015] = useState(localStorage.getItem("savedBtnColor015"));
	useEffect(() => { localStorage.setItem("savedBtnColor015", btnColor015);}, [btnColor015]);
	return(
		<div>
		<button
			className = {btnColor015} 
			onClick = {() => setBtnColor015((btnColor015) => (btnColor015 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn015
