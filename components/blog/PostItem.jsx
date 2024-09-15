import { urlFor } from "@/blog/lib/sanity-img";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function PostItem({ data }) {
  return (
    <article className="border-[rgb(17,17,17, 0.1)] flex h-full flex-col overflow-hidden rounded-md border bg-white">
      <div className="relative aspect-square h-[300px] w-full">
        <Image
          src={urlFor(data.mainImage).url()}
          alt={`Image of ${data.title}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-7 flex items-center gap-4 text-sm">
          {data.categories.map((category, index) => (
            <p
              key={index}
              className="rounded-sm bg-primary-700 px-2 py-1 font-medium capitalize text-white"
            >
              {category.title}
            </p>
          ))}
          <p className="text-primary-700">{data.readTime} read</p>
        </div>
        <p className="mb-2 text-2xl font-bold leading-tight text-primary-700">
          {data.title}
        </p>
        <p className="mb-6 text-primary-500">{data.summary}</p>

        <div className="mt-auto">
          <Link
            href={`/blog/${data.slug.current}`}
            className="flex w-fit items-center gap-1 rounded-[4px] border border-primary-700 px-4 py-2 underline-offset-4 transition-all duration-300 hover:underline"
          >
            <span>Read More</span>
            <span className="hidden lg:block">
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
