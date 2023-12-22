import MoneyCreditCard from "@/components/money/MoneyCreditCard";

export default function MoneyPage() {
  return (
    <section>
      <div className="bg-main p-16px text-white">
        <p className="text-18px font-bold">💳 현명하게 소비하자</p>
      </div>
      <MoneyCreditCard />
    </section>
  );
}
