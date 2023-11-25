import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn399(){
	const[btnColor399, setBtnColor399] = useState(localStorage.getItem("savedBtnColor399"));
	useEffect(() => { localStorage.setItem("savedBtnColor399", btnColor399);}, [btnColor399]);
	return(
		<div>
		<button
			className = {btnColor399} 
			onClick = {() => setBtnColor399((btnColor399) => (btnColor399 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn399
