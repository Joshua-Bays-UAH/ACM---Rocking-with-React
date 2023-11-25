import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn287(){
	const[btnColor287, setBtnColor287] = useState(localStorage.getItem("savedBtnColor287"));
	useEffect(() => { localStorage.setItem("savedBtnColor287", btnColor287);}, [btnColor287]);
	return(
		<div>
		<button
			className = {btnColor287} 
			onClick = {() => setBtnColor287((btnColor287) => (btnColor287 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn287
