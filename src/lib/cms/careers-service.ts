import type { CareerRole } from "@/lib/careers-content";
import { careerRoles as staticRoles } from "@/lib/careers-content";
import { fetchListFromCms } from "@/lib/cms/fetch";
import { careerRolesQuery } from "@/sanity/lib/queries";

export async function getCareerRoles(): Promise<CareerRole[]> {
  const rows = await fetchListFromCms<CareerRole>("careers", careerRolesQuery);
  if (rows?.length) return rows;
  return staticRoles;
}
