import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-5xl py-16 border-t border-zinc-150">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <img
            src="/patrick.png"
            alt="Patrick Pascual"
            className="h-10 w-10 rounded-full border border-zinc-150"
          />
          <p className="text-sm max-w-2xl">
            <span className="font-medium">
              Made by{" "}
              <Link
                href="https://x.com/_patrickpc"
                target="_blank"
                className="hover:underline"
              >
                Patrick.
              </Link>
            </span>{" "}
            Originally developed for my own needs, I've now made this app
            available to everyone. Please note that it's an independent project,
            not affiliated with Anthropic.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8">
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
        </div>
      </div>
    </footer>
  );
}
