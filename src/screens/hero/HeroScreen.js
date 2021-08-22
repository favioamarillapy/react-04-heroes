import React, { useMemo } from 'react'
import { Redirect, useParams } from "react-router-dom";
import { Col, Row, Image, Button } from "react-bootstrap";
import { heroById } from '../../selectors/heroById';

export const HeroScreen = ({ history }) => {

    let { id } = useParams();
    const hero = useMemo(() => heroById(id), [id]);

    if (!hero) { return <Redirect to="/" /> }

    const {
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;


    const handleReturn = () => {
        if (history.lenght <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    return (
        <div>
            <h1>{hero.superhero}</h1>
            <hr />
            <Row>
                <Col key={hero.id} md={3} style={{ marginBottom: 20 }}>
                    <Image src={`../assets/heroes/${id}.jpg`} rounded height={500} />
                </Col>
                <Col key={hero.id} md={9} style={{ marginBottom: 20, paddingLeft: 30 }}>
                    <p><strong>Publisher: </strong>{publisher}</p>
                    <p><strong>Alter ego: </strong>{alter_ego}</p>
                    <p><strong>First appearance: </strong>{first_appearance}</p>
                    <p><strong>Characters: </strong>{characters}</p>
                    <br />
                    <Button variant="info" onClick={handleReturn}>
                        Return
                    </Button>
                </Col>

            </Row>

        </div>
    )
}
