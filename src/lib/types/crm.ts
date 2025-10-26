/* CRM (Customer Relationship Manager) */
export interface CompanyPerson{
    id: string;
    company: string;
    name: string;
    jobTitle: string;
    contact: {
        email?: string;
        phone?: string;
        website?: string;
    };
}
export interface Customer{
    id: string;
    key?: string;
    name: string;
    logo?: string;
    createdDate: string;
    createdBy: string;
    companyContact: {
        email?: string;
        phone?: string;
        website?: string;
    };
    companyMembers?: CompanyPerson[];
}