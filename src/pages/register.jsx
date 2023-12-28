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
    confirm_password:'',
    gender:'',
    check_box: false
  };
  


  return (
    <div className='container'>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          signUpSchema.validate(values)
          .then(()=>{
            const existingFormValues = JSON.parse(localStorage.getItem('formValues')) || [];
            const existingFormValuesArray = Object.values(existingFormValues);
  
           const updatedFormValues = [...existingFormValuesArray, values];
    
            localStorage.setItem('formValues', JSON.stringify(updatedFormValues));
            console.log(values);
          })
          .catch(errors => { 
            console.error(errors);
          });
         
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
                  <label htmlFor='gender'>GENDER:</label>
                  <div className='inputs'>
                  <label>
                    <Field
                      type='radio'
                      name='gender'
                      value='male'
                      as="input"
                    />
                     MALE
                    </label>
                   
                    <label>
                    <Field
                      type='radio'
                      name='gender'
                      value='female'
                      as="input"
                    />
                    FEMALE
                    </label>
                    <ErrorMessage name='gender' component='p' className='errors' />
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

                <div>
                  <label htmlFor='confirm_password'>CONFIRM PASSWORD</label>
                  <div className='inputs'>
                    <Field
                      type='password'
                      id='confirm_password'
                      placeholder='PASSWORD'
                      name='confirm_password'
                    />
                    <ErrorMessage
                      name='confirm_password'
                      component='p'
                      className='errors'
                    />
                  </div>
                </div>

                <div>
                <Field
                      type='checkbox'
                      id='check_box'
                      name='check_box'
                      
                    />    
                  <label htmlFor='check_box'>Agree terms and conditions</label>
                  <ErrorMessage
                      name='check_box'
                      component='p'
                      className='errors'
                    />   
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