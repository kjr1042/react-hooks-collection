import React from 'react'

const SetCustomerDetails = () => {

    const CustomerData = {CustomerCode:100,CustomerName:'snehil'};
    localStorage.setItem("Customer", JSON.stringify(CustomerData));


  return (
    <div> SetCustomerDetails:
        <p className='text-success'>Data assigned successfully...</p>
    </div>
  )
}

export default SetCustomerDetails