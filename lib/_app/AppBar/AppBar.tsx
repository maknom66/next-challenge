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
            <i className="ri-search-line text-gray-400 text-lg"></i>
          </div>
        </div>
      </section>
    </nav>
  );
};
