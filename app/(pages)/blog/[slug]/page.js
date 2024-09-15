import PostBody from "@/components/post/PostBody";
import PostHero from "@/components/post/PostHero";
import { fetchPost, getAllSlugs } from "@/services/api";

export const revalidate = 0;

// This strategy is used to generate static paths for dynamic routes (ISR)
export async function generateStaticParams() {
  const slugs = await getAllSlugs();

  return slugs;
}

async function page({ params }) {
  const { slug } = params;

  const post = await fetchPost(slug);

  const heroData = {
    title: post.title,
    image: post.mainImage,
    date: post.publishedAt,
    author: post.author,
    category: post.categories[0],
  };

  return (
    <div className="">
      <PostHero data={heroData} />
      <PostBody data={post} />
    </div>
  );
}

export default page;
