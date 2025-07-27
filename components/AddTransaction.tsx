"use client";
import addTransaction from "@/app/actions/addTransaction";
import {toast} from "react-toastify";

const AddTransaction = () => {
    const clientAction = async (formData: FormData) => {      
        const {data, error} = await addTransaction(formData);

        if (error) {
            toast.error(error);
        } else{
            toast.success("Transaction added successfully!");
        }
    };


    return ( <>
    <h3>Add Transaction</h3>
    <form action={clientAction}>
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" id="text" name="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
            <input type="number" name="amount" id="amount" placeholder="Enter amount..." step="0.01" />
        </div>

        <button className="w-full bg-emerald-400 text-white px-4 py-2 rounded hover:bg-emerald-300 transition-colors cursor-pointer text-base border-none duration-300">Add Transaction</button>

    </form>
    </> 
    );
}
 
export default AddTransaction;

