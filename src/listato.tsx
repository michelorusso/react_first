import React, { Component } from "react";

class Listato extends Component {

    state: any = {
        frutta: ['Mela', 'Arancio', 'Susina', 'Cocomero', 'Mango'],

        singleFruit: ''
    }

    cambiafrutto(ogg: any) {

        this.setState({ singleFruit: ogg.target.value })
    }

    
    alldate(element: any) {
        
        element.preventDefault();  //ferma la autopropagazione degli eventi

        let nuovalista = this.state.frutta;
        nuovalista.push(element.target[0].value);
        this.setState({ frutta: nuovalista });

    }




    render() {
        return <div>
            <label htmlFor="">Lista dei frutti disponibili</label>
            <select name="" id="">
                {
                    this.state.frutta.map(
                        (frutto: string, index: number) => {
                            return <option value={frutto} key={index}>{frutto}</option>
                        }
                    )
                }
            </select>

            <br /><br />

            <form action="" onSubmit={this.alldate.bind(this)}>
                    <input type="text" value={this.state.singleFruit} onChange={this.cambiafrutto.bind(this)} />

                    <br /><br />
                    <button type="submit">Clicca per inserire il frutto</button>
            </form>
        </div>
    }
}

export default Listato