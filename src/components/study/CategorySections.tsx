import React from "react";
import CategoryCard from "./CategoryCard";
import { CategorySection } from "@/utils/types/study";

import javascriptImg from "../../../public/img/tmp/javascript.png";
import typescriptImg from "../../../public/img/tmp/typescript.png";
import reactImg from "../../../public/img/tmp/react.png";
import nextjsImg from "../../../public/img/tmp/nextjs.png";
import { PageIdAndUrl } from "@/app/api/notion/pages/route";
import { get } from "@/app/api/axios";

export default async function CategorySections() {
  const { data: pages } = await get<PageIdAndUrl[]>(
    "http://localhost:3000/api/notion/pages",
  );

  const categorySections: CategorySection[] = [
    {
      id: 0,
      name: "Language & Framework",
      categories: [
        {
          id: 1,
          title: "JavaScript 마스터",
          thumbnail: javascriptImg.src,
          totalPostCount: 22,
        },
        {
          id: 2,
          title: "TypeScript 마스터",
          thumbnail: typescriptImg.src,
          totalPostCount: 15,
        },
        {
          id: 3,
          title: "React 마스터",
          thumbnail: reactImg.src,
          totalPostCount: 17,
        },
        {
          id: 4,
          title: "Next JS 마스터",
          thumbnail: nextjsImg.src,
          totalPostCount: 6,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-120px">
      {categorySections.map((section) => (
        <div key={section.id}>
          <p className="text-26px font-bold">{section.name}</p>
          <hr className="my-16px" />
          <div className="mt-24px grid grid-cols-1 gap-16px md:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => (
              <CategoryCard
                key={page.page_id}
                pageId={page.page_id}
                url={page.url}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
