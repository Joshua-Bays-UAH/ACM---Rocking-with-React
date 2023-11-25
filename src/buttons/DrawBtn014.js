import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn014(){
	const[btnColor014, setBtnColor014] = useState(localStorage.getItem("savedBtnColor014"));
	useEffect(() => { localStorage.setItem("savedBtnColor014", btnColor014);}, [btnColor014]);
	return(
		<div>
		<button
			className = {btnColor014} 
			onClick = {() => setBtnColor014((btnColor014) => (btnColor014 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn014
