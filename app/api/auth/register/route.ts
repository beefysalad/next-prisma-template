import { registerUser } from "@/lib/data/register";
import { RegisterSchemaApi } from "@/lib/schemas/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = RegisterSchemaApi.parse(body);

    const user = await registerUser(parsed);

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to register user. Please try again later.",
      },
      {
        status: 500,
      },
    );
  }
}
