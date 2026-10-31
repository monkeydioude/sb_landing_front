/** Renders `plain *accent* plain`: text between asterisks becomes the gradient accent. */
export function Accent({
  text,
  className = 'text-gradient-brand',
}: {
  text: string;
  className?: string;
}) {
  return (
    <>
      {text.split('*').map((part, i) =>
        i % 2 ? (
          <em key={i} className={`not-italic [box-decoration-break:clone] ${className}`}>
            {part}
          </em>
        ) : (
          part
        ),
      )}
    </>
  );
}
