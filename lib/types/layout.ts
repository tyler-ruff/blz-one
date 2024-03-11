export interface MenuItem{
    label: string;
    url: string;
    target?: string;
};
export interface Menu{
    list: MenuItem[];
};