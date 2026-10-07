export function createWhatsAppEnquiry(
  whatsappUrl: string,
  enquiry: { name: string; business?: string; message: string },
): string {
  const name = enquiry.name.trim();
  const business = enquiry.business?.trim();
  const message = enquiry.message.trim();

  if (!name || !message) {
    throw new Error("Please enter your name and enquiry.");
  }

  const url = new URL(whatsappUrl);
  url.searchParams.set(
    "text",
    [
      "Hi Pelago, I'd like help with my business.",
      "",
      `Name: ${name}`,
      ...(business ? [`Business: ${business}`] : []),
      "",
      message,
    ].join("\n"),
  );
  return url.toString();
}
