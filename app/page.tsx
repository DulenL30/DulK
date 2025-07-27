import FirstPage from "@/components/FirstPage";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";

const Homepage = async() => {
  const user = await currentUser();


  if (!user) {
    return <FirstPage />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold p-4 text-center">Welcome, {user.firstName}</h1>
      <AddTransaction />
    </div>
  );
}

export default Homepage;