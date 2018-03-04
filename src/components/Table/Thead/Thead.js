import React from 'react'
import v4 from 'uuid/v4'

import '../style.css'

const Thead = ({headerFields}) => (
  <thead >
  <tr className={'table-head'}>
    {
      headerFields.map((item)=>{
        const key = v4();

       return( <td key={key}>{item}</td>)
      })
    }
  </tr>
  </thead>
)

export default Thead;

