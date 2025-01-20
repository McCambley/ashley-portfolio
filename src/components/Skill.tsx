import Image from 'next/image';

function Skill({ title, icon, details }: Skill) {
  return (
    <div className="flex min-h-[30rem] w-full max-w-[312px] flex-col items-center justify-start rounded-xl bg-af-dark p-8">
      <h3 className="mb-6 text-center font-heading text-3xl leading-10">
        {title}
      </h3>
      <Image src={icon} alt={title} width={68} height={68} className="mb-5" />
      <ul className="ml-12 w-full list-disc text-xl text-af-light marker:text-af-light">
        {details.map(detail => (
          <li className="" key={detail}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skill;
