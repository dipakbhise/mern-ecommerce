import React, { Component } from 'react'
import Header from '../Bootstrap Components/Header'
import Footer from '../Components/Footer'
import './Assignment.css'

export class Assignment extends Component {
    constructor() {
        super();
        this.state = {
            data: 0,

        }
    }

    

    Add() {

        let num1 = Number(document.getElementById("input").value);
        this.setState({ data: num1 + this.state.data })

    

        if (num1 == "") {
            alert("Enter Input")

        }

        if(isNaN(num1)){
            alert("Please Enter Only Numbers");
            this.setState({ data: 0})

            
        }
    }

     

    Substract() {

        let num1 = Number(document.getElementById("input").value);
        this.setState({ data: num1 - this.state.data })

        if (num1 == "") {
            alert("Enter Input")

        }

        if(isNaN(num1)){
            alert("Please Enter Only Numbers");
            this.setState({ data: 0})
            
        }
    }


    




    render() {
        return (
            <>

             

                

                <div className="ass">

                <div className="border1">

                <p className="header">Header</p>


                <div>

                        <label htmlFor="num1">Enter Number To Add or Substract From Result</label>
                        <input type="text" id="input" autoComplete="off"></input>

                    </div>

                    <div>


                        <button className="btn1" onClick={() => this.Add()} variant="primary">Add</button>

                    </div>

                    <div>

                        <button className="btn1" onClick={() => this.Substract()}>Substract</button>

                    </div>

                    <div className="result">Result = {this.state.data}  </div>

                    

                </div>

                </div>








                <Footer />







            </>

        );
    }
}



