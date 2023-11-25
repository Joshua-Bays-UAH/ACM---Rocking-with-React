import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn386(){
	const[btnColor386, setBtnColor386] = useState(localStorage.getItem("savedBtnColor386"));
	useEffect(() => { localStorage.setItem("savedBtnColor386", btnColor386);}, [btnColor386]);
	return(
		<div>
		<button
			className = {btnColor386} 
			onClick = {() => setBtnColor386((btnColor386) => (btnColor386 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn386
