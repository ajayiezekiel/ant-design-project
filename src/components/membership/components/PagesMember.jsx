import React from 'react'


const PagesMember = () => {
    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <h4 className='text-color__primary m-0'>Pages</h4>
                <div>
                    <h2 className='text-color__primary m-0'>The Product Page</h2>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Destination Page</h4>
                    <h3 className='text-color__primary m-0 '>Softlink Page</h3>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Softlink Page</h4>
                    <h3 className='text-color__primary m-0 '>Test</h3>
                </div>
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div>
            <div className="inner-container">
                <h2 className='text-color__primary m-0'>The Thank-You Page</h2>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Price List</h4>
                    <button className="button text-color__secondary m-0">Price 1</button>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Destination Page</h4>
                    <h3 className='text-color__primary m-0 '>Softlink Page</h3>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Softlink Page</h4>
                    <h3 className='text-color__primary m-0 '>Test</h3>
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

export default PagesMember
