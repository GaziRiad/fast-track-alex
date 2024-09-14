import { urlFor } from "@/blog/lib/sanity-img";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function MainPost({ data }) {
  return (
    <div className="border-[rgb(17,17,17, 0.1)] mb-16 grid grid-cols-1 rounded-md border bg-white lg:grid-cols-[55fr_45fr]">
      <div className="relative aspect-square h-[250px] w-full lg:h-[500px]">
        <Image
          src={urlFor(data.mainImage).url()}
          alt={`Image of ${data.title}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-4 lg:px-14">
        <div className="mb-4 flex items-center gap-4 text-sm lg:mb-7">
          <div className="flex items-center gap-1">
            {data.categories.map((category, index) => (
              <p
                key={index}
                className="rounded-sm bg-primary-700 px-2 py-1 font-medium capitalize text-white"
              >
                {category.title}
              </p>
            ))}
          </div>
          <p className="text-primary-700">{data.readTime} read</p>
        </div>
        <p className="mb-2 text-2xl font-bold leading-tight text-primary-700 lg:mb-4 lg:text-[40px]">
          {data.title}
        </p>
        <p className="mb-6 text-primary-500 lg:mb-20">{data.summary}</p>

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
  );
}

export default MainPost;
