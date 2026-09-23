import { Fragment } from 'react';

/** Render the limited emphasis and source-link markup used in audit records. */
export function AuditInlineText({ text }: { text: string }) {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    if (link) {
      return <a key={index} href={link[2]} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#8a6d2f]">{link[1]}</a>;
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}
