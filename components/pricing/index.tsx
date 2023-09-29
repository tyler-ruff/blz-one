import Link from "next/link";

export default function Pricing(){
    return (
        <div className="py-20 bg-gray-100 text-gray-800">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <span className="font-bold tracki uppercase text-violet-600">Pricing</span>
                    <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
                </div>
                <div className="flex flex-wrap items-stretch -mx-4">
                    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                        <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold">
                                    Basic
                                </h4>
                                <span className="text-6xl font-bold">
                                    Free
                                </span>
                            </div>
                            <p className="mt-3 leadi text-gray-600">
                                Access to some Blazed products, forums, and user personalization.
                            </p>
                            <ul className="flex-1 mb-6 text-gray-600">
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        User Profile
                                    </span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        Forums Account
                                    </span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        Customize Profile
                                    </span>
                                </li>
                            </ul>
                            <button type="button" className="inline-block px-5 py-3 font-semibold tracki text-center rounded bg-violet-600 text-gray-50 hover:bg-violet-500 outline-indigo-300 active:outline">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                        <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-violet-600 text-gray-50">
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold">
                                    Pro
                                </h4>
                                <span className="text-6xl font-bold">
                                    $6
                                    <span className="text-sm tracki">/month</span>
                                </span>
                            </div>
                            <p className="leadi">
                                For developers and professionals who use Blazed products. 
                            </p>
                            <ul className="flex-1 space-y-2">
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        Everything in Free
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        Blazed Telecom Services
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        Blazed Systems Services
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        Beez Marketing Services
                                    </span>
                                </li>
                            </ul>
                            <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded bg-gray-100 text-violet-600 hover:bg-blue-300 active:outline outline-blue-500">
                                Get Started
                            </a>
                        </div>
                    </div>
                    <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                        <div className="p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold">
                                    Business
                                </h4>
                                <span className="text-6xl font-bold">$12
                                    <span className="text-sm tracki">/month</span>
                                </span>
                            </div>
                            <p className="leadi text-gray-600">
                                For companies who need multiple users and access control.
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        Everything in Pro
                                    </span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        Employee Accounts (up to 250)
                                    </span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        Blazed Publishing Services
                                    </span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        Technical Support Services
                                    </span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        $150 Ad Credits
                                    </span>
                                </li>
                            </ul>
                            <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-semibold tracki text-center rounded bg-violet-600 text-gray-50 hover:bg-violet-500 outline-indigo-300 active:outline">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-6 bg-gray-100 text-gray-900">
	<div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
		<div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-gray-50">
			<span className="text-sm">Enterprise Basic</span>
			<p className="text-5xl font-bold text-center">
                $24
                <span className="text-sm tracki">/month</span>
            </p>
			<p className="font-semibold text-center mt-5 px-10">
                Need to accomidate more than 250 employees? 
                We can set you up with an enterprise account,
                so your company can have less limits.
            </p>
			<Link href="https://blazed.contact/sales" className="px-8 py-3 text-lg font-semibold border rounded sm:mt-12 border-gray-300 hover:bg-gray-300 active:outline outline-blue-600">
                Contact Us
            </Link>
		</div>
		<div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 bg-violet-600 text-gray-50">
			<span className="text-sm font-semibold">Enterprise Advanced</span>
			<p className="text-5xl font-bold py-6">
                $48
                <span className="text-sm tracki">/month</span>
            </p>
			<p className="font-semibold">
                Need extra features and even less limits? We can set you up with an
                enterprise advance account. Get in contact, and we will work with you to 
                find the right plan for your business.
            </p>
			<Link href="https://blazed.contact/sales" className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-gray-100 text-gray-900 hover:bg-gray-300 active:outline outline-blue-600">
                Contact Us
            </Link>
		</div>
	</div>
</section>
        </div>
    );
}