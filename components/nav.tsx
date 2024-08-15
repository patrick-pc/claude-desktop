import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between gap-4 px-6 md:px-24 py-6">
      <Link href="/">
        <img src="/icon.png" alt="Icon" className="h-8 w-8" />
      </Link>

      <Link
        href="https://x.com/_patrickpc"
        target="_blank"
        className="bg-transparent hover:bg-zinc-100 rounded-lg h-9 w-9 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#141413] h-5 w-5"
        >
          <path
            d="M14.94 2h2.715l-5.93 6.777L18.7 18h-5.462L8.96 12.407 4.065 18H1.35l6.342-7.25L1 2h5.6l3.868 5.113L14.94 2Zm-.952 14.375h1.504L5.784 3.54H4.17l9.818 12.836Z"
            fill="currentColor"
          ></path>
        </svg>
      </Link>
    </nav>
  );
}
