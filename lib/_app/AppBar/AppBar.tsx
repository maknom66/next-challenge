import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AppBar = () => {
  return (
    <nav className="flex justify-center p-6 bg-slate-50">
      <section>
        <div>
          <Link passHref href="/">
            <a>
              <Image
                src="/images/logo.svg"
                width={250}
                height={30}
                alt="Hollowverse"
                layout="fixed"
              />
            </a>
          </Link>
        </div>

        <div>
          {/* Search input */}
          <div className="flex flex-row items-center justify-between p-2 mt-2 bg-white rounded-lg">
            <input
              type="text"
              className="focus:outline-none"
              placeholder="Search for a celebrity"
            />
            <svg
              className="w-4 h-4 text-gray-400 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="4px"
              height="4px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </div>
        </div>
      </section>
    </nav>
  );
};
