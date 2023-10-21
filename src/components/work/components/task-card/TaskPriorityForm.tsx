import Unicode from "@/components/components/Unicode";
import { useUpdateTaskMutation } from "@/utils/hooks/react-query/useUpdateTaskMutation";
import { Priority } from "@/utils/types";
import { Task } from "@/utils/types/task";
import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { Toast } from "primereact/toast";
import React, { useRef, useState } from "react";

interface TaskPriorityFormProps {
  task: Task;
}
export default function TaskPriorityForm({ task }: TaskPriorityFormProps) {
  const { id, priority } = task;
  const toast = useRef<Toast>(null);

  const [editing, setEditing] = useState(false);

  const PRIORITIES: Priority[] = [1, 2, 3, 4, 5];

  const handleOpen = () => setEditing(true);
  const handleClose = () => setEditing(false);

  const { mutate: updateTaskRequest } = useUpdateTaskMutation(id, {
    onSuccess: handleClose,
    onError: () => {
      toast.current?.show({
        severity: "error",
        summary: "문제 발생",
        detail: "우선순위 수정 중 문제가 발생했습니다.",
      });
      handleClose();
    },
  });

  return (
    <>
      <Toast ref={toast} />
      <div className="flex h-14px items-center gap-8px">
        <p className="truncate-1-lines w-80px text-14px font-medium text-gray-600">
          우선순위
        </p>
        <Popover
          isOpen={editing}
          onClose={handleClose}
          placement="bottom-start"
        >
          <PopoverTrigger>
            <div>
              <PriorityButton onClick={handleOpen} priority={priority} />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-200px">
            <div className="flex flex-wrap items-center gap-8px p-16px">
              {PRIORITIES.map((priority) => (
                <PriorityButton
                  key={priority}
                  onClick={() => updateTaskRequest({ priority })}
                  priority={priority}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

const PriorityButton = ({
  priority,
  onClick,
}: {
  priority: Priority;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4px rounded-md bg-purple-50 px-8px py-4px text-14px font-medium"
    >
      {Array.from({ length: priority }).map((_, i) => (
        <Unicode key={i} value="2b50" className="text-12px" />
      ))}
    </button>
  );
};
