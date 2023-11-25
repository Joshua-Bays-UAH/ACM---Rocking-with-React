import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn159(){
	const[btnColor159, setBtnColor159] = useState(localStorage.getItem("savedBtnColor159"));
	useEffect(() => { localStorage.setItem("savedBtnColor159", btnColor159);}, [btnColor159]);
	return(
		<div>
		<button
			className = {btnColor159} 
			onClick = {() => setBtnColor159((btnColor159) => (btnColor159 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn159
