'use client';
import { useProjectPage } from '@/hooks/useProjectPage';
import ProjectHeroMinimal from '@/components/ProjectHeroMinimal';
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
import oldSite2 from '~/case_studies/city_cycles/city_cycle_old_site2.png';
import orderSummaryCard from '~/case_studies/city_cycles/city_cycle_order_summary_card.png';
import wireframeSections from '~/case_studies/city_cycles/city_cycle_wireframe_sections.png';
import prototypeMockUp from '~/case_studies/city_cycles/city_cycle_prototype_mock_up.png';
import userPersonaCard from '~/case_studies/city_cycles/city_cycle_user_persona_card.png';
import ABTesting from '~/case_studies/city_cycles/city_cycle_ab.png';
import wordcloud from '~/case_studies/city_cycles/city_cycle_wordcloud-3_1.png';
import sitemap from '~/case_studies/city_cycles/city_cycle_site_map.png';
import pies from '~/case_studies/city_cycles/city_cycle_pies.png';
import loFi from '~/case_studies/city_cycles/city_cycle_lo_fi.png';
import userFlow from '~/case_studies/city_cycles/city_cycle_user_flow.png';
import RolesGoalsDeliverables from '@/components/RolesGoalsDeliverables';
import { ProjectLinks } from '@/components/ProjectLinks';
import { projects } from '#/constants';
import { ProgressWithBurst } from '@/components/ProgressWithBurst';

