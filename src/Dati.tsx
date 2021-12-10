import React, { Component } from "react";

class Maschera extends Component {

    state: any = {  //oggetto di state
        nome: "Mario",
        cognome: "Rossi"
    };

    cambianome(oggettochiamante: any) {  //metodo che cambia il valore a una chiave dello stato
        this.setState(
            { nome: oggettochiamante.target.value }  //assegnazione ad una chiave dello stato
        )
    }

    cambiacognome(oggetto: any) {
        this.setState(
            { cognome: oggetto.target.value }
        )
    }

    alldate(oggettoform: any) {
        oggettoform.preventDefault();  //ferma la autopropagazione degli eventi
        alert(`Il nome inserito è:${this.state.nome} e il cognome inserito è:${this.state.cognome}`)
    }

    render() {
        return (
            <div>
                <h1>Ciao sono un componente di classe e lo stato di nome è:{this.state.nome}</h1>
                <form action="" onSubmit={this.alldate.bind(this)}>
                    <input type="text" value={this.state.nome} onChange={this.cambianome.bind(this)} />
                    <input type="text" value={this.state.cognome} onChange={this.cambiacognome.bind(this)} />
                    <label htmlFor="">IL nome digitato è:{this.state.nome}</label>
                    <br /><br />
                    <button type="submit">Clicca per vedere i dettagli inseriti</button>
                </form>
            </div>
        )

    }

}

export default Maschera;