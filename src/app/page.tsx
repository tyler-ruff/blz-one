import { Metadata } from "next";
import Image from "next/image";

import BlzBreadcrumb from "@/src/app/components/breadcrumb";
import MainHeading from "@/src/app/components/heading/main";

import { NewPostForm } from "./components/posts/new";
import { ListPosts } from "./components/posts/list";

import { 
  getAuthenticatedAppForUser,
  getAuthenticatedAppForUser as getUser,
 } from "@/src/lib/firebase/serverApp";

export const metadata: Metadata = {
    title: 'Home',
}

export default async function Home() {
  const { currentUser } = await getUser();
  const { firebaseServerApp } = await getAuthenticatedAppForUser();

  return (
    <div className="max-w-3xl relative mx-auto space-y-4 px-3 md:px-0">
      <BlzBreadcrumb trail={[
        {
          label: "Home",
          active: true
        }
      ]} />

      {/*
        currentUser?.uid
      */}
      
      {/* Brand/Email Header:
      <Image 
        className="relative mx-auto select-none" 
        alt="Blazed Labs" 
        width={600} 
        height={200} 
        src="https://blazed.sirv.com/promo/Blazed-Header-600x200.png" 
      />
      */}
      <MainHeading text="Feed" />
      <NewPostForm />
      <ListPosts />
    </div>
  );
}
