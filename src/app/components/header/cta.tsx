import Link from 'next/link';

import { ICta } from './data';

export function Cta(props: ICta){
    return (
        <Link 
            aria-label={props.label}
            href={props.url}
            className="hidden lg:flex self-center px-8 py-3 font-semibold rounded-full cta-button text-gray-50 dark:text-gray-800 dark:hover:text-gray-900 focus:outline-none focus:ring focus:ring-blue-800 dark:focus:ring-white select-none">
            {props.label}
        </Link>
    );
}