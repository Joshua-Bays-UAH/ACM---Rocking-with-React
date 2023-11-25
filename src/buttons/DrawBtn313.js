import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn313(){
	const[btnColor313, setBtnColor313] = useState(localStorage.getItem("savedBtnColor313"));
	useEffect(() => { localStorage.setItem("savedBtnColor313", btnColor313);}, [btnColor313]);
	return(
		<div>
		<button
			className = {btnColor313} 
			onClick = {() => setBtnColor313((btnColor313) => (btnColor313 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn313
