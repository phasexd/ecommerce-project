import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
   <>
    <div className="text-2xl font-bold pt-14">
       products and items
      </div>
      <div>
      <Link className='text-sm text-blue-600 underline' to={'/home'}>Back to Home</Link>
      </div>
   </>
  )
}

export default Products
