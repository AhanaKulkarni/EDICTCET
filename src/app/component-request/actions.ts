"use server";

export type ComponentRequestState = {
  message?: string;
  error?: string;
  success?: boolean;
};

export async function submitComponentRequest(prevState: ComponentRequestState, formData: FormData): Promise<ComponentRequestState> {
  const requestingDept = formData.get("requestingDept");
  const fulfillingDept = formData.get("fulfillingDept");
  const components = formData.get("components");
  const quantity = formData.get("quantity");
  const userEmail = formData.get("userEmail");

  // Validate all fields
  if (!requestingDept || !fulfillingDept || !components || !quantity || !userEmail) {
    return { error: "All fields are required." };
  }

  // Simulate email routing
  const subject = `From ${requestingDept} to ${fulfillingDept}`;
  console.log(`\n--- NEW EMAIL ROUTING ---`);
  console.log(`Subject: ${subject}`);
  console.log(`To: EDIC Coordinator (${fulfillingDept})`);
  console.log(`CC: EDIC Coordinator (${requestingDept})`);
  console.log(`Body:
Student Email: ${userEmail}
Requested Components:
- Item: ${components}
- Quantity: ${quantity}
  `);
  console.log(`-------------------------\n`);

  // Fake a slight delay to simulate server processing
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: `Request successfully routed from ${requestingDept} to ${fulfillingDept}.` };
}
