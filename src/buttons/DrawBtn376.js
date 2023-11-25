import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn376(){
	const[btnColor376, setBtnColor376] = useState(localStorage.getItem("savedBtnColor376"));
	useEffect(() => { localStorage.setItem("savedBtnColor376", btnColor376);}, [btnColor376]);
	return(
		<div>
		<button
			className = {btnColor376} 
			onClick = {() => setBtnColor376((btnColor376) => (btnColor376 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn376
