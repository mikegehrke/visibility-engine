import { redirect } from 'next/navigation';

export default function GuidesSlugRedirect({
  params,
}: {
  params: { slug: string };
}) {
  redirect(`/en/resources/guides/${params.slug}`);
}
