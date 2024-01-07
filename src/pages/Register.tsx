import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { httpFetch } from '../utils/http';
import { useNavigate } from 'react-router-dom';
import { EventTargetForm } from '../types';

const Register = () => {

    const navigate = useNavigate();

    async function submitRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const target = e.target as unknown as EventTargetForm;

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            await httpFetch('auth/register', false, {}, {
                method: 'POST',
                body: JSON.stringify({
                    email: target.elements.email.value,
                    password: target.elements.password.value
                })
            })

            navigate('/login')

        } catch (error) {
            throw error as Error;
        }

    }   

    return (
        <Container fluid>
                <Row className='d-flex justify-content-center align-items-center h-100'>
                    <Col col='12'>
                        <Card className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <Card.Body className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Sign up</h2>
                                <p className="text-white-50 mb-3">Please register your username and password!</p>

                                <Form onSubmit={submitRegister}>
                                    <Form.Group className='mb-4' controlId='email'>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type='email' placeholder='Enter email' size='lg' />
                                    </Form.Group>

                                    <Form.Group className='mb-4' controlId='password'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type='password' placeholder='Password' size='lg' />
                                    </Form.Group>

                             
                                    <Button type='submit' variant='primary' size='lg' style={{ width: '100%' }} className='mt-3'>
                                        Register as Admin
                                    </Button>
                                    
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    )
}

export default Register
