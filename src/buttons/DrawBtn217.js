import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn217(){
	const[btnColor217, setBtnColor217] = useState(localStorage.getItem("savedBtnColor217"));
	useEffect(() => { localStorage.setItem("savedBtnColor217", btnColor217);}, [btnColor217]);
	return(
		<div>
		<button
			className = {btnColor217} 
			onClick = {() => setBtnColor217((btnColor217) => (btnColor217 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn217
