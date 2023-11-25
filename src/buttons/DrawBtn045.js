import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn045(){
	const[btnColor045, setBtnColor045] = useState(localStorage.getItem("savedBtnColor045"));
	useEffect(() => { localStorage.setItem("savedBtnColor045", btnColor045);}, [btnColor045]);
	return(
		<div>
		<button
			className = {btnColor045} 
			onClick = {() => setBtnColor045((btnColor045) => (btnColor045 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn045
