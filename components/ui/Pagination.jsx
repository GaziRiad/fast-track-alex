"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination({ count, type }) {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const activePage = Number(searchParams.get("page")) || 1;

  console.log(activePage);

  function handlePagination(page) {
    const scroll = type === "blogPage" ? true : false;
    // This WEB API is usfully especiall when dealing with multiple search params
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.replace(`${pathname}?${params}`, { scroll: scroll });
  }

  return (
    <div className="flex items-center justify-center gap-7">
      <button
        disabled={activePage === 1}
        className={`rounded-[4px] bg-white px-2 py-2 text-center text-[#999] disabled:cursor-not-allowed ${activePage === 1 ? "" : "hover:bg-accent-800 hover:font-bold hover:text-white"}`}
        onClick={() =>
          handlePagination(activePage > 1 ? activePage - 1 : activePage)
        }
      >
        <IoIosArrowBack size={22} />
      </button>
      <div className="flex items-center justify-center gap-4">
        {[...Array(count).keys()].map((item, index) => (
          <button
            onClick={() => handlePagination(index + 1)}
            key={index}
            className={`cursor-pointer rounded-[4px] bg-white px-4 py-2 text-center text-primary-700 ${activePage === index + 1 ? "!bg-accent-800 font-bold !text-white" : ""}`}
          >
            {`${index + 1 > 9 ? index + 1 : `${index + 1}`}`}
          </button>
        ))}
      </div>
      <button
        disabled={activePage === count}
        className={`rounded-[4px] bg-white px-2 py-2 text-center text-[#999] ${activePage === count ? "cursor-not-allowed" : "hover:bg-accent-800 hover:font-bold hover:text-white"}`}
        onClick={() =>
          handlePagination(activePage < count ? activePage + 1 : activePage)
        }
      >
        <IoIosArrowForward size={22} />
      </button>
    </div>
  );
}

export default Pagination;
