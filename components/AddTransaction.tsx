"use client";
import addTransaction from "@/app/actions/addTransaction";
import {toast} from "react-toastify";
import { useRef } from "react";

const AddTransaction = () => {
const formRef = useRef<HTMLFormElement>(null);

    const clientAction = async (formData: FormData) => {      
        const {data, error} = await addTransaction(formData);

        if (error) {
            toast.error(error);
        } else{
            toast.success("Transaction added successfully!");
            formRef.current?.reset(); // Reset the form after successful submission
        }
    };


    return ( <>
    <h3 className="text-left mt-10 mb-5 max-w-[360px] mx-auto text-xl font-bold">Add Transaction</h3>
    <form ref={formRef} action={clientAction}>
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

