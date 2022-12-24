import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 376,
  site: "my-first-site",
  domains: ["my-first-site.deco.site"],
});