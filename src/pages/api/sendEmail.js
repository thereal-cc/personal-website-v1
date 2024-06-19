import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

export async function post({ request }) {
  const { email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'carson.cassidy20@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: String(email),
    to: 'carson.cassidy20@gmail.com',
    subject: String(subject),
    text: String(message),
  };

  try {
    // send email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({message: "Email sent successfully"}), {status: 200});
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({message: "Error sending email"}), {status: 500});
  }
}