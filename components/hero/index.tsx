"use client"
import React from 'react'
import Link from 'next/link';
import { Button } from 'flowbite-react';

const CallToAction = () => {
  return (
    <div className="w-full bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600">
      <div className="mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
        <h2 className="space-y-2 text-3xl sm:text-4xl text-white font-extrabold uppercase">
            Join Blazed today!
        </h2>
        <p className="mt-4 text-lg text-indigo-200 leading-6">
          With a Blazed One account, you have access to many Blazed products and services. <Link href="https://blazedlabs.com/products" className="text-white hover:underline">View products</Link> or <Link href="https://blazed.company/services" className="text-white hover:underline">our services</Link>
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-around items-center uppercase font-medium tracking-widest">
          <Button color="light" href="/register" className="relative mb-5 sm:mb-0 px-5 py-2 w-48 shadow">
            Sign Up
          </Button>
          <Button gradientDuoTone="purpleToBlue" href="/login" className="relative px-5 py-2 w-48 rounded-md shadow">
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
