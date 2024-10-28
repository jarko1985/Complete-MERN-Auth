import { VERIFICATION_EMAIL_TEMPLATE } from "../mailtrap/emailTemplates.js";
import { mailtrapClient, sender } from "../mailtrap/mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Email Sent Successfully");
  } catch (error) {
    console.log(`Error Sending verification email`, error);
    throw new Error(`Error Sending verification email ${error}`);
  }
};
