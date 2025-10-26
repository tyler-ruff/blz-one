import type { MDXComponents } from 'mdx/types';

import Link from 'next/link';

import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';

import { IHeading } from './lib/types/mdx';

function reverseSlugify(slug: string){
    // Replace hyphens with spaces
    let str = slug.replace(/-/g, ' ');
    // Capitalize the first letter of each word
    str = str.replace(/\b\w/g, (match: string) => match.toUpperCase());
    return str;
}

let createUniqueId = () => {
  let id = uuidv4();
  return id;
};
let createReadableId = (input: any | any[]) => {
  let id = slugify(input, {
    lower: true,
    strict: true
  });
  return id;
};

const CustomHeading = (props: IHeading) => {
  return (
    <Link href={`#${props.id}`} className={props.size > 1 ? 'no-underline' : 'underline'}>
      {props.children}
    </Link>
  );
};

const Heading1 = ({ ...props }) => {
  const id = createReadableId(props.children);
  const text = props.children;
  return (
    <CustomHeading size={1} id={id}>
      <h1 id={id} role="heading" aria-level={1}>
        {text}
      </h1>
    </CustomHeading>
  );
};

const Heading2 = ({ ...props }) => {
  const id = createReadableId(props.children);
  const text = props.children;
  return (
    <CustomHeading size={2} id={id}>
      <h2 id={id} role="heading" aria-level={2}>
        {text}
      </h2>
    </CustomHeading>
  );
};

const Heading3 = ({ ...props }) => {
  const id = createReadableId(props.children);
  const text = props.children;
  return (
    <CustomHeading size={3} id={id}>
      <h3 id={id} role="heading" aria-level={3}>
        {text}
      </h3>
    </CustomHeading>
  );
};

const Heading4 = ({ ...props }) => {
  //const id = createReadableId(props.children);
  const id = createUniqueId();
  const text = props.children;
  return (
    <CustomHeading size={4} id={id}>
      <h4 id={id} role="heading" aria-level={4}>
        {text}
      </h4>
    </CustomHeading>
  );
};
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
 
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    ...components,
  }
}