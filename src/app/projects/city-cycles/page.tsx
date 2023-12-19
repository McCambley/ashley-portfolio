'use client';
import Link from 'next/link';
import { useProjectPage } from '@/hooks/useProjectPage';
import Image, { StaticImageData } from 'next/image';
import ProjectHero from '@/components/ProjectHero';
import progress1 from '~/case_studies/assorted/assorted_progress_1.png';
import progress2 from '~/case_studies/assorted/assorted_progress_2.png';
import progress3 from '~/case_studies/assorted/assorted_progress_3.png';
import cityCycleWireframes from '~/case_studies/city_cycles/city_cycle_3_wireframes.png';
import chooseABikeCard from '~/case_studies/city_cycles/city_cycle_choose_a_bike_card.png';
import chooseDateAndTimeCard from '~/case_studies/city_cycles/city_cycle_choose_date_and_time_card.png';
import confirmationCard from '~/case_studies/city_cycles/city_cycle_confirmation_card.png';
import cityCycleHeroImage from '~/case_studies/city_cycles/city_cycle_hero_image.png';
import journeyMap from '~/case_studies/city_cycles/city_cycle_journey_map.png';
import newSiteFrame from '~/case_studies/city_cycles/city_cycle_new_site_frame.png';
import oldSite from '~/case_studies/city_cycles/city_cycle_old_site.png';
import orderSummaryCard from '~/case_studies/city_cycles/city_cycle_order_summary_card.png';
import pageBreak1 from '~/case_studies/city_cycles/city_cycle_page_break_1.png';
import pageBreak2 from '~/case_studies/city_cycles/city_cycle_page_break_2.png';
import prototypeMockUp from '~/case_studies/city_cycles/city_cycle_prototype_mock_up.png';
import userPersonaCard from '~/case_studies/city_cycles/city_cycle_user_persona_card.png';
import uxCards from '~/case_studies/city_cycles/city_cycle_ux_cards.png';
import wordcloud from '~/case_studies/city_cycles/city_cycle_wordcloud-3_1.png';

function CityCycles() {
  const [, hero] = useProjectPage();

  return (
    <>
      <ProjectHero
        image={hero}
        title="City Cycles Bike Rental"
        description="How can we create a user-centered rental experience?"
        wrapperClasses="items-center"
      />
    </>
  );
}

export default CityCycles;
