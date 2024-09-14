import BlogHero from "@/components/blog/BlogHero";
import BlogPosts from "@/components/blog/BlogPosts";

function page({ searchParams }) {
  const category = searchParams.category ?? "view-all";
  let page = searchParams.page ?? 1;
  page = Number(page);

  const filter = {
    category,
    page,
  };

  return (
    <div className="">
      {/* <BlogHero />
      <BlogPosts filter={filter} /> */}
    </div>
  );
}

export default page;
