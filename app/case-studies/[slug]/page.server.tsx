import { caseStudiesData } from '@/data/caseStudiesData';

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPageServer({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudiesData.find((study) => study.slug === params.slug);
  return { caseStudy };
}