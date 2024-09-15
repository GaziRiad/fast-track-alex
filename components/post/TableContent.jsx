"use client";

import Link from "next/link";
import { useState } from "react";

const getChildrenText = (props) =>
  props.children
    .map((node) => (typeof node === "string" ? node : node.text || ""))
    .join("");

function TableContent({ headings }) {
  const [activeLink, setActiveLink] = useState("");

  return (
    <aside className="sticky top-4 hidden max-h-[calc(100vh-6rem)] overflow-y-auto lg:block">
      <h3 className="mb-4 text-base font-bold">In this article</h3>
      <div className="flex flex-col gap-4 border-t border-[#DADADA] pt-4 text-[#1C1B17]/60">
        {headings.map((heading, index) => (
          <Link
            key={index}
            href={"#" + heading._key}
            className={`transition-all hover:text-[#1C1B17] ${
              activeLink === heading._key
                ? "ml-2 bg-primary-200 p-1 text-primary-500"
                : ""
            }`}
            onClick={() => setActiveLink(heading._key)}
          >
            {getChildrenText(heading)}
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default TableContent;
