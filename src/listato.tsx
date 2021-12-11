import React, { Component } from "react";

class Listato extends Component {

    state: any = {
        frutta: ['Mela', 'Arancio', 'Susina', 'Cocomero', 'Mango'],
        fruttonew: ""
    }

    cambia(ogg: any) {
        this.setState({ fruttonew: ogg.target.value })
    }

    aggiungifrutto(ogg: any) {
        ogg.preventDefault();
        let nuovalista = this.state.frutta;
        nuovalista.push(this.state.fruttonew);
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
            <label htmlFor="">Inserisci un frutto</label>
            <input type="text" value={this.state.fruttonew} onChange={this.cambia.bind(this)} />
            <button onClick={this.aggiungifrutto.bind(this)}>Inserisci frutto: {this.state.fruttonew}</button>

        </div>
    }
}

export default Listato