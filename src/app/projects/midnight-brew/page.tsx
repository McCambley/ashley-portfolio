'use client';
import Link from 'next/link';
import { useProjectPage } from '@/hooks/useProjectPage';
import Image, { StaticImageData } from 'next/image';
import ProjectHero from '@/components/ProjectHero';
import progress1 from '~/case_studies/assorted/assorted_progress_1.png';
import progress2 from '~/case_studies/assorted/assorted_progress_2.png';
import progress3 from '~/case_studies/assorted/assorted_progress_3.png';
import colorAndType from '~/case_studies/midnight_brew/midnight_brew_color_and_type.png';
import conclusionStyleGuide from '~/case_studies/midnight_brew/midnight_brew_conclusion_style_guide.png';
import darkModeLogo from '~/case_studies/midnight_brew/midnight_brew_dark_mode_logo.png';
import facebookHeaders from '~/case_studies/midnight_brew/midnight_brew_facebook_headers.png';
import goldCoffeeIcon from '~/case_studies/midnight_brew/midnight_brew_gold_coffee_icon.png';
import goldSilverwareIcon from '~/case_studies/midnight_brew/midnight_brew_gold_silverware_icon.png';
import heroImage from '~/case_studies/midnight_brew/midnight_brew_hero_image.png';
import icons from '~/case_studies/midnight_brew/midnight_brew_icons.png';
import lightModeLogo from '~/case_studies/midnight_brew/midnight_brew_light_mode_logo.png';
import logos from '~/case_studies/midnight_brew/midnight_brew_logos.png';
import oneMoreCupFacebook from '~/case_studies/midnight_brew/midnight_brew_one_more_cup_facebook.png';
import oneMorePageFacebook from '~/case_studies/midnight_brew/midnight_brew_one_more_page_facebook.png';
import targetAudience1 from '~/case_studies/midnight_brew/midnight_brew_target_audience_1.png';
import targetAudience2 from '~/case_studies/midnight_brew/midnight_brew_target_audience_2.png';
import userPersonaCard from '~/case_studies/midnight_brew/midnight_brew_user_persona_card.png';

function MidnightBrew() {
  const [, hero] = useProjectPage();

  return (
    <>
      <ProjectHero
        image={hero}
        title="Style Guide and Branding for Midnight Brew"
        description="How can we create a brand for a new coffee shop?"
        wrapperClasses="items-end"
        textClasses="md:text-right text-white md:max-w-xl"
      />
    </>
  );
}

export default MidnightBrew;
