function NewsLetter() {
  return (
    <section className="border-[rgb(17,17,17, 0.05)] mx-auto grid max-w-[1400px] grid-cols-1 rounded-md border bg-white text-primary-700 lg:grid-cols-[60fr_40fr]">
      <div className="bg-newsletter-bg relative bg-cover px-3 py-5 lg:px-20 lg:py-[90px]">
        <p className="mb-2 text-2xl font-bold lg:mb-6 lg:text-[40px]">
          Stay up to date !
        </p>
        <p className="lg:text-lg">
          Subscribe to our newsletter to get inbox notifications.
        </p>
      </div>
      <div className="flex h-full flex-col justify-center px-3">
        <p className="mb-2 lg:mb-4">Sign up to our newsletter ↓</p>
        <div className="mb-5 flex max-w-lg items-center lg:mb-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-[rgb(17,17,17, 0.11)] w-full rounded-sm border bg-[#F9FCFF] px-3 py-2 outline-none placeholder:text-[#111]/40 focus:border-accent-700"
          />
          <button className="border border-accent-800 bg-accent-800 px-6 py-2 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
