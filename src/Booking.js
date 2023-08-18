import React from 'react'

const Booking = () => {
  return (
    <div className='booking'>
        <h3>Learn From 40 Successful Native Advertising Campaigns and Get Better Results with this eBook</h3><br />
    <div className='book'>
    <div className='topics'>
        <h5 style={{fontSize:'1.8rem'}}>In This New eBook, You’ll Discover:</h5><br />
        <ul>
            <li>40 examples, including screenshots and key takeaways, from highly successful campaigns </li>
            <li>Goals, tactics and results for each campaign</li>
            <li>Expert tips from Taboola for getting started in native advertising</li>
        </ul>
    </div>
    <div className='form'>
        <form>
            <div><input type="text" placeholder='First Name' /></div>
            <div> <input type="text" placeholder='Last Name' /></div>
            <div><input type="email" placeholder='Business Email' /></div>
            <div><input type="text" placeholder='Company Name' /></div>
            <div>
                <select name="country">
                    <option value="Albania">Albania</option>
                    <option value="Africa">Africa</option>
                    <option value="India">India</option>
                    <option value="US" selected>United States</option>
                    <option value="Japan">Japan</option>
                </select>
            </div>
            <div>
                <button className='formButton'>Download Free E-book Now</button>
            </div><br />
        </form>
    </div>
    </div>
    </div>
  )
}

export default Booking