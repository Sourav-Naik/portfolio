import Link from "next/link";

export default function Custom404() {
  return (
    <div className="page max-w-[1000px] p-4 md:px-0 md:py-10">
      <img
        src="https://zoftware-logo.s3.ap-south-1.amazonaws.com/404.png"
        alt="not found"
        className="mx-auto"
      />
      <div className="mt-4 md:mt-10">
        <h1 className="text-[1.5rem] sm:text-[2rem] font-semibold mb-8">
          Oops! You've reached a page that doesn't exist.
        </h1>
        <Link
          href="/"
          className="text-xl sm:text-2xl font-medium rounded border px-4 py-2"
        >
          Go to home page
        </Link>
      </div>
    </div>
  );
}
