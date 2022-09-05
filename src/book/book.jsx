import React, {useState, useEffect} from 'react'
import './book.css'
function Book() {

  useEffect(()=>{
    const pages = 10; //ページ数
    let page = []; //ページ情報を入れる

    for(let i=0; i < pages+1; i++){
        page.push(document.getElementById(`page${i}`))
    }
    let t = document.getElementById('book-body');
	let startY;	
	let moveY;
	let dist = 30;
	
	t.addEventListener("touchstart", function(e) {
		e.preventDefault();
		startY = e.touches[0].pageY;
	});

    t.addEventListener("touchmove", function(e) {
        e.preventDefault();
        moveY = e.changedTouches[0].pageY;
    });

  t.addEventListener("touchend", function(e) {
		if (startY + dist <  moveY) {		// 上から下
            for(let j =1;j<pages+1;j++){
                if(page[j].className === "active"){
                    page[j].classList.remove("active");
                    page[j].style.top = "100vh";
                    page[j-1].classList.add("active");
                    page[j-1].style.top = "0";
                    break;
                }
           }
		}
		else if (startY + dist >  moveY) {	// したから上
                for(let j =1;j<pages+1;j++){
                    if(page[j].className === "active"){
                        page[j].classList.remove("active");
                        page[j].style.top = "-100vh";
                        page[j+1].classList.add("active");
                        page[j+1].style.top = "0";
                        break;
                    }
               }
		}
  });
  })

  

  return (
    <div id='book-body'>
      <main style={{potision:"relative", height:"100vh" , width:"100%" }}> 

        <div id="page1" style={{position:"absolute" , top:"0" , height:"100vh" , width:"100vw" , backgroundColor:"black", transition:"1s"}} className="active">
        </div>

        <div id="page2" style={{position:"absolute" , top:"100vh" , height:"100vh" , width:"100vw" , backgroundColor:"pink" , transition:"1s"}} >
        </div>

        <div id="page3" style={{position:"absolute" , top:"100vh" , height:"100vh" , width:"100vw" , backgroundColor:"blue" , transition:"1s"}}>
        </div>
        <div id="page4" style={{position:"absolute" , top:"100vh" , height:"100vh" , width:"100vw" , backgroundColor:"red" , transition:"1s"}}>
        </div>
      </main>
    </div>
  );
}

export default Book;