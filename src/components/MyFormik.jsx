import React from 'react'
import { Form, Formik } from 'formik'
import { MyField } from './Field'
import { Col, Row, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'
import MyModal from './Modal'

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  userName: Yup.string()
    .min(5, 'Too Short')
    .max(20, 'Too Long')
    .required('Required'),
})

class MyFormik extends React.Component {
  state = {
    redirectToReferer: false,
    loggedIn : false
  }

  render () {
    const { action } = this.props

    if (this.state.redirectToReferer) {
      return <Redirect to='/admin'/>
    }

    return (
      <Formik
        initialValues={{ password: '', userName: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          axios.post(action,
            JSON.parse(JSON.stringify(values))
          ).then(res => {
            localStorage.setItem('token', res.data.tokens[0])
            this.setState({ redirectToReferer: true })
          },err=>{
            this.setState({loggedIn :true})
          })
          // axios.post(action,
          //   JSON.parse(JSON.stringify(values))
          // ).then(res => {
          //   if (res) {
          //     axios.post('http://85.185.45.170:3000/api/adminLogin',
          //       JSON.parse(JSON.stringify(values))
          //     ).then(res => {
          //       if(res)
          //         localStorage.setItem('token', res.data.tokens[0])
          //         this.setState({ redirectToReferer: true })
          //     },err=>{
          //       console.log('olagh')
          //       console.log(err)
          //     })
          //   }
          // })
        }}
      >
        {({
            isSubmitting,
            errors,
            touched
          }) => (
          <Form className='myFormik'>
            <h1>Login As Admin</h1>
            <p>Sign In to your account</p>
            <MyField name='userName' type='string' errors={errors} touched={touched} placeholder='User Name' faClass='fa fa-user'/>
            <MyField name='password' type='password' errors={errors} touched={touched} placeholder='Password' faClass='fa fa-lock'/>
            <div
              className={this.state.loggedIn ?'d-display mb-3 text-danger':'d-none'}
            >your entry user name not exist , you may not register! for solving this problem call to main admin </div>
            <Row>
              <Col xs="6">
                <Button color='primary' type="submit" className="px-4">Login</Button>
              </Col>
              <Col xs="6" className="text-right">
                <Button color="link" disabled={true} className="px-1">Forgot password?</Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    )
  }
}

export default MyFormik