import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn286(){
	const[btnColor286, setBtnColor286] = useState(localStorage.getItem("savedBtnColor286"));
	useEffect(() => { localStorage.setItem("savedBtnColor286", btnColor286);}, [btnColor286]);
	return(
		<div>
		<button
			className = {btnColor286} 
			onClick = {() => setBtnColor286((btnColor286) => (btnColor286 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn286
