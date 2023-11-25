import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn047(){
	const[btnColor047, setBtnColor047] = useState(localStorage.getItem("savedBtnColor047"));
	useEffect(() => { localStorage.setItem("savedBtnColor047", btnColor047);}, [btnColor047]);
	return(
		<div>
		<button
			className = {btnColor047} 
			onClick = {() => setBtnColor047((btnColor047) => (btnColor047 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn047
