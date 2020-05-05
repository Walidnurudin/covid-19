import React, { Component } from 'react';
import './style.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            prov: []
        }
    }

    componentDidMount() {

        fetch("https://api.kawalcorona.com/indonesia/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data
                },
                    console.log(data))
            })
            .catch(err => console.log("Error = " + err))

        fetch("https://api.kawalcorona.com/indonesia/provinsi/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    prov: data
                },
                    console.log(data))
            })
            .catch(err => console.log("Error = " + err))

    }


    render() {
        return (
            <div className="cont-home">
                <h1>Indonesia</h1>

                {
                    this.state.data.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>Positif : {item.positif}</p>
                                <p>Sembuh : {item.sembuh}</p>
                                <p>Meninggal : {item.meninggal}</p>
                            </div>
                        )
                    })
                }



                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Provinsi</th>
                            <th>Positif</th>
                            <th>Sembuh</th>
                            <th>Meninggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.prov.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.attributes.Provinsi}</td>
                                        <td>{item.attributes.Kasus_Posi}</td>
                                        <td>{item.attributes.Kasus_Semb}</td>
                                        <td>{item.attributes.Kasus_Meni}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;
