import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn129(){
	const[btnColor129, setBtnColor129] = useState(localStorage.getItem("savedBtnColor129"));
	useEffect(() => { localStorage.setItem("savedBtnColor129", btnColor129);}, [btnColor129]);
	return(
		<div>
		<button
			className = {btnColor129} 
			onClick = {() => setBtnColor129((btnColor129) => (btnColor129 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn129
