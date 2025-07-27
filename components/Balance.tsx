import getUserBalance from "@/app/actions/getUserBalance";

const Balance = async () => {
    const { balance} = await getUserBalance();
  return (
    <>
      <h1 className="text-left mt-10 max-w-[360px] mx-auto text-xl font-bold">Your Balance</h1>
      <h1 className="text-left  mb-5 max-w-[360px] mx-auto text-5xl font-bold">${ balance ?? 0}</h1>
    </>
  );
};

export default Balance;

// text-left mt-10 mb-5 max-w-[360px] mx-auto text-xl font-bold