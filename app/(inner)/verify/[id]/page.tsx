import { CanonicalCertificate } from "@/components/canonical-certificate"
import { getStandardById } from "@/lib/standards-data"

export default async function VerifyResultPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const standard = getStandardById(id)

  return <CanonicalCertificate data={standard} returnPath="/verify" returnLabel="← Return to Verify" />
}
