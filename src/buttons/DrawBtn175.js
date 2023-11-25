import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn175(){
	const[btnColor175, setBtnColor175] = useState(localStorage.getItem("savedBtnColor175"));
	useEffect(() => { localStorage.setItem("savedBtnColor175", btnColor175);}, [btnColor175]);
	return(
		<div>
		<button
			className = {btnColor175} 
			onClick = {() => setBtnColor175((btnColor175) => (btnColor175 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn175
