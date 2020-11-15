import React, { Component } from 'react';
import { Button, Card, CardText, Container, Spinner } from 'reactstrap';
import axios from "axios";

class News extends Component {
    constructor() {
        super();
        this.state = {
            news: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios.get('https://dekontaminasi.com/api/id/covid19/news')
            .then(res => res.data)
            .then(res => {
                this.setState({
                    news: res,
                    loading: false
                })
                console.log(this.state.news)
            })
            .catch(err => {
                this.setState({ loading: false });
                console.log(err);
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <Container style={{ textAlign: 'center' }}>
                    <Spinner style={{ width: '3rem', height: '3rem', marginTop: '50px' }} type="grow" color="danger" />
                </Container>
            )
        }
        return (
            <Container>
                <div className="row">
                    {this.state.news.map(data => {
                        return (
                            <div className="col d-flex justify-content-center">
                                <Card style={{ width: '250px', padding: '10px', margin: '10px' }}>
                                    <CardText>{data.title}</CardText>
                                    <Button href={data.url} target="_blank">Detail</Button>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </Container>
        );
    }
}

export default News;
