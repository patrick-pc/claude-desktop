"use client";

import * as seline from "@seline-analytics/web";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import Nav from "@/components/nav";

const downloadAppleSilicon =
  process.env.NEXT_PUBLIC_DOWNLOAD_APPLE_SILICON || "";
const downloadIntel = process.env.NEXT_PUBLIC_DOWNLOAD_INTEL || "";
const trackAppleSilicon = "selected_apple_silicon";
const trackIntel = "selected_intel";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex min-h-screen flex-col items-center justify-between py-20 px-6">
        <section className="flex flex-col items-center justify-center gap-4 text-center tracking-wider">
          <h1 className="text-5xl md:text-7xl font-medium font-serif">
            Claude on your desktop
          </h1>
          <p className="text-xl md:text-2xl font-serif">
            Faster access to Claude. A customizable key combination
            <br /> opens Claude from any screen on your desktop.
          </p>
        </section>

        <section className="flex flex-col items-center justify-center gap-6 mt-10 tracking-wider">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href={downloadAppleSilicon}
              onClick={() => seline.track(trackAppleSilicon)}
              className="bg-[#141413] hover:bg-[#525251] text-[#FAFAF8] py-4 px-8 rounded-xl"
              rel="noopener noreferrer"
            >
              Download for Apple Silicon
            </Link>

            <Link
              href={downloadIntel}
              onClick={() => seline.track(trackIntel)}
              className="bg-[#FAFAF8] border border-[#141413] hover:text-[#828179] hover:border-[#828179] py-4 px-8 rounded-xl"
              rel="noopener noreferrer"
            >
              Download for Intel
            </Link>
          </div>

          <div className="text-center text-sm text-zinc-500/80 tracking-wider">
            No subscriptions. No in-app purchases.
            <br />
            macOS 10 or higher is recommended.
          </div>
        </section>

        <section className="rounded-2xl relative max-w-5xl my-10 mt-20 md:my-20">
          <div className="absolute inset-0 w-full h-8 bg-white/50 px-4 md:px-6 py-2 justify-between flex items-center text-xs font-medium">
            <svg
              viewBox="0 0 22 27"
              xmlns="http://www.w3.org/2000/svg"
              height="15"
            >
              <path
                d="M15.946 6.528c-.675 0-1.308.102-1.902.305-.593.203-1.128.409-1.605.618-.477.209-.895.313-1.256.313-.372 0-.788-.099-1.247-.296-.46-.197-.951-.392-1.474-.583a4.836 4.836 0 0 0-1.675-.287c-1.117 0-2.196.304-3.237.914C2.51 8.12 1.657 9.02.994 10.21S0 12.87 0 14.623c0 1.636.276 3.258.829 4.865.552 1.608 1.218 2.968 1.997 4.083.675.94 1.332 1.746 1.972 2.42C5.438 26.662 6.182 27 7.03 27c.558 0 1.044-.093 1.457-.279.413-.185.849-.37 1.308-.557.46-.185 1.032-.278 1.719-.278.71 0 1.273.09 1.692.27.419.18.826.36 1.221.54.396.18.902.27 1.518.27.919 0 1.707-.349 2.364-1.045a19.36 19.36 0 0 0 1.84-2.28c.652-.952 1.12-1.817 1.405-2.595.285-.777.433-1.19.445-1.236a77.33 77.33 0 0 1-.584-.313c-.367-.197-.786-.508-1.257-.931-.47-.424-.884-.984-1.238-1.68-.355-.696-.532-1.544-.532-2.542 0-.87.14-1.622.418-2.254.28-.633.605-1.155.977-1.567.372-.412.71-.725 1.012-.94a7.78 7.78 0 0 0 .506-.374c-.605-.87-1.276-1.494-2.015-1.871-.738-.378-1.416-.607-2.032-.688-.617-.081-1.053-.122-1.309-.122Zm-.96-2.21a6.773 6.773 0 0 0 1.03-1.75A5.321 5.321 0 0 0 16.417.54c0-.21-.017-.39-.052-.54-.675.023-1.384.226-2.129.61a5.92 5.92 0 0 0-1.849 1.444c-.384.43-.727.972-1.03 1.628a4.792 4.792 0 0 0-.453 2.028c0 .104.006.203.017.296.012.093.024.156.035.191.117.024.239.035.367.035.616 0 1.268-.183 1.954-.548a5.639 5.639 0 0 0 1.71-1.367Z"
                fill="currentColor"
              ></path>
            </svg>

            <div className="flex items-center gap-2 md:gap-4">
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M3.92405 13.2962L7.85823 11.0903L7.92405 10.8981L7.85823 10.7918H7.66582L7.0076 10.7513L4.75949 10.6906L2.81013 10.6097L0.921519 10.5085L0.44557 10.4073L0 9.82039L0.0455696 9.52694L0.44557 9.25879L1.01772 9.30939L2.28354 9.3954L4.18228 9.52694L5.55949 9.60789L7.6 9.82039H7.92405L7.96962 9.68884L7.85823 9.60789L7.77215 9.52694L5.8076 8.19631L3.68101 6.78978L2.56709 5.98027L1.96456 5.57045L1.66076 5.18593L1.52911 4.34607L2.07595 3.74399L2.81013 3.79459L2.99747 3.84518L3.74177 4.4169L5.33165 5.64634L7.4076 7.1743L7.71139 7.42727L7.83291 7.34126L7.8481 7.28055L7.71139 7.05287L6.58228 5.01391L5.37722 2.93954L4.84051 2.07943L4.69873 1.56337C4.6481 1.35087 4.61266 1.17379 4.61266 0.956236L5.23544 0.111308L5.57975 0L6.41013 0.111308L6.75949 0.414875L7.27595 1.59373L8.11139 3.45054L9.40759 5.97521L9.78734 6.72401L9.98987 7.41715L10.0658 7.62965H10.1975V7.50822L10.3038 6.08652L10.5013 4.34101L10.6937 2.09461L10.7595 1.46218L11.0734 0.703263L11.6962 0.293448L12.1823 0.526183L12.5823 1.0979L12.5266 1.46724L12.2886 3.01037L11.8228 5.42879L11.519 7.04781H11.6962L11.8987 6.84543L12.719 5.75765L14.0962 4.03744L14.7038 3.35441L15.4127 2.60056L15.8684 2.24134H16.7291L17.362 3.18239L17.0785 4.15381L16.1924 5.277L15.4582 6.22818L14.4051 7.64483L13.7468 8.77814L13.8076 8.86921L13.9646 8.85403L16.3443 8.34809L17.6304 8.11536L19.1646 7.85226L19.8582 8.17607L19.9342 8.50493L19.6608 9.17784L18.0203 9.5826L16.0962 9.96711L13.2304 10.6451L13.1949 10.6704L13.2354 10.721L14.5266 10.8424L15.0785 10.8728H16.4304L18.9468 11.06L19.6051 11.4951L20 12.0263L19.9342 12.4311L18.9215 12.9471L17.5544 12.6233L14.3646 11.8644L13.2709 11.5912H13.119V11.6823L14.0304 12.5727L15.7013 14.0804L17.7924 16.0233L17.8987 16.5039L17.6304 16.8834L17.3468 16.8429L15.5089 15.4617L14.8 14.8394L13.1949 13.4885H13.0886V13.6302L13.4582 14.1715L15.4127 17.106L15.5139 18.0066L15.3722 18.3L14.8658 18.4771L14.3089 18.3759L13.1646 16.7721L11.9848 14.9658L11.0329 13.3468L10.9165 13.4126L10.3544 19.4586L10.0911 19.7673L9.48354 20L8.97722 19.6155L8.70886 18.9932L8.97722 17.7637L9.30127 16.1599L9.56456 14.8849L9.80253 13.3013L9.9443 12.7751L9.93418 12.7397L9.81772 12.7549L8.62279 14.3941L6.80506 16.848L5.36709 18.386L5.02278 18.5226L4.42532 18.214L4.48101 17.6625L4.81519 17.1718L6.80506 14.642L8.00506 13.0736L8.77975 12.168L8.77468 12.0364H8.72911L3.44304 15.4667L2.50127 15.5882L2.0962 15.2087L2.14684 14.5864L2.33924 14.384L3.92911 13.2912L3.92405 13.2962Z"
                  fill="#141413"
                />
              </svg>
              <span>{moment(new Date()).format("ddd DD MMM hh:mm A")}</span>
            </div>
          </div>

          <Image
            src="/hero.webp"
            alt="Claude"
            width={1920}
            height={1080}
            className="w-full rounded-2xl"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
          />

          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <Image
              src="/icon.webp"
              alt="Desktop Icon"
              width={160}
              height={160}
              className="size-20 md:size-40 md:-mb-20 -mb-10"
            />
          </div>
        </section>

        <section className="my-16 md:my-32 tracking-wider">
          <h2 className="text-3xl md:text-5xl font-medium font-serif text-center">
            Ask anything, anytime, anywhere.
          </h2>
        </section>

        <section className="flex items-center justify-center tracking-wider w-full max-w-5xl border md:h-80 bg-[#F0EFEA] rounded-xl p-4 py-8 md:p-16 flex-col md:flex-row gap-8 md:gap-16">
          <div className="w-full flex-col flex items-center justify-center h-full max-w-lg">
            <div className="space-y-4">
              <p className="text-lg md:text-xl">Always on Claude</p>
              <p className="text-sm md:text-base">
                Faster access to Claude. A customizable key combination opens
                Claude from any screen on your desktop.
              </p>
            </div>
          </div>
          <Image
            src="/hotkey.webp"
            alt="Hotkey"
            width={320}
            height={320}
            className="w-80"
          />
        </section>

        <section className="flex items-center justify-center tracking-wider w-full max-w-5xl border md:h-80 bg-[#141413] text-[#F0EFEA] rounded-xl p-4 py-8 md:p-16 flex-col gap-10 mt-20">
          <h2 className="text-xl md:text-3xl font-medium font-serif text-center">
            Supercharge your workflow with AI on your desktop
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href={downloadAppleSilicon}
              onClick={() => seline.track(trackAppleSilicon)}
              className="bg-[#FAFAF8] hover:bg-[#FAFAF8]/80 text-[#141413] py-4 px-8 rounded-xl"
              rel="noopener noreferrer"
            >
              Download for Apple Silicon
            </Link>

            <Link
              href={downloadIntel}
              onClick={() => seline.track(trackIntel)}
              className="bg-[#141413] border border-[#FAFAF8] hover:text-[#FAFAF8]/80 hover:border-[#FAFAF8]/80 py-4 px-8 rounded-xl"
              rel="noopener noreferrer"
            >
              Download for Intel
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
