import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";
import { Download } from "lucide-react";

const CV_PDF_URL = "/cv.pdf";

const CV = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <PageLayout title="Curriculum Vitae" className="flex-1">
        <div className="max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
            <a
              href={CV_PDF_URL}
              download
              className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Download CV (PDF)
            </a>
          </div>

          <section aria-label="CV PDF preview">
            <div className="rounded border border-border overflow-hidden bg-background">
              <object
                data={CV_PDF_URL}
                type="application/pdf"
                className="w-full h-[75vh]"
              >
                <div className="p-6 text-sm text-body">
                  PDF preview is unavailable in this browser.
                  <a
                    href={CV_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 underline"
                  >
                    Open CV PDF
                  </a>
                </div>
              </object>
            </div>
          </section>
        </div>
      </PageLayout>

      <Footer />
    </div>
  );
};

export default CV;
