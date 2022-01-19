import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Admin.css'

function AdminLogin() {
    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };


    return(
        <div className="d-flex align-items-center justify-content-center" style={{height: '80vh'}}>
            <div>
                <div>
                    <h2 className='text-center'>
                        For Admin
                    </h2>
                </div>
                <Form className="vw-50 mx-auto d-block" style={{width: '50vw'}}>
                    <fieldset className="border pl-4 pr-4 m-2 rounded">
                        <legend className="w-auto p-2">Login</legend>
                        <Form.Group controlId="form.Name">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" required />
                        </Form.Group>
                        <Form.Group controlId="form.Password" className="Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={passwordShown ? "text" : "password"} placeholder="Password" required />
                            <Button type="button" className="ShowHidePw btn-secondary" onClick={togglePassword}>{passwordShown ? "Hide" : "Show"}</Button>
                        </Form.Group>
                        <Button type="submit" className='mt-2 mb-2 mx-auto d-block btn-outline-primary'>
                            Submit
                        </Button>
                    </fieldset>
                    <div className='text-center'>
                        This page is for admin only!!! 
                        <br/>
                        Click <a href='/'>here</a> to go back to my page
                    </div>
                    
                </Form>
                
            </div>
        </div>
    );
}

export default AdminLogin;