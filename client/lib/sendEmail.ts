import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465, // Use 465 for secure connections
  secure: true, // Use true for 465, false for other ports
  auth: {
    user: "info@finelin.com",
    pass: "your-email-password", // use the email account password from GoDaddy
  },
});

interface MailOptions {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const sendMail = async ({ name, email, phone, message }: MailOptions) => {
  try {
    // Send email to you
    await transporter.sendMail({
      from: '"Finelin Contact Form" <info@finelin.com>',
      to: "info@finelin.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    });

    // Send automated reply to the user
    await transporter.sendMail({
      from: '"Finelin" <info@finelin.com>',
      to: email,
      subject: "Thank you for contacting us!",
      text: `Dear ${name},\n\nThank you for reaching out. We have received your message and will get back to you shortly.\n\nBest regards,\nFinelin Team`,
      html: `<p>Dear ${name},</p><p>Thank you for reaching out. We have received your message and will get back to you shortly.</p><p>Best regards,<br>Finelin Team</p>`,
    });

    console.log("Emails sent successfully");
  } catch (error) {
    console.error("Error sending emails: ", error);
    throw error;
  }
};

export default sendMail;
