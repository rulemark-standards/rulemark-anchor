import RM_S_DAO_001 from "./RM_S_DAO_001";

export default function StandardPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  if (id === "RM-S-DAO-001") {
    return <RM_S_DAO_001 />;
  }

  return (
    <div className="max-w-3xl mx-auto py-20 px-6 text-center">
      <h1 className="text-xl font-bold mb-4">Standard Not Found</h1>
      <p className="text-sm text-slate-500">
        The requested standard record does not exist or is not yet published.
      </p>
    </div>
  );
}
