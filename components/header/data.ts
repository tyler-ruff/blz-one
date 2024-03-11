/**
 * IBurger interface for Burger Component
 * @interface
 * @prop active <boolean>
 */
export interface IBurger{
    active: boolean;
};

export interface IMenuItem{
    label: string;
    url: string;
    target?: string;
};