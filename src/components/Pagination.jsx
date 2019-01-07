import React, { Component } from 'react'
import Pagination from 'react-js-pagination'

class MyPagination extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activePage: 1
    }
  }

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber })
  }

  render () {
    return (
      <div>
        <Pagination
          totalItemsCount={this.props.totalCount}
          onChange={this.handlePageChange}
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          pageRangeDisplayed={10}
          prevPageText='previous'
          firstPageText='First Page'
          lastPageText='Last Page'
          nextPageText='next'

          innerClass='pagination'
          activeClass='active'
          activeLinkClass='active'
          itemClass='page-item'
          disabledClass='disabled'
          linkClass='page-link'
        />
      </div>
    )
  }
}

export default MyPagination