function CityCycles() {
  const [, hero] = useProjectPage();

  return (
    <>
      <ProjectHeroMinimal
        image={hero}
        title="City Cycles Bike Rental Shop Website Redesign "
        description="How can we create a user-centered booking flow?"
        wrapperClasses="items-center"
        viewLiveLink="https://www.figma.com/proto/GyIIyMkhRolVvt2C3XtaQV/City-Cycles-Web-Layout?page-id=462%3A528&type=design&node-id=462-678&viewport=1013%2C268%2C0.26&t=PjipDigCsv0FNaI3-1&scaling=scale-down&mode=design"
        buttonCta="View Prototype"
      />
      <div className="project-body p-0">
        <ProgressWithBurst image={progress1} alt="Progress 1" id="1" />
        <h2>Project</h2>
        <p className="section-subtitle">
          City Cycles is a bike rental shop in the city of Riverside in need of
          a website re-design to eliminate pain points in their bike rental
          process
        </p>
        <RolesGoalsDeliverables
          roles={['UI Design', 'UX Design']}
          deliverables={[
            'Data Analysis',
            'User Persona',
            'Journey Map',
            'User Flow',
            'Wireframes',
            'Prototype',
            'User Testing',
            'Exported Assets',
          ]}
          goals={[
            'Solutions for Pain Points',
            'Intuitive Checkout',
            'Increase Online Rentals by 20%',
            'Decrease Time Spent in Store',
          ]}
        />
        <h3>Problem</h3>
        <p>
          Online bike rentals are low due to confusing navigation and a
          reserve-by email process. Analytics and interviews with users and
          employees revealed:
        </p>
        <ul className="list-disc">
          <li>High bounce rate from homepage</li>
          <li>High drop-off rate during the reservation</li>
          <li>Few returning visitors to the site</li>
          <li>High use of search bar</li>
          <li>CTA was hard to find</li>
          <li>Users found the booking process frustrating</li>
          <li>
            Employees were overwhelmed with in-store and call-ahead bookings
          </li>
        </ul>
        <StaticImage
          image={oldSite2}
          alt="Old site"
          className="project-body-image pb-40"
        />
        <h3>Solutions</h3>
        <p>
          I worked directly with the client as well as their data researcher. My
          job was to analyze web analytics, heat mapping, and user interviews
          done by the data researcher to create a variety of UX deliverables.
          These will allow me to gather information about user pain points and
          create a user-friendly checkout process to increase online rentals.
        </p>
        <ProgressWithBurst image={progress2} alt="Progress 2" id="2" />
        <h2>Approach</h2>
        <h3>Google Analytics</h3>
        <p>
          Analytics done by the data researcher revealed that many users are not
          inclined to start the rental process and even less inclined to
          complete their reservation. And because there are so few users
          returning to the website, it can be inferred that they decided to call
          or go to City Cycles to process their rental.
        </p>
        <StaticImage
          image={pies}
          alt="Pie charts of Google Analytics"
          className="project-body-image pb-40"
        />
        <h3>Heat Mapping and User Interviews</h3>
        <p>Heat mapping revealed that:</p>
        <ul className="list-disc">
          <li>75% of users paused their mouse over the navigation menu</li>
          <li>Users relied heavily on the search bar</li>
          <li>The phone number link saw the highest traffic</li>
        </ul>
        <p>
          This was congruent with initial employee and user interviews where
          customers said they were confused by the rental process and employees
          were over-run with calls and in-person rentals. I created a word cloud
          to represent user conversations about the online rental process.
        </p>
        <StaticImage
          image={wordcloud}
          alt="Word Cloud"
          className="project-body-image max-w-[460px] pb-40"
        />
        <h3>A/B Split Testing</h3>
        <p>
          Based on these analytics, their data researcher conducted an A/B split
          test over 3 weeks and 1,500 users and found their variation to yield a
          higher conversion rate by:
        </p>
        <ul className="list-disc">
          <li>Changing the “Online Call Ahead” CTA to “Reserve”</li>
          <li>Changing the color to a bright blue</li>
          <li>Moving the CTA to the top navigation</li>
        </ul>

        <StaticImage
          image={ABTesting}
          alt="A/B Testing"
          className="project-body-image pb-40"
        />
        {/* <blockquote className="project-blockquote pb-40">
          A/B split testing revealed that users were far more likely to continue
          from the homepage to reserving a bike when the reservation button was
          moved to the main navigation bar, was a bright blue color, and
          labeled”Reserve”.
        </blockquote> */}
        <h3>User Persona</h3>
        <p>
          Using these analytics and transcripts of user interviews, I was able
          to create the persona of someone is in City Cycles primary target
          audience. This was helpful to empathize with the user and better
          understand their user journey.
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
          bike online. It was evident that users became more and more
          demoralized with each unhelpful click they made.
        </p>
        <StaticImage
          image={journeyMap}
          alt="Journey Map"
          className="project-body-image pb-40"
        />
        <h3>User Flow</h3>
        <p>
          Because my focus was on the rental experience, I created a Fig Jam
          user flow that addressed the pain points in the user journey. This
          user flow:
        </p>
        <ul className="list-disc">
          <li>
            Gives users overall information about City Cycles on the Homepage,
            then guide them to sub pages for optimal informational architecture,
            yielding a more intuitive website
          </li>
          <li>
            Better visualizes at what points the user could experience pain
            points
          </li>
          <li>Makes sure the user can start a reservation from any page</li>
          <li>
            Reduces the amount of clicks it takes to get from start to finish of
            the rental process
          </li>
        </ul>

        <StaticImage
          image={userFlow}
          alt="User flow"
          className="project-body-image pb-40"
        />

        <h3>Wireframes</h3>
        <p>
          Based on my user flow, I created a paper wireframe to get ideas out to
          the client quickly to make sure I was going in a direction they
          approved of without getting distracted by pixel perfect designs.
        </p>
        <StaticImage
          image={cityCycleWireframes}
          alt="City Cycle Wireframes"
          className="project-body-image pb-40"
        />
        <h3>Low-Fidelity Prototype</h3>
        <p>
          With my wireframes approved, I was able to create a low-fidelity
          prototype that included:
        </p>
        <ul className="list-disc">
          <li>
            Minimal click user flow from the homepage to rentals to reduce
            bounce-rate
          </li>
          <li>
            “Reserve” button at the top of the homepage to easily begin
            reservation, per A/B testing
          </li>
          <li>
            Payment page so users spend less time in store, putting less burden
            on employees
          </li>
          <li>Date & time, and bike picker for easy reservations</li>
          <li>
            Removing the photo behind the scrolling words for easier readability
          </li>
          <li>
            A page to confirm the reservation so the user knows when the action
            is complete
          </li>
        </ul>

        <StaticImage
          image={loFi}
          alt="Low-Fidelity Prototype"
          className="project-body-image pb-40"
        />
        <ProgressWithBurst image={progress3} alt="Progress 3" id="3" />
        <h2>Results</h2>
        <div className="mx-auto flex max-w-[1200px] flex-col pb-8 md:flex-row md:pb-32 lg:gap-4 lg:p-8 lg:pb-60">
          <div className="w-full lg:w-3/5">
            <h3 className="text-af-light-unset mb-9 text-4xl font-medium">
              User Interviews
            </h3>
            <p>
              I completed two rounds of user interviews to ensure the site was
              as user friendly as possible. I found users wanted:
            </p>
            <ul className="list-disc">
              <li>Clearer navigation, readable text, excess copy removed</li>
              <li>
                More distinction between each action of the rental process
              </li>
              <li>An indication of the bike card click-ability</li>
              <li>An explanation of each bike</li>
              <li>To be able to rent multiple bikes at once</li>
              <li>The ability to edit the reservation at any point</li>
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
          <ul className="list-disc">
            <li>Replaced the hero image and text scrolling for readability</li>
            <li>
              Added a “Reserve Now” CTA to make clear how to begin the rental
              process
            </li>
            <li>
              Changed one navigation tab from “Hours” to “About Us” for a better
              description of the website’s pages, so users are less reliant on
              the search bar
            </li>
            <li>
              Grouped a more visible search bar with the other navigational tabs
              for better informational architecture
            </li>
          </ul>
          <p>
            Because early rounds of user interviews described an “annoying” and
            “frustrating” rental process, all of these elements make starting
            the reservation more user-friendly and less confusing, encouraging
            site visitors to start the rental process and reduce the 40%
            Homepage bounce rate.
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
          <ul className="list-disc">
            <li>
              Created modal cards to separate each step of the process into
              their own clear action
            </li>
            <li>
              Made the date and time picker the first step in the process as
              seen on competitor sites
            </li>
          </ul>
          <p>
            These changes aimed to reduce the cognitive overload users felt in
            the low-fidelity prototype where each booking step was on the same
            page along with excessive copy about day-of-rental information. Now,
            that information is received through an email after rental
            confirmation.
          </p>
        </div>
        <StaticImage
          image={chooseDateAndTimeCard}
          alt="Choose Date and Time Card"
          className="project-body-image  max-w-[548px] pb-40"
        />
        <div className="project-subsection">
          <h4>Choose Your Bike</h4>
          <ul className="list-disc">
            <li>
              Included a hover drop shadow feature and selection border so users
              know how to select a bike
            </li>
            <li>
              Made a quantity counter because users wanted to be able to rent
              multiple bikes at once
            </li>
            <li>
              Gave a small description of each bike with its skill level and
              where to ride
            </li>
            <li>Included a “Back” button for reservation flexibility</li>
          </ul>

          <p className="pb-16">
            These features were all requested by the users during user
            interviews. With more information given online, this could reduce
            calls into the store regarding types of bikes and skill level.
          </p>
        </div>
        <StaticImage
          image={chooseABikeCard}
          alt="Choose your bike"
          className="project-body-image max-w-[1200px] pb-36"
        />
        <div className="project-subsection">
          <h4>Order Summary</h4>
          <ul className="list-disc">
            <li>
              Included a progress tracker so users know where they are in the
              process, with the intention of lowering the 80% drop off rate
            </li>
            <li>
              Added an ability to edit your bike selection and/or time and date,
              allowing users to refine their reservation and encourage them not
              to abandon their rental
            </li>
          </ul>
          <p>
            These changes were made because users in all rounds of user
            interviews requested more flexibility in the rental process, which
            could elicit more trust in City Cycles and their website and
            therefor completed rentals.
          </p>
        </div>
        <StaticImage
          image={orderSummaryCard}
          alt="Order summary card"
          className="project-body-image max-w-[1060px] pb-36"
        />
        <div className="project-subsection">
          <h4>Confirmation Page</h4>
          <ul className="list-disc">
            <li>Included a reservation confirmation page</li>
            <li>Added information about their next steps</li>
            <li>
              Incorporated contact information if the renter still needs
              assistance
            </li>
            <li>
              Featured a “Back to Home” button to encourage visitors to continue
              browsing the website
            </li>
          </ul>
          <p>
            These elements gave the user a sense of security that their
            reservation went through and what will happen next which continues
            to give the user trust in the rental process. If they still have
            questions, City Cycles is happy to take their call, boosting the
            customer service experience and encouraging repeat customers.
          </p>
        </div>
        <StaticImage
          image={confirmationCard}
          alt="Confirmation card"
          className="project-body-image max-w-[568px] pb-40"
        />
        <h3>Takeaways</h3>
        <ol className="list-decimal">
          <li>
            Working with City Cycles was great practice in staying within scope.
            Although their rental process was the most pressing matter, there
            were many aspects of the site that could have been improved, but
            keeping business goals in mind kept me focused on the most important
            features.
          </li>
          <li>
            Conducting various types of qualitative and quantitative usability
            testing can give the most well-rounded view of user pain points
          </li>
          <li>
            Booking a product that adds to an experience should be just as easy
            and care-free as the experience itself.
          </li>
        </ol>
        <h3>Next Steps</h3>
        <p>
          To know if online rentals increased due to the website redesign, I
          would conduct the same tests over again such as:
        </p>
        <ol className="list-decimal">
          <li>
            Analyze data from Google Analytics to reveal post-redesign bounce
            rate, drop-off rate, and returning visitors.
          </li>
          <li>
            Implement heat mapping to see if users are more likely to use the
            “Reserve Now” button as opposed to the search bar.
          </li>
          <li>
            Conduct user interviews to get a qualitative view on the new user
            journey.
          </li>
        </ol>
        <p>
          I would also see if our goal of an increase of 20% in online rentals
          over 3 months was reached, as well as seeing if there was a decrease
          in in-person or over the phone rentals without decreasing reservation
          and revenue. By conducting this research, we can help City Cycles
          reach their business goals as well as inform my future designs.{' '}
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
