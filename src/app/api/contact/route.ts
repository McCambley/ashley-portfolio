//stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer/45479968#45479968
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request, res: Response) {
  const { subject, message } = await req.json();
  // Basic Validation
  if (!subject || !message) {
    return new Response('Error', {
      status: 400,
    });
  }

  // Nodemailer setup
  try {
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail', // Replace with your email provider
    //   auth: {
    //     user: process.env.EMAIL_USER, // Your email
    //     pass: process.env.EMAIL_PASSWORD, // Your email password
    //   },
    // });
    // const mailOptions = {
    //   from: email,
    //   to: process.env.EMAIL_USER, // Receiving email
    //   subject: `Message from ${name}`,
    //   text: message,
    // };
    // await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
    return new Response(`${error}`, {
      status: 403,
    });
  }

  return Response.json({ data: 'ok' });
}
