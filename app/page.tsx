import FirstPage from "@/components/FirstPage";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";


const Homepage = async() => {
  const user = await currentUser();


  if (!user) {
    return <FirstPage />;
  }

  return (
    <main>
      <h2 className="text-3xl font-bold p-4 text-center mt-5">Welcome, {user.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <></>
      <AddTransaction />
    </main>
  );
}

export default Homepage;