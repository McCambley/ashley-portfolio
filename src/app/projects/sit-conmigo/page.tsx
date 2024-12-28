'use client';
import { useProjectPage } from '@/hooks/useProjectPage';
import ProjectHero from '@/components/ProjectHero';
import StaticImage from '@/components/StaticImage';
import progress1 from '~/case_studies/assorted/assorted_progress_1.png';
import progress2 from '~/case_studies/assorted/assorted_progress_2.png';
import progress3 from '~/case_studies/assorted/assorted_progress_3.png';
import aboutUsPhone from '~/case_studies/sit_conmigo/sit_conmigo_about_us_phone.png';
import colorAndTypeGuide from '~/case_studies/sit_conmigo/sit_conmigo_color_and_type_guide.png';
import competitorTable from '~/case_studies/sit_conmigo/sit_conmigo_competitor_table.png';
import confirmationPhone from '~/case_studies/sit_conmigo/sit_conmigo_confirmation_phone.png';
import missionPhone from '~/case_studies/sit_conmigo/sit_conmigo_mission_phone.png';
import missionTable from '~/case_studies/sit_conmigo/sit_conmigo_mission_table.png';
import mockUp from '~/case_studies/sit_conmigo/sit_conmigo_mock_up.png';
import mockUpPageBreak1 from '~/case_studies/sit_conmigo/sit_conmigo_mock_up_page_break_1.png';
import ourChairsIphone from '~/case_studies/sit_conmigo/sit_conmigo_our_chairs_iphone.png';
import pageBreak1 from '~/case_studies/sit_conmigo/sit_conmigo_page_break_1.png';
import personaCard from '~/case_studies/sit_conmigo/sit_conmigo_persona_card.png';
import productPhone from '~/case_studies/sit_conmigo/sit_conmigo_product_phone.png';
import userFlow from '~/case_studies/sit_conmigo/sit_conmigo_user_flow.png';
import userQuotes from '~/case_studies/sit_conmigo/sit_conmigo_user_quotes.png';
import wireFrames from '~/case_studies/sit_conmigo/sit_conmigo_wire_frames.png';
import yourCartPhone from '~/case_studies/sit_conmigo/sit_conmigo_your_cart_phone.png';
import RolesGoalsDeliverables from '@/components/RolesGoalsDeliverables';
import GradientBorder from '@/components/GradientBorder';
import { ProjectLinks } from '@/components/ProjectLinks';
import { projects } from '#/constants';
import BabyBurst from '@/components/BabyBurst';
import { ProgressWithBurst } from '@/components/ProgressWithBurst';

