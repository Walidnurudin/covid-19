import React, { Component } from 'react';
import { Card, CardText, CardTitle, Container } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <Card style={{ width: '250px', padding: '10px', margin: '10px' }}>
                            <CardTitle>Developer</CardTitle>
                            <CardText tag="h3">App made by <a href="https://walidnurudin.netlify.app" target="_blank">Walid nurudin</a></CardText>
                        </Card>
                    </div>

                    <div className="col d-flex justify-content-center">
                        <Card style={{ width: '250px', padding: '10px', margin: '10px' }}>
                            <CardTitle>API</CardTitle>
                            <CardText tag="h3">API from <a href="https://dekontaminasi.com"  target="_blank">Dekontaminasi API covid</a></CardText>
                        </Card>
                    </div>

                    <div className="col d-flex justify-content-center">
                        <Card style={{ width: '250px', padding: '10px', margin: '10px' }}>
                            <CardTitle>Icons</CardTitle>
                            <CardText tag="h3">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank"> www.flaticon.com</a></CardText>
                        </Card>
                    </div>
                </div>
            </Container>

        );
    }
}

export default About;
