import BlogHero from "@/components/blog/BlogHero";
import BlogPosts from "@/components/blog/BlogPosts";
import Spinner from "@/components/ui/Spinner";
import { Suspense } from "react";

export const revalidate = 3600;

function page({ searchParams }) {
  const category = searchParams.category ?? "view-all";
  let page = searchParams.page ?? 1;
  page = Number(page);

  const filter = {
    category,
    page,
  };

  return (
    <div className="pb-10 lg:pb-20">
      <BlogHero />
      <Suspense fallback={<Spinner />} key={filter}>
        <BlogPosts filter={filter} />
      </Suspense>
    </div>
  );
}

export default page;
