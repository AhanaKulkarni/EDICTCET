"use server";

export type ComponentRequestState = {
  message: string;
  error: string;
  success: boolean;
  data?: any; // To pass back the data for PDF generation
};

export async function submitComponentRequest(
  prevState: ComponentRequestState,
  formData: FormData
): Promise<ComponentRequestState> {
  const studentName = formData.get("studentName") as string;
  const studentEmail = formData.get("studentEmail") as string;
  const teamMembers = formData.get("teamMembers") as string;
  const projectGuide = formData.get("projectGuide") as string;
  const requestingDept = formData.get("requestingDept") as string;
  const fulfillingDept = formData.get("fulfillingDept") as string;
  const selectedComponent = formData.get("selectedComponent") as string;
  const quantity = formData.get("quantity") as string;

  if (!studentEmail?.endsWith("@tcetmumbai.in")) {
    return {
      message: "",
      error: "Only official @tcetmumbai.in email addresses are permitted.",
      success: false,
    };
  }

  if (!studentName || !projectGuide || !requestingDept || !fulfillingDept || !selectedComponent || !quantity) {
    return {
      message: "",
      error: "Please fill in all required fields.",
      success: false,
    };
  }

  // Here you would normally save to Firebase / Supabase and trigger emails
  // For now, we simulate the database save
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    message: "Request submitted successfully! Generating your PDF quotation...",
    error: "",
    success: true,
    data: {
      studentName,
      studentEmail,
      teamMembers,
      projectGuide,
      requestingDept,
      fulfillingDept,
      selectedComponent,
      quantity,
      date: new Date().toLocaleDateString(),
    }
  };
}
