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
    <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-12 px-4 pb-52 pt-12">
      <GradientBorder className="flex min-h-[500px] w-full max-w-[375px] flex-col items-center justify-start rounded-xl p-4">
        <p className="mb-6 text-center font-heading text-3xl gradient-text">
          Roles
        </p>
        <Image
          src={rolesIcon.src}
          alt="Roles"
          width={68}
          height={68}
          className="mb-5 max-w-[68px]"
        />
        <ul className="gradient-text">
          {roles.map((role, index) => (
            <li
              className="mb-2 w-full list-none text-center text-xl"
              key={index}
            >
              {role}
            </li>
          ))}
        </ul>
      </GradientBorder>
      <GradientBorder className="flex min-h-[500px] w-full max-w-[375px] flex-col items-center justify-start rounded-xl p-4">
        <p className="mb-6 text-center font-heading text-3xl gradient-text">
          Deliverables
        </p>
        <Image
          src={deliverablesIcon}
          alt="Deliverables"
          width={68}
          height={68}
          className="mb-5 max-w-[68px]"
        />
        <ul className="gradient-text">
          {deliverables.map((deliverable, index) => (
            <li
              className="mb-2 w-full list-none text-center text-xl"
              key={index}
            >
              {deliverable}
            </li>
          ))}
        </ul>
      </GradientBorder>
      <GradientBorder className="flex min-h-[500px] w-full max-w-[375px] flex-col items-center justify-start rounded-xl p-4">
        <p className="mb-6 text-center font-heading text-3xl gradient-text">
          Goals
        </p>
        <Image
          src={goalsIcon}
          alt="Goals"
          width={68}
          height={68}
          className="mb-5 max-w-[68px]"
        />
        <ul className="gradient-text">
          {goals.map((goal, index) => (
            <li
              className="mb-2 w-full list-none text-center text-xl"
              key={index}
            >
              {goal}
            </li>
          ))}
        </ul>
      </GradientBorder>
    </div>
  );
}

export default RolesGoalsDeliverables;
