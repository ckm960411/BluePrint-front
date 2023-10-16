import MemoCard from "@/components/work/components/MemoCard";
import { getAllMemos } from "@/utils/services/memo";
import { useQuery } from "@tanstack/react-query";
import { Toast } from "primereact/toast";
import React, { useRef } from "react";

interface WorkSideMemoContainerProps {}
export default function WorkSideMemoContainer({}: WorkSideMemoContainerProps) {
  const toast = useRef<Toast | null>(null);

  const { data: memos = [] } = useQuery(["get-all-memos"], getAllMemos, {
    onError: () =>
      toast.current?.show({
        severity: "error",
        summary: "에러 발생",
        detail: "메모를 불러오던 중 문제가 발생했습니다.",
      }),
  });

  return (
    <>
      <Toast ref={toast} />
      <div className="flex flex-col gap-16px">
        {memos.map((memo) => (
          <MemoCard key={memo.id} memo={memo} />
        ))}
      </div>
    </>
  );
}
