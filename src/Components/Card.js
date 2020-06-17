import React, { Component } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

const CardApp = ({ firstName, lastName, city, job, entryDate }) => (
    <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
            <Card.Header>{firstName}</Card.Header>
            <Card.Description>
                {lastName}
                {city}
                {job}
                {entryDate}
            </Card.Description>
        </Card.Content>

    </Card>
)

export default CardApp
