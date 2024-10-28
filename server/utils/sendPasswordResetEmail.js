import { PASSWORD_RESET_REQUEST_TEMPLATE } from "../mailtrap/emailTemplates.js";
import { mailtrapClient, sender } from "../mailtrap/mailtrap.config.js";

export const sendPasswordResetEmail = async (email, resetUrl) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
      category: "Password Reset",
    });
    console.log("Password reset email Sent Successfully");
  } catch (error) {
    console.log(`Error Sending password reset email`, error);
    throw new Error(`Error Sending password reset email ${error}`);
  }
};
