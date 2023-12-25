import Link from "next/link";
import Graf_ena from 'src/app/_components/Graf_ena'
import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import Navbar from 'src/app/_components/Navbar'
import Predstavitev from "./_components/Predstavitev";
import Data from "./_components/Data";
import Graf_dva from "./_components/Graf_dva"
import Scidrom from "~/app/_components/Vidrom"
import SimpleForm from '~/app/_components/obrazec'; 


export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <div>
    <Navbar />
    <Predstavitev />
    <Data />
    <Scidrom/>
   </div>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
