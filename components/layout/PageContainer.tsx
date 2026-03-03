import { cn } from '@/lib/utils/cn'

type PageContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-5xl flex-col px-6 py-10 md:px-8 lg:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}
