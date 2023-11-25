import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn273(){
	const[btnColor273, setBtnColor273] = useState(localStorage.getItem("savedBtnColor273"));
	useEffect(() => { localStorage.setItem("savedBtnColor273", btnColor273);}, [btnColor273]);
	return(
		<div>
		<button
			className = {btnColor273} 
			onClick = {() => setBtnColor273((btnColor273) => (btnColor273 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn273
