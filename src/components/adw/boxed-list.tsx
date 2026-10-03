import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/icons/icon";

/* AdwPreferencesGroup: a heading, an optional description, a boxed list. */
export function PreferencesGroup({
  title,
  description,
  id,
  children,
  className,
}: {
  title: string;
  description?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section aria-labelledby={headingId} className={cn("flex flex-col gap-2", className)}>
      <header className="flex flex-col gap-[3px] px-[2px]">
        <h3 id={headingId} className="heading text-fg">
          {title}
        </h3>
        {description ? <p className="caption text-dim">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}

/* .boxed-list: rows separated by hairlines inside a card. */
export function BoxedList({
  children,
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "boxed-list divide-y divide-border overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}

type RowBase = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: IconName;
  /** Widget shown at the end of the row (switch, keycaps, chevron). */
  suffix?: React.ReactNode;
  className?: string;
};

function RowContent({ title, subtitle, icon, suffix }: RowBase) {
  return (
    <>
      {icon ? <Icon name={icon} className="mt-[3px] self-start text-fg sm:mt-0 sm:self-center" /> : null}
      <span className="flex min-w-0 flex-1 flex-col gap-[2px]">
        <span className="text-[0.9375rem] leading-snug text-fg">{title}</span>
        {subtitle ? (
          <span className="text-sm leading-normal text-dim text-pretty">{subtitle}</span>
        ) : null}
      </span>
      {suffix ? <span className="flex shrink-0 items-center gap-2">{suffix}</span> : null}
    </>
  );
}

const rowClass =
  "flex min-h-[54px] items-center gap-2 px-2 py-[9px] max-sm:flex-wrap sm:gap-[15px] sm:px-[15px]";

/* AdwActionRow. Static by default; pass `href` to make it an activatable link. */
export function ActionRow({
  href,
  external,
  ...row
}: RowBase & { href?: string; external?: boolean }) {
  if (href) {
    return (
      <li>
        <a
          href={href}
          className={cn(
            rowClass,
            "text-inherit no-underline transition-colors hover:bg-hover active:bg-active focus-visible:-outline-offset-2",
            row.className,
          )}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
        >
          <RowContent
            {...row}
            suffix={
              row.suffix ?? (
                <Icon
                  name={external ? "external-link" : "go-next"}
                  label={external ? "Opens in a new tab" : undefined}
                  className="text-dim"
                />
              )
            }
          />
        </a>
      </li>
    );
  }
  return (
    <li className={cn(rowClass, row.className)}>
      <RowContent {...row} />
    </li>
  );
}
