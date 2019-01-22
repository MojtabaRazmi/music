import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Row,
} from 'reactstrap'

import MyModal from '../Modal'
import MyFormik from '../MyFormik'

class AdminLogin extends Component {
  state = {
    modal: false
  }

  componentDidMount () {
    if (localStorage.getItem('token') !== null) {
      // this.setState({modal : true})
      this.toggle()
      // console.log(this.state.modal)
      // this.props.history.push('/admin')
    }
  }

  toggle = () => {
    console.log('in Toggle')
    this.setState({
      modal: !this.state.modal
    })
  }

  redirect = () => {
    this.props.history.push('/admin')
  }

  render () {
    return (
      <div className="login_layout app flex-row align-items-center">
        <MyModal
          toggle={this.toggle} modal={this.state.modal}
          title='Login Note'
          body='You Are Logged In'
          action={this.redirect}
        />
        <Container>
          <Row>
            <Col md="8">
              <CardGroup>
                <Card className='left_card'>
                  <CardBody>
                    <MyFormik action='http://85.185.45.170:3000/api/adminLogin'/>
                  </CardBody>
                </Card>
                {/*<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>*/}
                  {/*<CardBody className="text-center">*/}
                    {/*<div>*/}
                      {/*<h2>Sign up</h2>*/}
                      {/*<p>if you didn't sign up until now you must to register here very easily</p>*/}
                      {/*<Button color="primary" className="mt-3" active>Register Now!</Button>*/}
                    {/*</div>*/}
                  {/*</CardBody>*/}
                {/*</Card>*/}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default AdminLogin