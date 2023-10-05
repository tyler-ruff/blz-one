import Link from "next/link";
import Image from "next/image";

export default function Features(){
    return (
        <div className="bg-gray-100 text-gray-800">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-gray-900">
                        Features of Blazed One
                    </h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">
                        Discover the products, services, and solutions of Blazed Labs.
                    </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-900">
                            Access to Blazed Products
                        </h3>
                        <p className="mt-3 text-lg text-gray-600">
                            Use a single account to access all of <Link href="https://blazedlabs.com/products" className="text-blue-600 hover:underline">Blazed Products</Link>.
                            Get access to exclusive services and content. Just because, you're worth it.
                        </p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leadi text-gray-900">
                                        Social Network
                                    </h4>
                                    <p className="mt-2 text-gray-600">
                                        Customize your profile and connect with other users.
                                        Enjoy access to Blazed Publishing content.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leadi text-gray-900">
                                        Open Source Community
                                    </h4>
                                    <p className="mt-2 text-gray-600">
                                        Join our rich community of developers, project managers, who work with us to produce enriching content.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leadi text-gray-900">
                                        Marketing Network
                                    </h4>
                                    <p className="mt-2 text-gray-600">
                                        Put that empty website space to work, we sell your ad-space.
                                        Involved in the marketing industry? Auction or bid on our platform.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image src="https://blazed.sirv.com/logo/interactive-ibis.png" width={575} height={575} alt="Ibis Interactive" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                    </div>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-900">
                                Access to Blazed Services
                            </h3>
                            <p className="mt-3 text-lg text-gray-600">
                                Running a business can be difficult, software can be used to make management easier, 
                                but development is costly. That's where Blazed comes in, we love building software that you'll love using.
                            </p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi text-gray-900">
                                            Blazed Telecom
                                        </h4>
                                        <p className="mt-2 text-gray-600">
                                            A system designed to be an always-on, lightweight, cloud paging system.
                                            Mesh your on-prem PBX systems into a single and easy to manage cluster.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi text-gray-900">
                                            Blazed Systems
                                        </h4>
                                        <p className="mt-2 text-gray-600">
                                            Spin up servers, manage deployments, autoconfig infrastructure.
                                            We believe a company should enjoy the tech they use.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi text-gray-900">
                                            Blazed Publishing
                                        </h4>
                                        <p className="mt-2 text-gray-600">
                                            We help you get your message out there. We work with every medium from physical paper to digital websites/software.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <Image src="https://blazed.sirv.com/ibis/blazed-arena.jpg" height={500} width={500} alt="Ibis Arena" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}