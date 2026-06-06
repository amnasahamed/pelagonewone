export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
};

export type ContactPayload = {
  name: string;
  contact: string;
  message: string;
};
