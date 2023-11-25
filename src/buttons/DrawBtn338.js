import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn338(){
	const[btnColor338, setBtnColor338] = useState(localStorage.getItem("savedBtnColor338"));
	useEffect(() => { localStorage.setItem("savedBtnColor338", btnColor338);}, [btnColor338]);
	return(
		<div>
		<button
			className = {btnColor338} 
			onClick = {() => setBtnColor338((btnColor338) => (btnColor338 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn338
