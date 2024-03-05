import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {

    const [inputText,
        setInputText] = useState('');

    const [outputText,
        setOutputText] = useState('');

    const [selectedFunction,
        setSelectedFunction] = useState('encrypt');

    const handleDropdownChange = (event) => {
        setSelectedFunction(event.target.value);
    };
    axios.defaults.withCredentials = true;
    const handleSubmit = async() => {
        try {
            const response = await axios.get(`https://cooperative-top-hat-deer.cyclic.app/${selectedFunction}`, {
                params: {
                    text: inputText,
                    key: 'SFEVNT01339ca4c04bb6011ee08be300a0903e90' // Replace 'yourEncryptionKey' with your actual encryption key
                }
            });
            console.log(response.data);
            setOutputText(response.data.resultText);
        } catch (error) {
            console.log(error.message);
        }
    };
    const handleInputChange = (event) => {    
        setInputText(event.target.value.trim());
    };

    return (
        <div className="App">
            <div className='dropdown'>
                <select
                    className='button'
                    value={selectedFunction}
                    onChange={handleDropdownChange}>
                    <option value="encrypt">Encrypt</option>
                    <option value="decrypt">Decrypt</option>
                </select>
            </div>
            <div className='flex-parent'>
                <textarea className='box' onChange={handleInputChange}></textarea>
                <textarea className='box' value={outputText} readOnly></textarea>
            </div>
            <button className='button' onClick={handleSubmit}>RUN</button>
        </div>
    );
}

export default App;
