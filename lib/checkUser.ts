import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  // 1. Try finding by Clerk user ID
  let existingUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // 2. If not found, try finding by email
  if (!existingUser) {
    existingUser = await db.user.findUnique({
      where: {
        email: user.emailAddresses[0].emailAddress,
      },
    });

    // 3. If found by email, update Clerk user ID
    if (existingUser) {
      await db.user.update({
        where: { email: user.emailAddresses[0].emailAddress },
        data: { clerkUserId: user.id },
      });
    }
  }

  // 4. If still not found, create the user
  if (!existingUser) {
    existingUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });
  }

  return existingUser;
};
