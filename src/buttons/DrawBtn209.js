import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn209(){
	const[btnColor209, setBtnColor209] = useState(localStorage.getItem("savedBtnColor209"));
	useEffect(() => { localStorage.setItem("savedBtnColor209", btnColor209);}, [btnColor209]);
	return(
		<div>
		<button
			className = {btnColor209} 
			onClick = {() => setBtnColor209((btnColor209) => (btnColor209 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn209
