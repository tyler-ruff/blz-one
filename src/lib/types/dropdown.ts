import { MouseEventHandler } from 'react';

export interface IDropdownMenuItem {
    text: string;
    href?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    children?: IDropdownMenuItem[];
    sideDetail?: string;
}

export interface IDropdownMenuData {
    children: [
        IDropdownMenuItem[],
        IDropdownMenuItem[],
        IDropdownMenuItem[]
    ];
}