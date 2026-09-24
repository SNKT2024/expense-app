import SyncUserPage from "@/lib/services/user";
import { redirect } from "next/navigation";
import OnboardingAccountForm from "./onboarding-account-form";

export default async function OnboardingForm() {
  const userCreated = await SyncUserPage();

  if (!userCreated) {
    redirect("/sign-up");
  }

  return (
    <div className="min-w-md p-2">
      {userCreated ? <OnboardingAccountForm /> : <h2>Failed</h2>}
    </div>
  );
}
