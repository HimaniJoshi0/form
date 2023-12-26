import React from 'react'
import "./form.css"
import { Link } from 'react-router-dom'
import { useFormik} from 'formik'
import { signUpSchema } from '../schema';


const initialValues={
  name:"",
  email:"",
  password:""
};


const Form = (props) => {

   const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({    
    initialValues: initialValues,
    validationSchema:signUpSchema,

    onSubmit:(values)=>{                       /*callback function */
    localStorage.setItem('formValues', JSON.stringify(values));
      console.log("hello")
      console.log(values ) 
    },
   });

   console.log(values )

   

  return (
    <>
    <div className='wrapper'>
     <div className='container'>

        <div className='heading'>
            <h1>{props.title}</h1>
        </div>

        <div className='form_details'>

          <form  onSubmit={handleSubmit}>

            <div>
            <label htmlFor='name'>NAME</label>
            <div className='inputs'>
            <input 
            type="name"
             autoComplete='off'
              id='name'
             placeholder='NAME' 
             name='name' 
             value={values.name} 
             onChange={handleChange} 
             onBlur={handleBlur}
             />
             {errors.name && touched.name ?(
             <p className='errors'>{errors.name}</p>
             ): null}
             </div>
          
            </div>

            <div>
            <label htmlFor='email'>EMAIL</label>
            <div className='inputs'>
            <input 
            type="email" 
            autoComplete='off' 
            id='email' 
            placeholder='E-MAIL' 
            name='email' 
            value={values.email}
            onChange={handleChange} 
             onBlur={handleBlur}
             />
            {errors.email && touched.email ?(
             <p className='errors'>{errors.email}</p>
             ): null}
            </div>
           
            </div>

            <div>
            <label htmlFor='password'>PASSWORD</label>
            <div className='inputs'>
            <input 
            type="password" 
            autoComplete='off' 
            id='password' 
            placeholder='PASSWORD'
             name='password'
             value={values.password}
             onChange={handleChange} 
             onBlur={handleBlur}
             />  
            {errors.password && touched.password ?(
             <p className='errors'>{errors.password}</p>
             ): null}
            </div>
             

            </div>  
            
          </form>
        </div> 

       <div className='submit'>
        <button type='submit'>SUBMIT</button>
        <p> <Link to={props.link}>{props.change}</Link></p>
       </div>


     </div>
    </div>
    </>
  )
}

export default Form