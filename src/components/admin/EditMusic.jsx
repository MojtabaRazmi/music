import React, { Component } from 'react';
import axios from 'axios'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
}from 'reactstrap'
import { toast } from 'react-toastify'

class EditMusic extends Component {
  state={
    _id:'',
    title:'',
    singer:'',
    album:'',
    cover:'',
    url:'',
    filename:'',
    covername:''
  }

  componentDidMount () {
    let {music} = this.props.location;
    if(!music) return this.props.history.push('/admin/list-music')
    this.setState({
      _id:music._id,
      title:music.title,
      singer:music.singer,
      album:music.album,
      cover:music.cover,
      url:music.url,
      filename:music.filename,
      covername:music.covername
    })
  }

  handleSubmit=async params=>{
    params.preventDefault();

    let newState= {...this.state}


    try{
      const result = await axios.put('http://85.185.45.170:3000/api/editsong',
       JSON.parse(JSON.stringify(newState)))

      if(result.status===200){
        toast.success('the song has been updated successfully')
        this.props.history.push('/admin/list-music')
      }
    }catch (e) {
        if(e.response && e.response.status===400){
          toast.error(`editing in ${this.state.filename} get some wrongs`)
        }
    }
  }

  render () {
    return (
      <div>
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
          <FormGroup>
            <Label for="CoverName">Cover Name</Label>
            <Input
              type="text"
              name="CoverName"
              id="CoverName"
              placeholder="Enter The Cover Name"
              value={this.state.covername}
              onChange={e=>{
                this.setState({covername:e.target.value})
              }}
            />
          </FormGroup>
          <Button
            className='btn btn-success m-5'
          >
            EDIT MUSIC
          </Button>
        </Form>
      </div>
    )
  }
}

export default EditMusic;