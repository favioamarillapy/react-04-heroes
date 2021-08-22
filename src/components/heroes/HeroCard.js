import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';


export const HeroCard = ({ id, superhero, characters }) => {
    return (
        <Card className="animate__animated animate__fadeIn" style={{ width: '18rem', height: '100%' }}>
            <Card.Img variant="top"
                style={{ height: 250 }}
                src={`assets/heroes/${id}.jpg`} />
            <Card.Body>
                <Card.Title>{superhero}</Card.Title>
                <Card.Text style={{ height: 100 }}>
                    {characters}
                </Card.Text>

                <Link
                    style={{ textDecoration: 'none', float: 'right' }}
                    to={`./hero/${id}`} >
                    View More...
                </Link>
            </Card.Body>
        </Card>
    )
}
