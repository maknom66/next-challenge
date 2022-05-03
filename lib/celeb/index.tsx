import React from "react";
import { CelebPageProps } from "~/lib/components/types";
import { Facts } from "~/lib/celeb/Facts";
import { PageHead } from "~/lib/celeb/PageHead/PageHead";
import { TagCollection } from "~/lib/celeb/TagCollection";
import { TopSection } from "~/lib/celeb/TopSection/TopSection";

export const Celeb = (p: CelebPageProps) => {
  return (
    <main className="flex justify-center p-4 pb-14 bg-slate-50">
      <div className="max-w-4xl">
        <PageHead />

        <div className="flex flex-col items-center p-2 mt-20 bg-white rounded-lg drop-shadow-xl">
          <TopSection />

          {p.celeb.tags && <TagCollection />}
        </div>

        {p.celeb.facts && <Facts />}
      </div>
    </main>
  );
};

export default Celeb;
