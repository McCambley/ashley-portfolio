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
    <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-4">
      <GradientBorder className="flex max-w-sm flex-col items-center justify-start rounded-md p-4">
        <h2 className="mb-5 text-center text-3xl">Roles</h2>
        <Image
          src={rolesIcon.src}
          alt="Roles"
          width={40}
          height={40}
          className="mb-4"
        />
        <ul className="gradient-text">
          {roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </GradientBorder>
      <GradientBorder className="flex max-w-sm flex-col items-center justify-start rounded-md p-4">
        <h2 className="mb-5 text-center text-3xl">Deliverables</h2>
        <Image
          src={deliverablesIcon}
          alt="Deliverables"
          width={40}
          height={40}
          className="mb-4"
        />
        <ul className="gradient-text">
          {deliverables.map((deliverable, index) => (
            <li key={index}>{deliverable}</li>
          ))}
        </ul>
      </GradientBorder>
      <GradientBorder className="flex max-w-sm flex-col items-center justify-start rounded-md p-4">
        <h2 className="mb-5 text-center text-3xl">Goals</h2>
        <Image
          src={goalsIcon}
          alt="Goals"
          width={40}
          height={40}
          className="mb-4"
        />
        <ul className="gradient-text">
          {goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </GradientBorder>
    </div>
  );
}

export default RolesGoalsDeliverables;
