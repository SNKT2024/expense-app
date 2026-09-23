import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { isAuthenticated, sessionClaims } = await auth();

  // For users visiting /onboarding, don't try to redirect
  if (req.nextUrl.pathname === "/onboarding") {
    return NextResponse.next();
  }

  // If user doesn't have `onboardingComplete: true` in their publicMetadata,
  // redirect them to the /onboarding route to complete onboarding
  if (isAuthenticated && !sessionClaims?.metadata?.onboardingComplete) {
    return NextResponse.redirect(new URL("/onboarding", req.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    // Always run for Clerk-specific frontend API routes
    "/__clerk/(.*)",
  ],
};
