/**
 * Single menu item
 * @interface
 * @prop label Text label          <string>
 * @prop href URL to open          <string>     [optional]
 */
export interface MenuItem{
    label: string;
    href?: string;
}

/**
 * Types for menus
 * @interface
 * @prop _id Unique menu ID             <string>
 * @prop nav List of main nav items     <MenuItem[]>
 * @prop cta Optional call to action    <MenuItem>
 */
export interface Menu {
    _id: string;
    nav: MenuItem[];
    cta?: MenuItem;
}
