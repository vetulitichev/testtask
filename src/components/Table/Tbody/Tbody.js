import React from 'react'
import {Link} from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'

import '../style.css'

const Tbody = ({salons, loadMore, hasMore}) => {
  return (
    <InfiniteScroll
      element={'tbody'}
      className={'table-body'}
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
    >
    {
      salons.map(({name, website, profile_image_urls, id}) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{website}</td>
          <td>{profile_image_urls?profile_image_urls.thumb:null}</td>
          <td><Link to={`/salon${id}`}>Details</Link></td>
        </tr>
      ))
    }
    </InfiniteScroll>
  )
}

export default Tbody
