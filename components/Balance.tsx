import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
    const { balance} = await getUserBalance();
  return (
    <>
      <h1 className="text-left mt-10 max-w-[360px] mx-auto text-xl font-bold">Your Balance</h1>
      <h1 className="text-left  mb-5 max-w-[360px] mx-auto text-5xl font-bold">${addCommas(Number(balance?.toFixed(2) ?? 0))}</h1>
    </>
  );
};

export default Balance;

// text-left mt-10 mb-5 max-w-[360px] mx-auto text-xl font-bold
