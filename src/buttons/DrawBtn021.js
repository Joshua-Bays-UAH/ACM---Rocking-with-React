import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn021(){
	const[btnColor021, setBtnColor021] = useState(localStorage.getItem("savedBtnColor021"));
	useEffect(() => { localStorage.setItem("savedBtnColor021", btnColor021);}, [btnColor021]);
	return(
		<div>
		<button
			className = {btnColor021} 
			onClick = {() => setBtnColor021((btnColor021) => (btnColor021 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn021
