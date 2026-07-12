type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

const VARIANTS = {
  primary: "text-parchment border-ink hover:text-ink",
  secondary: "text-warmgray border-hairline hover:text-parchment hover:border-ink",
};

export default function EditorialLink({
  href,
  children,
  variant = "secondary",
  external = false,
  className = "",
}: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`font-heading uppercase tracking-wide text-sm border-b pb-1 transition-colors duration-200 ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
