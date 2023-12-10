import Image from 'next/image';

function Project({ project }: { project: Project }) {
  return (
    <div
      key={project.title}
      className="mx-auto mb-28 flex w-full overflow-hidden rounded-[5rem] border-8 border-af-yellow"
    >
      <div className="flex w-1/2 flex-col justify-between border-r-8 border-af-yellow p-20">
        <h3 className={`mb-0 font-heading gradient-text`}>{project.title}</h3>
        <h4 className="pb-36 gradient-text">{project.subtitle}</h4>
        <p className="pb-32 text-4xl gradient-text">{project.description}</p>
        <button className="max-w-[22rem] rounded-full border-4 border-af-yellow px-8 py-3 text-3xl text-af-yellow">
          View {project.callToAction}
        </button>
      </div>
      <div className="relative flex w-1/2 items-center justify-end">
        <Image
          src={project.src}
          fill
          alt={project.title}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Project;
