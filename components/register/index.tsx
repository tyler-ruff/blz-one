import Image from "next/image";
import Link from "next/link";

export default function Register(){
    return (
    <div className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                <Image
                    alt="Beaker"
                    src="/images/wallpaper-beaker.png"
                    width={1200}
                    height={1200}
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                />

                <div className="hidden lg:relative lg:block lg:p-12">
                    <Link title="Return Home" className="block text-white" href="/">
                        <span className="sr-only">Home</span>
                        <Image src="/images/beaker-white.png" alt="Beaker" width={50} height={50} />
                    </Link>

                    <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                        Welcome to Blazed
                    </h2>

                    <p className="mt-4 leading-relaxed text-white/90">
                        Join Blazed by creating a Blazed One account today.
                    </p>
                </div>
            </section>

            <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
            <div className="max-w-xl lg:max-w-3xl">
                <div className="relative -mt-16 block lg:hidden">
                <Link className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white border shadow-md text-blue-600 sm:h-20 sm:w-20" href="/" title="Return Home">
                    <span className="sr-only">Home</span>
                    <Image src="/images/beaker-dark.png" alt="Beaker" width={50} height={50} />
                </Link>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    Welcome to Blazed
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                    Join Blazed by creating a Blazed One account today.
                </p>
                </div>

                <div className="my-6 space-y-4">
                    <button aria-label="Join with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-600 focus:ri hover:bg-gray-900 hover:text-white active:ring ring-red-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Join with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-600"/>
                    <p className="px-3 text-gray-600">OR</p>
                    <hr className="w-full text-gray-600"/>
                </div>
                
                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                    >
                    First Name
                    </label>

                    <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Last Name
                    </label>

                    <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                    Email
                    </label>

                    <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Password
                    </label>

                    <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Password Confirmation
                    </label>

                    <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-6">
                    <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                        I want to receive emails about events, product updates and
                        company announcements.
                    </span>
                    </label>
                </div>

                <div className="col-span-6">
                    <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <Link href="https://blazedlabs.com/terms" target="_blank" className="text-gray-700 hover:underline px-1">
                        terms and conditions
                    </Link>
                    and
                    <Link href="https://blazedlabs.com/privacy" target="_blank" className="text-gray-700 hover:underline px-1">
                        privacy policy
                    </Link>
                    </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                    Create an account
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                        Already have an account? &nbsp;
                        <Link href="/login" className="text-gray-700 underline">
                            Log in
                        </Link>.
                    </p>
                </div>
                </form>
            </div>
            </main>
        </div>
    </div>
    );
}