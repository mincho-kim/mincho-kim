import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

const PageLayout = ({ children, title, className = "" }: PageLayoutProps) => {
  return (
    <main className={`pt-24 pb-10 min-h-screen ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        {title && (
          <div className="mb-12">
            <div className="section-divider mb-4" />
            <h1 className="text-xs tracking-widest uppercase text-caption">
              {title}
            </h1>
          </div>
        )}
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
