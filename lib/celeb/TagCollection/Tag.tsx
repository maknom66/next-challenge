import React from "react";

import { Tag as TagType } from "~/lib/components/types";

export const Tag: React.FC<{ tag: TagType }> = ({ tag }) => (
  <div className="px-3 py-1 mb-2 mr-2 text-xs font-bold text-gray-400 bg-gray-100 rounded-full ">
    {tag.tag.name}
  </div>
);
