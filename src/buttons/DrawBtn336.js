import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn336(){
	const[btnColor336, setBtnColor336] = useState(localStorage.getItem("savedBtnColor336"));
	useEffect(() => { localStorage.setItem("savedBtnColor336", btnColor336);}, [btnColor336]);
	return(
		<div>
		<button
			className = {btnColor336} 
			onClick = {() => setBtnColor336((btnColor336) => (btnColor336 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn336
