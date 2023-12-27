import React from 'react';
import "../components/form.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpSchema } from '../schema';

const Register = (props) => {

  const navigate = useNavigate(); 
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  


  return (
    <div className='container'>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          const existingFormValues = JSON.parse(localStorage.getItem('formValues')) || [];
          const existingFormValuesArray = Object.values(existingFormValues);

         const updatedFormValues = [...existingFormValuesArray, values];
  
          localStorage.setItem('formValues', JSON.stringify(updatedFormValues));
          console.log(values);
        }}
      >
        <Form>
          <div>
            <div >
              <div >
                <h1>Registeration form</h1>
              </div>

              <div className='form_details'>
                <div>
                  <label htmlFor='name'>NAME</label>
                  <div className='inputs'>
                    <Field
                      type='text'
                      id='name'
                      placeholder='NAME'
                      name='name'
                    />
                    <ErrorMessage name='name' component='p' className='errors' />
                  </div>
                </div>

                <div>
                  <label htmlFor='email'>EMAIL</label>
                  <div className='inputs'>
                    <Field
                      type='email'
                      id='email'
                      placeholder='E-MAIL'
                      name='email'
                    />
                    <ErrorMessage name='email' component='p' className='errors' />
                  </div>
                </div>

                <div>
                  <label htmlFor='password'>PASSWORD</label>
                  <div className='inputs'>
                    <Field
                      type='password'
                      id='password'
                      placeholder='PASSWORD'
                      name='password'
                    />
                    <ErrorMessage
                      name='password'
                      component='p'
                      className='errors'
                    />
                  </div>
                </div>
              </div>
              <div className='submit'>
                <button type='submit'>Sign-Up</button>
                <p>
                  <Link to="/">Log-In</Link>
                </p>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

  

export default Register