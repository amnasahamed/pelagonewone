import { CtaBand } from "@/components/CtaBand";
import { HomeComparison } from "@/components/home/HomeComparison";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeFeaturedBlog } from "@/components/home/HomeFeaturedBlog";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeLogoStrip } from "@/components/home/HomeLogoStrip";
import { HomeProcess } from "@/components/home/HomeProcess";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeWhyUs } from "@/components/home/HomeWhyUs";
import { TeamTrust } from "@/components/home/TeamTrust";
import { Testimonials } from "@/components/home/Testimonials";
import { ToolsTeaser } from "@/components/home/ToolsTeaser";
import {
  getBlogPosts,
  getClientsWithLogos,
  getHomeFaqs,
  getHomePage,
  getServiceSections,
  getTestimonials,
  getTools,
} from "@/lib/cms";
import { serviceHighlightsMap } from "@/lib/home-types";

export default async function HomePage() {
  const [home, blogPosts, clients, serviceSections, tools, testimonials, homeFaqs] =
    await Promise.all([
      getHomePage(),
      getBlogPosts(),
      getClientsWithLogos(),
      getServiceSections(),
      getTools(),
      getTestimonials(),
      getHomeFaqs(6),
    ]);

  const featuredPosts = blogPosts.slice(0, 3);
  const highlights = serviceHighlightsMap(home.serviceHighlights);

  return (
    <div className="bg-paper-warm">
      <HomeHero hero={home.hero} />
      <HomeLogoStrip clients={clients} />
      <div className="home-section-curve home-surface-white border-t border-ink/6">
        <HomeServices sections={serviceSections} highlights={highlights} />
      </div>
      <HomeProcess steps={home.processSteps} />
      <HomeWhyUs whySection={home.whySection} />
      <HomeComparison comparison={home.comparison} />
      <Testimonials items={testimonials} />
      <TeamTrust teamTrust={home.teamTrust} />
      <ToolsTeaser tools={tools} />
      <HomeFeaturedBlog posts={featuredPosts} />
      <HomeFaq items={homeFaqs} />

      <div className="home-surface-warm pb-20 pt-2 lg:pb-24">
        <CtaBand title={home.cta.title} subtitle={home.cta.subtitle} />
      </div>
    </div>
  );
}
