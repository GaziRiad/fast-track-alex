"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

function BlogNav({ data }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "view-all";

  const [selectedCategory, setSelectedCategory] = useState(category);

  const router = useRouter();

  const Categories = [
    { value: "view-all", label: "View All" },
    ...data.map((category) => ({
      value: category.slug.current,
      label: category.title,
    })),
  ];

  return (
    <nav>
      <div className="border-[rgb(17,17,17, 0.08)] relative z-10 mx-auto hidden w-fit rounded-md border bg-white p-2 py-3 lg:block">
        <ul className="flex justify-center gap-2">
          {Categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/blog?category=${category.value}`}
                scroll={false}
                onClick={() => setSelectedCategory(category.value)}
                className={`rounded-[4px] px-4 py-2 text-base transition-all duration-200 ${selectedCategory === category.value ? "bg-accent-800 font-semibold text-white hover:bg-accent-800/90" : "text-primary-700"}`}
              >
                {category.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 lg:hidden">
        <Select
          options={Categories}
          onChange={(selected) =>
            router.replace(`/blog?category=${selected.value}`, {
              scroll: false,
            })
          }
          defaultValue={Categories.filter(
            (category) => category.value === selectedCategory,
          )}
          components={animatedComponents}
          styles={{
            option: (styles, { isDisabled, isSelected }) => {
              return {
                ...styles,
                ":active": {
                  ...styles[":active"],
                  backgroundColor: !isDisabled
                    ? isSelected
                      ? "#C9991D"
                      : "#C9991D"
                    : undefined,
                },
              };
            },
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "rgb(246, 186, 31, 0.4)",
              primary: "#F6BA1F",
            },
          })}
        />
      </div>
    </nav>
  );
}

export default BlogNav;
