"use client";

import { useCollapse } from "react-collapsed";
import { IoIosArrowDown } from "react-icons/io";

function AccordionItem({ title, text }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div
      className={`rounded-lg p-5 ${isExpanded ? "bg-primary-700 text-[#F2F2F2]" : "bg-primary-50 text-primary-700"}`}
    >
      <button
        {...getToggleProps()}
        className="flex w-full items-start justify-between gap-2 text-left font-bold lg:text-xl"
      >
        <span>{title}</span>
        <span
          className={`rounded-full p-1 transition-all ${isExpanded ? "rotate-180 bg-white" : "bg-primary-700"}`}
        >
          <IoIosArrowDown
            size={16}
            color={`${isExpanded ? "#1F2937" : "#fff"}`}
          />
        </span>
      </button>
      <section {...getCollapseProps()} className="mt-4 text-base">
        {text}
      </section>
    </div>
  );
}

export default AccordionItem;
