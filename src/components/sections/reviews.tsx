import { LINKS, REVIEWS, type Review } from "@/content/site";
import { Avatar } from "@/components/adw/avatar";
import { Icon } from "@/components/icons/icon";

function quoted(review: Review) {
  return `“${review.text}${review.excerpt ? " …" : ""}”`;
}

function Author({ review, size }: { review: Review; size: number }) {
  return (
    <span className="flex min-w-0 items-center gap-[9px]">
      <Avatar name={review.author} size={size} />
      <span className="flex min-w-0 flex-col leading-tight">
        <a
          href={review.profile}
          target="_blank"
          rel="noopener noreferrer"
          className="truncate text-[0.9375rem] font-bold text-fg no-underline hover:underline"
        >
          {review.author}
        </a>
        <span className="caption text-dim">{review.date}</span>
      </span>
    </span>
  );
}

function Featured({ review }: { review: Review }) {
  return (
    <figure className="flex flex-col gap-4">
      <blockquote className="text-[1.375rem] leading-[1.4] font-medium tracking-[-0.01em] text-fg text-pretty md:text-[1.625rem]">
        <p>{quoted(review)}</p>
      </blockquote>
      <figcaption>
        <Author review={review} size={40} />
      </figcaption>
    </figure>
  );
}

/* A list of reviews, laid out as a Libadwaita boxed list of message rows. */
function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <ul className="boxed-list divide-y divide-border overflow-hidden">
      {reviews.map((review) => (
        <li key={review.author}>
          <figure className="flex flex-col gap-[9px] px-[15px] py-2">
            <figcaption>
              <Author review={review} size={32} />
            </figcaption>
            <blockquote className="text-[0.9375rem] leading-normal text-fg text-pretty">
              <p>{quoted(review)}</p>
            </blockquote>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export function Reviews({ reviews = REVIEWS }: { reviews?: Review[] }) {
  const [featured, ...rest] = reviews;
  return (
    <section aria-labelledby="reviews-title" className="page-container pb-12 md:pb-16">
      <div className="grid gap-8 border-t border-border pt-12 md:pt-16 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-12">
        <div className="flex flex-col gap-4 lg:sticky lg:top-[95px] lg:self-start">
          <div className="flex flex-col gap-2">
            <h2 id="reviews-title" className="title-1 text-fg">
              What people say
            </h2>
            <p className="text-dim">Reviews left on extensions.gnome.org, quoted as written.</p>
          </div>
          {featured ? <Featured review={featured} /> : null}
          <a
            href={LINKS.egoReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[6px] self-start text-sm font-bold text-accent underline"
          >
            Read all reviews or write one
            <Icon name="external-link" size={12} />
          </a>
        </div>
        {rest.length ? <ReviewList reviews={rest} /> : null}
      </div>
    </section>
  );
}
