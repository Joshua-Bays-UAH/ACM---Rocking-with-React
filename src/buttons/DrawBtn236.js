import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn236(){
	const[btnColor236, setBtnColor236] = useState(localStorage.getItem("savedBtnColor236"));
	useEffect(() => { localStorage.setItem("savedBtnColor236", btnColor236);}, [btnColor236]);
	return(
		<div>
		<button
			className = {btnColor236} 
			onClick = {() => setBtnColor236((btnColor236) => (btnColor236 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn236
