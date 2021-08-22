import React, { useMemo } from 'react'
import queryString from 'query-string'
import { Alert, Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { HeroCard } from '../../components/heroes/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation } from 'react-router-dom'
import { heoresByName } from '../../selectors/heoresByName'

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [inputs, inputChange] = useForm({ searchText: q })
    const { searchText } = inputs;

    const heroesFiltered = useMemo(() => heoresByName(q), [q]);

    const handleSearch = () => {
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search Heroes</h1>
            <hr />
            <Row>
                <Col md={12}>
                    <Form>

                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search..."
                                aria-label="Search..."
                                name="searchText"
                                value={searchText}
                                onChange={inputChange}
                            />
                            <Button variant="outline-info" onClick={handleSearch}>
                                Search
                            </Button>

                        </InputGroup>


                    </Form>
                </Col>

                {
                    heroesFiltered.length === 0 && <Col md={12}>
                        <Row>
                            <Col md={12} style={{ marginBottom: 20 }}>
                                <Alert variant="warning">
                                    There is not a hero with <strong>{q}</strong>
                                </Alert>
                            </Col>
                        </Row>
                    </Col>
                }

                {
                    heroesFiltered.length > 0 && <Col md={12}>
                        <Row>
                            {
                                heroesFiltered.map(hero => (
                                    <Col key={hero.id} md={3} sm={6} xs={12} style={{ marginBottom: 20 }}>
                                        <HeroCard {...hero} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                }
            </Row>
        </div>
    )
}
