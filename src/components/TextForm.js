import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was click"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was click"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was click"+text);
        let newText = " ";
        setText(newText);
        props.showAlert("clear text successfully", "success");
    }
    const handleReverseClick = () => {
        // console.log("Uppercase was click"+text);
        let newText = " ";
        for (let i = text.length - 1; i >= 0; i--) {
            newText += text[i];
            props.showAlert("text reverse successfully", "success");
        }
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copy text successfully", "success");
    }
    const [text, setText] = useState('');
    // setText("new text"); 
    return (
        <>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3-">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to upper case</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lower case</button>
                <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-3" onClick={handleReverseClick}>Reverse Your Text</button>
                <h2>your text summary</h2>
                <p>{text.split(" ").length} words,{text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h6>Preview</h6>
                <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
            </div>
            {/* <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>your text summary</h2>
                <p>{text.split(" ").length} words,{text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h6>Preview</h6>
                <p>{text.length>0?text:"Enter something to preview here"}</p>
            </div> */}
        </>
    )
}
