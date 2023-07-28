import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-3">
  {/* <!-- First Sub-Div --> */}
  <div className="flex flex-row space-x-8 items-center">
    <h1 className="font-bold text-2xl">Podcaster</h1>
    <ul className="flex space-x-4">
      <li><a href="#" className="text-gray-900 hover:text-gray-700">Home</a></li>
      <li><a href="#" className="text-gray-900 hover:text-gray-700">Categories</a></li>
      <li><a href="#" className="text-gray-900 hover:text-gray-700">Episodes</a></li>
      <li><a href="#" className="text-gray-900 hover:text-gray-700">Pricing</a></li>
    </ul>
  </div>
  
  {/* <!-- Login and Signup Buttons --> */}
  <div>
  <Link
      href="/auth">
    <button className=" border border-blue-500 text-blue-500 rounded-xl px-8 py-2 mr-2">
      Login</button></Link>
      <Link href="/auth">
    <button className="bg-primary text-background rounded-xl px-8 py-2 ">SignUp</button>
    </Link>
  </div>
</nav>
  )
}

export default Navbar
