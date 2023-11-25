import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn072(){
	const[btnColor072, setBtnColor072] = useState(localStorage.getItem("savedBtnColor072"));
	useEffect(() => { localStorage.setItem("savedBtnColor072", btnColor072);}, [btnColor072]);
	return(
		<div>
		<button
			className = {btnColor072} 
			onClick = {() => setBtnColor072((btnColor072) => (btnColor072 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn072
