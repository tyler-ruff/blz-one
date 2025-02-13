import Link from 'next/link';

import { ICta } from './data';

export function Cta(props: ICta){
    return (
        <Link 
            aria-label={props.label}
            href={props.url}
            target="_blank"
            className="hidden lg:flex self-center px-8 py-3 font-semibold rounded-full bg-blue-600 hover:bg-blue-800 active:bg-blue-900 text-gray-50 select-none">
            {props.label}
        </Link>
    );
}