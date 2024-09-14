import { fetchCategories } from "@/services/api";
import BlogNav from "./BlogNav";

import { BsStars } from "react-icons/bs";

async function BlogHero() {
  const categories = await fetchCategories();

  return (
    <section className="bg-blog-bg relative bg-center px-5 pb-16 pt-12 text-center font-display lg:pt-20">
      <div className="blog-overlay"></div>
      <div className="relative z-10 mx-auto mb-12 max-w-2xl">
        <h4 className="mb-3 flex items-center justify-center gap-1 text-base font-medium text-primary-700">
          <span>Blog</span>
          <span>
            <BsStars />{" "}
          </span>
        </h4>
        <h1 className="mb-4 text-3xl font-bold text-primary-700 lg:text-[64px]">
          News and insights
        </h1>
        <p className="text-lg text-[#111]/60">
          Discover insights on contracting, licensing, and RMOs. Our blog
          provides expert analysis on industry trends, regulatory updates, and
          licensing strategies across states.
        </p>
      </div>

      <BlogNav data={categories} />
    </section>
  );
}

export default BlogHero;
