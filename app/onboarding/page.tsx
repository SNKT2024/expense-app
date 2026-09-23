import { auth } from "@clerk/nextjs/server";

export default async function OnboardingForm() {
  const { isAuthenticated, userId } = await auth();

  return <h1>Onboarding</h1>;
}
