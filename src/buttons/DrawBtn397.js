import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn397(){
	const[btnColor397, setBtnColor397] = useState(localStorage.getItem("savedBtnColor397"));
	useEffect(() => { localStorage.setItem("savedBtnColor397", btnColor397);}, [btnColor397]);
	return(
		<div>
		<button
			className = {btnColor397} 
			onClick = {() => setBtnColor397((btnColor397) => (btnColor397 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn397
