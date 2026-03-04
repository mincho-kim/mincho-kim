import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";

const researchFields = [
  "Political Violence",
  "Transitional Justice",
  "Human Rights",
];

const papers = [
  {
    title: "A Virtuous Cycle?: Transitional Justice and Civil-military Relations",
    tag: "(Dissertation)",
    abstract:
      "Do trials and truth commissions have a meaningful effect on civilian control of the military post democratic transition? In this paper, I argue that domestic trials and truth commissions positively affect civilian control of the military after democratic transition.  Specifically, domestic trials and truth commissions have a deterrence effect by creating costs for the military’s insubordination through prosecution, social disadvantages, and disciplinary consequences. Using a sample of 63 countries that experienced a democratic transition between 1970 and 2020, the empirical tests find that only trials and truth commissions that meet specific conditions such as state agent conviction, identification of individual perpetrators, and institutional reform recommendations lead to a positive change in civilian control of the military. These findings highlight the important characteristics of trials and truth commissions that enable the mechanisms of deterrence to work. This paper specifies the distinct theoretical pathways of how specific characteristics of each transitional justice mechanism affect civilian control of the military. This suggests that the question should not be ‘to or not to’; it should be about the disaggregated transitional justice policies' unique characteristics.",
  },
  {
    title: "Timing is Everything?: Transitional Justice, Timing, and Human Rights",
    tag: "(Dissertation)",
    abstract:
      "Does transitional justice improve human rights in the country after the transition? Existing studies show opposing empirical results for this relationship. I argue that the timing of transitional justice implementation conditions its effect on human rights practices because of how the passage of timing impacts deterrence, demands for change, and backlash through memory. While previous studies consider timing because of how it might change the institutional capacity or consolidated democratic norms, I argue that we should focus on memory that has a more direct connection with the passage of time. In doing so, I build upon the existing theory of how transitional justice impacts human rights by theorizing how memory that fades with time interacts with the mechanisms of deterrence, demands for change, and backlash. Using a sample of 112 countries transitioning from either conflict or authoritarian rule between 1981 and 2012, the empirical test shows that in both post-democratization and conflict contexts, domestic trials have a negative impact on human rights when implemented immediately after transition, with the effect dissipating after 4 to 5 years.",
  },
];

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <PageLayout title="Research" className="flex-1">
        <div>
          <h2 className="text-2xl font-medium mb-6">Research Interests</h2>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {researchFields.map((field) => (
              <span
                key={field}
                className="px-4 py-2 bg-beige-warm text-sm tracking-wide"
              >
                {field}
              </span>
            ))}
          </div>

          <div className="w-full h-px bg-border mb-6" />

          <div>
            {papers.map((paper) => (
              <section key={paper.title} className="py-6 border-b border-border first:pt-0 last:border-b-0">
                <h3 className="text-xl font-medium leading-snug mb-3">
                  {paper.title}
                  {paper.tag && <em className="ml-2">{paper.tag}</em>}
                </h3>
                <p className="leading-relaxed text-body text-justify">{paper.abstract}</p>
              </section>
            ))}
          </div>
        </div>
      </PageLayout>

      <Footer />
    </div>
  );
};

export default Research;
