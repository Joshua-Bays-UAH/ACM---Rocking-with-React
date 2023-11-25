import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn322(){
	const[btnColor322, setBtnColor322] = useState(localStorage.getItem("savedBtnColor322"));
	useEffect(() => { localStorage.setItem("savedBtnColor322", btnColor322);}, [btnColor322]);
	return(
		<div>
		<button
			className = {btnColor322} 
			onClick = {() => setBtnColor322((btnColor322) => (btnColor322 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn322
