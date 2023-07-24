import React from 'react';
import moment from 'moment';

import { HelpCircleOutline,ChatboxOutline,SettingsOutline,Apps} from 'react-ionicons'

function Header() {
  return (
      <div className='w-full flex px-5 py-4 justify-between'>
          <div className='flex items-center   justify-center'>
              <img src='https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png' alt='Google Meet'
                  style={{width:124,height:40}}
              />
          <span className='font-poppins text-gray-500 text-xl ml-1'>Meet</span>
          </div>
          <div className='flex items-center bg-white'>
        
              <span className='font-poppins text-gray-500 text-lg ml-1'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
              <div className='p-2 rounded-full justify-center items-center  ml-2 hover:bg-gray-100' title='Click to get help'>
                <HelpCircleOutline
                    color={'grey'}
                    
                    height="25px"
                    width="25px"
                    onClick={() => alert('Hi!')}
                />
              </div>
              <div className='p-2 rounded-full justify-center items-center  ml-1 hover:bg-gray-100' title='Click to get help'>
                <ChatboxOutline
                    color={'grey'}
                    
                    height="25px"
                    width="25px"
                    onClick={() => alert('Hi!')}
                />
              </div>
              <div className='p-2 rounded-full justify-center items-center  ml-1 hover:bg-gray-100' title='Click to get help'>
                <SettingsOutline
                    color={'grey'}
                    
                    height="25px"
                    width="25px"
                    onClick={() => alert('Hi!')}
                />
              </div>
              <div className='p-2 rounded-full justify-center items-center  ml-7 hover:bg-gray-100' title='Click to get help'>
                <Apps
                    color={'grey'}
                    
                    height="25px"
                    width="25px"
                    onClick={() => alert('Hi!')}
                />
              </div>
          </div>
    </div>
  );
}

export default Header;
