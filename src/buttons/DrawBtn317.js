import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn317(){
	const[btnColor317, setBtnColor317] = useState(localStorage.getItem("savedBtnColor317"));
	useEffect(() => { localStorage.setItem("savedBtnColor317", btnColor317);}, [btnColor317]);
	return(
		<div>
		<button
			className = {btnColor317} 
			onClick = {() => setBtnColor317((btnColor317) => (btnColor317 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn317
