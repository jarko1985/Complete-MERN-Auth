import { PASSWORD_RESET_SUCCESS_TEMPLATE } from "../mailtrap/emailTemplates.js";
import { mailtrapClient, sender } from "../mailtrap/mailtrap.config.js";

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "password has been changed successfully",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });
    console.log("Password change email Sent Successfully");
  } catch (error) {
    console.log(`Error Sending password change email`, error);
    throw new Error(`Error Sending password change email ${error}`);
  }
};
