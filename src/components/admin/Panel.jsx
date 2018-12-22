import React, { Component } from 'react'

import {
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

class Panel extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <Form>
          <FormGroup>
            <Label for="MusicTitle">title</Label>
            <Input type="string" name="title" id="MusicTitle" placeholder="title"/>
          </FormGroup>
          <FormGroup>
            <Label for="MusicTitle">Title</Label>
            <Input type="string" name="email" id="MusicTitle" placeholder="Title"/>
          </FormGroup>
          <FormGroup>
            <Label for="MusicTitle">Title</Label>
            <Input type="string" name="email" id="MusicTitle" placeholder="Title"/>
          </FormGroup>
          <FormGroup>
            <Label for="MusicTitle">Title</Label>
            <Input type="string" name="email" id="MusicTitle" placeholder="Title"/>
          </FormGroup>
          <FormGroup>
            <Label for="MusicTitle">Title</Label>
            <Input type="string" name="email" id="MusicTitle" placeholder="Title"/>
          </FormGroup>
          <FormGroup>
            <Label for="MusicTitle">Title</Label>
            <Input type="string" name="email" id="MusicTitle" placeholder="Title"/>
          </FormGroup>
        </Form>
      </div>
    )
  }
}



export default Panel;