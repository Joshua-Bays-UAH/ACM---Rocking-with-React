import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn073(){
	const[btnColor073, setBtnColor073] = useState(localStorage.getItem("savedBtnColor073"));
	useEffect(() => { localStorage.setItem("savedBtnColor073", btnColor073);}, [btnColor073]);
	return(
		<div>
		<button
			className = {btnColor073} 
			onClick = {() => setBtnColor073((btnColor073) => (btnColor073 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn073
