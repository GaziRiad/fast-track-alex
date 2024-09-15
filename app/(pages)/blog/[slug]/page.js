import { fetchPost, getAllSlugs } from "@/services/api";
import { PortableText } from "next-sanity";

export const revalidate = 3600;

// This strategy is used to generate static paths for dynamic routes (ISR)
export async function generateStaticParams() {
  const slugs = await getAllSlugs();

  return slugs;
}

async function page({ params }) {
  const { slug } = params;

  const post = await fetchPost(slug);
  // console.log(post);

  return (
    <div className=" max-w-7xl mx-auto  py-60">
      <h1 className=" text-5xl text-center mb-20 text-primary-700 font-bold font-display ">
        {slug}
      </h1>
      <PortableText value={post.body} />
    </div>
  );
}

export default page;
