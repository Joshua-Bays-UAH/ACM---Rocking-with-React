import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn198(){
	const[btnColor198, setBtnColor198] = useState(localStorage.getItem("savedBtnColor198"));
	useEffect(() => { localStorage.setItem("savedBtnColor198", btnColor198);}, [btnColor198]);
	return(
		<div>
		<button
			className = {btnColor198} 
			onClick = {() => setBtnColor198((btnColor198) => (btnColor198 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn198
