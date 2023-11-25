import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn264(){
	const[btnColor264, setBtnColor264] = useState(localStorage.getItem("savedBtnColor264"));
	useEffect(() => { localStorage.setItem("savedBtnColor264", btnColor264);}, [btnColor264]);
	return(
		<div>
		<button
			className = {btnColor264} 
			onClick = {() => setBtnColor264((btnColor264) => (btnColor264 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn264
