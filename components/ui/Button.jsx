function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="transition-allpx-4 w-full rounded-md bg-accent-700 px-6 py-4 font-bold capitalize text-primary-700 duration-300 hover:bg-accent-700/90"
    >
      {children}
    </button>
  );
}

export default Button;
