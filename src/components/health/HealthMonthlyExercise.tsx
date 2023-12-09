import { getMonthlyExerciseMedal } from "@/utils/common/health/getMonthlyExerciseMedal";
import { useMonthExercisesQuery } from "@/utils/hooks/react-query/health/useMonthExercisesQuery";

export default function HealthMonthlyExercise() {
  const { data: exercises = [] } = useMonthExercisesQuery();

  return (
    <div className="p-16px">
      <div className="rounded-md p-16px shadow-md">
        <p className="text-14px font-bold text-main">🏃이번 달 운동들</p>
        <div className="flex items-start gap-16px">
          <div className="relative">
            <span className="text-[60px]">
              {getMonthlyExerciseMedal(exercises.length)}
            </span>
            <span className="absolute inset-x-0 -bottom-4px text-center text-14px text-gray-600">
              <span className="text-16px font-bold text-main">
                {exercises.length}
              </span>{" "}
              / n
            </span>
          </div>
          <div className="flex flex-col gap-8px pt-12px text-14px">
            <p className="truncate-1-lines">턱걸이 n회</p>
            <p className="truncate-1-lines">푸시업 n회</p>
            <p className="truncate-1-lines">달리기 n회</p>
            <p className="truncate-1-lines">덤벨 n회</p>
          </div>
        </div>
      </div>
    </div>
  );
}
