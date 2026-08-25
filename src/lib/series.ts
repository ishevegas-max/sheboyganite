export type StoryId = "southside" | "kite" | "ledgers" | "numbers";

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "pull"; text: string }
  | { kind: "opine"; text: string }
  | { kind: "ul"; items: string[] };

export type Story = {
  id: StoryId;
  num: string;
  path: string;
  kicker: string;
  title: string;
  dek: string;
  readMins: number;
  image: string;
  imageAlt: string;
  imageCredit: string;
  body: Block[];
};

export const PACKET_URL =
  "https://mccmeetings.blob.core.usgovcloudapi.net/sheboygnwi-pubu/MEET-Packet-e722495ab18c470f8a186bbc730ff4fd.pdf";

export const TIP_MAIL = "mailto:ishevegas@gmail.com";

export const money = {
  interceptorTotal: 11_909_080.04,
  fema: 7_809_600,
  wem: 1_140_198,
  cityShare: 2_960_000,
  ineligible: 1_820_000,
  southsideInterceptor: 28_000_000,
  cleanWaterFund: 31_700_000,
  lakeshoreInterceptor: 12_000_000,
  malibu: 40_000_000,
  marinaVision: 77_000_000,
  sewerRateAvoided: 67.5,
};

export const sources = [
  {
    id: "1",
    label: "Public Works Committee packet, July 27, 2026",
    href: PACKET_URL,
    note: "FEMA HMGP award, revetment cross-section, access road, High Avenue parking, ineligible-cost split, bidding window, February 14, 2028 completion.",
  },
  {
    id: "2",
    label: "City of Sheboygan capital / wastewater discussion, 2021–2024",
    note: "Original ~$10 million interceptor-protection job. Paying cash with federal ARPA instead of borrowing was presented as avoiding about $67.50 a year per household in sewer rates.",
  },
  {
    id: "3",
    label: "Americon Construction — Malibu Apartments",
    href: "https://www.americonconstructionco.com/malibu-apartments/",
    note: "210 units in two buildings at 1403 S. 7th Street / Clara Avenue. Groundbreaking May 2025. Kite Beach to the north, King Park immediately south.",
  },
  {
    id: "4",
    label: "WHBL, February 4, 2024 — TID 21 / Malibu proposal",
    href: "https://whbl.com/2024/02/04/malibu-of-the-midwest-government-to-propose-40m-lakefront-malibu-apartments-monday-night/",
    note: "About $40 million development. New Tax Incremental District 21. Former Optenberg Iron Works site; DNR contamination identified 2005.",
  },
  {
    id: "5",
    label: "Sheboygan Press, October 2024 — marina and lakefront master plan",
    href: "https://www.sheboyganpress.com/story/news/local/2024/10/14/sheboygan-marina-and-lakefront-master-plan-cost-and-whats-included/75568914007/",
    note: "Harbor Centre Marina / lakefront vision reported at more than $77 million. New docks, activity space at Deland. Only early phases funded.",
  },
  {
    id: "6",
    label: "Foth — Southside Interceptor feasibility study",
    href: "https://www.foth.com/featured-projects/city-of-sheboygan-southside-interceptor-feasibility-study/",
    note: "Recommended armoring manholes and installing an access road and revetment. Identified funding paths the city later used.",
  },
];

