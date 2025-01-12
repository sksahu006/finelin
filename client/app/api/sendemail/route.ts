import sendMail from "@/lib/sendEmail";
import { NextResponse } from "next/server";

// Ensure this route is dynamically rendered
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Send emails
    await sendMail({ name, email, phone, message });

    // Return success response
    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in sendemail API: ", error);
    return NextResponse.json(
      { error: "Failed to send emails. Please try again later." },
      { status: 500 }
    );
  }
}
