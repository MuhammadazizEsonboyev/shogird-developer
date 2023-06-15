/* eslint-disable react/no-unescaped-entities */
import VideoPlayer from "../Video"
import "./header.css"

export default function Header() {


  return (
    <>
      <div
        className="bg-neutral-50  w-[80%] bg-gray-50 relative rounded-3xl bg-gray-50 h-full lg:px-16 max-w-screen-xxl md:px-16 mx-auto px-4 sm:px-6 xl:px-24 m-auto rounded-s-xl mt-4 px-6 py-20 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
        <h1 className="mb-6 text-5xl font-bold text-emerald-500">Dasturlashga oid kasblarni o’rgatamiz</h1>
        <VideoPlayer/>
        <h3 className="mb-8 text-xl font-normal ">Shogird Developer onlayn ta'lim platformasi</h3>
        <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
          <span>Davom Etish</span>
        </button>
      </div>
    </>
  )
}
