import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn067(){
	const[btnColor067, setBtnColor067] = useState(localStorage.getItem("savedBtnColor067"));
	useEffect(() => { localStorage.setItem("savedBtnColor067", btnColor067);}, [btnColor067]);
	return(
		<div>
		<button
			className = {btnColor067} 
			onClick = {() => setBtnColor067((btnColor067) => (btnColor067 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn067
