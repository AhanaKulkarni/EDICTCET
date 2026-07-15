"use server";

export async function bookMentorshipSlot(
  prevState: any,
  formData: FormData
) {
  const mentorEmail = formData.get("mentorEmail") as string;
  const studentName = formData.get("studentName") as string;
  const studentEmail = formData.get("studentEmail") as string;
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const topic = formData.get("topic") as string;

  if (!studentEmail?.endsWith("@tcetmumbai.in")) {
    return {
      message: "",
      error: "Only official @tcetmumbai.in email addresses are permitted.",
      success: false,
    };
  }

  if (!studentName || !date || !time || !topic) {
    return {
      message: "",
      error: "Please fill in all required fields.",
      success: false,
    };
  }

  // TODO: Replace this mock delay with Resend or Nodemailer SMTP logic
  // e.g. await resend.emails.send({ from: '...', to: mentorEmail, subject: 'New 15-min Booking', html: '...' })
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log(`[EMAIL DISPATCHED] To: ${mentorEmail} | Student: ${studentName} | Time: ${date} at ${time}`);

  return {
    message: `Your 15-minute slot on ${date} at ${time} has been booked! An email has been sent to the mentor.`,
    error: "",
    success: true,
  };
}
