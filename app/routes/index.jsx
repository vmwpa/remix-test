export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://whitepantsagency.com"
            rel="noreferrer"
          >
            Visit Whitepants website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://whitepantsagency.com/about"
            rel="noreferrer"
          >
            About us
          </a>
        </li>
        <li>
          <a target="_blank" href="https://whitepantsagency.com/bolt" rel="noreferrer">
            Read our Bolt Blogs
          </a>
        </li>
      </ul>
    </div>
  );
}
