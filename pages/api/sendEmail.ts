import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer';

import { Message } from '../../interfaces';
import { HTTP_CODES } from '../../utils/contants';


type Data = {
  message: string,
  code?: HTTP_CODES,
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  // Check the method received on the request by the user. Method POST is the only one allowed
  switch (req.method) {
    case 'POST':
      return sendEmail(req, res);
    
    default:
      return res.status(HTTP_CODES.BAD_REQUEST).json({ message: `Bad Request. Method ${ req.method } not allowed on this endpoint` });
  }
}


const sendEmail = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  // Receive the contact message data to send it to the email
 const { username, email, text } = req.body as Message;

 // Create transporter object that manage the email connection
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    // Send the user email to my personal email
    const emailResponse = await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `Mail from ${ username }`,
      text: text,
      html: `<p>You have a new contact form submission</p><br>
        <p><strong>Name: </strong>${ username }</p>
        <p><strong>Email: </strong>${ email }</p>
        <p><strong>Message: </strong>${ text }</p>`,
    });

    return res.status(HTTP_CODES.OK).json({
      message: JSON.stringify(emailResponse),
      code: HTTP_CODES.OK
    });
  
  } catch (error) {
    return res.status(HTTP_CODES.FORBIDDEN).json({
      message: `Error sending the message to the email: ${ error }`,
      code: HTTP_CODES.FORBIDDEN
    });
  }

}
