import { features } from "@/data/constants"
import { FaCheck } from "react-icons/fa"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Heading } from "@/components/typography/heading"
import FancyButton from "@/components/common/fancy-button"

const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto flex flex-col items-center gap-10 text-center">
            <div className="prose-defaults">
              <Heading level="h1">
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent dark:from-brand-400 dark:to-brand-600">
                  Delivered to Your Discord
                </span>
              </Heading>
              <p className="leading-7 text-gray-600 dark:text-gray-300">
                PingPanda is the easiest way to manage your SaaS. Get instant
                notifications for&nbsp;
                <span className="font-semibold text-gray-700 dark:text-gray-200">
                  sales, new users, or any other ovents
                </span>
                &nbsp;sent diretly to your Discord.
              </p>
            </div>
            <ul className="prose-defaults list-none space-y-2 text-start leading-7 text-gray-600 dark:text-gray-200">
              {features.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center gap-4">
                    <div className="flex-none text-brand-700 dark:text-brand-500">
                      <FaCheck />
                    </div>
                    {item}
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
              <FancyButton to="/sign-up">Button</FancyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Page
