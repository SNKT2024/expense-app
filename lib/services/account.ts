import type { AccountType } from "@/app/generated/prisma/enums";
import { prisma } from "../prisma";

type AccountDetails = {
  name: string;
  userId: string;
  openingBalance: number;
  accountType: AccountType;
  currencyType: string;
};

export async function createAccount(data: AccountDetails) {
  const account = await prisma.account.create({
    data: {
      name: data.name,
      userId: data.userId,
      openingBalance: data.openingBalance,
      accountType: data.accountType,
      currencyType: data.currencyType,
    },
  });

  return account;
}
