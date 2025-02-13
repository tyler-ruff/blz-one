

/**
 * Social config settings
 * @interface
 * @prop facebook URL
 * @prop instagram URL
 * @prop github URL
 * @prop twitter URL
 * @prop youtube URL
 */
export interface Social {
    facebook?: string;
    instagram?: string;
    github?: string;
    twitter?: string;
    youtube?: string;
}

/**
 * Brand personalization settings for site
 * @interface
 * @prop logo Company/Site logo (as URL)<string>
 * @prop company Company name           <string> [optional]
 * @prop twitter Site Twitter handle    <string> [optional]
 * @prop email Company/site email       <string> [optional]
 * @prop telephone Company/site phone   <string> [optional]
 */
export interface Brand {
    logo: string;
    company?: string;
    twitter?: string;
    email?: string;
    telephone?: string;
}

/**
 * This interface defines the config options for a Fire site.
 * @interface
 * @prop name Site name
 * @prop fbAppId Site Facebook app id   <string> [optional]
 * @prop description Site description   <string> [optional]
 */
export interface Config {
    name: string;
    fbAppId?: string;
    description?: string;
}