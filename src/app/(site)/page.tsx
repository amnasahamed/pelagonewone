import { CtaBand } from "@/components/CtaBand";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeFeaturedBlog } from "@/components/home/HomeFeaturedBlog";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeLogoStrip } from "@/components/home/HomeLogoStrip";
import { HomeProcess } from "@/components/home/HomeProcess";
import { HomeServices } from "@/components/home/HomeServices";
import { TeamTrust } from "@/components/home/TeamTrust";
import { ToolsTeaser } from "@/components/home/ToolsTeaser";
import {
  getBlogPosts,
  getClientsWithLogos,
  getHomeFaqs,
  getHomePage,
  getServiceSections,
  getTools,
} from "@/lib/cms";
import { serviceHighlightsMap } from "@/lib/home-types";

export default async function HomePage() {
  const [home, blogPosts, clients, services, tools, faqs] = await Promise.all([
    getHomePage(),
    getBlogPosts(),
    getClientsWithLogos(),
    getServiceSections(),
    getTools(),
    getHomeFaqs(6),
  ]);
  return (
    <div className="editorial-home">
      <HomeHero hero={home.hero} />
      <HomeLogoStrip clients={clients} />
      <HomeServices
        sections={services}
        highlights={serviceHighlightsMap(home.serviceHighlights)}
      />
      <HomeProcess steps={home.processSteps} />
      <TeamTrust teamTrust={home.teamTrust} />
      <ToolsTeaser tools={tools} />
      <HomeFeaturedBlog posts={blogPosts.slice(0, 3)} />
      <HomeFaq items={faqs} />
      <div className="home-cta-wrap">
        <CtaBand title={home.cta.title} subtitle={home.cta.subtitle} />
      </div>
    </div>
  );
}
