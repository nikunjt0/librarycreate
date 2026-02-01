"use client";

import { useState } from "react";
import Navigation from "../../components/Navigation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        
        // Log to console for debugging
        if (data.emailSent === false) {
          console.warn("⚠️ Form submitted but email was not sent. Check server logs for details.");
          console.warn("To enable email sending, configure RESEND_API_KEY in .env.local");
        } else {
          console.log("✅ Form submitted and email sent successfully!");
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-0">
      <Navigation />
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        <h1 className="text-4xl font-semibold text-black mb-8" style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}>
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4" style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}>
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                Have questions or want to get involved? We'd love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2" style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}>
                  Address
                </h3>
                <p className="text-base text-gray-700" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                  2548 Wydown Ln<br />
                  Aurora, IL 60502
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2" style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}>
                  Phone / WhatsApp
                </h3>
                <a
                  href="tel:+16304401822"
                  className="text-base text-[#DC143C] hover:text-[#B9122A] transition-colors"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  +1 (630) 440-1822
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2" style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}>
                  Email
                </h3>
                <a
                  href="mailto:team@librarycreate.org"
                  className="text-base text-[#DC143C] hover:text-[#B9122A] transition-colors"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  team@librarycreate.org
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-2"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent resize-none"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800 text-sm font-medium mb-1" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                    Thank you! Your message has been received.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 text-sm mb-2" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                    There was an error sending your message. Please try again or contact us directly at{" "}
                    <a href="tel:+16304401822" className="underline">+1 (630) 440-1822</a> or{" "}
                    <a href="mailto:team@librarycreate.org" className="underline">team@librarycreate.org</a>.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#DC143C] text-white px-8 py-3 rounded-md hover:bg-[#B9122A] transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
