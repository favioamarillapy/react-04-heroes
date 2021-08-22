import React, { useMemo } from 'react'
import { Col, Row } from "react-bootstrap";
import { heoresBySelector } from '../../selectors/heoresBySelector';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => heoresBySelector(publisher), [publisher]);


    return (
        <div>
            <Row style={{ marginBottom: 40 }}>

                {
                    heroes.map(hero => (
                        <Col key={hero.id} md={3} sm={6} xs={12} style={{ marginBottom: 20 }}>
                            <HeroCard {...hero} />
                        </Col>
                    ))
                }

            </Row>
        </div>
    )
}
