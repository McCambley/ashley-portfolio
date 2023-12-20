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
    <div className="mx-auto flex justify-center gap-4">
      <GradientBorder className="rounded-md">
        <h2>Roles</h2>
        <Image src={rolesIcon.src} alt="Roles" width={40} height={40} />
        <ul>
          {roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </GradientBorder>
      <GradientBorder className="rounded-md">
        <h2>Deliverables</h2>
        <Image
          src={deliverablesIcon}
          alt="Deliverables"
          width={40}
          height={40}
        />
        <ul>
          {deliverables.map((deliverable, index) => (
            <li key={index}>{deliverable}</li>
          ))}
        </ul>
      </GradientBorder>
      <GradientBorder className="rounded-md">
        <h2>Goals</h2>
        <Image src={goalsIcon} alt="Goals" width={40} height={40} />
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </GradientBorder>
    </div>
  );
}

export default RolesGoalsDeliverables;
