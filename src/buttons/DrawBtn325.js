import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn325(){
	const[btnColor325, setBtnColor325] = useState(localStorage.getItem("savedBtnColor325"));
	useEffect(() => { localStorage.setItem("savedBtnColor325", btnColor325);}, [btnColor325]);
	return(
		<div>
		<button
			className = {btnColor325} 
			onClick = {() => setBtnColor325((btnColor325) => (btnColor325 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn325
