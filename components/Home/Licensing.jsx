import Button from "../ui/Button";

function Licensing() {
  return (
    <section className="bg-overlay relative bg-home-licensing bg-cover bg-center px-5">
      <div className="relative z-10 mx-auto max-w-xl py-20 text-center lg:py-40">
        <h2 className="mb-6 font-display text-2xl font-bold text-white lg:text-4xl">
          About FastTrack Licensing
        </h2>
        <p className="mb-6 text-base leading-relaxed tracking-wide text-[#F2F2F2]">
          FastTrack Licensing, established in 2020, is dedicated to streamlining
          the contractor licensing process in California. Our team comprises
          industry veterans and former licensing board members with decades of
          combined experience. We leverage our expertise to help aspiring
          contractors navigate the complexities of licensing regulations and
          accelerate their path to becoming licensed professionals.
        </p>
        <div className="mx-auto w-fit">
          <Button>Get Started Now</Button>
        </div>
      </div>
    </section>
  );
}

export default Licensing;
