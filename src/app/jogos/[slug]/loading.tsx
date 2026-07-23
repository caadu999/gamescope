import Loader from '@/components/loadplaceholder';

export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
      <Loader />
    </div>
  );
}
