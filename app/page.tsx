import FirstPage from "@/components/FirstPage";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";

const Homepage = async() => {
  const user = await currentUser();


  if (!user) {
    return <FirstPage />;
  }

  return (
    <main>
      <h2 className="text-3xl font-bold p-4 text-center mt-5">Welcome, {user.firstName}</h2>
      <Balance />
      <></>
      <AddTransaction />
    </main>
  );
}

export default Homepage;