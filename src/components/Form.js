import React,{useState} from 'react';
import './Form.css';

function Form(props) {
    const[text,setText]=useState("");
    const handleChange=(event)=>{
        setText(event.target.value);

    }
    const handleUpClick=()=>{
        
       setText(text.toUpperCase());
       props.showAlert("converted into uppercase","success")

    }
    const handlelowclick=()=>{
       
        setText(text.toLowerCase())
        props.showAlert("converted into lowercase","success")
    }
    const handleRefClick=()=>{
        setText('');
        props.showAlert("text refreshed!","success")
    }
    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();

    
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied!","success")
    }
  
        
    
    const handleCapLetter=()=>{
       
       
   

        setText(text.trim().split(' ').map((newText)=> newText[0].toUpperCase() + newText.substring(1)).join(' '));

        props.showAlert("first letter capitalized!","success")
    }
    return (
      <div style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading }</h1>  
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
</div>
<div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handlelowclick}>Lowercase</button>
<button className='btn btn-primary mx-2'  onClick={handleRefClick}>Refresh</button>
<button className='btn btn-primary mx-2'  onClick={handleCopy}>Copy text </button>
<button className='btn btn-primary mx-2'  onClick={handleCapLetter}>first letter cap </button>
</div>
<div className='container my-4'>
    
    <h2>Your text summery</h2>
    <p>{text.split(' ').filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
     <p>{0.008 * text.split(' ').filter((element)=>{ return element.length!==0}).length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter your text to preview here"}</p>
</div>
     </div>  
    );
}

export default Form;