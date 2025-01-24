import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import homeImage from '@/images/m3-home-image.jpg'
import heroImage from '@/images/hero-image.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trusted by leading Ghanaian Businesses: A Legacy of Security
            Excellence
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We don&apos;t just provide security; we build lasting partnerships.
          Our case studies demonstrate our commitment to delivering tailored
          solutions that address the unique challenges faced by Ghanaian
          businesses, ensuring their continued success and peace of mind.
          Explore the impact we&lsquo;ve made and discover how we can help your
          organization thrive in a secure environment.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We understand the unique security challenges faced by businesses in
          Ghana. Our comprehensive suite of services is designed to protect your
          assets, your people, and your reputation, allowing you to focus on
          what matters most: growing your business. We leverage cutting-edge
          technology and a team of highly skilled professionals to deliver
          unparalleled protection and peace of mind.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={homeImage}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Cybersecurity Solutions">
              Protecting your digital assets from evolving cyber threats with
              advanced threat detection, incident response, and security
              awareness training.
            </ListItem>
            <ListItem title="Physical Security Services">
              Securing your premises and personnel with professional security
              guards, advanced surveillance systems, access control, and risk
              assessments.
            </ListItem>
            <ListItem title="Risk Assessment & Mitigation">
              Proactive identification and mitigation of potential security
              vulnerabilities through comprehensive risk assessments, customized
              security plans, and ongoing monitoring.
            </ListItem>
            <ListItem title="Consultancy & Training">
              Empowering your team with the knowledge and skills to maintain a
              robust security posture through tailored training programs and
              ongoing expert consultations.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Your trusted partner for comprehensive security solutions in Ghana. Protecting businesses and empowering growth.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="relative mt-24 sm:mt-32 md:mt-20">
        <FadeIn className="mx-auto">
          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                    Securing Ghana&apos;s Future: Your Trusted Security Partner
                  </h1>
                  <p className="mt-6 text-pretty text-lg leading-8 text-gray-600">
                    We are more than just a security company; we are your
                    strategic partner in building a secure and resilient future
                    for your business. We combine cutting-edge technology,
                    rigorous methodologies, and a dedicated team of experts to
                    deliver unparalleled security solutions tailored to your
                    specific needs. Let us help you navigate the complex
                    security landscape and focus on what truly matters – your
                    growth and success.
                  </p>
                </div>
              </div>
              <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                <Image
                  alt="hero"
                  src={heroImage}
                  className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:bg-white lg:object-contain xl:w-auto"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        We were facing significant security challenges, but M3 Security Force
        stepped in and provided a comprehensive solution that exceeded our
        expectations. Their expertise and proactive approach gave us the
        confidence to focus on our core business, knowing our assets and data
        were secure. We highly recommend their services.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}

// <div className="relative z-10 lg:w-full lg:max-w-2xl">
//   <svg
//     viewBox="0 0 100 100"
//     preserveAspectRatio="none"
//     aria-hidden="true"
//     className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
//   >
//     <polygon points="0,0 90,0 50,100 0,100" />
//   </svg>

//   <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
//     <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
//       <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//         Securing Ghana&apos;s Future: Your Trusted Security Partner
//       </h1>
//       <p className="mt-6 text-lg leading-8 text-gray-600">
//         We are more than just a security company; we are your
//         strategic partner in building a secure and resilient future
//         for your business. We combine cutting-edge technology,
//         rigorous methodologies, and a dedicated team of experts to
//         deliver unparalleled security solutions tailored to your
//         specific needs. Let us help you navigate the complex security
//         landscape and focus on what truly matters – your growth and
//         success.
//       </p>
//     </div>
//   </div>
// </div>

// <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//   <Image
//     alt="hero"
//     src={heroImage}
//     className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
//   />
// </div>
