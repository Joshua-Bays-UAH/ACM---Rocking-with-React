import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn352(){
	const[btnColor352, setBtnColor352] = useState(localStorage.getItem("savedBtnColor352"));
	useEffect(() => { localStorage.setItem("savedBtnColor352", btnColor352);}, [btnColor352]);
	return(
		<div>
		<button
			className = {btnColor352} 
			onClick = {() => setBtnColor352((btnColor352) => (btnColor352 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn352
