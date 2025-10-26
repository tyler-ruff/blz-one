export enum EntryType {
    'asset' = 0,
    'liability' = 1,
    'equity' = 2,
    'revenue' = 3,
    'expense' = 4,
    'other' = 5
}

export interface Entry {
    id: string;
    key?: string;
    description: string;
    type: string;
    value?: string,
    date: string;
    createdDate: string;
    createdBy: string;
}