import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn267(){
	const[btnColor267, setBtnColor267] = useState(localStorage.getItem("savedBtnColor267"));
	useEffect(() => { localStorage.setItem("savedBtnColor267", btnColor267);}, [btnColor267]);
	return(
		<div>
		<button
			className = {btnColor267} 
			onClick = {() => setBtnColor267((btnColor267) => (btnColor267 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn267
