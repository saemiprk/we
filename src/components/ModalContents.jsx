import React from 'react'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const ModalContents = ({ title }) => {
    if(title === 'contact'){
        return (
          <div>
              <div className='text-gray-400'>
              <span className='subtitle flex items-center justify-center text-xs'>Contact</span>
              <span className='flex items-center justify-center text-2xl GowunBatang-Bold mb-2'>연락하기</span>
              </div>
              
              <div className='flex-col pt-10'>
              <div className='m-1 p-4 text-gray-400 GowunBatang-Bold'>
                  <div className='pb-2 border-b border-dotted border-gray-400'>신랑측</div>
                  <div className='flex items-center justify-between mt-3'>
                  <div className='text-sm w-[25%]'>신랑</div>
                  <div className='text-lg'>이태현</div>
                  <div className='flex items-center justify-center'><button className='mr-5' onClick={tel}><BsFillTelephoneFill className='text-l' /></button><button><MdEmail className='text-xl' /></button></div>
                  </div>
                  <div className='flex items-center justify-between mt-3'>
                  <div className='text-sm w-[25%]'>신랑 아버지</div>
                  <div className='text-lg'>이상규</div>
                  <div className='flex items-center justify-center'><button className='mr-5'><BsFillTelephoneFill className='text-l' /></button><button><MdEmail className='text-xl' /></button></div>
                  </div>
                  <div className='flex items-center justify-between mt-3'>
                  <div className='text-sm w-[25%]'>신랑 어머니</div>
                  <div className='text-lg'>정문숙</div>
                  <div className='flex items-center justify-center'><button className='mr-5'><BsFillTelephoneFill className='text-l' /></button><button><MdEmail className='text-xl' /></button></div>
                  </div>
              </div>
      
              <div className='m-1 p-4 text-gray-400 GowunBatang-Bold'>
                  <div className='pb-2 border-b border-dotted border-gray-400'>신부측</div>
                  <div className='flex items-center justify-between mt-3'>
                  <div className='text-sm w-[25%]'>신부</div>
                  <div className='text-lg'>박새미</div>
                  <div className='flex items-center justify-center'><button className='mr-5'><BsFillTelephoneFill className='text-l' /></button><button><MdEmail className='text-xl' /></button></div>
                  </div>
                  <div className='flex items-center justify-between mt-3'>
                  <div className='text-sm w-[25%]'>신부 아버지</div>
                  <div className='text-lg'>박광도</div>
                  <div className='flex items-center justify-center'><button className='mr-5'><BsFillTelephoneFill className='text-l' /></button><button><MdEmail className='text-xl' /></button></div>
                  </div>
                  <div className='flex items-center justify-between mt-3'>
                  <div className='text-sm w-[25%]'>신부 어머니</div>
                  <div className='text-lg'>권영일</div>
                  <div className='flex items-center justify-center'><button className='mr-5'><BsFillTelephoneFill className='text-l' /></button><button><MdEmail className='text-xl' /></button></div>
                  </div>
              </div>
              </div>
          </div>
        )
    }
}

export default ModalContents