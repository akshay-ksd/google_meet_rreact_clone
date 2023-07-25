import React, { useState } from 'react'
import { ChevronBackOutline, ChevronForwardOutline } from 'react-ionicons'

function Banner() {
    const [activeIndex, setActiveIndex] = useState(0)
    const bannerData = [
        { imageUrl: "https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg", title: "Get a link you can share", subtitle: "Click New Meeting get a link you can send to people you can meet with" },
        { imageUrl: "https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg", title: "Plan ahead", subtitle: "Click New Meeting  to schedule meetings in Google Calendar and send invites to participants" },
        { imageUrl: "https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg", title: "Your meeting is safe", subtitle: "No one can join a meeting unless invited or admitted by the host" }
    ]

    const forward = () => {
        const maxIndex = bannerData.length - 1
        if (maxIndex > activeIndex) {
            const ind = activeIndex + 1;
            setActiveIndex(ind)
        }
    }

    const backward = () => {
        if (0 < activeIndex) {
            const ind = activeIndex - 1;
            setActiveIndex(ind)
        }
    }
    return (
        <div className='w-1/2 items-center'>
            <div className='flex items-center justify-evenly w-ful mt-5'>
                <div className='w-8 h-8 rounded-full items-center justify-center hover:bg-gray-200 flex'>
                    <ChevronBackOutline
                        color={activeIndex !== 0 ? "black" : "gray"}
                        height="18px"
                        width="18px"
                        onClick={() => backward()}
                    />
                </div>

                <img src={bannerData[activeIndex].imageUrl} alt='Google Meet'
                // style={{ width: 124, height: 40 }}
                />
                <div className='w-8 h-8 rounded-full items-center justify-center hover:bg-gray-200 flex'>
                    <ChevronForwardOutline
                        color={activeIndex == bannerData.length - 1 ? "gray" : "black"}
                        height="18px"
                        width="18px"
                        onClick={() => forward()}
                    />
                </div>
            </div>
            <div className=' flex-col mt-5 flex'>
                <div className='w-1/2 self-center'>
                    <p className='font-poppins text-2xl text-center'>{bannerData[activeIndex].title}</p>
                    <p className='font-poppins text-xs text-center mt-1'>{bannerData[activeIndex].subtitle}</p>
                </div>
            </div>
            <div className=' flex-col mt-5 flex'>
                <div className='w-1/2 self-center flex items-center justify-center'>
                    {
                        bannerData?.map((item, index) => (
                            <div className={`w-1 h-1 rounded-full ${index == activeIndex ? "bg-blue-500" : "bg-gray-400"} ml-2`} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Banner