export const stories: Story[] = [
  {
    id: "southside",
    num: "01",
    path: "/southside",
    kicker: "The southside is about to become a road",
    title: "The Southside Lakefront Is About to Become Something Else Entirely",
    dek: "They're not just armoring the shoreline. They are building a road along the lake.",
    readMins: 8,
    image: "/images/lakeshore.jpg",
    imageAlt: "Overcast Lake Michigan southside shoreline, ice on the sand, the wastewater plant on the far horizon.",
    imageCredit: "Southside Lake Michigan shoreline, looking toward the plant.",
    body: [
      {
        kind: "p",
        text: "If you've walked the shoreline south of King Park any time in the last forty years, you know the routine: pick your way down the bank, follow the narrow strip of sand at the water's edge, watch your footing where the lake has eaten the bluff, and keep an eye out for the manholes. Those strange concrete cylinders sitting in the sand are the lids of a 96-year-old secret — the southside interceptor, a trunk sewer buried along the lakeshore since 1930 that carries nearly half of all the sewage in Sheboygan to the treatment plant at the foot of Lakeshore Drive.",
      },
      {
        kind: "p",
        text: "That shoreline — wild, eroding, unofficial, and mostly ignored — is about to be gone. Not eroded away. Replaced. On purpose, with federal money, by design.",
      },
      {
        kind: "p",
        text: "Buried in the agenda packet for the July 27, 2026 Public Works Committee meeting is the full blueprint, and it's worth reading, because almost nobody has. Here's what it says, what it means, and what it looks like once you put the pieces together.",
      },
      { kind: "h2", text: "What's actually being built" },
      {
        kind: "p",
        text: "FEMA has formally approved a Hazard Mitigation Grant Program award the city first applied for in February 2023. The project, in the city's own words, \"protects approximately 9,300 feet of shoreline sanitary sewer, elevates and armors 21 manholes, removes deteriorated groins, and constructs a maintenance access road.\" About 6,000 feet of the lakeshore — from the wastewater treatment plant all the way up to High Avenue — gets a stone revetment: a sloped armor of 1-to-2-ton boulders, four feet thick, running down into the lake itself.",
      },
      {
        kind: "p",
        text: "The engineering cross-section in the packet tells you what the lakefront becomes. At the bottom, lakeward: armor stone sloping down under the waterline, a toe of rock sunk into the lakebed to stop the waves from chewing underneath. At the top: a **12-foot-wide, 12-inch-thick crushed-stone access road**, 10 feet of flat crest at elevation 588, running the entire mile-plus length of the project.",
      },
      {
        kind: "pull",
        text: "Read that again. They're not just armoring the shoreline. They are building a road along the lake.",
      },
      {
        kind: "p",
        text: "Officially, it's a \"maintenance access road\" so DPW crews can reach the interceptor — which today, the city notes, is \"very difficult and nearly impossible\" to access with large equipment. That is true, and it's a legitimate reason. It is also true that a 12-foot-wide, flat, stone-surfaced corridor running along Lake Michigan from High Avenue to the treatment plant is, functionally, a lakefront pathway — whether or not anyone at City Hall uses that word.",
      },
      { kind: "h2", text: "The tell: follow the parking lot" },
      {
        kind: "p",
        text: "Here's the part that hasn't made it into any press release. Tucked into the funding breakdown is $1.82 million in \"ineligible costs\" — local money FEMA won't cover — and that line item includes **repaving and enlarging the parking lot at the end of High Avenue**.",
      },
      {
        kind: "p",
        text: "Now add what anyone driving the south side has already noticed: the new four-way stop that went in at High Avenue. You don't expand a parking lot at the dead end of a residential street, and calm the intersection feeding it, because dump trucks need somewhere to turn around once a year. You do it because you expect cars. Visitors. People.",
      },
      {
        kind: "p",
        text: "The package also rebuilds the storm sewer outfalls at the ends of Clara Avenue and Broadway, and closes **Lakeview Park** for use as the construction staging area. When the work is done — the grant requires completion by February 14, 2028, with public bidding this fall — the south side will have a new shoreline road, a new and bigger place to park at its north end, and a traffic pattern already adjusted to handle the flow.",
      },
      { kind: "h2", text: "The money" },
      {
        kind: "p",
        text: "The total project cost is now estimated at $11,909,080.04 — up from the $9.18 million estimated when the city committed matching funds in 2023. FEMA covers $7,809,600. The state, through Wisconsin Emergency Management, adds $1,140,198. The city's share is roughly $2.96 million, already sitting in the Wastewater Fund from a $3 million allocation in the 2024 capital plan.",
      },
      {
        kind: "p",
        text: "For ratepayer context: when this project was first floated in 2021 as a $10 million job, the city said paying cash with federal ARPA money — instead of borrowing — avoided a sewer rate increase of about $67.50 per year for every household. The federal spigot has been the quiet hero of this story twice now.",
      },
      {
        kind: "p",
        text: "And this is only one piece of the southside construction wave. The 2026 budget carries a separate $28 million for the new Southside Interceptor — backed by $31.7 million in state Clean Water Fund money — and a $12 million Lakeshore Interceptor line item pulled forward from future years. The wastewater fund budget jumped 78% in a single year. Easements from Wisconsin Power & Light along Lakeshore Drive, including relocating the utility's security fencing, were approved at the same July 27 meeting.",
      },
      { kind: "h2", text: "What it means for the people who actually use that shore" },
      {
        kind: "p",
        text: "Let's be plain about the trade, because the city won't be.",
      },
      {
        kind: "ul",
        items: [
          "**The beach walk is over.** That narrow, sandy, slightly feral strip at the water's edge — the one you could walk from King Park toward the plant, dodging manholes and driftwood — gets buried under four feet of boulders. During construction it's an active work zone. Afterward, it's a rock face. You can scramble on armor stone, but it is not a beach, and the water at its base is a submerged boulder field, not a swimming bottom.",
          "**Swimming and jumping consolidate at King Park and the piers.** The south end of the King Park beach becomes the last sand on that side of town. Expect it to be busier.",
          "**The groins come out.** The old, deteriorated groins along that stretch get removed entirely. Groins are part of why sand has collected where it has — they trap it. Pull them out and armor the shore, and the sand dynamics of the whole south lakefront change. Over years, the sand in front of revetments tends to scour away. The shore you knew is not coming back in your lifetime.",
          "**What you get instead is the road.** A flat, 12-foot, all-weather shoreline corridor with a big parking lot at High Avenue. Walkers, runners, dog people, fishermen — the road serves all of them, in all seasons, in a way the eroding bank never could. That is a real gain, and pretending otherwise would be dishonest.",
        ],
      },
      {
        kind: "opine",
        text: "Opinion, labeled. This project is a tourism amenity wearing a hard hat. The sewer protection is real. The parking lot is the play. Say so.",
      },
      {
        kind: "p",
        text: "The packet is public. The bidding is this fall. Completion is locked to February 14, 2028. If you want a say in what a \"maintenance access road\" becomes once the trucks leave, the time to read the cross-section is now — not after the boulders are in the water.",
      },
    ],
  },
  {
    id: "kite",
    num: "02",
    path: "/kite",
    kicker: "Malibu is what's ending Kite Beach",
    title: "The Squeeze: What's Actually Happening to Sheboygan's Kite Beach",
    dek: "The interceptor armor stops south of King Park. It does not bury the launch. The apartments do.",
    readMins: 7,
    image: "/images/kite.jpg",
    imageAlt: "Windswept Great Lakes beach under a heavy grey sky, ice along the waterline.",
    imageCredit: "Launch shore, winter light. Editorial illustration — not a documentary frame of the Clara Avenue lot.",
    body: [
      {
        kind: "p",
        text: "Start with what is not happening, because the rumor mill has this one backwards. The southside revetment — the 1-to-2-ton boulders, the 12-foot access road, the FEMA money — **stops south of King Park**. It does not pave Kite Beach. It does not put armor stone on the launch. If the only lakefront project in town were the interceptor, kiteboarders would still have a beach.",
      },
      {
        kind: "p",
        text: "What ends the launch is Project Malibu.",
      },
      {
        kind: "p",
        text: "About 210 apartments. Two buildings. Address on the developer's own page: 1403 S. 7th Street, along Clara Avenue, on the grassy lot the kite and windsurf community used to park, rig, and launch. Groundbreaking: May 2025. Money: TID 21. Timeline: roughly three years. Kite Beach sits to the north of the buildings. King Park, with its beach and pavilion, sits immediately south.",
      },
      {
        kind: "pull",
        text: "The sand stays public by contract. The free staging ground does not.",
      },
      { kind: "h2", text: "What \"Malibu of the Midwest\" actually meant" },
      {
        kind: "p",
        text: "Sheboygan has been calling itself the Malibu of the Midwest for half a century. It was never a chamber slogan first. It was a surf nickname — winter grease in a 4/3, northeast wind, the break off the north and south piers, and, later, the kite scene that made this stretch of Lake Michigan one of the few Great Lakes launches you could actually use. Visit Sheboygan still sells the line. The water does not care.",
      },
      {
        kind: "p",
        text: "A kite launch is not the sand. A kite launch is a **system**: a place to park a van, a patch of grass to unroll 70 feet of lines, a clear window to the water, and enough room that a lost kite does not take out a patio. Take the lot and you can still print \"public beach\" on a site plan. You cannot launch.",
      },
      {
        kind: "p",
        text: "That is the squeeze. Not a fence across the sand. A building where the rigging used to be, luxury units facing the lake, 131 outdoor stalls and 205 indoor spaces for residents, and a contract that keeps a strip of beach technically open while ending the reason anyone other than a tenant would come.",
      },
      { kind: "h2", text: "The site was never empty" },
      {
        kind: "p",
        text: "The lot is a brownfield. Optenberg Iron Works sat here until 2001. The DNR flagged contaminated soil in 2005. Cleanup has been a county-and-city-and-developer braid for years — a state grant, then more work as the apartments got real. Crews were in the dirt in 2025 pulling contaminants so the buildings could go up. Residents near Kite Beach have already said out loud that they are on edge about what gets stirred.",
      },
      {
        kind: "p",
        text: "None of that is an argument against cleaning a poisoned lot. It is an argument against pretending the cleanup is a gift to the kite community. The gift is to the tax increment. The kite community is the previous use.",
      },
      { kind: "h2", text: "TID 21 is the machine" },
      {
        kind: "p",
        text: "The apartments were proposed as a roughly $40 million lakefront job: 210 units, commercial space aimed at a beachfront restaurant, two phases. To make the numbers work, the city created Tax Incremental District 21. That is how Wisconsin cities pay for the gap between what a developer will spend and what the city wants on the shore — by capturing future taxes from the new buildings and spending them now.",
      },
      {
        kind: "p",
        text: "Plan Commission signed off on the general development plan in 2024. Some city paper still says 215 units; the design-build partner publishes 210. Either way it is two large buildings on a launch that used to be a field. Amenities listed by the builder: fitness center, pet wash, lounge with a bar, pool, sauna, indoor golf simulator. That is not a kite shop.",
      },
      {
        kind: "p",
        text: "Move-in talk has pointed at 2027. Construction is a three-year hole in the calendar the launch does not survive.",
      },
      {
        kind: "opine",
        text: "Opinion, labeled. You can build housing on a brownfield and still tell the truth about what you are ending. \"Direct access to the beach\" in a brochure is not the same thing as a public launch. If the city wanted both, it would have drawn the lot lines to keep a rigging yard. It did not.",
      },
      { kind: "h2", text: "What remains" },
      {
        kind: "p",
        text: "King Park still has sand. The piers still have water. The nickname still prints. What does not remain is the informal, slightly illegal-feeling, completely ordinary thing that made Kite Beach a kite beach: a free place to show up with a kite and go. After Malibu, the people who still fly will do it as guests of a luxury address, or they will go somewhere else.",
      },
      {
        kind: "p",
        text: "Put this next to the southside road and the marina rebuild and the pattern is not subtle. The wild edges of the lakefront are being converted, piece by piece, into paid, planned, parked amenities. The interceptor did not do this to Kite Beach. The apartments did. TID 21 paid for the conversion. The sand, as always, is the last thing they had to promise to keep.",
      },
    ],
  },
  {
    id: "ledgers",
    num: "03",
    path: "/ledgers",
    kicker: "Three ledgers. One appetite.",
    title: "Three Ledgers, One Lakefront",
    dek: "Not one hidden plan. Three checkbooks. One idea of what the shore is for.",
    readMins: 7,
    image: "/images/marina.jpg",
    imageAlt: "Overcast Great Lakes marina, docks packed with boats under a grey sky.",
    imageCredit: "Great Lakes marina, winter light. Editorial illustration.",
    body: [
      {
        kind: "p",
        text: "People who smell a conspiracy on the Sheboygan lakefront are looking for the wrong animal. There is no single secret plan in a drawer at City Hall. There are **three ledgers**, posted in public, voted on in different years, paid with different money, each with a clean story attached.",
      },
      {
        kind: "p",
        text: "Stack them and the story changes.",
      },
      { kind: "h2", text: "Ledger one: TID 21" },
      {
        kind: "p",
        text: "Tax Incremental District 21 is the apartment machine. It exists to make Malibu pencil — the $40 million, 210-unit project on the old ironworks lot — and it is also the bucket that has been used to talk about marina-district design. A TID is not a slush fund in the cartoon sense. It is more precise than that: the city freezes the tax base on a map, the new buildings raise the value, and the increment pays for the stuff the city agreed to pay for. Housing. Site work. The public pieces a developer will not eat.",
      },
      {
        kind: "p",
        text: "Once you open a TID on the lakefront, every subsequent amenity has a gravitational pull toward that map. That is not corruption. That is how the statute is built.",
      },
      { kind: "h2", text: "Ledger two: the wastewater fund plus FEMA" },
      {
        kind: "p",
        text: "The interceptor project is a utility job. FEMA Hazard Mitigation Grant: $7.81 million federal. Wisconsin Emergency Management: $1.14 million. City wastewater cash: about $2.96 million. Total now: $11.91 million. Beside it, in the same 2026 budget season, a $28 million Southside Interceptor replacement backed by $31.7 million in state Clean Water Fund money, and a $12 million Lakeshore Interceptor line pulled forward. The wastewater fund jumped 78% in a year.",
      },
      {
        kind: "p",
        text: "This is the ledger that gets to say \"we are protecting a 1930 trunk sewer that carries half the city.\" That sentence is true. It is also the ledger that asked FEMA to pay for a bigger parking lot at High Avenue and was told **no**.",
      },
      {
        kind: "pull",
        text: "FEMA itself split the interceptor: the parking lot sits in the ineligible bucket — a federal reviewer saying in writing that the lot is not required hazard mitigation.",
      },
      {
        kind: "p",
        text: "That split is the closest thing this series has to a smoking gun, and it is not even hidden. Ineligible costs total $1.82 million in local money. Inside that number: repaving and enlarging the High Avenue lot. A federal agency looked at the same cross-section the city did, agreed to pay for armor stone and manhole lids, and declined to pay for the parking. You can read that as a technical distinction. You can also read it as a stranger in Washington noticing the play.",
      },
      { kind: "h2", text: "Ledger three: the marina vision" },
      {
        kind: "p",
        text: "Harbor Centre Marina has its own master plan. Press reporting in October 2024 put the lakefront-and-marina vision at more than **$77 million** — new docks, more activity space at Deland Park, a rebuilt administration building, reconfigured parking. The marina itself dates to 1993. The city hired SmithGroup for a conceptual plan, announced an $11–13 million revitalization window in 2023, and has since moved pieces forward a vote at a time. Phase one is funded. The rest of the $77 million is a rendering until it isn't.",
      },
      {
        kind: "p",
        text: "A marina rebuild is not a sewer. It is not an apartment TID. It is a third appetite: visitor infrastructure, slips, the postcard. It just happens to sit on the same lake, in the same decade, in front of the same Public Works Committee.",
      },
      { kind: "h2", text: "One appetite" },
      {
        kind: "p",
        text: "Three ledgers. Three clean stories. One idea of the shore:",
      },
      {
        kind: "ul",
        items: [
          "Protect the pipe — and while you're in the water, build a road.",
          "Clean the brownfield — and while you're in the dirt, end the launch.",
          "Fix the docks — and while you're in the basin, redraw the park.",
        ],
      },
      {
        kind: "p",
        text: "Each project is defensible in isolation. That is why isolation is the city's favorite frame. No single press release has to say \"we are converting 1.14 miles of informal shore, a kite launch, and a working marina into a visitor product,\" because no single ordinance does all three. The Public Works Committee just happens to see all of them.",
      },
      {
        kind: "opine",
        text: "Opinion, labeled. Follow the ineligible line. When a federal mitigation grant will pay for boulders and will not pay for the parking lot, the parking lot is the tell. The rest of the lakefront is the same tell at larger scale.",
      },
      {
        kind: "p",
        text: "If you want a different shore, you do not need a conspiracy to fight. You need to show up where the ledgers get voted — and you need to put the three packets on the same table, which the city will not do for you.",
      },
    ],
  },
  {
    id: "numbers",
    num: "04",
    path: "/numbers",
    kicker: "1.14 miles of wild shore, gone",
    title: "By the Numbers",
    dek: "Three zones. One five-year window. The arithmetic of a shoreline that will not look like this again.",
    readMins: 5,
    image: "/images/revetment.jpg",
    imageAlt: "Stone revetment of large grey boulders along a Great Lakes shore, crushed-stone path on the crest.",
    imageCredit: "Armor stone and crest path. Editorial illustration of the cross-section the packet describes.",
    body: [
      {
        kind: "p",
        text: "**1.14 miles** of informal southside shore becomes rock and a road. That is 6,000 feet of revetment, from the wastewater treatment plant up to High Avenue. The sewer being protected is longer still: about 9,300 feet of shoreline interceptor, 21 manholes elevated and armored, groins pulled out. The grant clock runs to February 14, 2028.",
      },
      {
        kind: "p",
        text: "Kite Beach keeps the sand and loses the lot. Harbor Centre Marina reconfigures docks, the admin building, and parking. Three zones, 2023 to 2028, one Public Works Committee.",
      },
      { kind: "h2", text: "The southside conversion" },
      {
        kind: "ul",
        items: [
          "**6,000 feet** of lakeshore armored — plant to High Avenue.",
          "**9,300 feet** of shoreline sanitary sewer protected.",
          "**21** manholes elevated and armored.",
          "**12-foot** crushed-stone access road, 12 inches thick, crest at elevation 588.",
          "**4 feet** of 1-to-2-ton armor stone.",
          "**$11,909,080.04** current project cost, up from $9.18 million in 2023.",
          "**$7,809,600** FEMA. **$1,140,198** state. **~$2.96 million** city wastewater cash.",
          "**$1.82 million** ineligible — including the High Avenue parking lot FEMA would not cover.",
          "**February 14, 2028** completion required. Bidding this fall.",
        ],
      },
      { kind: "h2", text: "The rest of the pipe" },
      {
        kind: "ul",
        items: [
          "**$28 million** new Southside Interceptor in the 2026 budget.",
          "**$31.7 million** state Clean Water Fund backing.",
          "**$12 million** Lakeshore Interceptor pulled forward.",
          "**78%** one-year jump in the wastewater fund budget.",
          "**$67.50** per household per year in sewer rates the city said it avoided in 2021 by using federal cash instead of borrowing.",
        ],
      },
      { kind: "h2", text: "The launch and the marina" },
      {
        kind: "ul",
        items: [
          "**210** apartments in two buildings (developer figure; some city paper says 215).",
          "**$40 million** Malibu development, paid in part through **TID 21**.",
          "**May 2025** groundbreaking. About **three years** to build.",
          "**131** outdoor stalls and **205** indoor spaces — for the buildings, not the kite vans.",
          "**$77 million** marina-and-lakefront vision. Early phase funded; the rest is still a picture.",
        ],
      },
      {
        kind: "pull",
        text: "Three zones, 2023–2028, one committee. No single press release adds them up.",
      },
      {
        kind: "p",
        text: "What you lose, in one column: the feral beach walk, the groins and the sand they held, the unofficial launch, the version of the marina that was just a place to tie a boat. What you get, in the other: a protected interceptor, a winter-proof path, 210 new homes on a cleaned brownfield, new docks. Both columns are real. The failure is pretending they are separate stories.",
      },
      {
        kind: "opine",
        text: "Opinion, labeled. Count the miles, not the press releases. 1.14 miles is not a rounding error. It is the south side.",
      },
      {
        kind: "p",
        text: "The July 27, 2026 Public Works packet is the primary source for the road. Read it before the bids go out. If you have a document we don't — an easement, a site plan, a marked-up cross-section — send it. This desk runs on paper, not vibes.",
      },
    ],
  },
];

