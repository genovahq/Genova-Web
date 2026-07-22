/**
 * Renders a JSON-LD block. Server component — the markup is in the initial
 * HTML, which is the only place crawlers reliably look for it.
 */
export default function JsonLd({ data, id }: { data: object; id: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // JSON.stringify output is escaped for the one character that can break
      // out of a <script> block.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
