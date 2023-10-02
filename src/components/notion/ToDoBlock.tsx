import { Block } from "@/utils/types/notion";
import React from "react";
import RichText from "./RichText";
import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs";

interface ToDoBlockProps {
  block: Block;
  children?: React.ReactNode;
}
export default function ToDoBlock({ block, children }: ToDoBlockProps) {
  const {
    to_do: { checked, rich_text },
    has_children,
  } = block;

  if (!rich_text) return <></>;

  return (
    <div>
      <p className="flex gap-8px">
        <button className="h-20px w-20px flex-shrink-0">
          {checked ? (
            <BsCheckSquareFill className="text-20px text-main" />
          ) : (
            <BsCheckSquare className="text-20px text-main" />
          )}
        </button>
        <p className={checked ? "text-gray-500 line-through" : ""}>
          <RichText richText={rich_text} />
        </p>
      </p>
      {has_children && <div className="mt-8px pl-24px">{children}</div>}
    </div>
  );
}
