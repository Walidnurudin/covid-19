import React, { Component } from 'react';

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
                <h1>Newss!</h1>
            </div>
        );
    }
}

export default News;
