export interface Company{
    name: string;
    motto: string;
    description: string;
    contactInfo: {
        email: string;
        website: string;
        phone: string;
    };
    industry: string;
    creationDate: string;
    logo: string;
    credentials?: {
        entityId?: string;
        duns?: string;
        ein?: string;
    }
}