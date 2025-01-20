'use client';
import { useProjectPage } from '@/hooks/useProjectPage';
import ProjectHeroMinimal from '@/components/ProjectHeroMinimal';

function SitConmigo() {
  const [, hero] = useProjectPage();

  return (
    <>
      <ProjectHeroMinimal
        image={hero}
        title="Trail Crew Association Website Redesign"
        description="How can we encourage donations and volunteering for a non-profit organization?"
        wrapperClasses="pb-48"
        textClasses=""
        viewLiveLink="https://www.amctca.com/"
        buttonCta="View Website"
      />
    </>
  );
}

export default SitConmigo;
