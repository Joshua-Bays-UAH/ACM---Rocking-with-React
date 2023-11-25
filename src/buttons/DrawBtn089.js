import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn089(){
	const[btnColor089, setBtnColor089] = useState(localStorage.getItem("savedBtnColor089"));
	useEffect(() => { localStorage.setItem("savedBtnColor089", btnColor089);}, [btnColor089]);
	return(
		<div>
		<button
			className = {btnColor089} 
			onClick = {() => setBtnColor089((btnColor089) => (btnColor089 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn089
