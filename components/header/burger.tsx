import { IBurger } from './data';

/**
 * Burger component
 * @param prop active <boolean>
 * @example <Burger active={isActive} />
 * @returns JSX Component
 */
export default function Burger(props: IBurger){
    const isOpen = props.active;
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black dark:bg-gray-100 transition ease transform duration-300`;
    return (
        <button
            aria-label="Toggle mobile menu"
            className="p-4 lg:hidden">
            <div
                className={`${genericHamburgerLine} ${
                isOpen
                    ? "rotate-45 translate-y-1 opacity-100 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                isOpen
                    ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
            />
        </button>
    );
}