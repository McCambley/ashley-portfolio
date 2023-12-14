'use client';
import React, { useState } from 'react';
import GradientBorder from '@/components/GradientBorder';

function ContactForm({ className = '' }: { className?: string }) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log({ event });
    const { name, value } = event.target;
    console.log({ formValues });
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <section className={className}>
      <GradientBorder className="align-center flex flex-col items-center justify-center rounded-lg p-8">
        <h1 className="pb-6 font-handwriting">Contact Me</h1>
        <p className="w-full pb-8 text-center text-3xl gradient-text md:max-w-[1024px]">
          Are you looking for a new designer for your team, want to collaborate
          on a project, or have any questions? Let me know!
        </p>
        <form
          className="flex w-full flex-col text-3xl md:w-[600px] [&_input]:mb-4 [&_input]:rounded-sm [&_input]:p-2 [&_input]:text-af-dark [&_label]:pb-2 [&_label]:gradient-text [&_textarea]:mb-8 [&_textarea]:rounded-sm [&_textarea]:p-2 [&_textarea]:text-af-dark"
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
            placeholder="Name"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Hi Ashley, I would like to talk about..."
            required
            rows={8}
          />
          <GradientBorder className="m-auto flex w-[200px] rounded-full px-7 py-2 text-center transition-opacity hover:opacity-70">
            <button
              className="w-full text-center  gradient-text "
              type="submit"
            >
              Submit
            </button>
          </GradientBorder>
        </form>
      </GradientBorder>
    </section>
  );
}

export default ContactForm;
