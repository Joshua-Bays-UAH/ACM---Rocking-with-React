import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn271(){
	const[btnColor271, setBtnColor271] = useState(localStorage.getItem("savedBtnColor271"));
	useEffect(() => { localStorage.setItem("savedBtnColor271", btnColor271);}, [btnColor271]);
	return(
		<div>
		<button
			className = {btnColor271} 
			onClick = {() => setBtnColor271((btnColor271) => (btnColor271 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn271
