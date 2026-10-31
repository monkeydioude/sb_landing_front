interface ImportMetaEnv {
  readonly VITE_CONTACT_ENDPOINT?: string;
  /** Public URL of this build, no trailing slash. Default https://spendbaker.com. */
  readonly VITE_SITE_URL?: string;
  /** "true" on preview deployments: adds <meta name="robots" content="noindex">. */
  readonly VITE_NOINDEX?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
