import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";
import { ExternalLink } from "lucide-react";

const SYLLABUS_URL = "/psc-326-syllabus.pdf";

const Teaching = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageLayout title="Teaching" className="flex-1">
        <section className="py-6 border-b border-border first:pt-0">
          <h2 className="text-xl font-medium leading-snug mb-3">
            PSC 326: War and International Security
          </h2>
          <p className="text-body">University at Buffalo</p>
          <a
            href={SYLLABUS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 border border-border text-sm font-medium hover:bg-muted transition-colors"
          >
            Open Syllabus (PDF)
            <ExternalLink size={14} />
          </a>
        </section>
      </PageLayout>

      <Footer />
    </div>
  );
};

export default Teaching;
