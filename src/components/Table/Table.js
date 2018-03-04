import React, { Component } from 'react'

import Thead from './Thead/'
import Tbody from './Tbody/'

// Styles
import './style.css'

// Api
import getTableData from '../../Api/getTableData'

export default class TableInfo extends Component {

  state = {
    salons: [],
    currentPage: 0,
    hasMore: true,

    pageCount: 0,
    rest: 0,
  }

  async componentDidMount () {

    const {currentPage} = this.state
    const {total} = await getTableData(currentPage,1)

    const {rest, pageCount} = this.getTotalPageCount(total, 50)

    this.setState({
      pageCount,
      rest,
    })
  }

  getTotalPageCount = (totalFieldsCount, fieldsCountPerOneLoad) => {
    const rest = totalFieldsCount % fieldsCountPerOneLoad
    let pageCount = parseInt(totalFieldsCount / fieldsCountPerOneLoad,10)
    if (rest) {
      pageCount += 1
    }
    return {rest, pageCount}
  }

  loadMore = async () => {

    const {currentPage, pageCount, rest, salons} = this.state
    let data;


    if (pageCount-1 !== currentPage) {
      data = await getTableData(currentPage, 50)
    }else {
      data= await getTableData(currentPage, rest)
      this.setState({
        hasMore:false
      })
    }

    this.setState({
      salons: [...data.salons, ...salons],
      currentPage: currentPage + 1,
    })
  }

  render () {
    const {salons, currentPage, hasMore} = this.state
    return (
      <div className={'infinity-scroller'}>
        <table className={'table'} key={currentPage}>
          <Thead/>
          <Tbody salons={salons} loadMore={this.loadMore} hasMore={hasMore}/>
        </table>
      </div>
    )
  }
}


