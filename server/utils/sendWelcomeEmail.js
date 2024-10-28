import { mailtrapClient, sender } from "../mailtrap/mailtrap.config.js";

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "904642f4-c222-4fe4-a831-6163aae33e4b",
      template_variables: {
        company_info_name: "Auth Company",
        name: name,
      },
    });
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.log("Error sending welcome email", error);

    throw new Error("Error sending welcome email", error);
  }
};
