import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-full  pt-1'>
        <div className='textstructure mt-37 px-15'>
            <div className='masker'>
                <h1 className='uppercase font-[bebasNeue] leading-[7vw] font-bold text-9xl '>We create</h1>
            </div>
            <div className='masker flex items-center'>
              <div className='box mb-4 w-[150px] h-[90px] bg-zinc-500 rounded-lg'></div>
                <h1 className='uppercase ml-5 font-[bebasNeue] leading-[7vw] font-bold text-9xl '>eye-opening</h1>
            </div>
            <div className='masker'>
                <h1 className='uppercase font-[bebasNeue] leading-[7vw] font-bold text-9xl '>presentations</h1>
            </div>
        </div>
        <div className='border-t-[1px] border-zinc-400 mt-32'>

        </div>
    </div>
  )
}

export default LandingPage