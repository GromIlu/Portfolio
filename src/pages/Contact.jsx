import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i4gjadk",     
        "template_rjq2w4q",  
        form.current,
        "u8CwYbsrA_YdQqPon"      
      )
    
      .then((result) => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email send error:", error.text);
        alert("❌ Failed to send message. Please try again.");
      });
  };

  return (
     <section className="min-h-screen bg-gray-900 text-white px-6 py-16" id="contact">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-indigo-200">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 rounded border bg-gray-800" />
          <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 rounded border bg-gray-800" />
          <textarea name="message" rows="5" placeholder="Your Message" required className="w-full p-3 rounded border bg-gray-800"></textarea>
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
