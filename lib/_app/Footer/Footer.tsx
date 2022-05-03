import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex justify-center bg-white py-10">
      <div className="max-w-4xl flex flex-row items-start px-8">
        <Image
          width={50}
          height={50}
          alt="Hollowverse"
          src="/images/letter-logo.png"
          objectFit="cover"
          className="flex-1"
        />

        <div className="ml-8 flex-1">
          <span className="inline-flex items-center">
            <i className="ri-information-line text-2xl mr-2"></i>
            <p className="font-semibold">About</p>
          </span>
          <p>Hollowverse is about the important people and their beliefs.</p>

          <span className="inline-flex items-center mt-4">
            <i className="ri-mail-line text-xl mr-2"></i>
            <p className="font-semibold">Contact</p>
          </span>
          <p>
            Email us at{" "}
            <a
              href="mailto:hollowverse@hollowverse.com"
              className="text-sky-600"
            >
              hollowverse@hollowverse.com
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
