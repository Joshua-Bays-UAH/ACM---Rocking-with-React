import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn076(){
	const[btnColor076, setBtnColor076] = useState(localStorage.getItem("savedBtnColor076"));
	useEffect(() => { localStorage.setItem("savedBtnColor076", btnColor076);}, [btnColor076]);
	return(
		<div>
		<button
			className = {btnColor076} 
			onClick = {() => setBtnColor076((btnColor076) => (btnColor076 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn076
