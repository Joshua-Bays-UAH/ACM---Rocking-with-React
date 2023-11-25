import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn033(){
	const[btnColor033, setBtnColor033] = useState(localStorage.getItem("savedBtnColor033"));
	useEffect(() => { localStorage.setItem("savedBtnColor033", btnColor033);}, [btnColor033]);
	return(
		<div>
		<button
			className = {btnColor033} 
			onClick = {() => setBtnColor033((btnColor033) => (btnColor033 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn033
