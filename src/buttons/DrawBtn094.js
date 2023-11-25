import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn094(){
	const[btnColor094, setBtnColor094] = useState(localStorage.getItem("savedBtnColor094"));
	useEffect(() => { localStorage.setItem("savedBtnColor094", btnColor094);}, [btnColor094]);
	return(
		<div>
		<button
			className = {btnColor094} 
			onClick = {() => setBtnColor094((btnColor094) => (btnColor094 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn094
