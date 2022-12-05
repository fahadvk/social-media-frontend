
// import { Paper } from '@mui/material';
// import Paper from '@material-ui/core/Paper';
import { registerapi } from '../../apiRequests/authapis';

import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Heading } from '@chakra-ui/react';


const Signup = ({ onFormSwitch }) => {

    const Navigate = useNavigate()
    const paperstyle = { height: '95vh', width: 420, margin: '100px auto' }

    const validationSchema = Yup.object({
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        mobile: Yup.number()
            .min(10, 'Must be  minimum 10 characters ')
            .required('Required'),


        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
            .min(6, 'Must be  minimum 6 characters ')
            .required('Required'),
        confirmPassword: Yup.string()
            .min(6, 'Must be  minimum 6 characters ')
            .required('Required')
            .oneOf([Yup.ref('password')], 'Passwords must be same')
    })
    const formik = useFormik({
        initialValues: { name: '', email: '', mobile: '', password: '', confirmPassword: '' }
        ,
        validationSchema: validationSchema,
        onSubmit: async values => {
            const body = formik.values

            body.mobile = parseInt(body.mobile)
            const response = await registerapi(body)
            if (response.data.exist) {
                alert("user already registerd")
                return Navigate('/login')
            }
            if (response.data.name) {
                Navigate('/')
            }

        },


    });


    // }
    return (
        <div className='auth-form-container signup'>
            <Paper elevation={5} style={paperstyle}  >
                <h2 className=" head text-3xl font-bold font-mono"> Register</h2>
                <>
                    <form className='signup-form' onSubmit={formik.handleSubmit}>

                        <Input htmlSize={50} width={80} size='25' type='text' placeholder='FullName' id='name' value={formik.values.name} name='name' onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label for='name' >  {formik.errors.name && formik.touched.name && formik.errors.name}   </label>

                        <Input htmlSize={40} width={80} size='25' type='email' placeholder='youremail@gmail.com' id='email' name='email' onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <label for='email' >  {formik.errors.email && formik.touched.email && formik.errors.email}   </label>

                        <Input aria-invalid={formik.errors.mobile && formik.touched.mobile && formik.errors.mobile} htmlSize={40} width={80} size='25' type='tel' placeholder='Mobile' id='mobile' name='mobile' onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mobile}
                        />

                        <label for='mobile' >  {formik.errors.mobile && formik.touched.mobile && formik.errors.mobile}   </label>

                        <Input htmlSize={40} width={80} size='25' type='Password' placeholder='Enter your Password' id='password' name='password' onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password} />
                        <label for='Password' >  {formik.errors.password && formik.touched.password && formik.errors.password}   </label>

                        <Input htmlSize={40} width={'80'} size='25' type='Password' placeholder='Repeat your Password ' id='confirmpassword' name='confirmPassword'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword} />
                        <label for='confirmpassword' >  {formik.errors.confirmPassword && formik.touched.confirmPassword && formik.errors.confirmPassword}   </label>
                        <button className='signup-btn' type='submit' disabled={formik.isSubmitting} > Register</button>
                    </form>

                    <button className='link-btn' onClick={() => { Navigate("/login") }} type="button"> Already  have an account ? Login</button>
                </>
            </Paper>
        </div >

    )

}
export default Signup