import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Pagination from "../ui/Pagination";
import { fetchBlogs } from "@/services/api";
import { TOTAL_POSTS_HOME } from "@/lib/constants";
import { format } from "date-fns";
import { urlFor } from "@/blog/lib/sanity-img";

async function BlogSection({ filter }) {
  const data = await fetchBlogs(filter, TOTAL_POSTS_HOME);

  const Posts = data.posts;
  const count = data.count;
  const totalPages = Math.ceil(count / 3);

  if (Posts.length < 1) return null;

  return (
    <section className="mx-auto grid max-w-[1400px] px-5 py-10 lg:py-20">
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-[#333] lg:text-4xl">
        Blog
      </h2>
      <div className="mb-10 grid grid-cols-1 gap-5 lg:mb-14 lg:grid-cols-3">
        {Posts.map((post, index) => (
          <div
            key={index}
            className="flex h-full flex-col overflow-hidden bg-white shadow-homeBlog"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={`Image describing ${post.title}`}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
            <div className="flex flex-1 flex-col px-4 py-6">
              <div className="mb-2 flex items-center justify-between text-sm font-medium">
                <p className="flex items-center gap-1 capitalize">
                  <FaUser size={16} color="#1F2937" />
                  <span>{post.author.name}</span>
                </p>
                <p className="flex items-center gap-1">
                  <FaCalendar size={16} color="#1F2937" />
                  <span>
                    {format(new Date(post.publishedAt), "dd MMM, yyyy")}
                  </span>
                </p>
              </div>
              <p className="mb-2 text-xl font-semibold text-primary-700">
                {post.title.length > 35
                  ? `${post.title.slice(0, 35)} ...`
                  : post.title}
              </p>
              <p className="mb-6 h-24 text-base leading-relaxed text-[#666]">
                {post.summary}
              </p>
              <div className="mt-auto flex justify-center lg:justify-start">
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="hover:bg-primary-600 flex items-center gap-3 rounded-lg bg-primary-700 px-6 py-3 font-semibold text-white underline-offset-2 transition-all lg:gap-1 lg:bg-white lg:px-0 lg:py-0 lg:text-primary-700 lg:hover:underline"
                >
                  <span>Read More</span>
                  <IoIosArrowForward size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination count={totalPages} type="blogPage" />
    </section>
  );
}

export default BlogSection;
