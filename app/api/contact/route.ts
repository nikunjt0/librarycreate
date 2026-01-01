import { NextRequest, NextResponse } from "next/server";

// Only initialize Resend if API key is available
let resend: any = null;
if (process.env.RESEND_API_KEY) {
  const { Resend } = require("resend");
  resend = new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const emailContent = `
New Contact Form Submission from libraryCreate

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from the libraryCreate contact form.
    `.trim();

    // Send email using Resend
    // Note: You need to set RESEND_API_KEY in your .env.local file
    // Get your API key from https://resend.com
    // For the "from" field, you can use:
    // - "onboarding@resend.dev" (for testing)
    // - Or verify your own domain
    
    if (!process.env.RESEND_API_KEY || !resend) {
      // If API key is not set, log the submission and return success
      // This allows the form to work during development
      console.log("========================================");
      console.log("⚠️  CONTACT FORM SUBMISSION (EMAIL NOT SENT)");
      console.log("========================================");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
      console.log("========================================");
      console.log("To enable email sending:");
      console.log("1. Sign up at https://resend.com");
      console.log("2. Get your API key");
      console.log("3. Add RESEND_API_KEY=your_key_here to .env.local");
      console.log("4. Optionally set RESEND_FROM_EMAIL=your-email@domain.com");
      console.log("5. Restart your dev server");
      console.log("========================================");
      return NextResponse.json(
        { 
          message: "Form submitted successfully",
          emailSent: false,
          warning: "Email not sent - RESEND_API_KEY not configured. Check server logs for form data."
        },
        { status: 200 }
      );
    }

    try {
      console.log("========================================");
      console.log("📧 SENDING EMAIL...");
      console.log("========================================");
      console.log("From:", process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev");
      console.log("To: contactlibrarycreate@gmail.com");
      console.log("Reply-To:", email);
      console.log("Subject: New Contact Form Submission from", name);
      console.log("========================================");
      
      // Important: onboarding@resend.dev can only send to the email associated with your Resend account
      // To send to contactlibrarycreate@gmail.com, you need to:
      // 1. Verify your own domain in Resend, OR
      // 2. Send to the email address associated with your Resend account first
      const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
      const toEmail = "contactlibrarycreate@gmail.com";
      
      // If using onboarding@resend.dev, check if we should send to the account email instead
      // You can set RESEND_ACCOUNT_EMAIL in .env.local to your Resend account email for testing
      const actualToEmail = (fromEmail === "onboarding@resend.dev" && process.env.RESEND_ACCOUNT_EMAIL) 
        ? process.env.RESEND_ACCOUNT_EMAIL 
        : toEmail;

      // Escape HTML to prevent XSS
      const escapeHtml = (text: string) => {
        const map: { [key: string]: string } = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
      };

      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

      const emailResult = await resend.emails.send({
        from: fromEmail,
        to: actualToEmail,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        text: emailContent,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <div style="border-left: 4px solid #DC143C; padding-left: 20px; margin-bottom: 20px;">
                <h2 style="color: #DC143C; margin-top: 0; font-size: 24px;">New Contact Form Submission</h2>
              </div>
              <div style="margin-bottom: 20px;">
                <p style="margin: 10px 0;"><strong style="color: #333;">Name:</strong> <span style="color: #666;">${safeName}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> <a href="mailto:${safeEmail}" style="color: #DC143C; text-decoration: none;">${safeEmail}</a></p>
              </div>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin: 20px 0;">
                <p style="margin: 0 0 10px 0; font-weight: 600; color: #333;">Message:</p>
                <p style="margin: 0; color: #555; white-space: pre-wrap;">${safeMessage}</p>
              </div>
              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
              <p style="color: #999; font-size: 12px; margin: 0; text-align: center;">
                This message was sent from the <a href="https://librarycreate.org" style="color: #DC143C; text-decoration: none;">libraryCreate</a> contact form.
              </p>
              ${actualToEmail !== toEmail ? `<p style="color: #ff9800; font-size: 11px; margin-top: 15px; padding: 10px; background-color: #fff3cd; border-radius: 4px;"><strong>Note:</strong> This was sent to ${actualToEmail} because onboarding@resend.dev can only send to your Resend account email. To send to ${toEmail}, verify your domain in Resend.</p>` : ''}
            </div>
          </body>
          </html>
        `,
        // Add headers to improve deliverability
        headers: {
          'X-Entity-Ref-ID': `contact-form-${Date.now()}`,
          'List-Unsubscribe': '<https://librarycreate.org/contact>',
        },
      });

      console.log("========================================");
      console.log("📧 RESEND API RESPONSE:");
      console.log("========================================");
      console.log("Full response:", JSON.stringify(emailResult, null, 2));
      console.log("========================================");

      // Resend API returns { data: { id: ... } } on success or { error: ... } on failure
      if (emailResult.error) {
        console.error("❌ RESEND API ERROR:");
        console.error("Error:", emailResult.error);
        console.error("");
        console.error("Common issues:");
        console.error("1. If using onboarding@resend.dev, you can only send to YOUR Resend account email");
        console.error("2. To send to contactlibrarycreate@gmail.com, you need to verify your domain");
        console.error("3. Check your Resend dashboard for domain verification status");
        console.error("4. Set RESEND_ACCOUNT_EMAIL in .env.local to your Resend account email for testing");
        throw new Error(emailResult.error.message || JSON.stringify(emailResult.error));
      }

      const emailId = emailResult.data?.id;
      
      if (emailId) {
        console.log("✅ EMAIL SENT SUCCESSFULLY!");
        console.log("Email ID:", emailId);
        console.log("Sent to:", actualToEmail);
        if (actualToEmail !== toEmail) {
          console.warn(`⚠️  Note: Sent to ${actualToEmail} instead of ${toEmail}`);
          console.warn("   onboarding@resend.dev can only send to your Resend account email");
          console.warn("   To send to contactlibrarycreate@gmail.com, verify your domain in Resend");
        }
        console.log("Check your Resend dashboard: https://resend.com/emails");
        console.log("========================================");
      } else {
        console.warn("⚠️  Email sent but no ID returned. Check Resend dashboard.");
        console.log("Full response:", emailResult);
        console.log("========================================");
      }

      return NextResponse.json(
        { 
          message: "Form submitted successfully. Email sent!",
          emailSent: true,
          emailId: emailId
        },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error("========================================");
      console.error("❌ ERROR SENDING EMAIL:");
      console.error("========================================");
      console.error("Error type:", emailError?.constructor?.name);
      console.error("Error message:", emailError?.message);
      console.error("Full error:", JSON.stringify(emailError, null, 2));
      console.error("Stack:", emailError?.stack);
      console.error("========================================");
      
      // Log the form data so it's not lost
      console.log("Form data (for manual follow-up):");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
      console.log("========================================");
      
      // Still return success to user, but log the error
      // You might want to store submissions in a database as backup
      return NextResponse.json(
        { 
          message: "Form submitted successfully, but email failed to send. Please contact us directly at +1 (630) 440-1822 or contactlibrarycreate@gmail.com",
          emailSent: false,
          error: emailError?.message || "Unknown error"
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}

