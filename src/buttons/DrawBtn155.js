import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn155(){
	const[btnColor155, setBtnColor155] = useState(localStorage.getItem("savedBtnColor155"));
	useEffect(() => { localStorage.setItem("savedBtnColor155", btnColor155);}, [btnColor155]);
	return(
		<div>
		<button
			className = {btnColor155} 
			onClick = {() => setBtnColor155((btnColor155) => (btnColor155 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn155
