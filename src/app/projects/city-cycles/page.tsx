'use client';
import { useProjectPage } from '@/hooks/useProjectPage';
import ProjectHero from '@/components/ProjectHero';
import StaticImage from '@/components/StaticImage';
import progress1 from '~/case_studies/assorted/assorted_progress_1.png';
import progress2 from '~/case_studies/assorted/assorted_progress_2.png';
import progress3 from '~/case_studies/assorted/assorted_progress_3.png';
import cityCycleWireframes from '~/case_studies/city_cycles/city_cycle_3_wireframes.png';
import chooseABikeCard from '~/case_studies/city_cycles/city_cycle_choose_a_bike_card.png';
import chooseDateAndTimeCard from '~/case_studies/city_cycles/city_cycle_choose_date_and_time_card.png';
import confirmationCard from '~/case_studies/city_cycles/city_cycle_confirmation_card.png';
import journeyMap from '~/case_studies/city_cycles/city_cycle_journey_map.png';
import newSiteFrame from '~/case_studies/city_cycles/city_cycle_new_site_frame.png';
import oldSite from '~/case_studies/city_cycles/city_cycle_old_site.png';
import orderSummaryCard from '~/case_studies/city_cycles/city_cycle_order_summary_card.png';
import pageBreak1 from '~/case_studies/city_cycles/city_cycle_page_break_1.png';
import wireframeSections from '~/case_studies/city_cycles/city_cycle_wireframe_sections.png';
import pageBreak2 from '~/case_studies/city_cycles/city_cycle_page_break_2.png';
import prototypeMockUp from '~/case_studies/city_cycles/city_cycle_prototype_mock_up.png';
import userPersonaCard from '~/case_studies/city_cycles/city_cycle_user_persona_card.png';
import uxCards from '~/case_studies/city_cycles/city_cycle_ux_cards.png';
import wordcloud from '~/case_studies/city_cycles/city_cycle_wordcloud-3_1.png';
import sitemap from '~/case_studies/city_cycles/city_cycle_site_map.png';
import pies from '~/case_studies/city_cycles/city_cycle_pies.png';
import loFi from '~/case_studies/city_cycles/city_cycle_lo_fi.png';
import RolesGoalsDeliverables from '@/components/RolesGoalsDeliverables';
import GradientBorder from '@/components/GradientBorder';
import { ProjectLinks } from '@/components/ProjectLinks';
import { projects } from '#/constants';
import BabyBurst from '@/components/BabyBurst';
import { ProgressWithBurst } from '@/components/ProgressWithBurst';

