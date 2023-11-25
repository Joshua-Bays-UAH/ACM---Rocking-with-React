import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn102(){
	const[btnColor102, setBtnColor102] = useState(localStorage.getItem("savedBtnColor102"));
	useEffect(() => { localStorage.setItem("savedBtnColor102", btnColor102);}, [btnColor102]);
	return(
		<div>
		<button
			className = {btnColor102} 
			onClick = {() => setBtnColor102((btnColor102) => (btnColor102 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn102
