/**
 * The logo, unchanged: a Michroma wordmark with the chrome-to-purple gradient
 * on GENOVA and the glowing purple WEB. Kept as a component so the two
 * gradients can never drift apart between the nav and the footer.
 */
export default function Wordmark() {
  return (
    <>
      <span className="g">GENOVA</span>
      <span className="w">WEB</span>
    </>
  );
}
