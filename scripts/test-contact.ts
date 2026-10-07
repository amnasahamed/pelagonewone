import assert from "node:assert/strict";
import { createWhatsAppEnquiry } from "../src/lib/contact/whatsapp";
import { site } from "../src/lib/site";

const url = new URL(createWhatsAppEnquiry(site.whatsapp, {
  name: "  Test Visitor  ",
  business: "A&B + Partners / കേരളം",
  message: "GST & registration?\nPlease explain costs + timelines #1.",
}));
assert.equal(url.origin, "https://wa.me");
assert.equal(url.pathname, "/917994659991");
assert.equal(url.searchParams.get("text"), [
  "Hi Pelago, I'd like help with my business.",
  "",
  "Name: Test Visitor",
  "Business: A&B + Partners / കേരളം",
  "",
  "GST & registration?\nPlease explain costs + timelines #1.",
].join("\n"));
assert.equal([...url.searchParams.keys()].length, 1);
assert.equal(url.hash, "");

const withoutBusiness = new URL(createWhatsAppEnquiry(site.whatsapp, {
  name: "Visitor", business: "  ", message: "  Incorporation help  ",
})).searchParams.get("text")!;
assert.ok(!withoutBusiness.includes("Business:"));
assert.ok(withoutBusiness.endsWith("Incorporation help"));
assert.throws(() => createWhatsAppEnquiry(site.whatsapp, { name: " ", message: "GST" }));
assert.throws(() => createWhatsAppEnquiry(site.whatsapp, { name: "Visitor", message: " " }));

console.log("WhatsApp enquiry checks passed: destination, message details, Unicode/special characters, optional business, required fields.");
