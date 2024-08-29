export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="border-dashed animate-spin inline-block w-16 h-16 border-4 rounded-full"
        role="status"
      />
    </div>
  );
}
