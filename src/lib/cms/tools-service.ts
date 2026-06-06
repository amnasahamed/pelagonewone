import type { ToolDefinition, ToolId } from "@/lib/tools";
import { tools as staticTools, toolById as staticToolById } from "@/lib/tools";
import { fetchListFromCms } from "@/lib/cms/fetch";
import { toolsQuery } from "@/sanity/lib/queries";

export async function getTools(): Promise<ToolDefinition[]> {
  const rows = await fetchListFromCms<ToolDefinition>("tools", toolsQuery);
  if (rows?.length) return rows;
  return staticTools;
}

export async function getToolById(id: ToolId): Promise<ToolDefinition | undefined> {
  const tools = await getTools();
  return tools.find((t) => t.id === id) ?? staticToolById[id];
}

export async function getToolByName(name: string): Promise<ToolDefinition | undefined> {
  const tools = await getTools();
  return tools.find((t) => t.name === name);
}

export async function getToolByIdMap(): Promise<Record<ToolId, ToolDefinition>> {
  const tools = await getTools();
  return Object.fromEntries(tools.map((t) => [t.id, t])) as Record<ToolId, ToolDefinition>;
}
