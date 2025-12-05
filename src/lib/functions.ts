export function enumKeys<T extends object>(e: T) {
  const keys = Object.keys(e)
  const isStringEnum = isNaN(Number(keys[0]))
  return isStringEnum ? keys : keys.slice(keys.length / 2)
}

export function toDateInputValue(dateObject: Date){
    const local = new Date(dateObject);
    local.setMinutes(dateObject.getMinutes() - dateObject.getTimezoneOffset());
    return local.toJSON().slice(0,10);
};

export function truncateText(text: string, maxLength: number = 500){
  if (!text) return '';
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength - 3)}...`;
};

export function slugify(text: string): string {
  if (!text) {
    return '';
  }

  // Convert to lowercase and trim whitespace
  let slug = text.toLowerCase().trim();

  // Remove accents and diacritics
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Replace non-alphanumeric characters (except spaces and hyphens) with spaces
  slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

  // Replace multiple spaces or hyphens with a single hyphen
  slug = slug.replace(/[\s-]+/g, '-');

  return slug;
}

export function estimateReadTime(text: string, wordsPerMinute: number = 200): string {
    // Calculate the number of words in the text
    const wordCount = text.split(/\s+/).length;
  
    // Calculate the estimated read time in minutes
    const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
    // Format the read time as a string
    if (readTimeMinutes === 1) {
      return '1 minute';
    } else {
      return `${readTimeMinutes} minutes`;
    }
}

export function formatTelephone(phoneNumber: string){
    // Remove the '+' and any non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, '');

    // Check if the cleaned number has the correct length (11 digits for +Xxxxxxxxxxx)
    if (cleaned.length !== 11) {
        throw new Error('Invalid phone number length. Expected 11 digits.');
    }

    // Extract the country code and the rest of the number
    const countryCode = cleaned.charAt(0); // Assuming the first digit is the country code
    const localNumber = cleaned.slice(1); // The remaining 10 digits

    // Format the local number
    const areaCode = localNumber.slice(0, 3);
    const centralOfficeCode = localNumber.slice(3, 6);
    const lineNumber = localNumber.slice(6, 10);

    // Return the formatted number including the country code
    return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}

export function getInitials(name: string) {
    if(name === ""){
      return "";
    }
    if(!name.includes(' ')){
      if(name.length >= 2){
        return name.slice(0, 2);
      } else {
        return "BL";
      }
    } else {
      return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
    }
}

/**
 * Formats a date into a human-readable string.
 * @param date - The date to format (can be a Date object or a valid date string).
 * @param format - The format string (e.g., 'YYYY-MM-DD', 'MM/DD/YYYY', 'DD MMM, YYYY').
 * @returns The formatted date string.
 */
export function formatDate(date: Date | string, format: string): string {
  const d = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(d.getTime())) {
    //throw new Error('Invalid date');
    return "";
  }

  const padZero = (num: number) => (num < 10 ? `0${num}` : num);

  const replacements: { [key: string]: string } = {
    YYYY: d.getFullYear().toString(),
    MM: String(padZero(d.getMonth() + 1)),
    DD: String(padZero(d.getDate() + 1)),
    HH: String(padZero(d.getHours())),
    mm: String(padZero(d.getMinutes())),
    ss: String(padZero(d.getSeconds())),
    'MMM': d.toLocaleString('default', { month: 'short' }), // Short month name
    'MMMM': d.toLocaleString('default', { month: 'long' }), // Full month name
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss|MMM|MMMM/g, (match) => replacements[match] || match);
}

/**
 * Formats a date into a "time ago" string.
 * @param date - The date to compare (can be a Date object or a valid date string).
 * @returns The formatted "time ago" string.
 */
export function timeAgo(date: Date | string): string {
  const now = new Date();
  const inputDate = typeof date === 'string' ? new Date(date) : date;

  /*
  if (isNaN(inputDate?.getTime())) {
    throw new Error('Invalid date');
  }
  */

  const seconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 60 * 60 * 24 * 365,
    month: 60 * 60 * 24 * 30,
    week: 60 * 60 * 24 * 7,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const count = Math.floor(seconds / secondsInUnit);
    if (count > 0) {
      return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
    }
  }

  if(date > now){
    return "in the future"
  }
  
  return 'just now';
}

export function generateRandomHex(): string{
  return String('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
}

export function validateEmail(email: string): boolean {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

export function getFileExtension(filename: string) {
  const lastIndex = filename.lastIndexOf(".");
  if (lastIndex === -1) {
    return ""; // No extension
  }
  return filename.slice(lastIndex + 1);
}

export function capitalizeEachWord(sentence: string): string {
  if (!sentence) {
    return ""; // Handle empty or null input
  }

  return sentence
    .split(" ") // Split the sentence into an array of words
    .map(word => {
      if (word.length === 0) {
        return ""; // Handle empty strings that might result from multiple spaces
      }
      // Capitalize the first letter and concatenate with the rest of the word
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" "); // Join the capitalized words back into a sentence
}