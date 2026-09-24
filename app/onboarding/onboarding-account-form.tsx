"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

type AccountFormValues = {
  accountName: string;
  accountCurrency: string;
  openingBalance: number;
  accountType: string;
};

const currency = [
  { label: "Select currency type", value: null },
  { label: "INR", value: "INR" },
  { label: "USD", value: "USD" },
  { label: "EUR", value: "EUR" },
];

const accountType = [
  { label: "Select type of account", value: null },
  { label: "CASH", value: "CASH" },
  { label: "BANK", value: "BANK" },
  { label: "CARD", value: "CARD" },
  { label: "WALLET", value: "WALLET" },
];

export default function OnboardingAccountForm() {
  const { register, handleSubmit } = useForm<AccountFormValues>();

  const onSubmit = (data: AccountFormValues) => {
    console.log("Form Data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border p-3 rounded-2xl">
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Add Account</FieldLegend>
          <FieldDescription>Add a new account to get started.</FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="accountName">Account Name</FieldLabel>
              <Input id="accountName" {...register("accountName")} />
            </Field>
            <Field>
              <FieldLabel htmlFor="accountType">Account Type</FieldLabel>
              <Select items={accountType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {accountType.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="openingBalance">Opening Balance</FieldLabel>
              <Input
                id="openingBalance"
                {...register("openingBalance")}
                type="number"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="accountCurrency">Currency</FieldLabel>
              <Select items={currency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {currency.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field orientation={"horizontal"}>
              <Button type="submit" className={"cursor-pointer"}>
                Add Account
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </form>
  );
}
