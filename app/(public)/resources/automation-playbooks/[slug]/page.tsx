import { redirect } from 'next/navigation';

export default function PlaybookSlugRedirect({
  params,
}: {
  params: { slug: string };
}) {
  redirect(`/en/resources/automation-playbooks/${params.slug}`);
}
