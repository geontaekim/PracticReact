import './App.css';
import { useState } from 'react';


function Modal(props){
  console.log("props??",props)
  const title1=[...props.sendName];
  return(
    <div className='modal'>
    <h4>{
      props.sendName[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>props.setChoice1(['옷추천',...props.sendName])}>글수정</button>
    </div>
  )
          
}

//컴포넌트만드는법
// 1.function 만들고
// 2.return()안에 html담기
// 3.<함수명></함수명> 쓰기


function App() {
  let[modalName,setModalName]=useState(false);
  let[date,setDate]=useState(['8월01일','9월1일','10월3일']);
  let[choice1,setChoice1]= useState(['진주 맛집추천','해남 맛집 추천','서울 맛집 추천']);
  let [count,setCount] =useState([0,0,0]);
  let[blog,c]= useState('React_blog');
  let [title,setTitle]=useState(0);
  
 
  function changLine(){
    let coco=[...choice1];
    let coco2=coco.sort();
    console.log(coco2);
    setChoice1(coco2); 
  }


  return (
    <div className="App">
      
     <div className="black-nav">
      
      <h4 style={ {color:'yellow'} }>{blog}</h4>
      
     </div>
     <button onClick={changLine}>가나다순 정렬</button>
    
      {
        choice1.map(function(cho,i){
            return(
            <div className="list" key={i} >
            <h4 onClick={()=>{setModalName(true)
                if(modalName==true){
                    setModalName(false)
                }
                  setTitle(i)
              }
            }>{cho}
            <span onClick={()=>{
                let copy =[...count];
                copy[i]=copy[i]+1;
               setCount(copy);
            }}>👍</span>{count[i]}
            </h4>
            <p>{date[i]}</p>
           </div>)
        })
      
      }
    {
      modalName == true ?  <Modal title={title} setChoice1={setChoice1} sendName={choice1}  /> : null    //스위치화
    }

    </div>
  );
}


export default App;
