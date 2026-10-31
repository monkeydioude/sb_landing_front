import clsx from 'clsx';

export function Container({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={clsx('mx-auto w-full max-w-site px-gutter', className)} {...props} />;
}
