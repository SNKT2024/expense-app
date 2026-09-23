import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "../prisma";

export default async function SyncUserPage() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/sign-in");
  }

  const primaryEmail = clerkUser.emailAddresses[0]?.emailAddress;
  const fullName = [clerkUser.firstName, clerkUser.lastName]
    .filter(Boolean)
    .join(" ");

  const user = await prisma.user.upsert({
    where: { id: clerkUser.id },
    update: {
      email: primaryEmail,
      name: fullName || null,
    },
    create: {
      id: clerkUser.id,
      email: primaryEmail,
      name: fullName || null,
      currency: "INR",
    },
  });

  return user;
}
