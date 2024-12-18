

import React, { useState } from 'react'
import './RegisterComponent.scss' 
import { useFormik, Formik, Form,ErrorMessage,Field } from 'formik'
import * as yup from 'yup';
import axios from 'axios'
const validationSchema = yup.object().shape({
    FIRSTNAME : yup.string().required('First name is required'),
    LASTNAME : yup.string().required('Last name is required'),
    BIRTHDATE : yup.string().required('date of birth  is required'),
    CANDIDATE_FOR : yup.string().required('Running for  is required'),
    COVER_LINKS : yup.string().required('Cover link  is required'),
    USER_LINKS : yup.string().required('user link  is required'),
})

const RegisterComponent = (props) => {

    const [formState, setFormState] = useState({
        FIRSTNAME : '',
        LASTNAME : '',
        BIRTHDATE : '',
        CANDIDATE_FOR :'',
        CREATED_AT : '',
        STATUS : '',
        VOTE_COUNT : 0,
        COVER_LINKS : '',
        USER_LINKS : ''
    });

    const submitForm = (dataValues) => {
        console.log(dataValues);
        if(!window.confirm("Do you really want to submit?")){
            return;
        }
        const data = {
            FIRSTNAME : dataValues.FIRSTNAME,
            LASTNAME : dataValues.LASTNAME,
            BIRTHDATE : dataValues.BIRTHDATE,
            CANDIDATE_FOR : dataValues.CANDIDATE_FOR,  
            USER_LINKS : dataValues.USER_LINKS,
            COVER_LINKS : dataValues.COVER_LINKS,  
        }
        axios.post("https://localhost:44329/Candidate",data).then(result => {
            alert("Sucessfully Save");
            props.history.push('/');
        }).catch(e => {
            console.log(e);
        })
    }

    return (<React.Fragment>
        <div className='RegisterComponent'>
            <h1 className='title is-1'>Registration</h1>
            <Formik initialValues={formState}
                        onSubmit={submitForm}
                        validateOnChange = {true}
                        validateOnBlur = {false}
                        validationSchema={validationSchema}
                        enableReinitialize={true}>
                        {
                            ({errors, status, touched}) => (
                                <Form>
                                    <div className='input-group'>
                                        <div>                                             
                                            <label>First name</label> 
                                            <Field className={"input" + (errors.FIRSTNAME && touched.FIRSTNAME ? ' is-danger': '')} type="text" autoComplete="off" name="FIRSTNAME"/>
                                        </div>
                                        <div className="errorMessages">
                                            <ErrorMessage  name="FIRSTNAME" component="span" className="tag is-danger is-light"/>
                                        </div>
                                    </div>   
                                    <div className='input-group'>
                                        <div>                                             
                                            <label>Last name</label> 
                                            <Field className={"input" + (errors.LASTNAME && touched.LASTNAME ? ' is-danger': '')} type="text" autoComplete="off" name="LASTNAME"/>
                                        </div>
                                        <div className="errorMessages">
                                            <ErrorMessage  name="LASTNAME" component="span" className="tag is-danger is-light"/>
                                        </div>
                                    </div> 
                                    <div className='input-group'>
                                        <div>                                             
                                            <label>Date of Birth</label> 
                                            <Field className={"input" + (errors.BIRTHDATE && touched.BIRTHDATE ? ' is-danger': '')} type="date" autoComplete="off" name="BIRTHDATE"/>
                                        </div>
                                        <div className="errorMessages">
                                            <ErrorMessage  name="BIRTHDATE" component="span" className="tag is-danger is-light"/>
                                        </div>
                                    </div> 
                                    <div className='input-group'>
                                        <div>                                             
                                            <label>Running for</label> 
                                            <Field className={"input" + (errors.CANDIDATE_FOR && touched.CANDIDATE_FOR ? ' is-danger': '')} type="text" autoComplete="off" name="CANDIDATE_FOR"/>
                                        </div>
                                        <div className="errorMessages">
                                            <ErrorMessage  name="CANDIDATE_FOR" component="span" className="tag is-danger is-light"/>
                                        </div>
                                    </div> 
                                    <div className='input-group'>
                                        <div>                                             
                                            <label>Cover Links</label> 
                                            <Field className={"input" + (errors.COVER_LINKS && touched.COVER_LINKS ? ' is-danger': '')} type="text" autoComplete="off" name="COVER_LINKS"/>
                                        </div>
                                        <div className="errorMessages">
                                            <ErrorMessage  name="COVER_LINKS" component="span" className="tag is-danger is-light"/>
                                        </div>
                                    </div> 
                                    <div className='input-group'>
                                        <div>                                             
                                            <label>USER LINKS</label> 
                                            <Field className={"input" + (errors.USER_LINKS && touched.USER_LINKS ? ' is-danger': '')} type="text" autoComplete="off" name="USER_LINKS"/>
                                        </div>
                                        <div className="errorMessages">
                                            <ErrorMessage  name="USER_LINKS" component="span" className="tag is-danger is-light"/>
                                        </div>
                                    </div> 
                                    <div className='input-group'>
                                        <button className='button is-primary'>Submit</button>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
        </div>
    </React.Fragment>)
}

export default RegisterComponent;