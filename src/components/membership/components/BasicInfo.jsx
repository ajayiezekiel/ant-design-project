import React from 'react'
import { Divider } from 'antd'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FlutterLogo, FlutterwaveIcon, StripeLogo } from '../CustomIcon'

const BasicInfo = () => {
    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <h4 className='text text-color__primary text-weight__secondary m-0'>BASIC INFORMATION</h4>
                <div>
                    <div className='basic-cart'>
                        <AiOutlineShoppingCart className='cart-icon'/>
                    </div>
                    <h2 className='cart-text m-0'>Product Details</h2>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Internal Name</h4>
                    <h3 className='text-color__primary m-0'>UI/UX</h3>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Official Name</h4>
                    <h3 className='text-color__primary m-0 '>UI/UX</h3>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Description</h4>
                    <h3 className='text-color__primary m-0'>Learn UI/UX</h3>
                </div>
                <Divider />
                <div>
                    <h3 className="text-color__secondary m-0 mb-1">PRODUCT VISIBILITY</h3>
                    <h4 className="text-color__primary m-0">No, keep it private</h4>
                </div>
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div>
            <div className="inner-container">
                <h3 className='text-color__primary'>Payment Processing</h3>
                <div>
                    <h4 className="text-color__secondary m-0">PAYMENT METHOD</h4>
                </div>
                <div>
                    <div className="flutterwave">
                        <FlutterLogo className='flutterIcon' />
                        <FlutterwaveIcon className='m-0 mb-1' />
                    </div>
                    <StripeLogo className='stripe' />
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

export default BasicInfo
