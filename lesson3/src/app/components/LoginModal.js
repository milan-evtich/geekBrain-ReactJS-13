import React from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class LoginModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            show: false,
            email: "",
            password: ""
        };
    }

    handleLogin() {
        this.setState({ show: false });
    }

    handleClose() {
        this.setState({ show: false});
    }

    handleShow() {
        this.setState({ show: true });
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {

        return (
            <div>

                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    Login
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <form>
                                <FormGroup controlId="email" bsSize="small">
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl
                                        autoFocus
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup controlId="password" bsSize="small">
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        type="password"
                                    />
                                </FormGroup>
                            </form>
                        </div>

                        <hr />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleLogin}>Login</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default LoginModal;