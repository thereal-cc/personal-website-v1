import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
    if (req.method === 'POST') {
        // create transporter object
        const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'carson.cassidy20@gmail.com',
            pass: import.meta.env.GMAIL_APP_PASSWORD,
        },
        });

        // define email options
        const mailOptions = {
            from: String(req.body.email),
            to: 'carson.cassidy20@gmail.com',
            subject: String(req.body.subject),
            text: String(req.body.message),
        };

        try {
            // send email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
