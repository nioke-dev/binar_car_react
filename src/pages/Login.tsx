import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import stylesheet
// import { Link } from 'react-router-dom';
import '../styles/loginPage.css';
import { httpFetch } from '../utils/http';
import { EventTargetForm } from '../types';
import { useNavigate, Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthToken } from '../types';


function Login() {

    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ _token, setToken] = useLocalStorage('auth', {})

    async function submitLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        

        try {
            const target = e.target as unknown as EventTargetForm;
            
            // console.log(target.elements);

            const json = await httpFetch<{ token: string }>('auth/login',false, {}, {
                method: 'POST',
                body: JSON.stringify({
                    email: target.elements.email.value,
                    password: target.elements.password.value
                })
            })
            
            setToken(json);
            navigate("/dashboard");


        } catch(error) {
            throw error as Error;
        }
    }


    const loginWithGoogle = useGoogleLogin({
        onSuccess: async ({ code }) => {
            console.log(code);
            const tokens : GoogleOAuthToken = await httpFetch('auth/google', false, {}, { 
                method: 'post',
                body: JSON.stringify({ code })
            })

            try {
                const userInfoResponse = await fetch('https://openidconnect.googleapis.com/v1/userinfo',{
                    method: 'get',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `${tokens.token_type} ${tokens.access_token}`
                    }
                })

                const userInfoJSON = await userInfoResponse.json();
                console.log(userInfoJSON);

                localStorage.setItem('googleUserData', JSON.stringify(userInfoJSON));

                navigate("/user-dashboard");
            } catch(error) {
                console.error("Error fetching user cuy: ", error);
            }
        },
        flow: 'auth-code'
    }) 


    return (
        <Container fluid>
            <Row className='d-flex justify-content-center align-items-center h-100'>
                <Col col='12'>
                    <Card className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <Card.Body className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                            <p className="text-white-50 mb-3">Please enter your login and password!</p>

                            <Form onSubmit={submitLogin}>
                                <Form.Group className='mb-4' controlId='email'>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type='email' placeholder='Enter email' size='lg' />
                                </Form.Group>

                                <Form.Group className='mb-4' controlId='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' placeholder='Password' size='lg' />
                                </Form.Group>

                                <Link to= "/register" style={{ textDecoration: 'none' }}>
                                    Register as an Admin
                                </Link>

                                
                                <Button type='submit' variant='primary' size='lg' style={{ width: '100%' }} className='mt-3'>
                                    Login as Admin
                                </Button>
                                                                
                            </Form>
                            <hr className="my-4" />


                            <Button 
                                onClick={loginWithGoogle}
                                className="mb-2 custom-google-btn" 
                                size="lg" 
                                style={{ backgroundColor: '#dd4b39' }}
                            >
                                Login as User with google
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
