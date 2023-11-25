import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn165(){
	const[btnColor165, setBtnColor165] = useState(localStorage.getItem("savedBtnColor165"));
	useEffect(() => { localStorage.setItem("savedBtnColor165", btnColor165);}, [btnColor165]);
	return(
		<div>
		<button
			className = {btnColor165} 
			onClick = {() => setBtnColor165((btnColor165) => (btnColor165 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn165
