import React, { useState } from 'react';
import "../components/form.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpSchema } from '../schema';

const Login = () => {

  const navigate = useNavigate(); 
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  

  const check=(values)=>{
    const userData = JSON.parse(localStorage.getItem("formValues"))
  
    const containsValues = userData.some((user) => {
      return (
        user.name === values.name &&
        user.email === values.email &&
        user.password === values.password
      );
    });

       if(containsValues){
        navigate('/home')
      }
      else{
        return(
          alert('Please enter valid credentials!')
        )
      }
  
  }
   
 

 


  return (
    <>
    <div className='container'>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          console.log("hello")
          check(values);
          
        }}
      >

{({  isValidate }) => (
        <Form>
          <div>
            <div >
              <div >
                <h1>User Logn-In</h1>
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
                <div>
                <button type='submit' className={isValidate ? '' : 'submit_btn'}>
                        Sign-In
                </button>
                <p>forget password</p>
                </div>
                
                <p>
                  <Link to="/register">Register User</Link>
                </p>
              </div>
            </div>
          </div>
        </Form>
     )}
      </Formik>
    </div>
    </>
  );

      }

export default Login