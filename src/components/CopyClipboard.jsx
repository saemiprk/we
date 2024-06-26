import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '../components/Button';

const CopyClipboard = ( {value} ) => {

  return (
    <CopyToClipboard text={value} onCopy={() => alert('복사가 완료 되었습니다.')}>
        <div className='mt-2'>
          <Button text={'주소 복사하기'} />
        </div>
    </CopyToClipboard>
  )
}

export default CopyClipboard