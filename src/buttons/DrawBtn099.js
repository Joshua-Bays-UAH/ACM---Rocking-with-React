import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn099(){
	const[btnColor099, setBtnColor099] = useState(localStorage.getItem("savedBtnColor099"));
	useEffect(() => { localStorage.setItem("savedBtnColor099", btnColor099);}, [btnColor099]);
	return(
		<div>
		<button
			className = {btnColor099} 
			onClick = {() => setBtnColor099((btnColor099) => (btnColor099 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn099
