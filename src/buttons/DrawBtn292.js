import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn292(){
	const[btnColor292, setBtnColor292] = useState(localStorage.getItem("savedBtnColor292"));
	useEffect(() => { localStorage.setItem("savedBtnColor292", btnColor292);}, [btnColor292]);
	return(
		<div>
		<button
			className = {btnColor292} 
			onClick = {() => setBtnColor292((btnColor292) => (btnColor292 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn292
