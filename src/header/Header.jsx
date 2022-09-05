import React from 'react';
import './header.css';

export default function Header() {

  function onClick(e){
    const btn = document.getElementById('btn');
    btn.classList.toggle("active");
  }

  return (
    <header>
        <div className="openbtn4" id='btn' onClick={onClick}>
            <span></span><span></span><span></span>
        </div>
        <a href='/book' style={{textAlign: "center"}}>絵本へ</a>
    </header>
  )
}
