import SyncUserPage from "@/lib/services/user";
import { SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function OnboardingForm() {
  const userCreated = await SyncUserPage();

  if (!userCreated) {
    redirect("/sign-up");
  }

  return (
    <div>
      {userCreated ? (
        <h1>
          Onboarding{" "}
          <div>
            <SignOutButton />
          </div>
        </h1>
      ) : (
        <h2>Failed</h2>
      )}
    </div>
  );
}