export function getStory(id: StoryId): Story {
  const story = stories.find((s) => s.id === id);
  if (!story) throw new Error(`Unknown story: ${id}`);
  return story;
}

export function neighbors(id: StoryId): { prev?: Story; next?: Story } {
  const i = stories.findIndex((s) => s.id === id);
  return {
    prev: i > 0 ? stories[i - 1] : undefined,
    next: i < stories.length - 1 ? stories[i + 1] : undefined,
  };
}

export const zones = [
  {
    id: "marina" as const,
    story: "ledgers" as StoryId,
    label: "Harbor Centre Marina",
    detail: "$77M vision. Docks, admin, parking. Phase one funded.",
  },
  {
    id: "kite" as const,
    story: "kite" as StoryId,
    label: "Kite Beach / Malibu",
    detail: "210 apartments on the rigging lot. Sand stays public. Launch does not.",
  },
  {
    id: "king" as const,
    story: "kite" as StoryId,
    label: "King Park",
    detail: "Last sand on the south side. Busier the day the revetment is done.",
  },
  {
    id: "high" as const,
    story: "southside" as StoryId,
    label: "High Avenue lot",
    detail: "Enlarged parking FEMA called ineligible. Four-way stop already in.",
  },
  {
    id: "road" as const,
    story: "southside" as StoryId,
    label: "Revetment + 12-ft road",
    detail: "1.14 miles. Plant to High Avenue. Boulders, crest, access path.",
  },
  {
    id: "plant" as const,
    story: "southside" as StoryId,
    label: "Wastewater plant",
    detail: "South end. 1930 interceptor still arrives here.",
  },
];
