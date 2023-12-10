export default function Freelance() {
  const sections = [
    {
      title: 'Why Hire Me',
      content:
        'I have over 5 years of experience in web development and have successfully completed numerous projects for clients. My expertise includes front-end development, responsive design, and user experience optimization.',
    },
    {
      title: 'How to Hire Me',
      content:
        "Hiring me is easy! Simply reach out to me through the contact form below or send me an email at hireme@example.com. We can discuss your project requirements and timeline, and I'll provide you with a quote.",
    },
    {
      title: 'What to Expect',
      content:
        'When you hire me, you can expect clear communication, timely updates, and a high-quality end product. I prioritize client satisfaction and will work closely with you to ensure that your project meets your expectations.',
    },
    {
      title: 'How to Work with Me',
      content:
        "Working with me is a collaborative process. We'll start by discussing your project goals and requirements. I'll provide you with regular progress updates and seek your feedback throughout the development process. Together, we'll create a website that exceeds your expectations.",
    },
    {
      title: 'How to Pay Me',
      content:
        "I accept payments through various methods, including PayPal and bank transfer. Once we agree on the project scope and cost, I'll provide you with an invoice. Payment terms and methods will be discussed and agreed upon before the project begins.",
    },
    {
      title: 'Contact Me',
      content:
        "If you have any questions or would like to discuss your project, feel free to contact me using the form below or by sending an email to contact@example.com. I'll get back to you as soon as possible.",
    },
  ];

  return (
    <div>
      <h1 className="mb-8 text-center text-4xl font-bold">Freelance</h1>
      <div className="mb-8 flex justify-center">
        <button className="mr-4 rounded bg-blue-500 px-4 py-2 text-lg font-semibold text-white hover:bg-blue-600">
          Hire Me
        </button>
        <button className="rounded bg-green-500 px-4 py-2 text-lg font-semibold text-white hover:bg-green-600">
          Contact Me
        </button>
      </div>
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="mb-4 text-center text-2xl font-bold">
            {section.title}
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg gradient-text">
            {section.content}
          </p>
        </section>
      ))}
    </div>
  );
}
