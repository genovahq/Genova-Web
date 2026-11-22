import { defineArrayMember, defineField, defineType } from "sanity";

/*
 * One document holds every photo/video slot on the homepage.
 * Field order = order on the page, and each description says what to upload,
 * so this doubles as the shot list. Empty fields show a placeholder on the site.
 */
export default defineType({
  name: "homeMedia",
  title: "Homepage photos & videos",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "work", title: "Work carousel" },
    { name: "services", title: "Services" },
    { name: "founder", title: "Founder" },
    { name: "seen", title: "Before / after" },
  ],
  fields: [
    defineField({
      name: "heroVideo",
      title: "Hero video",
      description: "10–20 second muted loop of a real crew on a real job. MP4, under ~15 MB.",
      type: "file",
      options: { accept: "video/mp4,video/webm" },
      group: "hero",
    }),
    defineField({
      name: "heroPoster",
      title: "Hero still / fallback photo",
      description: "Shown before the video loads (and instead of it if there's no video). Landscape, 2400px wide.",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "work",
      title: "Work carousel (phone screens)",
      description: "Up to 6 vertical screenshots: an LSA ad, a reel, a map-pack ranking, a client site, a review text, a Facebook ad.",
      type: "array",
      group: "work",
      validation: (r) => r.max(6),
      of: [
        defineArrayMember({
          type: "object",
          name: "workShot",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "image", title: "Screenshot", type: "image" }),
          ],
          preview: { select: { title: "label", media: "image" } },
        }),
      ],
    }),
    defineField({
      name: "serviceFound",
      title: "Found — phone screenshot",
      description: "A client in the top 3 on Google Maps.",
      type: "image",
      group: "services",
    }),
    defineField({
      name: "serviceBooked",
      title: "Booked — phone screenshot",
      description: "A client's Google Guaranteed / LSA listing.",
      type: "image",
      group: "services",
    }),
    defineField({
      name: "serviceSeen",
      title: "Seen — phone screenshot",
      description: "A frame from a client reel.",
      type: "image",
      group: "services",
    }),
    defineField({
      name: "serviceSpeed",
      title: "Speed to Lead — phone screenshot",
      description: "The auto-text a missed caller receives.",
      type: "image",
      group: "services",
    }),
    defineField({
      name: "objections",
      title: "Founder answer videos",
      description: "In order: 1) monthly reporting, 2) where ad money goes, 3) contracts. Vertical, 30–60 seconds.",
      type: "array",
      group: "founder",
      validation: (r) => r.max(3),
      of: [
        defineArrayMember({
          type: "object",
          name: "objectionVideo",
          fields: [
            defineField({ name: "video", title: "Video", type: "file", options: { accept: "video/mp4,video/webm" } }),
            defineField({ name: "poster", title: "Still frame", type: "image" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "founder",
      title: "Founder portrait",
      description: "Portrait on the purple backdrop, 4:5.",
      type: "image",
      options: { hotspot: true },
      group: "founder",
    }),
    defineField({
      name: "before",
      title: "Before — the empty feed",
      description: "Screenshot of a profile with a few old posts. Portrait 4:5.",
      type: "image",
      group: "seen",
    }),
    defineField({
      name: "after",
      title: "After — a feed on Seen",
      description: "The same profile after a month of real content. Portrait 4:5.",
      type: "image",
      group: "seen",
    }),
  ],
  preview: { prepare: () => ({ title: "Homepage photos & videos" }) },
});