function CityCycles() {
  const [, hero] = useProjectPage();

  return (
    <>
      <ProjectHero
        image={hero}
        title="City Cycles Bike Rental"
        description="How can we create a user-centered rental experience?"
        wrapperClasses="items-center"
        viewLiveLink="https://www.figma.com/proto/GyIIyMkhRolVvt2C3XtaQV/City-Cycles-Web-Layout?page-id=462%3A528&type=design&node-id=462-678&viewport=1013%2C268%2C0.26&t=PjipDigCsv0FNaI3-1&scaling=scale-down&mode=design"
        buttonCta="View Prototype"
      />
      <div className="project-body p-0">
        <ProgressWithBurst image={progress1} alt="Progress 1" />
        <h2>Project</h2>
        <h3>Overview</h3>
        <p>
          City Cycles is a favorite bike rental shop for locals and tourists in
          the city of Riverside.{' '}
          <span className="font-bold">
            The company asked me to join the team to design a more user-friendly
            online rental process
          </span>
          .
        </p>
        <RolesGoalsDeliverables
          roles={['UI Design', 'UX Design']}
          deliverables={[
            'Data Analysis',
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
          City Cycles found that usage of the online bike rental process has
          been declining for the last year. Initial user interviews revealed
          many pain points throughout the process. My job was to analyze web
          analytics to create a user persona, journey map, site map, and a
          user-tested Figma prototype. I worked directly with the client as well
          as their data researcher. The goal for this website was to direct
          customers to rent bikes online rather than calling or showing up
          in-person.
        </p>
        <blockquote className="project-blockquote">
          How can we make City Cycles’ online rental process more usable than
          calling or going into the store?
        </blockquote>
        <StaticImage image={pageBreak1} alt="Page Break 1" />
        <ProgressWithBurst image={progress2} alt="Progress 2" />
        <h2>Approach</h2>
        <h3>Google Analytics</h3>
        <p>
          Analytics revealed that almost half of users don’t even begin the
          rental process when they land on the homepage. This 80% drop-off rate
          demonstrates that very few users complete their reservation. And
          because there are so few users returning to the website, it can be
          inferred that they decided to call or go to City Cycles to process
          their rental.
        </p>
        <StaticImage
          image={pies}
          alt="Pie charts of Google Analytics"
          className="project-body-image pb-40"
        />
        <h3>Heat Mapping and User Interviews</h3>
        <p>
          Heat mapping revealed that 75% of users paused their mouse over the
          navigation menu, relied heavily on the search bar, and{' '}
          <span className="font-bold">
            the phone number link saw the highest traffic
          </span>
          . This was congruent with initial user interviews where customers said
          they felt more comfortable reserving over the phone. And although they
          liked the layout of the website, they were frustrated and confused by
          the reservation process and whether or not their reservation was
          complete. Using a word cloud, I could visualize the language used in
          interviews to see that customers we “annoyed” and “frustrated,”
          potentially pushing them to call City Cycles for their rental needs.{' '}
        </p>
        <StaticImage
          image={wordcloud}
          alt="Word Cloud"
          className="project-body-image max-w-[460px] pb-40"
        />
        <h3>User Persona</h3>
        <p>
          Using these analytics and transcripts of user interviews, I was able
          to create the persona of someone who loves to bike and be outside.{' '}
          <span className="font-bold">
            She is a city local who would be interested in renting from City
            Cycles regularly
          </span>
          .
        </p>
        <StaticImage
          image={userPersonaCard}
          alt="User Persona Card"
          className="project-body-image pb-40"
        />
        <h3>Journey Map</h3>
        <p>
          With user interviews and Linda in mind, I could then create a journey
          map of the pain points users experience as they are trying to rent a
          bike online.{' '}
          <span className="font-bold">
            It was evident that users became more and more demoralized with each
            unhelpful click they made, resulting in calling the City Cycles
            store frustrated and annoyed.”
          </span>
          .
        </p>
        <StaticImage
          image={journeyMap}
          alt="Journey Map"
          className="project-body-image pb-40"
        />
        <h3>Site Map</h3>
        <p>
          To avoid those feelings of frustration, I created a site map that
          allowed the user to go easily from the Homepage to Rentals, ending
          with a clear reservation confirmation page.
        </p>
        <StaticImage
          image={sitemap}
          alt="Site Map"
          className="project-body-image pb-40"
        />
        <h3>A/B Split Testing</h3>
        <p>
          To start the rental process on the original City Cycles website, there
          was a black button at the bottom of the page labeled “Online Call
          Ahead”. This control was tested against a variation with a bright blue
          button in the navigation bar labeled “Reserve”. Over 3 weeks testing
          1,500 visitors, the{' '}
          <span className="font-bold">
            control conversion rate came out to be 7.68% while the variation
            conversion rate came out to be 44.78%
          </span>
          , making it clear the the variation yielded better conversion to the
          rental process than the original homepage.{' '}
        </p>
        <blockquote className="project-blockquote pb-40">
          A/B split testing revealed that users were far more likely to continue
          from the homepage to reserving a bike when the reservation button was
          moved to the main navigation bar, was a bright blue color, and
          labeled”Reserve”.
        </blockquote>
        <h3>Wireframes</h3>
        <p>
          With all of this information, I was able to create a paper wireframe
          and low-fidelity prototype that included:
        </p>
        <StaticImage
          image={wireframeSections}
          alt="Wireframe Sections"
          className="project-body-image"
        />
        <StaticImage
          image={cityCycleWireframes}
          alt="City Cycle Wireframes"
          className="project-body-image pb-40"
        />
        <h3>Low-Fidelity Prototype</h3>
        <StaticImage
          image={loFi}
          alt="Low-Fidelity Prototype"
          className="project-body-image pb-40"
        />

        <StaticImage image={pageBreak2} alt="Page Break 2" />
        <ProgressWithBurst image={progress3} alt="Progress 3" />
        <h2>Results</h2>
        <div className="mx-auto flex max-w-[1200px] flex-col pb-8 md:flex-row md:pb-32 lg:gap-4 lg:p-8 lg:pb-60">
          <div className="w-full lg:w-3/5">
            <h3 className="text-af-light-unset mb-9 text-4xl font-medium">
              User Testing
            </h3>
            <p>
              I completed two rounds of user testing to ensure the site was as
              user friendly as possible. Within that testing it was clear that
              users wanted:
            </p>
            <ul className="project-list user-testing">
              <li>
                More distinction between each action of the rental process and
                where they were within in it
              </li>
              <li>The ability to edit the reservation at any point</li>
              <li>Indication that bike cards were clickable</li>
              <li>Remove excess copy from the bike reservation page</li>
              <li>An explanation of each bike available</li>
            </ul>
          </div>
          <div className="flex w-full flex-col items-center justify-center px-6 lg:w-2/5 lg:px-0">
            <StaticImage
              image={prototypeMockUp}
              alt="Prototype Mock Up"
              className="project-body-image px-0 pb-12 lg:p-0 lg:pb-12"
            />
            <a
              className="w-full md:max-w-[300px]"
              target="_blank"
              href="https://www.figma.com/proto/GyIIyMkhRolVvt2C3XtaQV/City-Cycles-Web-Layout?page-id=462%3A528&type=design&node-id=462-678&viewport=1013%2C268%2C0.26&t=PjipDigCsv0FNaI3-1&scaling=scale-down&mode=design"
            >
              <button className="mx-auto w-full rounded-full p-3 text-center font-heading text-lg font-light text-af-light transition-opacity hover:opacity-70 md:max-w-[300px] lg:p-4 lg:text-lg">
                View Prototype
              </button>
            </a>
          </div>
        </div>
        {/* <h3>Key Findings</h3>
        <p className="pb-48">
          Users of the City Cycles website want an easy-to-use online rental
          portal. They wanted to know exactly where in the process they were and
          how to move around within the portal. This is why I aimed to make the
          rental process was as easy and intuitive as possible.
        </p> */}
        <h3 className="pb-24">Solutions</h3>
        <div className="project-subsection">
          <h4>Home Page</h4>
          <p className="pb-16">
            I revamped the hero image and text scrolling to be more readable. I
            also added a “Reserve Now” button to make clear how to begin the
            rental process. I also changed one navigation tab from “Hours” to
            “About Us” to help users navigate the site better. I also moved the
            search bar to the top so it is easier to see as well as grouped with
            the other navigational tabs.
          </p>
        </div>
        <StaticImage
          image={oldSite}
          alt="Old Site"
          className="project-body-image max-w-[1200px] pb-24"
        />
        <StaticImage
          image={newSiteFrame}
          alt="New Site Frame"
          className="project-body-image max-w-[1200px] pb-44"
        />
        <div className="project-subsection">
          <h4>Choose Date and Time</h4>
          <p>
            I created modal cards to separate each step of the process to
            overlay a darkened hero image for better readability and hierarchy.
            On the first page that appears after clicking the “Reserve Now”
            button, this card appears with a date and time picker so the user
            knows that bikes are available on the day they choose.
          </p>
        </div>
        <StaticImage
          image={chooseDateAndTimeCard}
          alt="Choose Date and Time Card"
          className="project-body-image  max-w-[548px] pb-40"
        />
        <div className="project-subsection">
          <h4>Choose Your Bike</h4>
          <p className="pb-16">
            This card includes a small description of each bike so users know
            what is appropriate for their skill level and where they want to
            ride. It also includes a hover drop shadow feature so they know they
            can click the card to select the bike. This, along with a quantity
            counter, allows users to rent different bikes for a group of people
            in one reservation process.
          </p>
        </div>
        <StaticImage
          image={chooseABikeCard}
          alt="Choose your bike"
          className="project-body-image max-w-[1200px] pb-36"
        />
        <div className="project-subsection">
          <h4>Order Summary</h4>
          <p>
            I included a progress tracker so the user is clear that they only
            have one last step before having their rental confirmed. I also
            added an ability to edit your bike selection and/or time and date.
            The user also has the ability to go back to the previous card using
            the “Back Button.” This way, the user feels like they know exactly
            where they are and how to move within the rental process.
          </p>
        </div>
        <StaticImage
          image={orderSummaryCard}
          alt="Order summary card"
          className="project-body-image max-w-[1060px] pb-36"
        />
        <div className="project-subsection">
          <h4>Confirmation Page</h4>
          <p>
            The confirmation page gives the user a sense of security that their
            reservation went through. Indicating that details will be sent to
            the email lets the user not feel overwhelmed in the moment with too
            much information about the day of their rental. If at this point,
            the user still would like to call the shop, the phone number and
            email are available on this page.
          </p>
        </div>
        <StaticImage
          image={confirmationCard}
          alt="Confirmation card"
          className="project-body-image max-w-[568px] pb-40"
        />
        <h3>Challenges</h3>
        <p className="pb-16">
          Working with City Cycles was great practice in staying within scope.
          Although their rental process was the most pressing matter, there were
          many aspects of the site that could have been improved. Their
          information was a bit messy and could have a lot of potential.
          However, there was only so much money and time City Cycles wanted to
          spend on their website. By focusing solely on the online rental
          process, I fully accomplished the goals of my client.
        </p>
        <ProjectLinks
          className="max-w-[960px]"
          link={projects.filter(p => p.link.includes('midnight'))[0].link}
        />
      </div>
    </>
  );
}

export default CityCycles;
