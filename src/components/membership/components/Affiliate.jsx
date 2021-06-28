import React from 'react'


const Affiliate = () => {
    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <h4 className='text-color__primary m-0'>AFFILIATES</h4>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>AFFILIATE PROGRAM ON SALE</h4>
                    <h3 className='text-color__primary m-0 '>No affiliate program</h3>
                </div>
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div>
            <div className="inner-container">
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>AFFILIATE PROGRAM ON OPT-IN</h4>
                    <h3 className='text-color__primary m-0 '>No affiliate program on opt-in</h3>
                </div>
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div>    
            <div className='button-align__center'>
                <button className='button button-color__secondary button__large'>Save & Next</button>
            </div>
        </div>
    )
}

export default Affiliate
