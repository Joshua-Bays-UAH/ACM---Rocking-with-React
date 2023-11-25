import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn040(){
	const[btnColor040, setBtnColor040] = useState(localStorage.getItem("savedBtnColor040"));
	useEffect(() => { localStorage.setItem("savedBtnColor040", btnColor040);}, [btnColor040]);
	return(
		<div>
		<button
			className = {btnColor040} 
			onClick = {() => setBtnColor040((btnColor040) => (btnColor040 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn040
