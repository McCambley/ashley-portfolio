import Image from 'next/image';

function Project({ project }: { project: Project }) {
  return (
    <div
      key={project.title}
      className="mx-auto mb-28 flex w-full flex-col overflow-hidden rounded-3xl border-4 border-af-yellow md:flex-row"
    >
      <div className="flex w-full flex-col justify-between border-af-yellow p-8 md:w-1/2 md:border-r-4 md:p-10">
        <h3 className={`mb-0 font-heading gradient-text`}>{project.title}</h3>
        <h4 className="pb-6 gradient-text md:pb-36">{project.subtitle}</h4>
        <Image
          width={1600}
          height={900}
          src={project.src}
          alt={project.title}
          className="mx-auto mb-6 aspect-square w-1/2 rounded-full object-cover md:hidden"
        />
        <p className="pb-32 text-3xl gradient-text">{project.description}</p>
        <button className="w-fit max-w-[inherit] rounded-2xl border-4 border-af-yellow px-4 py-3 text-3xl text-af-yellow">
          View {project.callToAction}
        </button>
      </div>
      <div className="hidden items-center justify-end md:relative md:flex md:w-1/2">
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
