import { fetchBlogs } from "@/services/api";
import NewsLetter from "../NewsLetter";
import Pagination from "../ui/Pagination";
import MainPost from "./MainPost";
import PostItem from "./PostItem";
import { TOTAL_POSTS_BLOG } from "@/lib/constants";

async function BlogPosts({ filter }) {
  const data = await fetchBlogs(filter, TOTAL_POSTS_BLOG);

  const Posts = data.posts;

  const count = data.count;
  const totalPages = Math.ceil(count / TOTAL_POSTS_BLOG);

  const firstPost = Posts[0];

  if (Posts.length < 1) return null;

  return (
    <section className="px-5 font-display">
      <div className="mx-auto mb-10 max-w-[1400px] lg:mb-20">
        <MainPost data={firstPost} />

        <div className="mb-10 grid grid-cols-1 gap-x-8 gap-y-4 lg:mb-20 lg:grid-cols-3 lg:gap-y-16">
          {Posts.slice(0).map((post, index) => {
            if (index === 0) return null;
            return (
              <div key={index}>
                <PostItem data={post} />
              </div>
            );
          })}
        </div>
        <Pagination type="blogPage" count={totalPages} />
      </div>
      <NewsLetter />
    </section>
  );
}

export default BlogPosts;
