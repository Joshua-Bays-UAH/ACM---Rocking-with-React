import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn327(){
	const[btnColor327, setBtnColor327] = useState(localStorage.getItem("savedBtnColor327"));
	useEffect(() => { localStorage.setItem("savedBtnColor327", btnColor327);}, [btnColor327]);
	return(
		<div>
		<button
			className = {btnColor327} 
			onClick = {() => setBtnColor327((btnColor327) => (btnColor327 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn327
