import GradientBorder from './GradientBorder';
import Image from 'next/image';
import rolesIcon from '~/case_studies/assorted/assorted_roles.svg';
import goalsIcon from '~/case_studies/assorted/assorted_goals.svg';
import deliverablesIcon from '~/case_studies/assorted/assorted_deliverables.svg';

function RolesGoalsDeliverables({
  roles,
  goals,
  deliverables,
}: {
  roles: string[];
  goals: string[];
  deliverables: string[];
}) {
  return (
    <div className="roles-goals-deliverables mx-auto flex max-w-7xl flex-wrap justify-center gap-12 px-4 pb-52 pt-12">
      <div className="flex min-h-[500px] w-full max-w-[375px] flex-col items-center justify-start rounded-xl p-8">
        <p>Roles</p>
        <Image
          src={rolesIcon.src}
          alt="Roles"
          width={68}
          height={68}
          className="mb-5 max-w-[68px]"
        />
        <ul className="project-list pt-0 text-af-light">
          {roles.map((role, index) => (
            <li
              className="mb-2 w-full list-none text-center text-xl"
              key={index}
            >
              {role}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex min-h-[500px] w-full max-w-[375px] flex-col items-center justify-start rounded-xl p-8">
        <p>Deliverables</p>
        <Image
          src={deliverablesIcon}
          alt="Deliverables"
          width={68}
          height={68}
          className="mb-5 max-w-[68px]"
        />
        <ul className="project-list pt-0 text-af-light">
          {deliverables.map((deliverable, index) => (
            <li
              className="mb-2 w-full list-none text-center text-xl"
              key={index}
            >
              {deliverable}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex min-h-[500px] w-full max-w-[375px] flex-col items-center justify-start rounded-xl p-8">
        <p>Goals</p>
        <Image
          src={goalsIcon}
          alt="Goals"
          width={68}
          height={68}
          className="mb-5 max-w-[68px]"
        />
        <ul className="project-list pt-0 text-af-light">
          {goals.map((goal, index) => (
            <li
              className="mb-2 w-full list-none text-center text-xl"
              key={index}
            >
              {goal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RolesGoalsDeliverables;
