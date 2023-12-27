import './css/MyText.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types'
let MyText = (props) => {
    const [speakUttr,setSpeakUttr] = useState('Speak');
    //**changing text to upper case**
    const handleUpperCase = () => {
        const newText = text.toUpperCase();
        setText(newText);
        if(text.length!==0)
            props.sendAlert("Text Converted To Uppercase","success");//sending alert from here to app.js
    }
    //**changing text to lower case**
    const handleLowerCase = () => {
        const newText = text.toLowerCase();
        setText(newText);
        if(text.length!==0)
            props.sendAlert("Text Converted To Lowercase","success");
    }
    //**to clear text**
    const handleClear = () => {
        setText("");
        if(text.length!==0)
            props.sendAlert("Text Cleared","success");
    }
    //**to speak the text**
    const handleSpeak = () => {
        const speak = document.getElementById('speak');
        let msg = new SpeechSynthesisUtterance(text);
        msg.addEventListener('end',()=>{
            setSpeakUttr('Speak');
        })
        if (speak.innerHTML === "Speak") {
            setSpeakUttr('Stop');
            window.speechSynthesis.speak(msg);
            if(text.length!==0)
                props.sendAlert("Speaking Started","success");
        } else {
            setSpeakUttr('Speak');
            window.speechSynthesis.cancel();
        }
    }
    //**for capitalize**
    const handleCaps = () => {
        let newText = "";
        let splitText = text.split(" ");
        splitText.forEach(ele => {
            if (ele.indexOf('\n') !== -1) {
                let splitAtNewLine = ele.split('\n');
                splitAtNewLine.forEach(element => {
                    if (element !== "") {
                        let temp = element[0].toUpperCase() + element.slice(1).toLowerCase();
                        newText += "\n" + temp + " ";
                    }
                })
            }
            else if (ele !== "") {
                let temp = ele[0].toUpperCase() + ele.slice(1).toLowerCase();
                newText += temp + " ";
            }
        })
        setText(newText);
        if(text.length!==0)
            props.sendAlert("Text Converted To Capatilize Text","success");
    }
    //**to copy to clipboard**
    const handleCopy = () => {
        try{
            navigator.clipboard.writeText(text);
        }catch(err){
            const myBox = document.querySelector('#myBox');
            myBox.select();
            document.execCommand('copy');
            window.getSelection()?.removeAllRanges();
        }
        if (text.length !== 0)
            props.sendAlert("Copy To Clipboard!!!", "success");
    }
    //**to remove extra space**
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if(text.length!==0)
            props.sendAlert("Extra Spaces Removed!!!","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");//creating a useState variable text and setText function to changing it
    return (
        <>
            <div className="container my-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control myText" id="myBox" rows="10" onChange={handleOnChange} value={text} ></textarea>
                <button disabled={text.trim().length===0} className="btn btn-primary my-3 mx-1" onClick={handleUpperCase}>Uppercase</button>
                <button disabled={text.trim().length===0} className="btn btn-primary my-3 mx-1" onClick={handleLowerCase}>LowerCase</button>
                <button disabled={text.trim().length===0} className="btn btn-primary my-3 mx-1" onClick={handleCaps}>Capatilize</button>
                <button disabled={text.trim().length===0 && speakUttr!=='Stop'} className="btn btn-primary my-3 mx-1" id="speak" onClick={handleSpeak}>{speakUttr}</button>
                <button disabled={text.trim().length===0} className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.trim().length===0} className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.trim().length===0} className="btn btn-primary my-3 mx-1" onClick={handleClear}>Clear All</button>
            </div>
            <div className="container">
                <h1>Text Summary</h1>
                <h4>No. Of Lines : {text.length === 0 ? 0 : text.split('\n').length}, No. Of Words : {text.length === 0 ? 0 : (text.trim() === "") ? 0 : text.trim().split(/\s+/).length}, No. Of Letters : {text.length}</h4>
                <h4>{text.length === 0 ? 0 : text.trim().split(' ').length * 0.008} Minutes To Read</h4>
                <details>
                    <summary className='myText fs-2'>
                        Preview Text
                    </summary>
                    <p className='my-3 fs-3'>{text}</p>
                </details>
            </div>
        </>
    );
}
MyText.propTypes = {
    heading: PropTypes.string.isRequired
}
export default MyText;