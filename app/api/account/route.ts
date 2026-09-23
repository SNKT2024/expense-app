import { createAccount } from "@/lib/services/account";

// create a new account
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await createAccount(body);

    return Response.json(result, { status: 201 });
  } catch (error) {
    console.error("Create account failed", error);

    return Response.json(
      { error: "Failed to create accound" },
      { status: 500 },
    );
  }
}
