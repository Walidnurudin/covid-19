import React, { Component } from 'react';
import { Button, Card, CardText, Container } from 'reactstrap';

class News extends Component {
    constructor() {
        super();
        this.state = {
            news: []
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Card style={{width: '250px', padding: '10px'}}>
                        <CardText>Joss! Banyak Pasien Covid-19 Sembuh, Kapasitas RSD Wisma Atlet Mulai Lega</CardText>
                        <Button href="https://google.com" target="_blank">Detail</Button>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default News;
