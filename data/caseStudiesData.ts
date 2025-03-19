
export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  extended: string;
  results: {
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    stat3: { value: string; label: string };
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "Servizo",
    slug: "servizo",
    category: "Mobile App Development",
    description: "Building a seamless on-demand chef service platform with robust features and intuitive UI/UX",
    image: "case1",
    extended: "Servizo is a UK-based on-demand service platform that connects users with professional chefs for personalized at-home dining experiences. We developed a robust, user-friendly mobile application that streamlines chef hiring and booking processes.",
    results: {
      stat1: { value: "40%", label: "Increase in user engagement" },
      stat2: { value: "60%", label: "Growth in chef registrations" },
      stat3: { value: "30%", label: "Reduction in booking time" }
    }
  },
  {
    id: 2,
    title: "Monarch Painters",
    slug: "monarch-painters",
    category: "Website & Digital Marketing",
    description: "Revamping online presence and optimizing digital advertising for increased leads",
    image: "case2",
    extended: "Monarch Painters needed a complete digital transformation. We redesigned their website for better user experience and implemented targeted Google Ads campaigns to boost their online visibility and lead generation.",
    results: {
      stat1: { value: "40%", label: "Increase in user engagement" },
      stat2: { value: "60%", label: "Increase in qualified leads" },
      stat3: { value: "25%", label: "Lower cost per lead" }
    }
  }
];
