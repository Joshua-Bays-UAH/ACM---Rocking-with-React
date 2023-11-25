import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn363(){
	const[btnColor363, setBtnColor363] = useState(localStorage.getItem("savedBtnColor363"));
	useEffect(() => { localStorage.setItem("savedBtnColor363", btnColor363);}, [btnColor363]);
	return(
		<div>
		<button
			className = {btnColor363} 
			onClick = {() => setBtnColor363((btnColor363) => (btnColor363 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn363
