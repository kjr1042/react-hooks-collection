import React from 'react'

const GetCustomerDetails = () => {
    const Customer = JSON.parse(localStorage.getItem("Customer"))
    console.log(Customer);

  return (

    <div>
        <div>GetCustomerDetails</div>
        <p> {Customer.CustomerCode} {Customer.CustomerName}</p>
    </div>
  )
}

export default GetCustomerDetails