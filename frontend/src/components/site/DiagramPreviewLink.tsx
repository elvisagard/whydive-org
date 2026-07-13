import type { AnchorHTMLAttributes, ReactNode } from 'react';

type DiagramPreviewLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  previewAlt?: string;
  previewSrc?: string;
};

export function DiagramPreviewLink({
  children,
  className,
  previewAlt,
  previewSrc,
  rel,
  target,
  ...props
}: DiagramPreviewLinkProps) {
  const resolvedRel = target === '_blank' ? rel ?? 'noreferrer' : rel;

  return (
    <a
      className={['group/preview relative overflow-visible', className].filter(Boolean).join(' ')}
      rel={resolvedRel}
      target={target}
      {...props}
    >
      {children}
      {previewSrc ? (
        <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 block w-[min(20rem,82vw)] -translate-x-1/2 scale-95 border border-[#d8cab4] bg-[#fffdf8] p-2 opacity-0 shadow-[0_18px_48px_rgba(16,27,35,0.22)] transition duration-150 group-focus-visible/preview:scale-100 group-focus-visible/preview:opacity-100 group-hover/preview:scale-100 group-hover/preview:opacity-100">
          <img alt={previewAlt ?? ''} className="aspect-video w-full object-cover" src={previewSrc} />
        </span>
      ) : null}
    </a>
  );
}
