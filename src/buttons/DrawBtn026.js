import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn026(){
	const[btnColor026, setBtnColor026] = useState(localStorage.getItem("savedBtnColor026"));
	useEffect(() => { localStorage.setItem("savedBtnColor026", btnColor026);}, [btnColor026]);
	return(
		<div>
		<button
			className = {btnColor026} 
			onClick = {() => setBtnColor026((btnColor026) => (btnColor026 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn026
