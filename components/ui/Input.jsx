"use client";

function Input({
  label,
  id,

  // register,
  // validation,
  // errors,
  onChange,
  styles,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium capitalize text-[#666]"
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        // {...register(id, validation)}
        className={`rounded-lg border border-[#ccc] bg-transparent px-4 py-3 text-sm text-neutral-900 ring-accent-700 focus:border-accent-800 focus:outline-none focus:ring-2 focus:hover:border-accent-700 ${styles}`}
      />
      {/* {errors[id] && (
        <span className="text-sm text-red-500">{errors[id].message}</span>
      )} */}
    </div>
  );
}

export default Input;
