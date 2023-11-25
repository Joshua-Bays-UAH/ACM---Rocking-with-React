import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn070(){
	const[btnColor070, setBtnColor070] = useState(localStorage.getItem("savedBtnColor070"));
	useEffect(() => { localStorage.setItem("savedBtnColor070", btnColor070);}, [btnColor070]);
	return(
		<div>
		<button
			className = {btnColor070} 
			onClick = {() => setBtnColor070((btnColor070) => (btnColor070 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn070
