import React, { Component } from "react";


class Viaggi extends Component {



    viaggi: any = [
        { Partenza: 'Roma', Arrivo: 'Napoli', km: 250, Carrozze: 6 },
        { Partenza: 'Napoli', Arrivo: 'Milano', km: 750, Carrozze: 10 },
        { Partenza: 'Genova', Arrivo: 'Bari', km: 800, Carrozze: 15 },
        { Partenza: 'Rieti', Arrivo: 'Pescara', km: 180, Carrozze: 4 },
        { Partenza: 'Roma', Arrivo: 'Pordenone', km: 720, Carrozze: 11 }
    ]

    state: any = { listato: this.viaggi, filtro: "", part: "", arr: "", kmpercorsi: 0, carrozze: 0 }

    sceglifiltro(ogg: any) {
        this.setState({ filtro: ogg.target.value })
    }

    //setto la chiave part dello state
    cambiapartenza(ogg: any) {
        this.setState({ part: ogg.target.value })
    }


    //setto la chiave arr dello state
    cambiaarrivo(ogg: any) {
        this.setState({ arr: ogg.target.value })
    }

    //setto la chiave kmpercosi dello state
    cambiakm(ogg: any) {
        this.setState({ kmpercorsi: ogg.target.value })
    }

    //setto la chiave kmpercosi dello state
    cambiacarrozze(ogg: any) {
        this.setState({ carrozze: ogg.target.value })
    }

    addviaggio(ogg: any) {
        ogg.preventDefault();
        if (this.state.carrozze < 3) {
            alert("Attenzione, non conviene predisporre il viaggio");
        }
        else {

            //predispone un nuovo viaggio, solo se i controlli vanno a buon fine
            let nuovviaggio = {
                Partenza: this.state.part,
                Arrivo: this.state.arr,
                km: this.state.kmpercorsi,
                Carrozze: this.state.carrozze
            }

            //effettua il vero inserimento nell'archivio dello state
            let viaggicopia = this.state.listato;
            viaggicopia.push(nuovviaggio);
            this.setState({ listato: viaggicopia });
            //console.log(nuovviaggio);  
        }

    }


    render() {

        let datifiltrati: [] = [];
        //Roma  o posizione 1
        if (this.state.filtro !== "") {
            datifiltrati = this.state.listato.filter(
                (flight: any) => flight.Partenza.toLowerCase().indexOf(this.state.filtro.toLowerCase()) >= 0
            )
        }
        else {
            datifiltrati = this.state.listato;
        }



        //console.log(datifiltrati);

        return <div>
            <div>
                <label htmlFor="">Inserire filtro per la stazione di partenza</label>
                <input type="text" value={this.state.filtro} onChange={this.sceglifiltro.bind(this)} />
                <label htmlFor="">Filtro per:{this.state.filtro}</label>
            </div>
            <br /><br />
            <table>
                <thead>
                    <tr>
                        <th>Partenza</th>
                        <th>Arrivo</th>
                        <th>Km Percorsi</th>
                        <th>Carrozze</th>
                    </tr>
                </thead>
                <tbody>
                    {datifiltrati.map(
                        (viaggio: any, indice: number) => {
                            return (
                                <tr key={indice}>
                                    <td>{viaggio.Partenza}</td>
                                    <td>{viaggio.Arrivo}</td>
                                    <td>{viaggio.km}</td>
                                    <td>{viaggio.Carrozze}</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>

            </table>

            <br /><br />
            <div>
                <form action="" onSubmit={this.addviaggio.bind(this)}>
                    <label htmlFor="">Stazione di partenza</label>
                    <input type="text" onChange={this.cambiapartenza.bind(this)} />  <br />
                    <label htmlFor="">Stazione di arrivo</label>
                    <input type="text" onChange={this.cambiaarrivo.bind(this)} />  <br />
                    <label htmlFor="">Km percorsi</label>
                    <input type="number" onChange={this.cambiakm.bind(this)} />  <br />
                    <label htmlFor="">Numero carrozze</label>
                    <input type="number" onChange={this.cambiacarrozze.bind(this)} />  <br />
                    <button type="submit">Aggiungi viaggio</button>
                </form>
            </div>
        </div>
    }

}

export default Viaggi