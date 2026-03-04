import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const emailUser = "mincho";
  const emailDomain = "buffalo.edu";
  const email = `${emailUser}@${emailDomain}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <PageLayout title="Contact" className="flex-1">
        <div className="max-w-2xl">
          <div>
            <h2 className="text-lg font-medium mb-6">Get in Touch</h2>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-caption" />
                <a 
                  href={`mailto:${email}`}
                  className="link-underline"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-caption mt-0.5" />
                <div className="text-body">
                  <p>515 Park Hall, North Campus</p>
                  <p>Buffalo, NY 14260 USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>

      <Footer />
    </div>
  );
};

export default Contact;
