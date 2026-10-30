import { CheckCircle2, Loader2 } from 'lucide-react';
import { useId, useState } from 'react';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import type { Contact } from '~/content/types';
import { cn } from '~/lib/cn';
import { field } from '~/lib/field';
import type { Lang } from '~/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

/** What the endpoint receives: POST, Content-Type: application/json. Documented in the README. */
type Payload = {
  name: string;
  email: string;
  company: string;
  role: string;
  teamSize: string;
  adSpend: string;
  platforms: string[];
  message: string;
  consent: true;
  lang: Lang;
  source: 'website-contact';
};

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

export function ContactForm({ t, lang }: { t: Contact['form']; lang: Lang }) {
  const id = useId();
  const [status, setStatus] = useState<Status>('idle');
  const [platforms, setPlatforms] = useState<string[]>([]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot: real visitors never see this field. Bots fill it, so we pretend it worked.
    if (data.get('website')) return setStatus('success');

    const text = (k: string) => String(data.get(k) ?? '').trim();
    const payload: Payload = {
      name: text('name'),
      email: text('email'),
      company: text('company'),
      role: text('role'),
      teamSize: text('teamSize'),
      adSpend: text('adSpend'),
      platforms,
      message: text('message'),
      consent: true,
      lang,
      source: 'website-contact',
    };

    if (!ENDPOINT) {
      console.error('VITE_CONTACT_ENDPOINT is not set: the demo request was not sent.');
      return setStatus('error');
    }
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) return setStatus('error');
      form.reset();
      setPlatforms([]);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center shadow-xl" role="status">
        <CheckCircle2 className="mx-auto size-10" aria-hidden />
        <h2 className="mt-4 text-xl font-bold">{t.success.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.success.text}</p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
          {t.success.again}
        </Button>
      </div>
    );
  }

  const Label = ({
    name,
    children,
    required,
  }: {
    name: string;
    children: string;
    required?: boolean;
  }) => (
    <label htmlFor={`${id}-${name}`} className="mb-1.5 block text-xs font-bold">
      {children}
      {required && <span aria-hidden> *</span>}
    </label>
  );

  return (
    <form
      onSubmit={onSubmit}
      className="animate-fade-up rounded-2xl border bg-card p-6 shadow-xl transition-shadow [--delay:150ms] focus-within:shadow-2xl sm:p-8"
    >
      <h2 className="text-xl font-bold">{t.title}</h2>
      <p className="mt-1 text-xs text-muted-foreground">{t.required}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <Label name="name" required>
            {t.name}
          </Label>
          <input id={`${id}-name`} name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <Label name="email" required>
            {t.email}
          </Label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
        <div>
          <Label name="company" required>
            {t.company}
          </Label>
          <input
            id={`${id}-company`}
            name="company"
            required
            autoComplete="organization"
            className={field}
          />
        </div>
        <div>
          <Label name="role">{t.role}</Label>
          <input
            id={`${id}-role`}
            name="role"
            autoComplete="organization-title"
            className={field}
          />
        </div>
        <div>
          <Label name="teamSize">{t.teamSize}</Label>
          <select id={`${id}-teamSize`} name="teamSize" defaultValue="" className={field}>
            <option value="">{t.select}</option>
            {t.teamSizes.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <Label name="adSpend">{t.adSpend}</Label>
          <select id={`${id}-adSpend`} name="adSpend" defaultValue="" className={field}>
            <option value="">{t.select}</option>
            {t.adSpends.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="mt-4">
        <legend className="mb-1.5 text-xs font-bold">{t.platforms}</legend>
        <div className="flex flex-wrap gap-2">
          {t.platformOptions.map((o) => {
            const on = platforms.includes(o);
            return (
              <label
                key={o}
                className={cn(
                  'cursor-pointer rounded-full border px-3 py-1.5 text-xs transition-colors has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-brand-blue/30',
                  on
                    ? 'border-brand-blue bg-brand-blue/10 font-bold text-brand-blue'
                    : 'bg-input-background hover:bg-accent',
                )}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={on}
                  onChange={() => setPlatforms((p) => (on ? p.filter((x) => x !== o) : [...p, o]))}
                />
                {o}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-4">
        <Label name="message">{t.message}</Label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          placeholder={t.messagePlaceholder}
          className={cn(field, 'resize-y')}
        />
      </div>

      {/* Honeypot (see onSubmit). */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-2.5 text-xs text-muted-foreground">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-4 accent-[var(--brand-blue)]"
        />
        <span>
          {t.consent.before}
          <Link to="/privacy" className="font-bold text-brand-blue underline underline-offset-2">
            {t.consent.link}
          </Link>
          {t.consent.after}
        </span>
      </label>

      <div aria-live="polite" className="mt-4 min-h-5 text-sm text-destructive">
        {status === 'error' && t.error}
      </div>

      <Button type="submit" size="lg" className="mt-2 w-full" disabled={status === 'sending'}>
        {status === 'sending' ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> {t.sending}
          </>
        ) : (
          <>{t.submit} →</>
        )}
      </Button>
    </form>
  );
}
