import React from "react";

import { Tag } from "./Tag";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <div>
      <div className="flex flex-wrap justify-center p-2">
        {tags.regular.map((t) => (
          <Tag key={t.tag.name} tag={t} />
        ))}
      </div>

      {tags.lowConfidence.length > 0 && (
        <div className="flex flex-wrap justify-center p-2">
          <p className="mr-2 text-gray-500 font-semibold text-sm">Maybe</p>
          {tags.lowConfidence.map((t) => (
            <Tag key={t.tag.name} tag={t} />
          ))}
        </div>
      )}
    </div>
  );
};
