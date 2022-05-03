import Image from "next/image";
import React from "react";
import { sanityImage } from "~/lib/components/sanityio";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";

export const TopSection = () => {
  const context = useCelebContext();

  const picture = context.celeb.picture || context.placeholderImage;

  return (
    <section>
      <header>
        <div className="flex flex-col items-center">
          <div className="-mt-20">
            <Image
              className="rounded-full"
              blurDataURL={picture.metadata.lqip}
              placeholder="blur"
              src={sanityImage(picture).width(150).height(150).url()}
              width={150}
              height={150}
              priority
              alt={context.celeb.name}
              objectFit="cover"
            />
          </div>
          <div className="my-4">
            <h1 className="text-center">
              <span className="text-lg font-semibold text-gray-500">
                Religion, politics, and ideas of
              </span>
              <br />{" "}
              <span className="text-xl font-extrabold text-gray-800 ">
                {context.celeb.name.toUpperCase()}
              </span>
            </h1>
          </div>
        </div>
      </header>
    </section>
  );
};
