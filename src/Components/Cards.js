import React, { Component } from "react";
import CardApp from './Card'

class Cards extends Component {

    render() {
        const { data } = this.props;
        return (
            <section>
                {
                    data.map(card => (
                        <CardApp
                            firstName="Daniel"
                            lastName="Martinez"
                            city="Bogota"
                            job="developer"
                            entryDate="12/03/2010"
                        />
                    ))
                }
            </section>

        );
    }
}

export default Cards;
