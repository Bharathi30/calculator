import { useState } from 'react'
import './App.css'

export default function Calculator() {

    /*** Input values store the variable and function by using useState hook ***/
    const [inputValue, updateInput] = useState("")

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            
            {/*** calculator app Background card  ***/ }
            <div className="calculator card p-5" >

                 {/***  Heading of the page ***/}
            <h5 className="text-center mb-5">React Calculator App</h5>

                {/*** output TextBox  ***/}
                <input
                    type="text" 
                    id="output"
                    disabled
                    defaultValue={inputValue}
                    className="textbox" 
                />            

            {/*** Calculator numbers And operations  ***/}
            <div className="row text-center ButtonSpace">

                <div className="col-3 p-0"><div className='Button' onClick={() => { handleClickEvent("7") }}>7</div></div>
                <div className="col-3 p-0"><div className='Button' onClick={() => { handleClickEvent("8") }}>8</div></div>
                <div className="col-3 p-0"><div className='Button' onClick={() => { handleClickEvent("9") }}>9</div></div>
                <div className="col-3 p-0"><div className='ButtonOperations' onClick={() => { handleClickEvent("/") }}>/</div></div>

            </div>

            {/*** Calculator numbers And operations  ***/}
            <div className="row text-center ButtonSpace">

                <div className="col-3 p-0"><div className='Button' onClick={() => { handleClickEvent("4") }}>4</div></div>
                <div className="col-3 p-0"><div className='Button' onClick={() => { handleClickEvent("5") }}>5</div></div>
                <div className="col-3 p-0"><div className='Button' onClick={() => { handleClickEvent("6") }}>6</div></div>
                <div className="col-3 p-0"><div className='ButtonOperations' onClick={() => { handleClickEvent("*") }}>*</div></div>

            </div>

            {/*** Calculator numbers And operations  ***/}
            <div className="row text-center ButtonSpace">

                <div className="col-3 p-0"><div className='Button' onClick={() =>{ handleClickEvent("3")}}>3</div></div>
                <div className="col-3 p-0"><div className='Button'onClick={() => { handleClickEvent("2") }}>2</div></div>
                <div className="col-3 p-0"><div className='Button'onClick={() => { handleClickEvent("1") }}>1</div></div>
                <div className="col-3 p-0"><div className='ButtonOperations' onClick={() =>{ handleClickEvent("-") }}>-</div></div>

            </div>

           {/*** Calculator numbers And operations  ***/}
            <div className="row text-center ButtonSpace">

                <div className="col-3 p-0"><div className='Button' onClick={() => { handleClickEvent("0") }}>0</div></div>
                <div className="col-3 p-0"><div className='Button' onClick={() => { handleCalculateEvent("=") }}>=</div></div>
                <div className="col-3 p-0"><div className='Button' onClick={() => { handleClearEvent("C") }}>C</div></div>
                <div className="col-3 p-0"><div className='ButtonOperations' onClick={() => { handleClickEvent("+") }}>+</div></div>
            
            </div>
            
          </div>

        </div>    

    )

    /*** Button Click to Bind the value ***/

    function handleClickEvent(val) {

        updateInput(inputValue + val);

    }

    /*** Clear the Input Value ***/

    function handleClearEvent(val) {

        updateInput("");

    }

    /*** Calculate the Operation  ***/

    function handleCalculateEvent(val) {

        const input = eval(inputValue);

        updateInput(input);

    }

}
