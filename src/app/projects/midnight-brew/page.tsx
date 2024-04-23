'use client';
import { useProjectPage } from '@/hooks/useProjectPage';
import ProjectHero from '@/components/ProjectHero';
import progress1 from '~/case_studies/assorted/assorted_progress_1.png';
import progress2 from '~/case_studies/assorted/assorted_progress_2.png';
import progress3 from '~/case_studies/assorted/assorted_progress_3.png';
import colorAndType from '~/case_studies/midnight_brew/midnight_brew_color_and_type.png';
import conclusionStyleGuide from '~/case_studies/midnight_brew/midnight_brew_conclusion_style_guide.png';
import icons from '~/case_studies/midnight_brew/midnight_brew_icons.png';
import logos from '~/case_studies/midnight_brew/midnight_brew_logos.png';
import oneMoreCupFacebook from '~/case_studies/midnight_brew/midnight_brew_one_more_cup_facebook.png';
import oneMorePageFacebook from '~/case_studies/midnight_brew/midnight_brew_one_more_page_facebook.png';
import spillTeaFacebook from '~/case_studies/midnight_brew/midnight_brew_spill_tea_facebook.png';
import targetAudience1 from '~/case_studies/midnight_brew/midnight_brew_target_audience_1.png';
import targetAudience2 from '~/case_studies/midnight_brew/midnight_brew_target_audience_2.png';
import userPersonaCard from '~/case_studies/midnight_brew/midnight_brew_user_persona_card.png';
import pageBreak1 from '~/case_studies/midnight_brew/midnight_brew_page_break_1.png';
import pageBreak2 from '~/case_studies/midnight_brew/midnight_brew_page_break_2.png';
import sitePhotos from '~/case_studies/midnight_brew/midnight_brew_site_photos.png';
import StaticImage from '@/components/StaticImage';
import RolesGoalsDeliverables from '@/components/RolesGoalsDeliverables';
import GradientBorder from '@/components/GradientBorder';
import ProjectLinks from '@/components/ProjectLinks';

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
        viewLiveLink="/case_studies/midnight_brew/midnight_brew_branding.pdf"
        buttonClasses="md:justify-end"
        buttonCta="View Style Guide"
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
          Karla Kahvi is a local business owner looking to open up a coffee shop
          in a great, new neighborhood. She is looking to serve coffee, loose
          leaf tea, baked goods, and sandwiches. These offerings will include
          gluten-free and vegan options. She is an expert in all things finance
          and management, and needs someone to create her brand identity. This
          will include a color scheme, typescale, collection of brand images,
          logo, icon pair, and social media headers. To bring it all together,
          she wants it all packaged in a brand style guide.
        </p>
        <p>
          My role in the project was to design a brand that compliments her
          products that her neighborhood will love. I was responsible for
          communicating with Karla directly. She was happy to completely hand
          over the reins for the design portion of her company’s brand. I
          checked in frequently for Karla’s input.{' '}
          <span className="font-bold">
            This style guide will inform the branding of Midnight Brew’s
            website, printed menus, flyers, business cards, and promotional
            coffee cups and t-shirts
          </span>
          .
        </p>
        <RolesGoalsDeliverables
          roles={['Brand Designer']}
          deliverables={[
            'Color Scheme',
            'Type Scale',
            'Collection of Brand Images',
            'Logo',
            'Icon Pair',
            'Social Media Header',
            'Brand Style Guide',
          ]}
          goals={[
            'Create Community',
            'Incite Inclusiveness',
            'Facilitate Coziness',
            'Spark Creativity',
            'Inspire Intellectual Collaboration',
          ]}
        />
        <h3>Mission and Target Audience</h3>
        <p>
          I began my research for this project by spending time in some of my
          own favorite coffee shops. I found that a cup of coffee is not the
          biggest product being sold. Buying coffee from a coffee shop is simply
          a toll we pay to be in the presence of others, or simply not be at
          home. I asked my own community of young professionals and found they
          yearn for a third space in their lives. A place that is not home and
          not the office to socialize, create, and work.{' '}
          <span className="font-bold">
            I wanted Karla’s coffee shop to be a third space for a community of
            students, professionals, friends, and creators alike
          </span>
          . This inspired this ethos:
        </p>
        <div className="mx-auto flex max-w-[1200px] flex-col pb-64">
          <div className="flex flex-col items-center lg:flex-row">
            <blockquote className="project-blockquote w-full p-6 text-left lg:w-1/2">
              “Where creative and intellectual minds gather to cultivate a more
              vibrant community, day and night.“
            </blockquote>
            <StaticImage
              image={targetAudience1}
              alt="Target Audience 1"
              className="project-body-image w-full p-6 lg:w-1/2"
            />
          </div>
          <div className="flex flex-col-reverse items-center lg:flex-row">
            <StaticImage
              image={targetAudience2}
              alt="Target Audience 2"
              className="project-body-image w-full p-6 lg:w-1/2"
            />
            <blockquote className="project-blockquote w-full p-6 text-left lg:w-1/2">
              “We want to give neighborhood locals a place to thrive. Great
              ideas are born in creative places. Coffee is a staple for creating
              innovative ideas fostering a more well-rounded and vibrant
              community.“
            </blockquote>
          </div>
        </div>
        <StaticImage image={pageBreak1} alt="Page Break 1" />
        <StaticImage
          className="project-progress"
          image={progress2}
          alt="Progress 2"
        />
        <h2>Approach</h2>
        <h3>Color and Typography</h3>
        <p>
          To create a color scheme that fit the brand of Midnight Brew, I tried
          to find colors that were{' '}
          <span className="font-bold">
            artistic, cozy, creative, and intellectual
          </span>
          .
        </p>
        <p>
          The main colors of blue and gold mesh both the whimsical and
          intellectual sides of Midnight Brew. The accents of mocha brown and
          mauve give the brand the relaxing vibe of any coffeeshop.
        </p>
        <p>
          I wanted the brand font to be something that might look like cursive
          handwriting or drawing sketches. I settled on Fredrick the Great
          because it was readable and has the essence of something hand drawn. I
          chose a serif font for other large texts because of its readability
          and allusions to a text book or newspaper.
        </p>
        {/* color and type image */}
        <StaticImage
          image={colorAndType}
          alt="Color and Type"
          className="project-body-image pb-40"
        />
        <h3>User Persona</h3>
        <p>
          Karla was interested in having the shop open in the evenings for more
          business opportunities. This supported the brand I wanted to create to
          be inclusive of the folks who conjure their most creativity at night.
          Eventually spurring the name of the coffee shop: Midnight Brew.
        </p>
        <p>
          Based on this criteria, I created a user persona for a{' '}
          <span className="font-bold">
            young student who might study with his friends at Midnight Brew on
            the regular
          </span>
          .
        </p>
        <StaticImage
          image={userPersonaCard}
          alt="User Persona Card"
          className="project-body-image pb-64"
        />
        <StaticImage image={pageBreak2} alt="Page Break 2" />
        <StaticImage
          className="project-progress"
          image={progress3}
          alt="Progress 3"
        />
        <h2>Design</h2>
        <div className="mx-auto flex max-w-[960px] flex-col items-center pb-36 lg:px-6">
          <div className="w-full pr-6">
            <h3 className="gradient-text-unset mb-9 text-4xl font-medium">
              Logo Design
            </h3>
            <p>
              The logo was created using a series of artificial intelligence
              prompts in Adobe Illustrator. I experimented with more flat
              designs that did not bring the vitality that Midnight Brew will
              bring to its community. I ended with an intricate moon design that
              gives both whimsy and sophistication to the logo. This AI-assisted
              design is a vector image and therefore can be used at any size.
              The logo can be used on light backgrounds like coffee cups as well
              as dark backgrounds for menus and flyers.
            </p>
          </div>
          <StaticImage
            image={logos}
            alt="Logos"
            className="project-body-image flex w-full items-center justify-center px-8 lg:px-6"
          />
        </div>
        <div className="mx-auto flex max-w-[960px] flex-col items-center pb-36 lg:flex-row lg:px-6">
          <div className="w-full lg:w-1/2">
            <h3 className="gradient-text-unset pb-4 font-medium">
              Iconography
            </h3>
            <h4 className="gradient-text-unset font-light">Do&apos;s</h4>
            <ul className="project-list py-0 pb-6 font-light">
              <li>Use brand colors</li>
              <li>Use light gradients to avoid flatness</li>
            </ul>
            <h4 className="gradient-text-unset font-light">Dont&apos;s</h4>
            <ul className="project-list py-0 pb-6 font-light">
              <li>Use off-brand colors or black</li>
            </ul>
            <h4 className="gradient-text-unset font-light">Icons Used For</h4>
            <ul className="project-list py-0 pb-6 font-light">
              <li>Menus</li>
              <li>Navigation</li>
              <li>Promotionals</li>
              <li>Business Cards</li>
              <li>Posters</li>
            </ul>
          </div>
          <StaticImage
            image={icons}
            alt="Icons"
            className="project-body-image w-full lg:w-1/2"
          />
        </div>
        <h3>Site Images</h3>
        <p>
          I compiled images to illustrate different aspects of the Midnight Brew
          brand including collaboration, community, coziness, late-night
          creativity, and of course, delicious coffee!{' '}
        </p>
        {/* photos */}
        <StaticImage
          image={sitePhotos}
          alt="Site Photos"
          className="project-body-image pb-36"
        />
        <h3>Social Media</h3>
        <p className="pb-8">
          In this day and age, every company advertises on social media. I
          created a few templates for banners that could also be easily
          converted to flyers or other ads for Midnight Brew.
        </p>
        {/* facebook images */}
        <StaticImage
          image={spillTeaFacebook}
          alt="Spill Tea Facebook"
          className="project-body-image max-w-[960px] pt-0 lg:p-0 lg:pb-12"
        />
        <StaticImage
          image={oneMoreCupFacebook}
          alt="One More Cup Facebook"
          className="project-body-image max-w-[960px] pt-0 lg:p-0 lg:pb-12"
        />
        <StaticImage
          image={oneMorePageFacebook}
          alt="One More Page Facebook"
          className="project-body-image max-w-[960px] pt-0 lg:p-0 lg:pb-40"
        />
        <div className="mx-auto flex max-w-[1200px] flex-col pb-8 md:flex-row md:pb-16 lg:gap-4 lg:p-8 lg:pb-16">
          <div className="w-full lg:w-3/5 lg:pr-6">
            <h3 className="gradient-text-unset mb-9 text-4xl font-medium">
              Conclusion
            </h3>
            <p>
              After 3 months of collaborating with Karla, Midnight Brew is ready
              for business! This project was a convergence many Adobe Suite
              products. I used Adobe Illustrator, InDesign, Photoshop and Figma
              to bring this brand to life. Karla is ready to get her brand out
              there to create a space her community has been looking for.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center px-6 lg:w-2/5 lg:px-0">
            <StaticImage
              image={conclusionStyleGuide}
              alt="Conclusion Style Guide"
              className="project-body-image mb-12 border-4 border-af-yellow p-0"
            />
            <a
              target="_blank"
              className="w-full md:max-w-[300px]"
              href="/case_studies/midnight_brew/midnight_brew_branding.pdf"
            >
              <GradientBorder className="mx-auto w-full rounded-full p-3 transition-opacity hover:opacity-70 md:max-w-[300px] lg:p-4">
                <button className="w-full text-center font-heading text-lg font-light gradient-text ">
                  View Style Guide
                </button>
              </GradientBorder>
            </a>
          </div>
        </div>
        <ProjectLinks />
      </div>
    </>
  );
}

export default MidnightBrew;
