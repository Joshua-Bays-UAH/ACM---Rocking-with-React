import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn166(){
	const[btnColor166, setBtnColor166] = useState(localStorage.getItem("savedBtnColor166"));
	useEffect(() => { localStorage.setItem("savedBtnColor166", btnColor166);}, [btnColor166]);
	return(
		<div>
		<button
			className = {btnColor166} 
			onClick = {() => setBtnColor166((btnColor166) => (btnColor166 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn166
