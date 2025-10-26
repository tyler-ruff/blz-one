import { cn } from "@/lib/utils";

export function TypographyH1(params: {
    children: any;
    className?: string;
    id?: string;
}) {
  return (
    <h1 id={params.id} className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight text-balance", params.className || "")}>
      {params.children}
    </h1>
  )
}

export function TypographyH2(params: {
    children: any;
    className?: string;
    id?: string;
}) {
  return (
    <h2 id={params.id} className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", params.className || "")}>
      {params.children}
    </h2>
  )
}

export function TypographyH3(params: {
    children: any;
    className?: string;
    id?: string;
}) {
  return (
    <h3 id={params.id} className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", params.className || "")}>
      {params.children}
    </h3>
  )
}

export function TypographyH4(params: {
    children: any;
    className?: string;
    id?: string;
}) {
  return (
    <h4 id={params.id} className={cn("scroll-m-20 text-xl font-semibold tracking-tight", params.className || "")}>
      {params.children}
    </h4>
  )
}

export function TypographyP(params: {
    children: any;
    className?: string;
    id?: string;
}) {
  return (
    <p id={params.id} className={cn("leading-7 [&:not(:first-child)]:mt-6", params.className || "")}>
      {params.children}
    </p>
  )
}

export function TypographyBlockquote(params: {
    children: any;
    className?: string;
    id?: string;
}) {
  return (
    <blockquote id={params.id} className={cn("mt-6 border-l-2 pl-6 italic", params.className || "")}>
      {params.children}
    </blockquote>
  )
}

export function TypographyList(params: {
    items: any[];
    className?: string;
    id?: string;
}) {
  return (
    <ul id={params.id} className={cn("my-6 ml-6 list-disc [&>li]:mt-2", params.className || "")}>
        {params.items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
  )
}

