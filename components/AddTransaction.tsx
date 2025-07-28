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
            <label htmlFor="amount">Amount <br />(Negative - Expense, Positive - Income)</label>
            <input type="number" name="amount" id="amount" placeholder="Enter amount..." step="0.01" />
        </div>

        <button className="w-full font-semibold text-slate-800  gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-emerald-300 transition-colors cursor-pointer p-8 border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 items-center">Add Transaction</button>


    </form>
    </> 
    );
}
 
export default AddTransaction;




