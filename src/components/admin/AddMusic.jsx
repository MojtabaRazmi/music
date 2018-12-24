import React, { Component } from 'react'

import {
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

class AddMusic extends Component {
  render () {
    console.log('add music')
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



export default AddMusic;