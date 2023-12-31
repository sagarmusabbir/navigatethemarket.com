import { Footer, FooterBrand } from "flowbite-react";
import type { FC } from "react";

const DefaultFooterSection: FC = function () {
  return (
    <Footer className="rounded-none">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center p-4 text-center md:p-8 lg:p-10 [&>div]:w-fit">
        
        {/* logo */}
        <a href="#">
        <span className="self-center font-primary text-lg font-bold whitespace-nowrap dark:text-white">
                navigate<span className="font-normal">the</span>market.com
                <span className="text-xs font-normal">™</span>
              </span>
        </a>
        {/* logo */}
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Open-source library of over 400+ web components and interactive
          elements built for better web.
        </p>
        <Footer.LinkGroup className="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white text-base">
          <Footer.Link href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </Footer.Link>
          <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">
            Premium
          </Footer.Link>
          <Footer.Link href="#" className="mr-4 hover:underline md:mr-6 ">
            Campaigns
          </Footer.Link>
          <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">
            Blog
          </Footer.Link>
          <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">
            Affiliate Program
          </Footer.Link>
          <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">
            FAQs
          </Footer.Link>
          <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">
            Contact
          </Footer.Link>
        </Footer.LinkGroup>
        <Footer.Copyright
          by="Flowbite™. All Rights Reserved."
          href="https://flowbite.com"
          year={2023}
        />
      </div>
    </Footer>
  );
};

export default DefaultFooterSection;
