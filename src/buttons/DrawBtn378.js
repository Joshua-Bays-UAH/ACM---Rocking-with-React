import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn378(){
	const[btnColor378, setBtnColor378] = useState(localStorage.getItem("savedBtnColor378"));
	useEffect(() => { localStorage.setItem("savedBtnColor378", btnColor378);}, [btnColor378]);
	return(
		<div>
		<button
			className = {btnColor378} 
			onClick = {() => setBtnColor378((btnColor378) => (btnColor378 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn378
