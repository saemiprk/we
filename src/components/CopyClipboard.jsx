import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyClipboard = ( {value} ) => {

  return (
    <CopyToClipboard text={value}>
        <button className='border-1 bg-red-100 p-1 rounded-sm' >복사하기</button>
    </CopyToClipboard>
  )
}

export default CopyClipboard