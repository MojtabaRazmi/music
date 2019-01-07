import React, { Component } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap';


class AddMusic extends Component {
  state={
    title :'',
    singer :'',
    album :'',
    cover :'',
    url :'',
    filename :'',
  }

  handleSubmit=async e=>{
    e.preventDefault();
    try{
      const result = await axios.post(
        'http://85.185.45.170:3000/api/addsong',
        JSON.parse(JSON.stringify(this.state)))

      if (result.status===200){
        toast.success(`${this.state.filename} has added to DB successfully`)
      }

      console.log(this.state.filename)
    }
    catch (e) {
      if(e.response && e.response.status===400){
        toast.error(`adding ${this.state.filename} to DB get wrong`)
      }
    }

  }

  render () {
    return (
      <div className='admin-addMusic'>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="MusicTitle">Music Title</Label>
            <Input
              type="text"
              name="MusicTitle"
              id="MusicTitle"
              placeholder="Enter The Music Title"
              value={this.state.title}
              onChange={e => {
                this.setState({ title: e.target.value })
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="MusicSinger">Music Singer</Label>
            <Input
              type="text"
              name="MusicSinger"
              id="MusicSinger"
              placeholder="Enter The Music Singer"
              value={this.state.singer}
              onChange={e=>{
                this.setState({singer:e.target.value})
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="MusicAlbum">Music Album</Label>
            <Input
              type="text"
              name="MusicAlbum"
              id="MusicAlbum"
              placeholder="Enter The Music Album"
              value={this.state.album}
              onChange={e=>{
                this.setState({album:e.target.value})
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="MusicCover">Music Cover</Label>
            <Input
              type="text"
              name="MusicCover"
              id="MusicCover"
              placeholder="Enter The Music Cover"
              value={this.state.cover}
              onChange={e=>{
                this.setState({cover:e.target.value})
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="MusicUrl">Music Url</Label>
            <Input
              type="text"
              name="MusicUrl"
              id="MusicUrl"
              placeholder="Enter The Music Url"
              value={this.state.url}
              onChange={e=>{
                this.setState({url:e.target.value})
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="FileName">File Name</Label>
            <Input
              type="text"
              name="FileName"
              id="FileName"
              placeholder="Enter The File Name"
              value={this.state.filename}
              onChange={e=>{
                this.setState({filename:e.target.value})
              }}
            />
          </FormGroup>
          <Button
            className='btn btn-success m-5'
          >
            ADD MUSIC
          </Button>
        </Form>
      </div>
    )
  }
}



export default AddMusic;