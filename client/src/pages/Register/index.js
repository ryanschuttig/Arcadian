import React from 'react';
import { Header } from 'semantic-ui-react';
import RegisterForm from "../../components/RegisterForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";
import "../Register/style.css"

const Register = () => {

    const dispatch = useDispatch();

    const renderFormMessage = () => {
        return <>Already Registered ? <Link to="/login">Login</Link></>
    }

    const onFormSubmit = (formVal) => {
        dispatch(registerUser(formVal));
    }

    return (

        <div className="registerbackground">
            <div className="form-container">
                <Header as='h2' secondary="true" textAlign='center' className="registertext">
                    Register
                </Header>
                <RegisterForm
                    renderMessage={renderFormMessage}
                    buttonText="Register"
                    onSubmit={onFormSubmit}
                />
            </div>
        </div>
    )
}

export default Register;