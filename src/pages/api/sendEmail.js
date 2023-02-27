import nodemailer from 'nodemailer';

export async function post({ request }) {
    const { email, subject, message } = request.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'carson.cassidy20@gmail.com',
        pass: import.meta.env.GMAIL_APP_PASSWORD,
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