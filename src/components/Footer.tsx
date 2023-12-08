import React from 'react';

function Footer() {
  return (
    <section>
      <h2 className="font-heading w-full text-center">Placeholder</h2>
      <div className="mb-8 flex flex-col items-center">
        <p className="font-body text-3xl gradient-text">
          I&apos;m currently looking for new opportunities. If you&apos;d like
          to get in touch, please reach out to me at{' '}
          <a
            href="mailto:test@test.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Email
          </a>{' '}
          or on{' '}
          <a
            href="https://www.linkedin.com/in/ashley-fife/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      {/* A container containing three buttons that are all call to actoins. "Hire me" "View Work" and "Contact Me" */}
      <div className="flex justify-center">
        <button className="max-w-[22rem] rounded-full border-4 border-af-yellow px-8 py-3 text-3xl text-af-yellow">
          Hire Me
        </button>
        <button className="max-w-[22rem] rounded-full border-4 border-af-yellow px-8 py-3 text-3xl text-af-yellow">
          View Work
        </button>
        <button className="max-w-[22rem] rounded-full border-4 border-af-yellow px-8 py-3 text-3xl text-af-yellow">
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Footer;
