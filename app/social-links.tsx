import Image from "next/image";

const socialLinks = [
  { label: "Email", icon: "email", href: "mailto:vincenta2742@gmail.com" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/vincentaysonangeles" },
  { label: "GitHub", icon: "github", href: "https://github.com/vinciible" },
  { label: "Jawa PC store", icon: "store", href: "https://www.jawa.gg/sp/1791/vinci" },
];

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "store") {
    return <Image src="/jawa.svg" alt="" width={24} height={24} />;
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icon === "email" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 6 9 7 9-7" />
        </>
      )}
      {icon === "linkedin" && (
        <>
          <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" stroke="none" />
          <path d="M7 10v7M11 17v-7m0 3a3 3 0 0 1 6 0v4" stroke="white" strokeWidth="2" />
          <circle cx="7" cy="7" r="1" fill="white" stroke="none" />
        </>
      )}
      {icon === "github" && (
        <path
          fill="currentColor"
          stroke="none"
          d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.64 1.22 3.28.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.63 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"
        />
      )}
    </svg>
  );
}

export default function SocialLinks() {
  return (
    <div className="social-links" role="group" aria-label="Contact and social profiles">
      {socialLinks.map(({ label, icon, href }) =>
        href ? (
          <a
            key={icon}
            className={`social-link social-link-${icon}`}
            href={href}
            aria-label={label}
            title={label}
            target={icon === "email" ? undefined : "_blank"}
            rel={icon === "email" ? undefined : "noopener noreferrer"}
          >
            <SocialIcon icon={icon} />
          </a>
        ) : (
          <span
            key={icon}
            className="social-link social-link-pending"
            role="img"
            aria-label={`${label}: link coming soon`}
            title={`${label}: link coming soon`}
          >
            <SocialIcon icon={icon} />
          </span>
        ),
      )}
    </div>
  );
}
