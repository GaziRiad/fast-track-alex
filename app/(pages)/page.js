import BlogSection from "@/components/Home/BlogSection";
import Contact from "@/components/Home/Contact";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import Licensing from "@/components/Home/Licensing";
import Partners from "@/components/Home/Partners";
import Process from "@/components/Home/Process";
import Rmo from "@/components/Home/Rmo";
import Testimonials from "@/components/Home/Testimonials";
import WhyChoose from "@/components/Home/WhyChoose";
import { Suspense } from "react";

export const revalidate = 3600;

function page({ searchParams }) {
  const category = "view-all";
  let page = searchParams.page ?? 1;
  page = Number(page);

  const filter = {
    category,
    page,
  };

  return (
    <div>
      <Hero />
      <Partners />
      <Rmo />
      <WhyChoose />
      <Process />
      <Testimonials />
      <Licensing />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogSection filter={filter} />
      </Suspense>
      <FAQ />
      <Contact />
    </div>
  );
}

export default page;
