import { CanonicalCertificate } from "@/components/canonical-certificate"
import { getStandardById } from "@/lib/standards-data"

export default async function StandardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const standard = getStandardById(id)

  return <CanonicalCertificate data={standard} returnPath="/standards" returnLabel="← Return to Registry" />
}
