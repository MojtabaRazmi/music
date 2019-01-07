import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import MyPagination from '../Pagination'
import axios from 'axios'
import { toast } from 'react-toastify'

class ListMusic extends Component {
  state = {
    musics: []
  }

  async componentDidMount () {
    const { data } = await axios.get('http://85.185.45.170:3000/api/getAllsong')
    this.setState({ musics: data })
  }

  handleDelete = async deleteID => {
    const deletedState = this.state.musics.filter(p => deleteID !== p._id)
    const originalState = this.state.musics

    this.setState({ musics: deletedState })

    try {
      const deleteResult = await axios.delete('http://85.185.45.170:3000/api/deleteSong',
        {data:{"_id":deleteID}}
        )


      if(deleteResult.status===200){
        toast.success(`the ${this.state.musics.title} has been removed successfully`)
      }
    } catch (e) {
      console.log(e)
      if(e.response && e.response.status===400){
        toast.error('not exist any music with this id')
      }
      this.setState({ musics: originalState })
    }
  }

  handleRedirect(music){
    this.props.history.push({
      pathname : '/admin/edit-music',
      music
    })
  }

  conf = () => {
    window.confirm('Are you sure')
  }

  render () {
    const allMusics = this.state.musics
    let countID = 1

    return (
      <div className='admin-layout-listMusic-table'>
        <Table>
          <thead className='thead-light'>
          <tr>
            <th onClick={this.conf}>Number</th>
            <th>Title</th>
            <th>Singer</th>
            <th>Cover</th>
            <th>File Name</th>
            <th>Deleting</th>
            <th>Editing</th>
          </tr>
          </thead>
          <tbody>
          {
            allMusics.map(music => (
              <tr key={music._id}>
                <th scope='row'>
                  {countID++}
                </th>
                <td>{music.title}</td>
                <td>{music.singer}</td>
                <td><img src={music.cover}/></td>
                <td>{music.filename}</td>
                <td>
                  <Button className='btn btn-danger' onClick={() => this.handleDelete(music._id)}>
                    delete
                  </Button>
                </td>
                <td>
                  <Button className='btn btn-primary' onClick={()=>this.handleRedirect(music)}>
                    edit
                  </Button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </Table>
        <MyPagination
          totalCount={this.state.musics.length}
        />
      </div>
    )
  }
}

export default ListMusic