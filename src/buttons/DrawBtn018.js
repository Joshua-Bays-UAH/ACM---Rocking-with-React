import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn018(){
	const[btnColor018, setBtnColor018] = useState(localStorage.getItem("savedBtnColor018"));
	useEffect(() => { localStorage.setItem("savedBtnColor018", btnColor018);}, [btnColor018]);
	return(
		<div>
		<button
			className = {btnColor018} 
			onClick = {() => setBtnColor018((btnColor018) => (btnColor018 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn018
