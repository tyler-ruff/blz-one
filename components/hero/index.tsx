import React from 'react'
import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className="w-full bg-indigo-700">
      <div className="mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
        <h2 className="space-y-2 text-3xl sm:text-4xl text-white font-extrabold uppercase">
            Join Blazed today!
        </h2>
        <p className="mt-4 text-lg text-indigo-200 leading-6">
          With a Blazed One account, you have access to many Blazed products and services. <Link href="https://blazedlabs.com/products" className="text-white hover:underline">View products</Link> or <Link href="https://blazed.company/services" className="text-white hover:underline">our services</Link>
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-around items-center uppercase font-medium tracking-widest">
          <Link href="/register" className="relative mb-5 sm:mb-0 px-5 py-3 w-48 rounded-md shadow bg-indigo-100 text-indigo-700 transform hover:bg-white active:top-0.5">
            Sign Up
          </Link>
          <Link href="/login" className="relative px-5 py-3 w-48 rounded-md shadow bg-indigo-500 text-indigo-100 hover:bg-indigo-600 active:top-0.5">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
