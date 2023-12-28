'use client';
import Link from 'next/link';
import { useProjectPage } from '@/hooks/useProjectPage';
import Image, { StaticImageData } from 'next/image';
import ProjectHero from '@/components/ProjectHero';
import StaticImage from '@/components/StaticImage';
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
import RolesGoalsDeliverables from '@/components/RolesGoalsDeliverables';

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
      <div className="project-body p-0">
        <StaticImage
          className="project-progress"
          image={progress1}
          alt="Progress 1"
        />
        <h2>Project</h2>
        <h3>Overview</h3>
        <p>
          City Cycles is a favorite bike rental shop for locals and tourists in
          the city of Riverside.{' '}
          <span className="font-bold">
            The company asked me to join the team to design a more user-friendly
            online rental process
          </span>
          . My job was to analyze web analytics to create a user persona,
          journey map, and a user-tested Figma prototype. I worked directly with
          the client as well as their data researcher.  The goal for this
          website was to direct customers to rent bikes online rather than
          calling or showing up in-person.
        </p>
        <RolesGoalsDeliverables
          roles={['UI Design', 'UX Design']}
          deliverables={[
            'Color and type Scale',
            'User Persona',
            'Journey Map',
            'Wireframes',
            'Prototype',
            'User Testing',
            'Exported Assets',
          ]}
          goals={[
            'Solutions for Pain Points',
            'Intuitive Checkout',
            'Readable UI',
          ]}
        />
        <h3>Problem</h3>
        <p>
          City Cycles’ data analytics concluded that their online rental portal
          saw a steady decrease in usage over the last year. Users also often
          exited the website when they got to the reservation page. City Cycles
          felt that because not enough people are reserving online, this
          resulted in an influx of phone calls and in-person visits, making it
          difficult to give their customers the care they deserve.
        </p>
        <p>
          During user interviews,{' '}
          <span className="font-bold">
            customers found the website unclear and often did not complete a
            reservation once getting to the reservation page. It took many
            unintuitive clicks to get to the reservation page
          </span>{' '}
          which turned out to be an Outlook email popup. Words they used to
          describe the online rental process was “Annoying” and “Frustrating.”
          It was my role to find out what aspect of the process was unclear to
          customers and design a new interface that satisfied customers and my
          client.
        </p>
        <StaticImage image={wordcloud} alt="Wordcloud" />
        <blockquote>
          How can we make City Cycles’ online rental process easier than calling
          or going into the store?
        </blockquote>
        <StaticImage image={pageBreak1} alt="Page Break 1" />
        <StaticImage
          className="project-progress"
          image={progress2}
          alt="Progress 2"
        />
        <h2>Approach</h2>
        <h3>User Persona</h3>
        <p>
          Using these analytics and transcripts of user interviews, I was able
          to create the persona of{' '}
          <span className="font-bold">
            someone who loves to bike and be outside. She is a city local who
            would be interested in renting from City Cycles regularly
          </span>
          .
        </p>
        <StaticImage image={userPersonaCard} alt="User Persona Card" />
        <h3>Journey Map</h3>
        <p>
          I could then create a journey map of the pain points users experience
          as they are trying to rent a bike online. 
          <span className="font-bold">
            Users become more and more demoralized with each unhelpful click
            they make, resulting in calling City Cycles frustrated and annoyed
          </span>
          .
        </p>
        <StaticImage image={journeyMap} alt="Journey Map" />
        <h2>Wireframes and Prototype</h2>
        <p>I was then able to create a low-fidelity wireframe that:</p>
        <StaticImage image={uxCards} alt="UX Cards" />
        <StaticImage image={cityCycleWireframes} alt="City Cycle Wireframes" />
        <div className="flex">
          <div>
            <h3>User Testing</h3>
            <p>
              After City Cycles approved this checkout process wireframe, I
              continued on to make a high-fidelity Prototype. I completed two
              rounds of user testing to ensure the site was as user friendly as
              possible. I presented my data to the City Cycles stakeholders and
              it was approved immediately! The prototype includes:
            </p>
            <ul>
              <li>Clear navigation</li>
              <li>Reservation steps laid out on modal cards</li>
              <li>Date and Time picker</li>
              <li>Ability to rent multiple bikes at once</li>
              <li>Clear confirmation</li>
            </ul>
          </div>
          <div>
            <StaticImage image={prototypeMockUp} alt="Prototype Mock Up" />
            <button className="gradient-text">View Prototype</button>
          </div>
        </div>
        <StaticImage image={pageBreak2} alt="Page Break 2" />
        <StaticImage
          className="project-progress"
          image={progress3}
          alt="Progress 3"
        />
        <h2>Results</h2>
        <h3>Key Findings</h3>
        pUsers of the City Cycles website want an easy-to-use online rental
        portal. They wanted to know exactly where in the process they were and
        how to move around within the portal. This is why I aimed to make the
        rental process was as easy and intuitive as possible. 
        <h3>Solutions</h3>
        <h4>Home Page:</h4>
        <p>
          I revamped the hero image and text scrolling to be more readable. I
          also added a “Reserve Now” button to make clear how to begin the
          rental process. I also changed one navigation tab from “Hours” to
          “About Us” to help users navigate the site better. I also moved the
          search bar to the top so it is easier to see as well as grouped with
          the other navigational tabs.
        </p>
        <StaticImage image={oldSite} alt="Old Site" />
        <StaticImage image={newSiteFrame} alt="New Site Frame" />
        <h4>Choose Date and Time</h4>
        <p>
          I created cards to overlay a darkened hero image for better
          readability and hierarchy. On the first page that appears after
          clicking the “Reserve Now” button, this card appears with a date and
          time picker so the user knows what bikes are available on the day they
          choose.
        </p>
        <StaticImage
          image={chooseDateAndTimeCard}
          alt="Choose Date and Time Card"
        />
        <h4>Choose Your Bike</h4>
        <p>
          This card includes a small description of each bike so users know what
          is appropriate for their skill level and where they want to ride. It
          also includes a hover drop shadow feature so they know they can click
          the card to select the bike. This, along with a quantity counter,
          allows users to rent different bikes for a group of people in one
          reservation process.
        </p>
        <StaticImage image={chooseABikeCard} alt="Choose your bike" />
        <h4>Order Summary</h4>
        <p>
          I included a progress tracker so the user is clear that they only have
          one last step before having their rental confirmed. I also added an
          ability to edit your bike selection and/or time and date. The user
          also has the ability to go back to the previous card using the “Back
          Button.” This way, the user feels like they know exactly where they
          are and how to move within the rental process.
        </p>
        <StaticImage image={orderSummaryCard} alt="Order summary card" />
        <h4>Confirmation Page</h4>
        <p>
          The confirmation page gives the user a sense of security that their
          reservation went through. Indicating that details will be sent to the
          email lets the user not feel overwhelmed in the moment with too much
          information about the day of their rental. If at this point, the user
          still would like to call the shop, the phone number and email are
          available on this page.
        </p>
        <StaticImage image={confirmationCard} alt="Confirmation card" />
        <h3>Challenges</h3>
        <p>
          Working with City Cycles was great practice in staying within scope.
          Although their rental process was the most pressing matter, there were
          many aspects of the site that could have been improved. Their
          information was a bit messy and could have a lot of potential.
          However, there was only so much money and time City Cycles wanted to
          spend on their website. By focusing solely on the online rental
          process, I fully accomplished the goals of my client.
        </p>
      </div>
    </>
  );
}

export default CityCycles;