function SitConmigo() {
  const [, hero] = useProjectPage();

  return (
    <>
      <ProjectHero
        image={hero}
        title="Sit Conmigo Mobile Website"
        description="How can we create an intuitive checkout process?"
        wrapperClasses=""
        textClasses=""
        viewLiveLink="https://www.figma.com/proto/drZHdWR35HK86u8JoGI51a/Sit-Conmigo-Mobile-Final-Version?page-id=498%3A402&type=design&node-id=635-410&viewport=447%2C623%2C0.32&t=MyZ9oZ11yJGQwrbs-1&scaling=scale-down&mode=design"
        buttonCta="View Prototype"
      />
      <div className="project-body p-0">
        <ProgressWithBurst image={progress1} alt="Progress 1" />
        <h2>Project</h2>
        <h3>Overview</h3>
        <p>
          Sit Conmigo is a new company who specializes in ethically and
          sustainably-made household chairs. Their founder Yolanda Lopez hired
          me to create a mock-up of a mobile, tablet, and website designs. As
          well as a prototype of the mobile checkout process. She wanted the{' '}
          <span className="font-bold">
            design to focus on the company’s ethically-minded mission, spotlight
            her chairs, and visually illustrate her mission and company
            personality
          </span>
          . All with the purpose of urging people to pre-order her stylish
          chairs.
        </p>
        <p>
          I researched competitor sites and their checkout processes to find a
          desirable user flow. I worked closely with Yolanda to find the right
          colors and typography that made the company’s identity shine. Then I
          conducted user testing to arrive at my final design.
        </p>
        <RolesGoalsDeliverables
          roles={['UI Design', 'UX Design', 'Branding & Identity']}
          deliverables={[
            'Color and Type Scale',
            'User Persona',
            'Site Map',
            'Design Comps of Each Device',
            'Prototype of Checkout Process',
            'Exported Assets',
          ]}
          goals={[
            'Emphasize Mission',
            'Robust About Us Section',
            'Intuitive Checkout',
            'Responsive Design',
          ]}
        />
        <h3>Problem</h3>
        <p>
          Yolanda has four beautiful chairs that will be ready to ship in just a
          few weeks. Because so many people browse online these days, she thinks
          that focusing on the mobile checkout process is most crucial. This
          begged the question:
        </p>
        <blockquote className="project-blockquote">
          How can we get eco-conscious buyers to pre-order chairs on the mobile
          website?
        </blockquote>
        <StaticImage image={pageBreak1} alt="Page break 1" />
        <ProgressWithBurst image={progress2} alt="Progress 2" />
        <h2>Approach</h2>
        <h3>Competitive Analysis</h3>
        <p>
          Yolanda provided me with four inspirational websites that are mission
          driven. She also provided me with two competitor websites, one with
          similar products, and one with a similar mission-driven focus. I
          investigated two more sites whose products were also sustainably-made
          furniture. These were the similarities I found:
        </p>
        <StaticImage
          image={missionTable}
          alt="Mission table"
          className="project-body-image pb-28"
        />
        <StaticImage
          image={competitorTable}
          alt="Competitor table"
          className="project-body-image pb-64"
        />
        <h3>User Persona</h3>
        <p>
          While looking at Sit Conmigo’s competitor sites, I found customer
          reviews on facebook. This felt like a good opportunity to create a
          user persona on real people. The profiles I viewed depicted
          professionals who{' '}
          <span className="font-bold">
            want to buy products with the same socially moral ethics that drive
            their own lives
          </span>
          . Based on 5 facebook profiles, I made this user persona:
        </p>
        <StaticImage
          image={personaCard}
          alt="Persona card"
          className="project-body-image pb-56"
        />
        <h3>User Flow</h3>
        <p>
          I created a User Flow to imagine what the checkout process may look
          like. Sit Conmigo only has a few chairs to sell, so the site does not
          need to be overly complicated.{' '}
          <span className="font-bold">
            A customer should be able to buy a chair in the least amount of
            steps
          </span>
          . Because Yolanda’s inspiration sites contained robust “About Us”
          sections, I decided to put the “About Us” section containing the
          company’s mission on the homepage.
        </p>
        <StaticImage
          image={userFlow}
          alt="User flow"
          className="project-body-image pb-56"
        />
        <h3>Color and Typescale</h3>
        <p>
          I began taking colors from Yolanda’s chair fabrics to experiment with
          color palettes. I wanted to mimic the bold colors of other
          mission-driven companies and decided on a midnight green complements
          the hero image. I also wanted to use bluish hue of midnight green to
          create a sense of trustworthiness in Sit Conmigo’s sustainable
          practices. I was immediately drawn to the golden yellow as an accent
          color to show the strong connection between the Sit Conmigo staff and
          their mission. I first chose a muted rose color to continue using bold
          colors, but as the project continued, it became evident the blue and
          yellow popped enough.
        </p>
        <p>
          I chose a serif font for the page titles to accompany the trustworthy
          blue. Something that was both beautiful and high-end, much like
          Yolanda’s chairs. As for the secondary font, I felt a readable
          sans-serif would work best. 
        </p>
        <StaticImage
          image={colorAndTypeGuide}
          alt="Color and type guide"
          className="project-body-image pb-56 pt-32"
        />
        <h3>Wireframes and Design Comp</h3>
        <p>
          I then created a low-fi and hi-fi wireframe of the Homepage.{' '}
          <span className="font-bold">
            I included images of the chairs so customers are immediately drawn
            to Pre-Order, followed by the “About Us” section to give customers
            an overview of Sit Conmigo’s mission, and lastly, a simple contact
            footer
          </span>
          .
        </p>
        <p>
          Next, I transformed the wireframe into a fully-furnished mock-up. I
          changed some layout features to showcase the images better than the
          wireframe. Yolanda had me go ahead and create a mock-up of the
          checkout process for mobile. Once I got a prototype up and running for
          the mobile site, it was ready to user test!
        </p>
        <StaticImage
          image={wireFrames}
          alt="Wire frames"
          className="project-body-image pb-44 pt-16"
        />
        <div className="mx-auto flex max-w-[1200px] flex-col pb-8 md:flex-row md:pb-32 lg:gap-4 lg:p-8 lg:pb-60">
          <div className="w-full md:w-3/4">
            <h3 className="text-af-light-unset mb-9 text-4xl font-medium">
              Prototyping
            </h3>
            <p>
              With the designs approved, I created a mobile check-out process
              that was elegant and efficient. It consists of:
            </p>
            <ul className="project-list">
              <li>
                Robust “About” section that included eco-conscious certification
                icons and a statement from Yolanda on the Homepage
              </li>
              <li>
                Chair description cards on the shopping page for easy
                comparison.
              </li>
              <li>
                Multiple options for users to go back to previous pages
                throughout the checkout process.
              </li>
            </ul>
          </div>
          <div className="flex w-full flex-col gap-6 px-8 md:w-1/4 md:pl-0 lg:p-0">
            <StaticImage
              image={mockUp}
              alt="Mock up"
              className="project-body-image mx-auto p-0"
            />
            <a
              className="w-full"
              target="_blank"
              href="https://www.figma.com/proto/drZHdWR35HK86u8JoGI51a/Sit-Conmigo-Mobile-Final-Version?page-id=498%3A402&type=design&node-id=635-410&viewport=447%2C623%2C0.32&t=MyZ9oZ11yJGQwrbs-1&scaling=scale-down&mode=design"
            >
              <button className="w-full rounded-full p-3 text-center font-heading text-lg font-light text-af-light transition-opacity hover:opacity-70 lg:p-4 lg:text-lg">
                View Prototype
              </button>
            </a>
          </div>
        </div>
        <StaticImage
          image={mockUpPageBreak1}
          alt="Mock up page break 1"
          className="mx-auto w-full"
        />
        <ProgressWithBurst image={progress3} alt="Progress 3" />
        <h2>Results</h2>
        <h3>User Testing</h3>
        <p>
          Users were asked to order a chair from the mobile website. They were
          also asked to describe how the site demonstrated the company’s
          mission. After 2 rounds of user testing, it was evident that users
          enjoyed the layout of chair photos and prices, but felt a bit confused
          and confined in the checkout process. They also stated that the site
          did not put enough emphasis on the mission of Sit Conmigo.{' '}
        </p>
        <StaticImage
          className="project-body-image pb-36 pt-20"
          image={userQuotes}
          alt="User quotes"
        />
        <blockquote className="project-blockquote">
          Users wanted more company information before they could feel confident
          in their purchase. Also, more ability to move backwards in the
          checkout process.
        </blockquote>
        <h3 className="pt-36">Solutions</h3>
        <h4>Homepage</h4>
        <p>
          First, I addressed the lack of enthusiasm to begin the pre-order
          process and the desire for more information on the company. I did this
          through emphasizing the company’s sustainability practices by
          displaying their many eco-friendly certifications. This along with a
          mission statement gives a more comprehensive vision of the company’s
          ethos. 
        </p>
        <div className="mx-auto flex w-full max-w-full flex-col p-8 pb-52 md:max-w-[1200px] md:flex-row">
          <StaticImage
            image={aboutUsPhone}
            alt="About us phone"
            className="project-body-image p-0  md:w-1/2"
          />
          <StaticImage
            image={missionPhone}
            alt="Mission phone"
            className="project-body-image p-0  md:w-1/2"
          />
        </div>
        <h4>Shopping Page</h4>
        <p>
          To continue to make the customer feel at-ease during the pre-ordering
          process, there is a small description of where the chair would fit
          best in the user’s home. This simple comparison method allows the user
          to feel even more sure they want to continue to Pre-Order. 
        </p>
        <StaticImage
          image={ourChairsIphone}
          alt="Our chairs phone"
          className="project-body-image max-w-[900px] pb-64"
        />
        <h4>Product Page</h4>
        <p>
          While working on this page, it became clear that lightening the
          background hue to a light beige allows the brand color to pop. I added
          a “Back to Shop” button so users felt they could look back at other
          chairs if they felt unsure about the one they had selected.
        </p>
        <StaticImage
          image={productPhone}
          alt="Product phone"
          className="project-body-image max-w-[900px] pb-64"
        />
        <h4>Your Cart Page</h4>
        <p>
          To be more explicit about what steps are involved with pre-ordering a
          chair, the payment information was expanded to three cards and
          numbered each step so users knew where they were in the checkout
          process. A “Cancel Order” button was added to allow more freedom to
          shop if needed. 
        </p>
        <StaticImage
          image={yourCartPhone}
          alt="Your cart phone"
          className="project-body-image max-w-[900px] pb-64"
        />
        <h4>Confirmation Page</h4>
        <p>
          Users felt like the confirmation page needed to be more clear. So I
          made more apparent buttons for viewing their order confirmation and
          back to shopping for chairs. While also making the “Contact Us”
          section still visible on the mobile phone in case customers have
          questions about their purchase.
        </p>
        <StaticImage
          image={confirmationPhone}
          alt="Confirmation phone"
          className="project-body-image max-w-[900px] pb-64"
        />
        <h3>Challenges</h3>
        <p>
          I found that the more feedback the better. I received multiple rounds
          of feedback beyond just user testing. There were times when many
          iterations were needed, and other times when finding a solution and
          moving on was necessary.
        </p>
        <p className="pb-16">
          Doing a mobile-first design for Yolanda helped me keep the MVP in
          mind. I learned the importance of combining style with minimalism.
          Keeping features within the confines of a small screen and giving the
          site the flare it deserved was crucial to the success of the site.{' '}
        </p>
        <ProjectLinks
          className="max-w-[960px]"
          link={projects.filter(p => p.link.includes('cycles'))[0].link}
        />
      </div>
    </>
  );
}

export default SitConmigo;
