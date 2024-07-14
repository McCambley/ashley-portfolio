'use client';
import React, { useState } from 'react';
import GradientBorder from '@/components/GradientBorder';
import SectionIntro from './SectionIntro';
import BabyBurst from './BabyBurst';

function ContactForm({ className = '' }: { className?: string }) {
  const [formValues, setFormValues] = useState({
    subject: '',
    message: '',
    name: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    console.log({ subject: formValues.subject, message: formValues.message });
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { subject, message, name } = formValues;
    // Open a link that contains the email in a mailto and the "message" value as the subject line
    sendEmail(subject, message, name);
  };

  const sendEmail = (subject: string, message: string, name: string) => {
    const formattedSubject = `[New Contact from ${name}] - ${subject}`;
    const formattedMessage = `${message}\n\nFrom,\n${name}`;

    window.open(
      'mailto:ashleybfife@gmail.com?subject=' +
        encodeURIComponent(formattedSubject) +
        '&body=' +
        encodeURIComponent(formattedMessage)
    );
  };

  return (
    <section className={className} id="contact">
      <SectionIntro title="Contact Me" />
      <BabyBurst translateY={-50} translateX={-25} />
      <div className="grid gap-12 md:grid-cols-2">
        <p className="text-2xl">
          Are you looking for a new designer for your team, want to collaborate
          on a project, or have any questions? Let me know!
        </p>
        <div className="align-center mx-auto flex w-full flex-col items-center justify-center rounded-lg">
          <form
            className="flex w-full flex-col text-2xl md:w-full [&_input]:mb-4 [&_input]:rounded-sm [&_input]:p-2 [&_input]:text-af-dark [&_label]:pb-2 [&_label]:text-af-light [&_textarea]:mb-8 [&_textarea]:rounded-sm [&_textarea]:p-2 [&_textarea]:text-af-dark"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
              required
              placeholder="Subject of your message"
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Write your message here, and I’ll respond soon!"
              required
              rows={8}
            />

            <button
              className="flex w-[200px] justify-center rounded-full px-8 py-3 text-center font-heading text-lg text-af-light transition-opacity hover:opacity-70"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
