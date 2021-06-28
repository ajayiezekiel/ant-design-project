import React from 'react'


const ProductPricing = () => {
    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <h3 className='text-color__primary'>Product Pricing</h3>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Price List</h4>
                    <button className="button text-color__secondary m-0">Price 1</button>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Payment Plan</h4>
                    <h3 className='text-color__primary m-0 '>One-time</h3>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Price Description</h4>
                    <h3 className='text-color__primary m-0'>Learn UI/UX</h3>
                </div>
                <div>
                    <h4 className='text-color__secondary m-0 mb-1'>Price Fee</h4>
                    <h3 className='text-color__primary m-0'>$1.00</h3>
                </div>
                <div>
                    <h4 className="text-color__secondary m-0 mb-1">INITIAL PAYMENT</h4>
                    <h3 className="text-color__primary m-0">Enabled</h3>
                </div>
                <div>
                    <h4 className="text-color__secondary m-0 mb-1">DEFAULT PRICE</h4>
                    <h3 className="text-color__primary m-0">PRICE 1 enabled</h3>
                </div>
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div>
            <div className="inner-container">
                <h3 className='text-color__primary'>Shipping Cost</h3>
                <div>
                    <h4 className="text-color__secondary m-0 mb-1">PRODUCT TYPE</h4>
                    <h3 className="text-color__primary m-0">Digital Product</h3>
                </div>
                <div>
                    <h4 className="text-color__secondary m-0 mb-1">SHIPPING</h4>
                    <h3 className="text-color__primary m-0">No shipping enabled</h3>
                </div>
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div>
            <div className="inner-container">
                <h3 className='text-color__primary'>Sales Tax</h3>
                <div>
                    <h4 className="text-color__secondary m-0 mb-1">TAX PAYMENT</h4>
                    <h3 className="text-color__primary m-0">Tax disabled</h3>
                </div>
                <div>
                    <h4 className="text-color__secondary m-0 mb-1">TAX PERCENTAGE</h4>
                    <h3 className="text-color__primary m-0">Tax disabled</h3>
                </div>
                <div className='button-align__right mt-2'>
                    <button className='button button-color__secondary'>Edit</button>
                </div>
            </div>
            <div className="inner-container">
                <h3 className='text-color__primary'>Refund Policy</h3>
                <div>
                    <h4 className="text-color__secondary m-0 mb-1">REFUND TYPE</h4>
                    <h3 className="text-color__primary m-0">No refund policy</h3>
                </div>
                <div>
                    <h4 className="text-color__secondary m-0 mb-1">REFUND PERIOD</h4>
                    <h3 className="text-color__primary m-0">No set</h3>
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

export default ProductPricing
