// The subset of planned locations that have a published page. Navigation
// (footer, homepage coverage, locations hub) uses this so links never point at
// a town that has not been built yet. As towns are added to locationContent,
// they appear here automatically.
import { locations } from "./site";
import { locationContent } from "./locationContent";

export const builtLocations = locations.filter((l) => Boolean(locationContent[l.slug]));

export function isLocationBuilt(slug: string): boolean {
  return Boolean(locationContent[slug]);
}
