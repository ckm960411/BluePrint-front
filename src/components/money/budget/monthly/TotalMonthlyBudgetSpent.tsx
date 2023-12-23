import { MonthlyBudgetPolicy } from "@/utils/policy/MonthlyBudgetPolicy";
import { MonthlyBudget } from "@/utils/types/money";

interface TotalMonthlyBudgetSpentProps {
  monthlyBudget: MonthlyBudget;
  totalCategoryBudgets: number;
  totalExpenditureTilToday: number;
}
export default function TotalMonthlyBudgetSpent({
  monthlyBudget,
  totalCategoryBudgets,
  totalExpenditureTilToday,
}: Readonly<TotalMonthlyBudgetSpentProps>) {
  const monthlyBudgetPolicy = new MonthlyBudgetPolicy(monthlyBudget);

  // 총 예산
  const totalMonthlyBudget =
    monthlyBudgetPolicy.getTotalBudgets(totalCategoryBudgets);
  // 이달 오늘까지의 예산
  const suggestedDailyBudgetTilToday =
    monthlyBudgetPolicy.getDailyBudgetTillToday(totalCategoryBudgets);
  // 오늘까지 지출 총액 - 오늘까지의 예산 (양수면 초과, 음수면 절약)
  const budgetSpentDifferenceTillToday =
    totalExpenditureTilToday - suggestedDailyBudgetTilToday;

  return (
    <div className="mt-16px flex flex-col gap-16px text-16px">
      <div className="flex-between">
        <p className="font-medium text-gray-600">💰총 예산</p>
        <p className="font-bold">{totalMonthlyBudget.toLocaleString()}원</p>
      </div>
      <div className="flex-between">
        <p className="font-medium text-gray-600">💵오늘까지 권장 지출</p>
        <p className="font-bold">
          {suggestedDailyBudgetTilToday.toLocaleString()}원
        </p>
      </div>
      {budgetSpentDifferenceTillToday > 0 ? (
        <div className="flex-end text-12px text-gray-600">
          💸{" "}
          <span className="font-medium text-red-400">
            {budgetSpentDifferenceTillToday.toLocaleString()}원
          </span>
          이 초과됐어요
        </div>
      ) : (
        <div className="flex-end text-12px text-gray-600">
          💰{" "}
          <span className="font-medium text-blue-400">
            {Math.abs(budgetSpentDifferenceTillToday).toLocaleString()}원
          </span>
          을 덜 썼어요
        </div>
      )}
    </div>
  );
}
