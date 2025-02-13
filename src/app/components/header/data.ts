/**
 * IBurger interface for Burger Component
 * @interface
 * @prop active <boolean>
 */
export interface IBurger{
    active: boolean;
};

/**
 * ICta interface for Cta Component
 * @interface
 * @prop label <string>
 * @prop url   <string>
 */
export interface ICta{
    label: string;
    url: string;
};

/**
 * INav interface for Nav Component
 * @interface
 * @prop pathname <string>
 */
export interface INav{
    pathname: string;
};

/**
 * ILogo interface for Logo Component
 * @interface
 * @prop title <string>
 */
export interface ILogo{
    title: string;
};