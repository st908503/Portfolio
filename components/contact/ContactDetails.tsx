export function ContactDetails() {
  return (
    <div className="space-y-3 text-sm text-zinc-300">
      <p>
        I’m open to frontend / React Native roles, fintech collaborations, and interesting
        product work.
      </p>
      <ul className="space-y-1 text-xs text-zinc-400">
        <li>Email: <a href="mailto:you@example.com" className="text-emerald-400">
          you@example.com
        </a></li>
        <li>Location: Noida, India</li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/YOUR_HANDLE"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400"
          >
            linkedin.com/in/YOUR_HANDLE
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400"
          >
            github.com/YOUR_GITHUB
          </a>
        </li>
      </ul>
    </div>
  );
}
