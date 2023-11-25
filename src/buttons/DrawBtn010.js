import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn010(){
	const[btnColor010, setBtnColor010] = useState(localStorage.getItem("savedBtnColor010"));
	useEffect(() => { localStorage.setItem("savedBtnColor010", btnColor010);}, [btnColor010]);
	return(
		<div>
		<button
			className = {btnColor010} 
			onClick = {() => setBtnColor010((btnColor010) => (btnColor010 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn010
