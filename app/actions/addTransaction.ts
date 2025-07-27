'use server';
import {auth} from "@clerk/nextjs/server";
import {db} from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get('text');
  const amountValue = formData.get('amount');

  // Check for input values
  if (!textValue || textValue === '' || !amountValue) {
    return { error: 'Text or amount is missing' };
  }

  const text: string = textValue.toString(); // Ensure text is a string
  const amount: number = parseFloat(amountValue.toString()); // Parse amount as number

  const { userId } = await auth();
  console.log(userId);

  if (!userId) {
    return { error: 'User not authenticated' };
  }

  try{
    const transactionData: TransactionData = await db.transaction.create({
    data: {
      text,
      amount,
      userId, // Associate transaction with the authenticated user
    },
  });
  revalidatePath('/'); // Revalidate the path to update the UI

  return { data: transactionData };

  } catch (error) {
    return { error: 'Failed to add transaction' };
  }


}

export default addTransaction;