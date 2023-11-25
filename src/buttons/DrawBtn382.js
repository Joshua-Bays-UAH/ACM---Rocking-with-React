import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn382(){
	const[btnColor382, setBtnColor382] = useState(localStorage.getItem("savedBtnColor382"));
	useEffect(() => { localStorage.setItem("savedBtnColor382", btnColor382);}, [btnColor382]);
	return(
		<div>
		<button
			className = {btnColor382} 
			onClick = {() => setBtnColor382((btnColor382) => (btnColor382 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn382
