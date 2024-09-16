import { urlFor } from "@/blog/lib/sanity-img";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { LuArrowRight } from "react-icons/lu";

function PostHero({ data }) {
  return (
    <section className="bg-[#EFEFEF] px-5 text-[#1C1B17]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 py-12 lg:grid-cols-2 lg:gap-14 lg:py-16">
        <div>
          <div className="mb-12 flex items-center gap-3 text-sm text-[#1C1B17]/80 transition-all hover:text-[#1C1B17]">
            <Link href="#">Resources</Link>
            <LuArrowRight />
            <Link href="/blog">Articles</Link>
            <LuArrowRight />
            <Link href={`/blog?category=${data.category.slug.current}`}>
              {data.category.title}
            </Link>
          </div>
          <p className="mb-2 text-sm text-[#1C1B17]/60 lg:mb-4">
            {format(new Date(data.date), "MMMM d, yyyy")}
          </p>
          <h1 className="mb-6 font-display text-3xl font-bold lg:text-4xl">
            {data.title}
          </h1>

          <div className="flex items-center gap-2">
            <Image
              src={urlFor(data.author.image).url()}
              alt={`Image of ${data.author.name}`}
              width={400}
              height={400}
              className="h-10 w-10 rounded-full object-cover object-center"
            />
            <p className="text-sm capitalize">
              <em>{data.author.name}</em>
            </p>
          </div>
        </div>
        <div className="relative aspect-square h-[350px] w-full overflow-hidden rounded-lg">
          <Image
            src={urlFor(data.image).url()}
            alt={`Image of ${data.title}`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default PostHero;
