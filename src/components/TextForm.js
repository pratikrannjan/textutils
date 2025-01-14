import React,{useState} from 'react'




export default function TextForm(props) {
    const handleLoClick=()=>{
        let loText= text.toLocaleLowerCase();
        setText(loText);
        props.showAlert("converted to lowercase!", "success")
    }

    const handleUpClick =()=> {
      
        // console.log("upper case was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "success")
    }
    const handleOnChange =(event)=> {
        // console.log("Onchange");
        setText(event.target.value);
     
    }
    const [text, setText] = useState('');
  return (
    <>
    <div  className="container" style={{color: props.mode==='dark'?'white':'#0f4a50'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#0f4a50'}} id="myBox" rows="8"></textarea>
</div> 
<button className = "btn btn-dark mx-2" onClick={handleUpClick}>convert to upper case</button>
<button className = "btn btn-dark mx-2" onClick={handleLoClick}>convert to upper case</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#0f4a50'}}>
        <h2>text summary </h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} minutes</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
 }
