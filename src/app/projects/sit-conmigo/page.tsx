'use client';
import { useProjectPage } from '@/hooks/useProjectPage';
import ProjectHeroMinimal from '@/components/ProjectHeroMinimal';
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
import ourChairsIphone from '~/case_studies/sit_conmigo/sit_conmigo_our_chairs_iphone.png';
import personaCard from '~/case_studies/sit_conmigo/sit_conmigo_persona_card.png';
import productPhone from '~/case_studies/sit_conmigo/sit_conmigo_product_phone.png';
import userFlow from '~/case_studies/sit_conmigo/sit_conmigo_user_flow.png';
import wireFrames from '~/case_studies/sit_conmigo/sit_conmigo_wire_frames.png';
import hifiPrototypes from '~/case_studies/sit_conmigo/sit_conmigo_hifi_prototypes.png';
import ecoMission from '~/case_studies/sit_conmigo/sit_conmigo_eco_mission.png';
import yourCartPhone from '~/case_studies/sit_conmigo/sit_conmigo_your_cart_phone.png';
import RolesGoalsDeliverables from '@/components/RolesGoalsDeliverables';
import { ProjectLinks } from '@/components/ProjectLinks';
import { projects } from '#/constants';
import { ProgressWithBurst } from '@/components/ProgressWithBurst';

function SitConmigo() {
  const [, hero] = useProjectPage();

  return (
    <>
      <ProjectHeroMinimal
        image={hero}
        title="Sit Conmigo Mobile Website Design"
        description="How can we create an intuitive checkout process?"
        wrapperClasses=""
        textClasses=""
        viewLiveLink="https://www.figma.com/proto/drZHdWR35HK86u8JoGI51a/Sit-Conmigo-Mobile-Final-Version?page-id=498%3A402&type=design&node-id=635-410&viewport=447%2C623%2C0.32&t=MyZ9oZ11yJGQwrbs-1&scaling=scale-down&mode=design"
        buttonCta="View Prototype"
      />
      <div className="project-body p-0">
        <ProgressWithBurst image={progress1} alt="Progress 1" id="1" />
        <h2>Project</h2>
        <p className="section-subtitle text-center">
          Sit Conmigo is a new company in need of a mobile website design to
          showcase their ethically and sustainably-made household chairs
        </p>
        <RolesGoalsDeliverables
          roles={['UI Design', 'UX Design', 'Branding & Identity']}
          deliverables={[
            'Competitive Analysis',
            'User Persona',
            'User Flow',
            'Color and Type Scale',
            'Wireframes',
            'Responsive Design',
            'Prototype of Checkout Process',
          ]}
          goals={[
            'Emphasize Mission',
            'Intuitive Checkout',
            'Encourage Pre-Orders',
          ]}
        />
        <h3>Problem</h3>
        <p>
          The founder Yolanda Lopez has four beautiful chairs that will be ready
          to ship in just a few weeks. She needs a website that will encourage
          people to pre-order chairs. She also wants the site to exemplify her
          sustainable and ethical mission.
        </p>
        <h3>Solution</h3>
        <p>
          I analyzed competitor and mission-driven websites to help me execute
          experience mapping techniques to inform and guide my initial design
          iterations, ensuring they aligned with user needs and objectives. To
          emphasize the mission and make the check-out process easy and
          intuitive for users, it was clear the Sit Conmigo site would need:
        </p>
        <ul className="grid list-disc grid-cols-1 md:grid-cols-2">
          <li>Bold Colors</li>
          <li>A Robust “About Us” Section</li>
          <li>Mission Iconography</li>
          <li>Minimal Checkout Clicks</li>
          <li>Product Descriptions</li>
          <li>A Quantity Counter</li>
        </ul>
        <ProgressWithBurst image={progress2} alt="Progress 2" id="2" />
        <h2>Approach</h2>
        <h3>Competitive Analysis</h3>
        <p>
          Yolanda provided me with inspirational sites and competitor sites.
          These sites were helpful in understanding what are popular trends in
          mission-driven companies and how other furniture products are sold
          online.
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
          reviews on Facebook. This felt like a good opportunity to create a
          user persona on real people. The profiles I viewed depicted
          professionals who want to buy products with the same socially moral
          ethics that drive their own lives. Based on 5 Facebook profiles, I
          made this user persona:
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
          need to be overly complicated. A customer should be able to buy a
          chair in the least amount of steps. Because Yolanda’s inspiration
          sites contained robust “About Us” sections, I decided to put the
          “About Us” section containing the company’s mission on the homepage.
        </p>
        <StaticImage
          image={userFlow}
          alt="User flow"
          className="project-body-image pb-56"
        />
        <h3>Color and Type Scale</h3>
        <p>
          I decided on a color scheme and type scale that was both bold and
          sophisticated.
        </p>
        <ul className="list-disc">
          <li>
            Midnight Green - Complimentary to the chair fabrics and had a
            trustworthy blue hue
          </li>
          <li>
            Golden Rod - Bold CTA color that was often used on other mission
            driven sites
          </li>
          <li>
            Light Beige - First tried rose gold, but decided on a neutral color
            less intense than white
          </li>
          <li>
            Playfair Display - Display serif font for headings that matched
            beautiful, high-end chairs
          </li>
          <li>
            Alegreya Sans - Readable and earthy sans serif that matched organic
            nature of the chairs{' '}
          </li>
        </ul>
        <StaticImage
          image={colorAndTypeGuide}
          alt="Color and type guide"
          className="project-body-image pb-56"
        />
        <h3>Wireframes</h3>
        <p>
          Based on the information I collected from competitor sites and
          mission-driven companies, I was able to create a wireframe for mobile,
          tablet, and desktop, which will inform future responsive design that
          included:
        </p>
        <ul className="list-disc">
          <li>Images of the chairs so customers are encouraged to Pre-Order</li>
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
            mobile website, so I created a high-fidelity prototype for mobile
            devices of the pre-order check out process. Based on insights from
            the competitive analysis, this prototype incorporates:
          </p>
          <ul className="list-disc [&_li]:font-heading [&_li]:text-xl [&_li]:font-normal">
            <li>A Four Step Check Out process</li>
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
        <ProgressWithBurst image={progress3} alt="Progress 3" id="3" />
        <h2>Results</h2>
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 pb-10 md:flex-row md:pb-32 lg:p-8 lg:pb-36">
          <div>
            <h3>User Interviews</h3>
            <p>
              Users were asked to order an urbe-green chair from the mobile
              website. They were also asked to describe how the site
              demonstrated the company’s mission. After 2 rounds of user
              testing, it was evident that users:
            </p>
            <ol className="list-disc">
              <li>Felt the site did not put enough emphasis on the mission</li>
              <li>Wanted more information about how to use the chairs</li>
              <li>Enjoyed the layout of chair photos and prices</li>
              <li>Wanted more flexibility in checkout process</li>
              <li>Would like the payment details expanded</li>
              <li>Were looking for a clearer confirmation page</li>
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
        <h3 className="pt-36">Solutions</h3>
        <h4>Homepage</h4>
        <p>
          Eco-friendly certifications and mission driven statement prominent on
          the homepage gives addressed the user’s desire to see more emphasis on
          the mission, making them trust this company and be inclined to
          pre-order.
        </p>
        <StaticImage
          image={ecoMission}
          alt="About us phone"
          className="project-body-image pb-52"
        />
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
          className="project-body-image pb-64"
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
          className="project-body-image pb-64"
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
          className="project-body-image pb-64"
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
          className="project-body-image pb-64"
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
