"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { profile } from "../data";

export const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(
  "Opportunity for you"
)}`;

// mailto: links do nothing on computers without an email app set up,
// so this offers copy and Gmail, which always work, plus the email app as a fallback.
export default function EmailActions() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Older browsers: select-and-copy fallback
      const t = document.createElement("textarea");
      t.value = profile.email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-7">
      <p className="break-all font-display text-[19px] font-medium text-amber sm:text-[22px]">{profile.email}</p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-lg bg-amber px-4 py-2.5 text-[15px] font-semibold text-navy hover:bg-[#ffb83d]"
        >
          {copied ? <Check size={17} aria-hidden /> : <Copy size={17} aria-hidden />}
          {copied ? "Copied" : "Copy email"}
        </button>
        <a
          href={gmailLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-[15px] font-medium ring-1 ring-white/15 hover:bg-white/20"
        >
          <Mail size={17} aria-hidden /> Write in Gmail
        </a>
      </div>
      <p className="mt-3 text-[14px] text-white/60">
        Prefer your own email app?{" "}
        <a href={`mailto:${profile.email}`} className="underline underline-offset-4 hover:text-white">
          Open it here
        </a>
      </p>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email address copied" : ""}
      </span>
    </div>
  );
}
