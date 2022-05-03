import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Fact as TFact } from "~/lib/components/types";

const random_elon_musk_images = [
  "https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/04/Elon_Musk_-_The_Summit_2013.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Elon_Musk_at_a_Press_Conference.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/ec/Elon_Musk_%283017880307%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/92/Elon_Musk_at_TED_2017.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Elon_Musk_at_the_SpaceX_CRS-8_post-launch_press_conference_%2825711174644%29.jpg",
];

export const Fact: React.FC<{ value: TFact }> = ({ value }) => {
  const {
    celeb: { name },
  } = useCelebContext();

  const getRandomIndex = (min = 0, max = 5) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="p-4 mt-4 bg-white rounded-lg drop-shadow-xl">
      <div>
        {(value.type === "quote" && (
          <div>
            <span className="inline-flex items-center">
              <Image
                height={40}
                width={40}
                objectFit="cover"
                className="rounded-full flex-1"
                src={random_elon_musk_images[getRandomIndex()]}
                alt="elon musk"
              />
              <p className="font-semibold ml-4 flex-1">
                {value.context}, {name} said
              </p>
            </span>
            <div className="flex flex-row my-4">
              <i className="text-slate-400 ri-double-quotes-l" />
              <blockquote>
                <p className="ml-2 text-slate-500">{value.quote}</p>
              </blockquote>
            </div>
          </div>
        )) ||
          (value.type == "fact" && (
            <div className="mb-4">
              <p className="text-slate-500">{value.content}</p>
            </div>
          ))}
      </div>

      <div>
        {value.tags.map((t) => {
          return (
            <p key={t.tag.name} className="text-sm font-light text-gray-400">
              # {t.isLowConfidence && "Possibly "}
              {t.tag.name}
            </p>
          );
        })}
      </div>

      <div className="flex flex-row items-end justify-between mt-8">
        <p className="text-sm font-light">{value.date}</p>
        <div className="flex flex-row items-center">
          <span className="inline-flex items-center pl-2 pr-3 py-1 mr-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg ">
            <i className="ri-global-line mr-1 text-base" />
            <Link href={value.source}>Source</Link>
          </span>
          <span className="inline-flex items-center pl-2 pr-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg">
            <i className="ri-link mr-1 text-base" />
            <Link href={value.forumLink}>Forum link</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
