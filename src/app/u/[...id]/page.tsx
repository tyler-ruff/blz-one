//'use client'
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import { use } from 'react';

import BlzBreadcrumb from "@/src/app/components/breadcrumb";
import MainHeading from "@/src/app/components/heading/main";

import { url } from '@/src/config/app';

import SingleProfile from '@/src/app/components/profile/single';

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
/*
export const metadata: Metadata = {
    title: 'View Profile',
}
*/
export async function generateMetadata(
  { params, searchParams}: Props,
  parent: ResolvingMetadata
): Promise<Metadata>{
  const { id } = await params;
  const res = await fetch(`${url}/api/profile?uid=${id}`);
  const data = await res.json();
  if(data?.message?.includes('cannot be found')){
    redirect('/404');
  }
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: `Viewing ${data.displayName}'s Profile`,
    description: `Blazed One is an amazing new social network. ${data.displayName} and many others are on Blazed One, why aren't you?`,
    openGraph: {
      images: [data.avatar, ...previousImages]
    }
  }
}

export const dynamic = "force-dynamic";

export default function ViewProfile({
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
              label: 'View Profile',
              active: true
          }
        ]} />
      <MainHeading text="View Profile" />
      <SingleProfile uid={id} />
    </div>
  );
}