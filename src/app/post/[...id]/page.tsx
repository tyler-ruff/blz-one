import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import { use } from 'react';

import BlzBreadcrumb from "@/src/app/components/breadcrumb";
import MainHeading from "@/src/app/components/heading/main";

import { url } from '@/src/config/app';

import { SinglePost } from "../../components/posts/single";

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

/*
export async function generateMetadata(
    { params, searchParams}: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params;
    //const res = await fetch(`${url}/api/posts/${id}`);
    //const data = await res.json();
    //const profileRes = await fetch(`${url}/api/profile?uid=${data.author}`);
    //const authorProfile = await profileRes.json();
    //const previousImages = (await parent).openGraph?.images || [];
    return {
        title: `Viewing a single post`,
        description: ``,
        openGraph: {
        images: [...previousImages]
        }
    }
}
*/

export default function ViewPost({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params);
    return (
        <div className="max-w-6xl relative mx-auto">
          <BlzBreadcrumb trail={[
              {
                  label: "Home",
                  href: '/'
              },
              {
                  label: 'View Post',
                  active: true
              }
            ]} />
          <MainHeading text="View Post" />
          <SinglePost id={id} />
        </div>
    );
}