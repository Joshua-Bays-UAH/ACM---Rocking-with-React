import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn307(){
	const[btnColor307, setBtnColor307] = useState(localStorage.getItem("savedBtnColor307"));
	useEffect(() => { localStorage.setItem("savedBtnColor307", btnColor307);}, [btnColor307]);
	return(
		<div>
		<button
			className = {btnColor307} 
			onClick = {() => setBtnColor307((btnColor307) => (btnColor307 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn307
