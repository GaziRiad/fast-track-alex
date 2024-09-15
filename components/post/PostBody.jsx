import { urlFor } from "@/blog/lib/sanity-img";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import TableContent from "./TableContent";

const myPortableTextComponents = {
  types: {
    // image: ({ value }) => <img src={value.imageUrl} />,
    image: ({ value }) => (
      <Image
        src={urlFor(value).url()}
        alt="Image"
        width={800}
        height={800}
        className="mb-8 h-96 object-cover object-center"
      />
    ),
    callToAction: ({ value, isInline }) => <a href={value.url}>{value.text}</a>,
  },

  marks: {
    em: ({ children }) => (
      <em className="font-semibold text-[#1C1B17]">{children}</em>
    ),

    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          id=""
          className="text-neutral-800 underline underline-offset-2"
        >
          {children}
        </Link>
      );
    },
  },

  block: {
    // Ex. 1: customizing common block types
    h1: ({ children, node }) => (
      <h1
        id={node?._key}
        className="mb-6 font-display text-3xl font-medium text-[#1C1B17]"
      >
        {children}
      </h1>
    ),
    h2: ({ children, node }) => (
      <h2
        id={node?._key}
        className="mb-6 font-display text-3xl font-medium text-[#1C1B17]"
      >
        {children}
      </h2>
    ),
    h3: ({ children, node }) => (
      <h3
        id={node?._key}
        className="mb-1 font-display text-2xl font-medium text-[#1C1B17]"
      >
        {children}
      </h3>
    ),
    h4: ({ children, node }) => (
      <h4
        id={node?._key}
        className="mb-1 font-display text-xl font-medium text-[#1C1B17]"
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Styling for normal text
    normal: ({ children, index, value, next }) => {
      return (
        <p className="mb-6 text-base leading-relaxed text-[#1C1B17]/80">
          {children}
        </p>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="mb-6 flex list-disc flex-col gap-2 pl-10">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 flex list-decimal flex-col gap-2 pl-10">
        {children}
      </ol>
    ),
  },
};

function PostBody({ data }) {
  return (
    <section className="mx-auto grid max-w-[1400px] grid-cols-[30fr_70fr] gap-36 bg-white py-24">
      <TableContent headings={data.headings} />

      <div className="group text-[#1C1B17]/80">
        <PortableText value={data.body} components={myPortableTextComponents} />
      </div>
    </section>
  );
}

export default PostBody;
