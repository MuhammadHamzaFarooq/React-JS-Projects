import React, { useState } from 'react';

export default function TextForm(Props) {
    const [text, setText] = useState('');
    const handleUPClick = () => {
        console.log("Btn click");

        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleLWClick = () => {
        console.log("Btn click");

        let newText = text.toLocaleLowerCase();
        setText(newText)

    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUPClickGetLength = () => {
        console.log(text.length)
        alert("Your Text Total length is " + text.length)
    }

    const handleClearText = () => {
        setText('')
    }

    const handleCopyText = () =>{
        let text = document.getElementById("myTextArea1");
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const numberOfWords = 0.04 * text.split(' ').length;

    return (
        <div>
            <div className="container">
                <h1>{Props.headingText}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myTextArea1" rows="10" value={text} onChange={handleOnChange} placeholder='Enter Text'></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert To UperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLWClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleUPClickGetLength}>Text To GetLength</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>

            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(' ').length} Words, {text.length} Characters</p>
                <p>{numberOfWords}    Minutes To Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </div>
    )
}
