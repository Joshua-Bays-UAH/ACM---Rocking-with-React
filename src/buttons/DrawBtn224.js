import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn224(){
	const[btnColor224, setBtnColor224] = useState(localStorage.getItem("savedBtnColor224"));
	useEffect(() => { localStorage.setItem("savedBtnColor224", btnColor224);}, [btnColor224]);
	return(
		<div>
		<button
			className = {btnColor224} 
			onClick = {() => setBtnColor224((btnColor224) => (btnColor224 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn224
