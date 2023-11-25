import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn349(){
	const[btnColor349, setBtnColor349] = useState(localStorage.getItem("savedBtnColor349"));
	useEffect(() => { localStorage.setItem("savedBtnColor349", btnColor349);}, [btnColor349]);
	return(
		<div>
		<button
			className = {btnColor349} 
			onClick = {() => setBtnColor349((btnColor349) => (btnColor349 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn349
