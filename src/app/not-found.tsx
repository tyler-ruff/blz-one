import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-md relative mx-auto py-16 text-gray-800 my-8 select-none">
      <div className="text-center">
        <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
          <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">
          Sorry, we couldn&apos;t find this page.
        </p>
        <p className="mt-4 mb-8 text-gray-600">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <Link rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded bg-blue-600 hover:bg-blue-800 text-gray-50">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
