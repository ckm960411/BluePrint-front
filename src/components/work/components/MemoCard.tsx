import IconButton from "@/components/components/IconButton";
import { getDayByAsiaSeoulFormat } from "@/utils/common";
import { ColorKey, Colors } from "@/utils/common/color";
import { QueryKeys } from "@/utils/common/query-keys";
import { bookmarkMemo, checkMemo, deleteMemo } from "@/utils/services/memo";
import { Memo } from "@/utils/types/memo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";
import {
  BsBookmark,
  BsCheckLg,
  BsFillBookmarkFill,
  BsTrash,
} from "react-icons/bs";

interface MemoCardProps {
  memo: Memo;
}
export default function MemoCard({ memo }: MemoCardProps) {
  const DEFAULT_COLOR: ColorKey = "yellow";
  const { color, isChecked, isBookmarked, title, content, createdAt } = memo;

  const theme: ColorKey = (color as ColorKey) ?? DEFAULT_COLOR;

  const queryClient = useQueryClient();

  const { mutate: deleteMemoRequest } = useMutation(
    ["delete-memo"],
    (id: number) => deleteMemo(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.getAllMemos);
      },
    },
  );

  const { mutate: bookmarkMemoRequest } = useMutation(
    ["bookmark-memo"],
    ({ id, bookmark }: { id: number; bookmark: boolean }) =>
      bookmarkMemo(id, bookmark),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.getAllMemos);
      },
    },
  );

  const { mutate: checkMemoRequest } = useMutation(
    ["check-memo"],
    ({ id, check }: { id: number; check: boolean }) => checkMemo(id, check),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.getAllMemos);
      },
    },
  );

  return (
    <div
      className="flex w-full flex-col gap-8px rounded-r-[10px] border-l-4 border-green-500 bg-green-50 p-16px"
      style={{
        borderColor: Colors[theme][500],
        backgroundColor: Colors[theme][50],
      }}
    >
      <div className="flex-between">
        <p className="truncate-1-lines text-16px font-bold text-gray-800">
          {title}
        </p>
        <div className="flex items-center gap-8px">
          <IconButton
            onClick={() => checkMemoRequest({ id: memo.id, check: !isChecked })}
            className="rounded-md bg-transparent text-16px hover:bg-transparent"
            w={24}
          >
            <BsCheckLg
              className={isChecked ? "text-green-500" : "text-gray-800"}
            />
          </IconButton>
          <IconButton
            onClick={() =>
              bookmarkMemoRequest({ id: memo.id, bookmark: !isBookmarked })
            }
            className="rounded-md bg-transparent text-16px hover:bg-transparent"
            w={24}
          >
            {isBookmarked ? (
              <BsFillBookmarkFill className="text-red-500" />
            ) : (
              <BsBookmark className="text-gray-800" />
            )}
          </IconButton>
          <IconButton
            onClick={() => deleteMemoRequest(memo.id)}
            className="rounded-md bg-transparent text-18px hover:bg-transparent"
            w={24}
          >
            <BsTrash />
          </IconButton>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-14px leading-[150%] text-gray-700"
      />
      <p className="text-14px text-gray-600">
        {format(new Date(createdAt), "yyyy.MM.dd")} (
        {getDayByAsiaSeoulFormat(new Date(createdAt))})
      </p>
    </div>
  );
}
