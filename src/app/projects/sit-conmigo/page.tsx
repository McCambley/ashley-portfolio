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
// import userQuotes from '~/case_studies/sit_conmigo/sit_conmigo_user_quotes.png';
import wireFrames from '~/case_studies/sit_conmigo/sit_conmigo_wire_frames.png';
import hifiPrototypes from '~/case_studies/sit_conmigo/sit_conmigo_hifi_prototypes.png';
import yourCartPhone from '~/case_studies/sit_conmigo/sit_conmigo_your_cart_phone.png';
import RolesGoalsDeliverables from '@/components/RolesGoalsDeliverables';
// import GradientBorder from '@/components/GradientBorder';
import { ProjectLinks } from '@/components/ProjectLinks';
import { projects } from '#/constants';
// import BabyBurst from '@/components/BabyBurst';
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
        <h3>Color and Type Scale</h3>
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
        <h3>Wireframes</h3>
        <p>
          Based on the information I collected from competitor sites and
          mission-driven companies, my wireframes included:
        </p>
        <ul className="list-disc">
          <li>Images of the chairs so customers to encourage Pre-Ordering </li>
          <li>An eye-catching statement on sustainability</li>
          <li>
            An “About Us” section with an overview of Sit Conmigo’s mission
          </li>
        </ul>
        <p>
          I was able to create a wireframe for mobile, tablet, and desktop,
          which will inform future responsive design.
        </p>

        <StaticImage
          image={wireFrames}
          alt="Wire frames"
          className="project-body-image pb-44"
        />

        <div className="mx-auto w-full max-w-[1200px]  pb-8  md:pb-32 lg:p-8 lg:pb-60">
          <h3 className="text-af-light-unset mb-9 text-4xl font-medium">
            Mobile High-Fidelity Prototype
          </h3>
          <p>
            With the designs approved, Yolanda wanted to concentrate on the
            mobile website, so I created a mobile high-fidelity prototype of the
            pre-order check out process. Based on insights from the competitive
            analysis, this prototype incorporates:
          </p>
          <ul className="list-disc [&_li]:font-heading [&_li]:text-xl [&_li]:font-normal">
            <li>A four step check out process</li>
            <li>Quantity Counter</li>
            <li>Bold Colors</li>
            <li>Mission Iconography in the Product Description</li>
          </ul>
          <p>
            The mobile design also included the Pre-Order CTA in the thumb zone
            so mobile users can easily flow through the check out process. Once
            the prototype was complete, it was ready for the first round of user
            testing.
          </p>
          <StaticImage
            image={hifiPrototypes}
            alt="HiFi Prototypes"
            className="project-body-image pb-0"
          />
        </div>
        <StaticImage
          image={mockUpPageBreak1}
          alt="Mock up page break 1"
          className="mx-auto w-full"
        />
        <ProgressWithBurst image={progress3} alt="Progress 3" />
        <h2>Results</h2>
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 pb-10 md:flex-row md:pb-32 lg:p-8 lg:pb-36">
          <div>
            <h3>User Testing</h3>
            <p>
              Users were asked to order a chair from the mobile website. They
              were also asked to describe how the site demonstrated the
              company’s mission. After 2 rounds of user testing, it was evident
              that users:
            </p>
            <ol className="list-decimal [&_li]:font-heading [&_li]:text-xl [&_li]:font-normal">
              <li>Felt the site did not put enough emphasis on the mission</li>
              <li>Wanted more information about how to use the chairs</li>
              <li>Enjoyed the layout of chair photos and prices</li>
              <li>Wanted more flexibility in checkout process</li>
              <li>Would like the payment details expanded</li>
              <li>Wanted to be able to keep shopping after purchase</li>
            </ol>
          </div>
          <div className="mx-auto flex w-full max-w-[220px] flex-col items-center gap-6 px-8 md:w-1/4 md:pl-0 lg:p-0">
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
        {/* <StaticImage
          className="project-body-image pb-36 pt-20"
          image={userQuotes}
          alt="User quotes"
        /> */}
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
        <h3>Takeaways</h3>

        <ol className="list-decimal">
          <li>
            For e-commerce websites, I found it is imperative to create a sense
            of trust within the checkout process as well as the product itself.
          </li>
          <li>
            Mobile first design allows for a rewarding foundation when creating
            a responsive website.
          </li>
          <li>
            Changing aspects of the look and feel, such as brand colors, can be
            daunting but may be necessary for to make a more polished look.
          </li>
        </ol>
        <h3>Next Steps</h3>
        <p>
          Using the mobile design, I would complete the tablet and desktop
          prototypes. Once executed by developers, I would conduct analytics to
          keep track of purchases for each of Yolanda’s chairs. This will allow
          Yolanda to choose what chairs to manufacture more of to reach her
          business goals.
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
