import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saasfly/ui/accordion";

export function Questions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>About aiNow</AccordionTrigger>
        <AccordionContent>
          The aiNow team consists of experienced developers dedicated to
          enhancing how users interact with information. We are proud to
          introduce our intelligent assistant, a culmination of best practices
          and proven methodologies gathered from numerous successful projects.
          This extensively tested tool is more than just software; it’s an
          essential part of our daily operations, consistently helping us
          deliver exceptional insights and results. Informed by our unique
          experiences, aiNow's solutions are carefully designed to address
          common challenges and fit a wide range of scenarios, providing a
          streamlined framework for navigating complex information and
          empowering you to achieve your project goals.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why Choose aiNow?</AccordionTrigger>
        <AccordionContent>
          aiNow is a powerful and versatile tool that offers a wide array of
          benefits for navigating information. It is known for its excellent
          performance, strong user experience, and comprehensive feature set
          that adapts to various needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is aiNow Right for You?</AccordionTrigger>
        <AccordionContent>
          If you’re embarking on a project that requires intelligent assistance
          in navigating complex information landscapes, then aiNow is an
          invaluable resource to consider. It encompasses a holistic collection
          of best practices and tools, each thoroughly vetted and proven
          effective across numerous applications. Even if you’re uncertain about
          whether an intelligent assistant fits your project’s needs, this
          resource still holds significant value. By exploring aiNow, you have
          the opportunity to draw inspiration from its array of solutions to
          common challenges faced by users. This exploration can guide you in
          identifying effective practices and devising robust solutions tailored
          to your specific requirements. In summary, whether you choose to
          leverage aiNow in its entirety or extract certain ideas from it, we
          are confident it provides indispensable insights and tools for anyone
          aiming to enhance their information navigation capabilities.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
