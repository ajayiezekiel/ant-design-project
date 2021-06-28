import React from 'react'

const Checkout = () => {
    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <h4 className='text-color__primary m-0'>CHECKOUT</h4>
                <div>
                    <h2 className='text-color__primary m-0'>Checkout Page Look & Feel</h2>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>CHECKOUT PAGE</h4>
                    <h3 className='text-color__primary m-0 '>Softlink hosted checkout page</h3>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>CHECKOUT FLOW</h4>
                    <h3 className='text-color__primary m-0 '>Traditional checkout flow</h3>
                </div>
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div>
            <div className="inner-container">
                <h3 className='text-color__primary m-0'>Checkout form fields</h3>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Form Fields</h4>
                    <h3 className='text-color__primary m-0 mb-1'>First and Last Name<span className='required'>*</span></h3>
                    <h3 className='text-color__primary m-0 mb-1'>Email<span className='required'>*</span></h3>
                    <h3 className='text-color__primary m-0 mb-1'>Phone Number<span className='required'>*</span></h3>
                    <h3 className='text-color__primary m-0 '>Country and State<span className='required'>*</span></h3>
                </div>
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div> 
            <div className="inner-container">
                <h3 className='text-color__primary m-0'>Product quantity</h3>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Quantity</h4>
                    <h3 className='text-color__primary m-0 '>Limited</h3>
                </div>  
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div> 
            <div className="inner-container">
                <h3 className='text-color__primary m-0'>Cart abandonment tagging</h3>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Price Point</h4>
                    <h3 className='text-color__primary m-0 '>Price Point</h3>
                </div>  
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Tag Category</h4>
                    <h3 className='text-color__primary m-0 '>Category</h3>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Tag</h4>
                    <h3 className='text-color__primary m-0 '>UI/UX</h3>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Price List</h4>
                    <button className="button text-color__secondary m-0">Price 1</button>
                </div>
                <div>
                    <h4 className='text-color__primary m-0'>1 Dollar Cart Abandoned</h4>
                </div>
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div> 
            <div className="inner-container">
                <h3 className='text-color__primary m-0'>Checkout language</h3>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>CHECKOUT LANGUAGE</h4>
                    <h3 className='text-color__primary m-0 '>Fixed</h3>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>LANGUAGE</h4>
                    <h3 className='text-color__primary m-0 '>English</h3>
                </div>
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div> 
            <div className="inner-container">
                <h3 className='text-color__primary m-0'>Terms and conditions</h3>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>ACTIVATION</h4>
                    <h3 className='text-color__primary m-0 '>No, don't activate</h3>
                </div>  
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div>
            <div className="inner-container">
                <h3 className='text-color__primary m-0'>Upsell offers</h3>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>ACTIVATION</h4>
                    <h3 className='text-color__primary m-0 '>Yes, activate upsell offers</h3>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Product</h4>
                    <h3 className='text-color__primary m-0 '>UI/UX</h3>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>One-time Offer Description</h4>
                    <h3 className='text-color__primary m-0 '>UI/UX</h3>
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

export default Checkout
