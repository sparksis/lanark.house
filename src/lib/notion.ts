import { Client } from "@notionhq/client";

export type NotionTask = {
  id: string;
  name: string;
  status:
    | "Not started"
    | "Needs follow up"
    | "In Dispute"
    | "In progress"
    | "In review / documentation"
    | "Done";
  date: string | null;
  reference: string | null;
  category: string;
};

const DATABASE_ID = "22ea6dfd466f80a1be0dc2dcfb33c6bc";

function deriveCategory(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes("roof") || lower.includes("soffit"))
    return "Roofing/Siding";
  if (lower.includes("siding")) return "Siding";
  if (lower.includes("eaves")) return "Exterior";
  if (lower.includes("plumb") || lower.includes("hot water"))
    return "Plumbing";
  if (lower.includes("dump") || lower.includes("waste"))
    return "Site/Exterior";
  if (lower.includes("arbor") || lower.includes("pergola") || lower.includes("landscap") || lower.includes("sod") || lower.includes("topsoil") || lower.includes("grading"))
    return "Landscaping";
  if (lower.includes("dryer") || lower.includes("appliance"))
    return "Appliances";
  if (lower.includes("foam") || lower.includes("structural"))
    return "Structural";
  if (lower.includes("fireplace")) return "Interior/Gas";
  if (lower.includes("window") || lower.includes("glass")) return "Windows";
  if (lower.includes("driveway") || lower.includes("walkway"))
    return "Driveway";
  if (lower.includes("texture") || lower.includes("island") || lower.includes("ceiling"))
    return "Interior Finishes";
  if (lower.includes("chip") || lower.includes("concrete") || lower.includes("precast") || lower.includes("steps"))
    return "Concrete";
  if (lower.includes("deck")) return "Exterior/Deck";
  if (lower.includes("parging") || lower.includes("foundation"))
    return "Foundation";
  if (lower.includes("batten") || lower.includes("paint"))
    return "Exterior Paint";
  if (lower.includes("smart home")) return "Smart Home";
  if (lower.includes("gift card") || lower.includes("depot")) return "Admin/Perks";
  return "General";
}

const FALLBACK_TASKS: NotionTask[] = [
  { id: "1", name: "Eavestrough repairs", status: "Needs follow up", date: "2026-03-24", reference: null, category: "Exterior" },
  { id: "2", name: "Roof final & cleaning", status: "Needs follow up", date: "2026-03-24", reference: null, category: "Roofing/Siding" },
  { id: "3", name: "Loose soffit / roofing-siding issue after high winds", status: "Needs follow up", date: "2026-03-24", reference: null, category: "Roofing/Siding" },
  { id: "4", name: "Hot water follow-up / destructive investigation boundary", status: "Needs follow up", date: "2026-03-24", reference: null, category: "Plumbing" },
  { id: "5", name: "Illegal dumping / construction waste blowing into yard", status: "Needs follow up", date: "2026-03-24", reference: null, category: "Site/Exterior" },
  { id: "6", name: "House wrap visible between siding joints", status: "Needs follow up", date: "2025-09-01", reference: null, category: "Siding" },
  { id: "7", name: "Siding ramp visible between vinyl panels", status: "Needs follow up", date: "2025-08-27", reference: null, category: "Siding" },
  { id: "8", name: "Leaning arbor/pergola installed without forewarning", status: "Needs follow up", date: "2025-08-15", reference: null, category: "Landscaping" },
  { id: "9", name: "Dryer door is reversed (Mike was belligerent)", status: "In Dispute", date: "2025-07-23", reference: null, category: "Appliances" },
  { id: "10", name: "Foam basement party wall concern", status: "In Dispute", date: "2025-07-23", reference: null, category: "Structural" },
  { id: "11", name: "Fireplace — missing crystals & not turning on", status: "In progress", date: "2026-03-24", reference: null, category: "Interior/Gas" },
  { id: "12", name: "Drive/Walkway final grading", status: "In progress", date: "2025-08-15", reference: null, category: "Landscaping" },
  { id: "13", name: "Stairwell window glass — cracked", status: "In progress", date: "2025-07-23", reference: null, category: "Windows" },
  { id: "14", name: "Temp driveway needs to be completed", status: "In progress", date: "2025-07-23", reference: null, category: "Driveway" },
  { id: "15", name: "Siding damage", status: "In progress", date: "2025-07-23", reference: null, category: "Siding" },
  { id: "16", name: "Texturing repair in hallway", status: "In progress", date: "2025-07-23", reference: null, category: "Interior Finishes" },
  { id: "17", name: "Minor chip in precast concrete steps", status: "In progress", date: "2025-07-23", reference: null, category: "Concrete" },
  { id: "18", name: "Ceiling texture repair by the kitchen", status: "In review / documentation", date: "2025-08-15", reference: null, category: "Interior Finishes" },
  { id: "19", name: "The island gable — scratches on finish", status: "In review / documentation", date: "2025-07-23", reference: null, category: "Interior Finishes" },
  { id: "20", name: "One piece of deck board needs replacing", status: "In review / documentation", date: "2025-07-23", reference: null, category: "Exterior/Deck" },
  { id: "21", name: "Front sod", status: "Not started", date: "2025-08-15", reference: null, category: "Landscaping" },
  { id: "22", name: "Front steps to be topped up", status: "Not started", date: "2025-08-15", reference: null, category: "Concrete" },
  { id: "23", name: "Parging", status: "Not started", date: "2025-07-28", reference: null, category: "Foundation" },
  { id: "24", name: "Seasonal topsoil", status: "Not started", date: "2025-08-15", reference: null, category: "Landscaping" },
  { id: "25", name: "Batten paint (exterior finishes)", status: "Not started", date: "2025-08-15", reference: null, category: "Exterior Paint" },
  { id: "26", name: "Smart Home Setup", status: "Done", date: "2025-07-23", reference: null, category: "Smart Home" },
  { id: "27", name: "$150 CAD Home Depot Gift Card", status: "Done", date: "2025-07-25", reference: null, category: "Admin/Perks" },
  { id: "28", name: "Driveway & walkway concrete pour", status: "Done", date: "2025-09-04", reference: null, category: "Driveway" },
];

export async function getOutstandingTasks(): Promise<NotionTask[]> {
  const token = process.env.NOTION_TOKEN;

  if (!token) {
    return FALLBACK_TASKS;
  }

  try {
    const notion = new Client({ auth: token });
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
    });

    return response.results.map((page: any) => {
      const props = page.properties;
      const name =
        props.Name?.title?.[0]?.plain_text || "Untitled";
      const status = props.Status?.status?.name || "Not started";
      const date = props.Date?.date?.start || null;
      const reference = props.Reference?.rich_text?.[0]?.plain_text || null;

      return {
        id: page.id,
        name,
        status: status as NotionTask["status"],
        date,
        reference,
        category: deriveCategory(name),
      };
    });
  } catch {
    return FALLBACK_TASKS;
  }
}
