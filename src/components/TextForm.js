import React, {useState} from 'react'
 
export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase(text);
        setText(newText);
        props.showAlert('Converted to uppercase', 'success');
    }
 
    const handleLowClick = ()=>{
        let newText = text.toLowerCase(text);
        setText(newText);
        props.showAlert('Converted to lowercase', 'success');
    }
 
    const handleClearClick = ()=>{
        setText("");
        props.showAlert('Your text has been cleared!!!', 'warning');
    }
 
    const speak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        props.showAlert('Speaking your text now...', 'success');
    }
    
    const handleInvCase = () =>{
        var newText = [];
        for(var i =0; i < text.length; i++){
            if(text[i] === text[i].toUpperCase()){
                newText[i] = text[i].toLowerCase();
            }else {
                newText[i] = text[i].toUpperCase();
            }
        }
        newText = newText.toString().replace(/,/g, '');
        setText(newText);
        props.showAlert('Cases Inverted!', 'success');
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    
    return (
    <>
        <div className='container' style={{color: props.textColor, backgroundColor: props.backColor}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea placeholder='Enter Text' className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleInvCase}>Inverse</button>
            <button className="btn btn-primary mx-1" onClick={speak}>Speaker</button>
        </div>
        <div className="container my-3" style={{color: props.textColor, backgroundColor: props.backColor}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length}: words and {text.length}: characters</p>
            <p>{0.008 * text.split(" ").length } Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it"}</p>
        </div>
    </>
  )
}
 
TextForm.defaultProps = {
    heading: 'Enter the text to analyze below'
}
