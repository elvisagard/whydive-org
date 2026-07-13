type ArticlePrintStylesProps = {
  essayUrl: string;
};

function createPrintStyles(essayUrl: string) {
  return `
  @media screen {
    .essay-print-cover,
    .essay-print-article-opener {
      display: none;
    }
  }

  @media print {
    @page {
      margin: 0.92in 0.65in 0.58in 0.65in;

      @top-left {
        color: #101b23;
        content: "WhyDive";
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 10pt;
        font-weight: 700;
        vertical-align: middle;
      }

      @top-right {
        color: #536271;
        content: ${JSON.stringify(essayUrl)};
        font-family: Arial, sans-serif;
        font-size: 7.5pt;
        vertical-align: middle;
      }
    }

    nav, header, footer, script, .print-hide, .editorial-web-hero,
    .essay-print-body > .print-hide {
      display: none !important;
    }

    * {
      background: white !important;
      box-shadow: none !important;
      color: black !important;
      text-shadow: none !important;
    }

    html, body {
      font-size: 12pt !important;
    }

    body {
      color: #161616 !important;
    }

    main {
      min-height: auto !important;
    }

    .editorial-web-content {
      border: 0 !important;
      margin: 0 !important;
      max-width: none !important;
      padding: 0 !important;
      width: 100% !important;
    }

    .editorial-web-content > * {
      max-width: none !important;
    }

    .essay-print-cover {
      display: block !important;
      border-bottom: 0 !important;
      break-after: page !important;
      break-inside: avoid !important;
      margin-bottom: 0 !important;
      padding: 0 !important;
    }

    .essay-print-cover-label {
      border-bottom: 1px solid #d8cab4 !important;
      color: #6e5a36 !important;
      font-size: 8pt !important;
      font-weight: 700 !important;
      letter-spacing: 0.14em !important;
      margin: 0 0 16pt 0 !important;
      padding-bottom: 8pt !important;
      text-transform: uppercase !important;
    }

    .essay-print-article-opener {
      display: block !important;
      break-inside: avoid !important;
      margin-bottom: 18pt !important;
      padding-top: 0 !important;
    }

    .essay-print-kicker {
      color: #6e5a36 !important;
      font-size: 8pt !important;
      font-weight: 700 !important;
      letter-spacing: 0.14em !important;
      margin: 0 0 8pt 0 !important;
      text-transform: uppercase !important;
    }

    .essay-print-title {
      color: #101b23 !important;
      font-size: 27pt !important;
      line-height: 1.08 !important;
      margin: 0 !important;
    }

    .essay-print-deck {
      color: #384a5a !important;
      font-size: 11.5pt !important;
      line-height: 1.4 !important;
      margin: 8pt 0 0 0 !important;
      max-width: 6.6in !important;
    }

    .essay-print-meta {
      border-top: 1px solid #d8cab4 !important;
      color: #536271 !important;
      display: grid !important;
      font-size: 11pt !important;
      gap: 36pt !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      margin-top: 0 !important;
      padding-top: 0 !important;
    }

    .essay-print-meta > div {
      display: grid !important;
      gap: 14pt !important;
      grid-template-columns: 1fr !important;
    }

    .essay-print-meta p {
      margin: 0 !important;
    }

    .essay-print-meta strong {
      color: #101b23 !important;
      display: block !important;
      font-size: 8pt !important;
      letter-spacing: 0.08em !important;
      margin-bottom: 3pt !important;
      text-transform: uppercase !important;
    }

    .essay-print-image {
      display: block !important;
      height: auto !important;
      margin-top: 16pt !important;
      object-fit: contain !important;
      width: 100% !important;
    }

    .essay-print-body {
      font-size: 12pt !important;
      line-height: 1.52 !important;
    }

    .essay-print-body .print-hide {
      display: none !important;
    }

    .essay-print-body section {
      margin-top: 24pt !important;
    }

    .essay-print-body h2 {
      break-after: avoid !important;
      color: #101b23 !important;
      font-size: 16pt !important;
      line-height: 1.25 !important;
      margin: 0 0 9pt 0 !important;
    }

    .essay-print-body h3 {
      break-after: avoid !important;
      color: #101b23 !important;
      font-size: 12.5pt !important;
      line-height: 1.3 !important;
      margin: 12pt 0 4pt 0 !important;
    }

    .essay-print-body p,
    .essay-print-body li,
    .essay-print-body blockquote {
      break-inside: avoid !important;
      font-size: 12pt !important;
      line-height: 1.52 !important;
      margin-top: 0 !important;
    }

    .essay-print-body p + p {
      margin-top: 8pt !important;
    }

    .essay-print-body ul {
      margin: 8pt 0 0 0 !important;
      padding-left: 16pt !important;
    }

    .essay-print-body li {
      border-left: 0 !important;
      padding-left: 0 !important;
    }

    .essay-print-body blockquote {
      border-left: 2pt solid #8a6d2f !important;
      color: #243447 !important;
      margin: 16pt 0 !important;
      padding-left: 12pt !important;
    }

    .essay-print-body article,
    .essay-print-body [class*="shadow"],
    .essay-print-body [class*="bg-"] {
      border: 0 !important;
      box-shadow: none !important;
      padding: 0 !important;
    }

    .essay-print-backmatter {
      border: 0 !important;
      border-top: 1px solid #d8cab4 !important;
      margin-top: 22pt !important;
      padding: 10pt 0 0 0 !important;
    }

    .essay-print-backmatter p,
    .essay-print-backmatter li {
      color: #444 !important;
      font-size: 9.5pt !important;
      line-height: 1.42 !important;
    }

    .essay-print-backmatter-heading {
      color: #101b23 !important;
      font-size: 8pt !important;
      font-weight: 700 !important;
      letter-spacing: 0.08em !important;
      text-transform: uppercase !important;
    }

    p.essay-print-backmatter-heading {
      margin-bottom: 6pt !important;
    }

    .essay-print-backmatter ul {
      margin-top: 4pt !important;
    }

    .essay-print-backmatter li + li {
      margin-top: 4pt !important;
    }

    .essay-print-body a {
      text-decoration: underline !important;
    }
  }
`;
}

export function ArticlePrintStyles({ essayUrl }: ArticlePrintStylesProps) {
  return <style dangerouslySetInnerHTML={{ __html: createPrintStyles(essayUrl) }} />;
}
