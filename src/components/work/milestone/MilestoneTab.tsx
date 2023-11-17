import MilestoneTabCheckboxContainer from "@/components/work/milestone/MilestoneTabCheckboxContainer";
import MilestoneTabContent from "@/components/work/milestone/MilestoneTabContent";
import { Progress } from "@/utils/types";
import { useState } from "react";

export type ProgressChecked = Record<Progress, boolean>;

export default function MilestoneTab() {
  const [progressChecked, setProgressChecked] = useState<ProgressChecked>({
    [Progress.ToDo]: true,
    [Progress.InProgress]: false,
    [Progress.Review]: false,
    [Progress.Completed]: false,
  });

  return (
    <div className="py-16px pl-16px pr-12px">
      <MilestoneTabCheckboxContainer
        progressChecked={progressChecked}
        setProgressChecked={setProgressChecked}
      />
      <MilestoneTabContent progressChecked={progressChecked} />
    </div>
  );
}
