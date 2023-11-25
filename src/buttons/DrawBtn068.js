import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn068(){
	const[btnColor068, setBtnColor068] = useState(localStorage.getItem("savedBtnColor068"));
	useEffect(() => { localStorage.setItem("savedBtnColor068", btnColor068);}, [btnColor068]);
	return(
		<div>
		<button
			className = {btnColor068} 
			onClick = {() => setBtnColor068((btnColor068) => (btnColor068 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn068
