import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn278(){
	const[btnColor278, setBtnColor278] = useState(localStorage.getItem("savedBtnColor278"));
	useEffect(() => { localStorage.setItem("savedBtnColor278", btnColor278);}, [btnColor278]);
	return(
		<div>
		<button
			className = {btnColor278} 
			onClick = {() => setBtnColor278((btnColor278) => (btnColor278 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn278
