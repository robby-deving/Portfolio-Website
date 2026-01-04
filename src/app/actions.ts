"use server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Basic validation
  if (!name || !email || !message) {
    return { error: "Please fill in all fields." };
  }

  try {
    const { data, error } = await resend.emails.send({
      // Resend requires a verified domain or you can use their default onboarding address for testing
      from: 'Portfolio Website <onboarding@resend.dev>',
      to: 'jrcr2022-2647-26244@bicol-u.edu.ph', // Updated to your Resend account email for testing
      subject: `A query from ${name} from your website`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: "Failed to send email. Please try again later." };
    }

    return { success: true };
  } catch (err) {
    console.error("Server Error:", err);
    return { error: "An unexpected error occurred." };
  }
}

