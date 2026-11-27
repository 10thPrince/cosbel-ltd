import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        const resend = new Resend(process.env.PROFESSIONAL_RESEND_KEY);

        const { data, error } = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: ["professional@cosbelelectrical.com"],
            subject: `New contact message from ${name}`,
            replyTo: email,
            text: `Phone Number: ${phone} </br>
                Project Deatail: ${message} </br>`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <p><strong>Project Details:</strong> ${message}</p>
                `,
        })

        if (error) {
            return NextResponse.json({ error }, { status: 400 })
        }

        return NextResponse.json({ success: true, data })
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        )
    }
}
