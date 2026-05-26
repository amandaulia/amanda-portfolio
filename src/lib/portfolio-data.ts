// @ts-nocheck
export type CaseStudy = any;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "elysium",
    number: "01",
    kind: "hero",
    company: "Elysium Mentalcare",
    title: "Developing Comprehensive Mental Health Directory",
    hook: "Independently build a mental health directory at 
      <a href="https://mentalhealthid.lovable.app" target="_blank" rel="noreferrer" className="ulink text-ink">mentalhealthid.lovable.app</a> 
      that 10 million people access from MVP to full launched website.",
    role: "Founder & Product Builder",
    period: "2019 — present",
    geo: "Indonesia",
    category: "Social Impact",
    tags: ["Social Impact", "Full-Stack", "AI"],
    metrics: [
      { value: "10M", label: "website visits" },
      { value: "2K", label: "organic shares" },
      { value: "25", label: "partner organizations" },
    ],
    timeline: [
      {
        year: "2019",
        title: "Mental Wellness Movie Club",
        body: "Founded a community before there was a product with a team of 7. 2,500 participants gathered around pop culture media to discuss about mental health awareness, education, and access.",
      },
      {
        year: "2020",
        title: "
                <a href="https://mentalhealthid.carrd.co" target="_blank" rel="noreferrer" className="ulink text-ink">mentalhealthid.carrd.co</a>",
        body: "Launched a one-page site during the pandemic. Organic traffic and unsolicited shares confirmed that there is a real demand for a mental health directory people could navigate themselves.",
      },
      {
        year: "2024",
        title: "User research, post-MBA",
        body: "Team members left after a hiatus so an independent user research was conducted. Key insight found people still need a comprehensive directory and no one has served it in a way that is easy to navigate.",
      },
      {
        year: "2025",
        title: "      
          <a href="https://mentalhealthid.lovable.app" target="_blank" rel="noreferrer" className="ulink text-ink">mentalhealthid.lovable.app</a>
          ",
        body: "Rebuilt from scratch. Designed and implemented the full Supabase schema. Structured searchable directory across 5 entity types (institutions, practitioners, organizations, peer counseling, support groups) with contact, location, session mode, services, pricing, specialization, insurance, and profession type.",
      },
      {
        year: "2026",
        title: "AI data pipeline",
        body: "Built an ingestion pipeline so a link, file, or screenshot can be dropped and Claude/Codex extracts, categorizes, deduplicates, and structures the data before final reviews and auto-inserts into Supabase. Marketing materials built with Claude Design + Figma.",
      },
    ],
    problem:
      "Indonesia has a mental health access problem that does not look like a software problem until you sit with it. Existing resources were fragmented, paywalled, or organized by what providers wanted to advertise rather than what users were trying to decide.",
    solution:
      "A single, searchable directory that is built, designed, schema'd, and edited by one person. A website that organizes the question the way the user actually asks it, with an AI pipeline behind it that lets a one-person operation keep ten million people's resource list fresh.",
    placeholders: [
      {
        caption: "Live directory on mentalhealthid.lovable.app",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Live%20App.png",
      },
      {
        caption: "The first MVP in 2020 published through Carrd",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/MVP%20Carrd.png",
      },
      {
        caption: "View of advanced filtering on the web",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Advanced%20Filtering.png",
      },
      {
        caption: "View of the detail page with comprehensive information",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Detail%20Page.png",
      },
    ],
  },
  {
    slug: "ruangguru",
    number: "02",
    kind: "hero",
    company: "Ruangguru",
    title: "Designing Gamification That Sparks Learning Motivation",
    hook: "Turning the virtual pet to a gamification feature that actually encourages and converts users to learn.",
    role: "Associate Product Manager",
    period: "2021 — 2022",
    geo: "Jakarta, Thailand & Vietnam",
    category: "Consumer",
    tags: ["Consumer", "Edtech", "Game Design"],
    metrics: [
      { value: "+25%", label: "conversion-to-learn" },
      { value: "+28%", label: "time-in-app" },
      { value: "+11%", label: "retention" },
    ],
    problem:
      "The virtual pet was a hit on engagement charts but failed to encourage users to do learning activities. Users logged in to feed and open their pet, then bounced. The mission system asked everyone for 15 minutes a day of study regardless of why they opened the app, and pet evolution unfolded over weeks that felt too long to the point that progress felt invisible.",
    process: [
      { t: "Data Analysis", d: "Funneled engagement vs. learning events across 1.2M weekly active learners." },
      { t: "User Interviews", d: "20 sessions across exam-prep, casual, and parent-driven cohorts." },
      {
        t: "Interaction & Game Design",
        d: "Co-designed mission and feedback loops with game and interaction designers.",
      },
      { t: "Concept Testing", d: "Three competing prototypes tested with target cohorts." },
      { t: "Usability Testing", d: "Iterated mission cadence, evolution tempo, and reward language." },
    ],
    team: "14 engineers, 1 product designer, 1 interaction designer, 1 animator, 2 game designers, 2 researchers, 1 data analyst.",
    solution:
      "We rebuilt the mission system around what the learner was actually trying to do that week (exam prep, catch-up, or maintenance) so missions align with study plan. Pet health and evolution became immediate and visible by showing micro interaction for every learning activities and level progression for every mission set completed, replacing the weeks-long evolution.",
    placeholders: [
      {
        caption: "Before and after of the Pet Hub",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Pet%20Hub.png",
      },
      {
        caption: "Before and after of the Mission Hub",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Mission%20Hub.png",
      },
      {
        caption: "View of the page to explore levels and see progression",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Jelajah%20Level.png",
      },
    ],
  },
  {
    slug: "knowtex",
    number: "03",
    kind: "hero",
    company: "Knowtex",
    title: "Automating Clinical Workflow with Efficiency & Accuracy",
    hook: "Creating an end-to-end solution that does more so clinicians can focus on things that matter.",
    role: "Product Manager",
    period: "2024",
    geo: "New York, USA (Remote)",
    category: "AI / Healthtech",
    tags: ["Growth", "Healthtech", "AI"],
    metrics: [
      { value: "+30%", label: "customer base" },
      { value: "⅘", label: "NPS" },
      { value: "2+ hrs", label: "saved per clinician/day" },
    ],
    problem:
      "Every new clinician required a founder or salesperson on-site to teach them how to adopt the tool. There was no self-serve path, and the one onboarding flow that existed every specialization from oncology and orthopedic practices the same. The product also focused more on promoting structured notes generation than highlighting the pain point of the whole end-to-end workflow.",
    process: [
      { t: "Journey Mapping", d: "Mapped the clinician onboarding journey end-to-end across different specialties." },
      { t: "In-Platform Guidance", d: "Designed an embedded guided experience replacing the on-site walkthrough." },
      {
        t: "Specialty-Aware Flows",
        d: "Built specialized notes format and coding for oncology, orthopedic, and other specialities.",
      },
      {
        t: "EHR Integration",
        d: "Integrated notes, coding, and billing into existin EHR/EMR for a seamless organizational workflow",
      },
    ],
    solution:
      "Self-serve onboarding that moves along with the pace of the clinicians, paired with specialty-aware customization. Combined with EHR integration and coding/billing automation, the product crossed from 'requires a human to install' to 'installs itself.'",
    placeholders: [
      {
        caption: "Specialty-specific notes and coding customization",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Customization.png",
      },
      {
        caption: "Onboarding flow design",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Onboarding%20Flow.png",
      },
      {
        caption: "Integrated with the organization's EHR/EMR",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/EHR%20Integration.png",
      },
    ],
  },
  {
    slug: "ibm",
    number: "04",
    kind: "hero",
    company: "IBM",
    title: "Streamlining Stock Research with Generative AI",
    hook: "Compressing 3 hours a day on research to minutes.",
    role: "MBA Product Manager",
    period: "Aug — Dec 2023",
    geo: "New York, USA",
    category: "Enterprise · AI",
    tags: ["Enterprise", "AI/ML", "GenAI", "FinTech"],
    metrics: [
      { value: "3h/day", label: "saved per stock analyst on research" },
      { value: "2M", label: "students and underrepresented communities reached" },
      { value: "1st", label: "watsonx example for IBM SkillsBuild" },
    ],
    problem:
      "Stock analysts tasked with explaining anomalies in stock performance had to manually set thresholds, sift through news articles one by one, and summarize findings by hand, a process that was both time-consuming and prone to error. Investment bankers downstream were dependent on this slow, manual pipeline to make decisions.",
    process: [
      {
        t: "User Research",
        d: "Conducted user research with stock analysts and investment bankers to map the pain points across their workflow.",
      },
      {
        t: "Journey Mapping",
        d: "Identified four bottlenecks: anomaly detection, news article sourcing, summarization, and follow-up Q&A.",
      },
      {
        t: "Proof of Concept",
        d: "Built the PoC in three stages using IBM watsonx tools: anomaly detection, article extraction , GenAI summarization, and RAG-based Q&A using IBM's Granite model.",
      },
      {
        t: "Optimization",
        d: "Solved context window limitations through LangChain-based chunking after testing spaCy and manual approaches.",
      },
      { t: "Documentation", d: "Produced a watsonx Playbook for IBM SkillsBuild." },
    ],
    solution:
      "An end-to-end stock anomaly analysis workflow replacing the manual process: AutoAI detects anomalies from historical stock data, Jupyter Notebook automatically sources and extracts relevant news articles, Prompt Lab summarizes events causing anomalies, and RAG-powered Q&A enables analysts to drill deeper into any finding.",
    placeholders: [
      {
        caption: "Stock research workflow mapping",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Workflow.png",
      },
      {
        caption: "Long-text chunking using LangChain",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Text%20Chunking.png",
      },
      {
        caption: "Training the model to output summarization",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Training.png",
      },
      {
        caption: "Result of the overall workflow in action",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Result.png",
      },
    ],
  },
  {
    slug: "flip",
    number: "05",
    kind: "hero",
    company: "Flip",
    title: "Accelerating Financial Account Verification for Business Clients",
    hook: "Fast-tracking KYC and KYB from a week-long manual process to under 24 hours.",
    role: "Junior Product Manager",
    period: "Feb — Jul 2021",
    geo: "Jakarta, ID (Remote)",
    category: "Fintech",
    tags: ["Fintech", "B2B", "Operations", "Growth"],
    metrics: [
      { value: "85%", label: "faster verification and onboarding" },
      { value: "+18%", label: "active user conversion" },
      { value: "<24 hrs", label: "from sign-up to feature-ready" },
    ],
    problem:
      "Flip for Business, a bulk disbursement product used for payroll, refunds, and bulk transactions, required new clients to go through entirely manual KYC and KYB verification. Identity documents and business agreements were reviewed by hand, and contracts were physically signed. The process took close to a week before a client could actually use any features, creating significant drop-off between sign-up and activation.",
    process: [
      {
        t: "Journey Mapping",
        d: "Mapped the full onboarding and verification journey to identify where manual handoffs caused delays.",
      },
      {
        t: "Solution & Tools Exploration",
        d: "Collaborated with engineer to evaluate multiple KYC, KYB, and digital signature vendors and analyze the feasibility to implement.",
      },
      {
        t: "Cross-Functional Implementation",
        d: "Worked with sales, business, legal, and finance to finalize the document verification flow and digitalize the contract signing process.",
      },
    ],
    solution:
      "A digitalized KYC/KYB verification and contract signing flow that eliminated the manual document processing bottleneck, replacing a week-long back-and-forth with an automated verification pipeline and digital signature. Clients go from sign-up to feature-ready in under 24 hours.",
    placeholders: [
      {
        caption: "Streamlined registration requirements",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Registration%20Homepage.png",
      },
      {
        caption: "New KYC/KYB automated final step",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Agreement%20Signing.png",
      },
    ],
  },
  {
    slug: "returnkey",
    number: "06",
    kind: "hero",
    company: "ReturnKey",
    title: "Product Metadata Enrichment with a Single Scan",
    hook: "Manual sorting through 3 stations gives us little to learn and work with. Now one scan of the product lets us know enough to make smart commercial decision.",
    role: "Product Manager",
    period: "Aug 2024 — Sep 2025",
    geo: "Jakarta, ID & Nashville, USA (Remote)",
    category: "Enterprise · AI/ML",
    tags: ["Enterprise", "AI/ML", "Operations"],
    metrics: [
      { value: "−40%", label: "processing cost" },
      { value: "+10%", label: "net margin" },
    ],
    problem:
      "Returned and overstock inventory moved through two or three manual sorting stations before it could be re-listed. Even through the steps, we still know very little about the product to make meaningful commercial decision. Moreover, the process is expensive and especially tricky with items that are unlabeled, have obscure barcodes, near-identical variants, and mismatched information between manifest and real items.",
    process: [
      {
        t: "Enrichment Pipeline",
        d: "Co-designed lexical + semantic analysis, web scrapers, and LLM enrichment with CTO and VP of Data.",
      },
      {
        t: "Scan & Print Workflow",
        d: "Single-scan triggers a whole enrichment system that lets processor only need to label the product with the barcode the machine printed.",
      },
      {
        t: "Pricing Experimentation",
        d: "Built a system for markdowns, switchback tests, and A/B pricing experiments of the products based on the information we learn.",
      },
    ],
    solution:
      "One station, one operator: scan an item, the LLM recognizes and categorizes it, the workflow logs and prints. Pricing experiments run continuously underneath so the floor never stops learning what the inventory is worth.",
    placeholders: [
      {
        caption: "Single scan enrichment, categorization, and pricing",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Enrichment.png",
      },
      {
        caption: "Color price discount checker",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Color%20Price.png",
      },
    ],
  },
  {
    slug: "undp",
    number: "07",
    kind: "hero",
    company: "UNDP",
    title: "Digitalizing M&E Tools for Indigenous Peoples & Local Communities Projects",
    hook: "Optimizing monitoring and evaluation for 174 projects and 36 countries from Excel sheet to offline-enabled digital tool.",
    role: "Junior Digital Solutions & M&E Officer",
    period: "Feb 2025 — Jul 2025",
    geo: "Remote",
    category: "Social Impact",
    tags: ["Social Impact", "Digitalization"],
    metrics: [
      { value: "174", label: "innovative projects" },
      { value: "16", label: "participating countries" },
      { value: "4", label: "continents with improved reporting accuracy" },
    ],
    problem:
      "Country offices, National Catalytic Organizations, and grantees across Asia, Africa, Latin America, and the Caribbean were tracking project performance using Excel sheets with no built-in data validation. No standardized input meant every data collection cycle required back-and-forth with national coordinators to manually clean and validate entries, a process that took days and introduced errors.",
    process: [
      {
        t: "Problem Analysis",
        d: "Analyzed the existing Excel-based workflow to identify where validation broke down.",
      },
      {
        t: "Form & Tools Building",
        d: "Designed a replacement: a simple form with advanced data validation logic, built to work offline for field access.",
      },
      {
        t: "Documentation & Training",
        d: "Wrote detailed step-by-step documentation and ran remote training sessions for country office staff across all activation countries.",
      },
    ],
    solution:
      "A field-accessible, offline-capable digital form with built-in data validation that standardized inputs at the point of entry, eliminating the need for post-collection correction cycles. Adopted by national coordinators, NGOs, and grantees without requiring technical expertise.",
    placeholders: [
      {
        caption: "New online/offline form with advanced feature and logic",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/New%20Jotform.png",
      },
      {
        caption: "Old M&E tool using Excel sheet",
        img: "https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Old%20PMT.png",
      },
    ],
  },
];

export const CS_BY_SLUG: Record<string, CaseStudy> = Object.fromEntries(CASE_STUDIES.map((c) => [c.slug, c]));

export const SKILLS: Record<string, string[]> = {
  Data: ["SQL", "Python", "Supabase", "Metabase", "Looker Studio", "QuickSight"],
  Design: ["Figma", "Whimsical", "Miro", "Userflow", "Visily"],
  "AI & Automation": [
    "Claude Cowork & Code",
    "Lovable",
    "ChatGPT",
    "Gemini",
    "OpenClaw",
    "Qwen Studio",
    "n8n",
    "NotebookLM",
    "IBM watsonx",
  ],
};

export const EXPERIENCE: any[] = [
  {
    company: "Wego",
    role: "Product Manager",
    period: "Sep 2025 — present",
    location: "Remote",
    note: "Led hotel discovery including search ranking, autocomplete logic, pricing insight, AI-generated content, A/B testing across key markets.",
    tag: "Travel",
    accent: "teal",
    current: true,
  },
  {
    company: "ReturnKey",
    role: "Product Manager",
    period: "Aug 2024 — Sep 2025",
    location: "Remote",
    note: "Spearheaded recommerce co-pilot from ERP/WMS to POS, most notably built enrichment system (LLM + scrapers + semantic) and pricing-experiment platform.",
    tag: "Enterprise · AI",
  },
  {
    company: "United Nations Development Programme",
    role: "Junior Digital Solutions & M&E Officer",
    period: "Feb — Jul 2025",
    location: "Remote",
    note: "Researched fintech and climate-tech tools and mobile payments to support performance-based payments for ecosystem services.",
    tag: "Social Impact · Project-Based",
  },
  {
    company: "Mercor Intelligence",
    role: "Business Intelligence Analyst",
    period: "Aug 2024 — Aug 2025",
    location: "Remote",
    note: "Subject-matter expert on enhancement projects for leading AI labs, improving LLM performance.",
    tag: "AI · Freelance",
    accent: "ochre",
  },
  {
    company: "Knowtex",
    role: "Product Manager",
    period: "Aug 2023 — May 2024",
    location: "Remote",
    note: "Supported product-led growth, personalization, EHR integration, and clinical-specialty Generative AI, increasing 30% customer base and saving 2+ hrs/day.",
    tag: "Healthtech · AI",
  },
  {
    company: "Endless Frontier Labs",
    role: "MBA Venture Associate",
    period: "Aug 2023 — May 2024",
    location: "New York, USA (Hybrid)",
    note: "Assessed startups for the EFL cohort of 78 and worked with founders across Digital, Deep, and Life Sciences on 8-week SMART goals.",
    tag: "Venture Capital · Startup Incubator",
    accent: "ochre",
  },
  {
    company: "IBM",
    role: "MBA Product Manager",
    period: "Aug — Dec 2023",
    location: "New York, USA",
    note: "Harnessed GenAI + RAG using IBM watsonx to build proof of concept and produced watsonx Playbook for IBM SkillsBuild that trains 2M+ students.",
    tag: "Enterprise · AI · Project-Based",
  },
  {
    company: "United Nations Development Programme",
    role: "Project Management Support",
    period: "Feb 2024 — Jul 2024",
    location: "New York, USA (Hybrid)",
    note: "Assisted the development of ML smart-tag system for nature-footprint projects across 14 countries and digitalized M&E tools for 174 projects across 36 countries.",
    tag: "Social Impact · Internship",
  },
  {
    company: "Salesforce",
    role: "MBA Product Manager",
    period: "May 2023 — Aug 2023",
    location: "New York, USA",
    note: "Proposed GenAI capability for Marketing Cloud to do multidimensional consumer data extraction, potentially increasing 10% ARPU per month.",
    tag: "Enterprise · Project-Based",
  },
  {
    company: "Tester Work",
    role: "Quality Assurance Tester",
    period: "Jul 2021 — Aug 2023",
    location: "Remote",
    note: "Performed full test cases and exploratory testing for software and hardware products across industries.",
    tag: "Quality Assurance · Freelance",
    accent: "ochre",
  },
  {
    company: "Ruangguru",
    role: "Associate Product Manager",
    period: "Jul 2021 — Mar 2023",
    location: "Remote",
    note: "Led core gamification development, simulated experiences design, personalized learning algorithms, and localization in Thailand and Vietnam with 14 engineers + design + research, increasing +25% conversion-to-learn, +28% time-in-app, and +11% retention.",
    tag: "Edtech · Consumer",
  },
  {
    company: "Flip",
    role: "Junior Product Manager",
    period: "Feb 2021 — Jul 2021",
    location: "Remote",
    note: "Streamlined B2B onboarding for 300+ client, launched international transfers and payment aggregator, converting active users by 18% and increasing revenue by 20%.",
    tag: "Fintech · B2B",
  },
  {
    company: "Elysium Mentalcare",
    role: "Founder",
    period: "Aug 2019 — present",
    location: "Indonesia",
    note: "Built mental health communities through pop culture and launched an online directory connecting people with mental health professionals and services, garnering 10M+ visits, 2K organic shares, and 25 partners.",
    tag: "Social Impact · Non-Profit",
    accent: "ochre",
  },
  {
    company: "Studio Hikari",
    role: "Product & Strategy Manager",
    period: "Jan 2018 — Oct 2022",
    location: "Bandung, ID",
    note: "Managed 30 stakeholders, 6K+ transactions, and 20 different products and services around reusable disposable cameras + film development.",
    tag: "Consumer",
  },
];

export const PUBLICATIONS: any[] = [
  {
    source: "NYU Stern · Student Profile",
    title: "Amanda Hanggoro, Tech MBA 2024",
    excerpt:
      "Interview with NYU Stern on the Tech MBA experience. Why a focused program, cohort culture, favorite classes, and advice for prospective international students.",
    href: "https://www.stern.nyu.edu/programs-admissions/tech-mba/community/student-profiles/amanda-hanggoro",
    date: "2023",
  },
  {
    source: "NYU Stern · Tech MBA Blog",
    title: "Navigating the Tech MBA Experience as an International Student",
    excerpt:
      "Six-image essay on Tech MBA experience reflection. Building support systems, accessing NYU communities, and working with US-based companies via experiential learning at IBM, EFL, and Tech Solutions.",
    href: "https://wp.nyu.edu/stern_tech_mba/2023/12/18/navigating-the-tech-mba-experience-as-an-international-student/",
    date: "2023",
  },
  {
    source: "LinkedIn · IBM watsonx",
    title: "GenAI Summarization & RAG on IBM watsonx",
    excerpt:
      "Reflection on the IBM watsonx PoC and the SkillsBuild Playbook produced from it that is used to train 2M+ students and underrepresented communities.",
    href: "https://www.linkedin.com/posts/ugcPost-7153019063525412864-ipk-",
    date: "2024",
  },
];

export const MENTORING: any[] = [
  {
    title: "Product Management Mentor",
    org: "Internnet Indonesia",
    period: "Feb 2022 — Feb 2026",
    body: "Facilitated 8 mentees preparing for startup careers in product management through a series of mentoring sessions about the industry, the role, and the recruitment process.",
  },
  {
    title: "Product Management Mentor",
    org: "RISTEK FILKOM Universitas Indonesia",
    period: "Jul — Aug 2022",
    body: "Facilitated 2 mentees preparing for startup careers in product management through mentoring sessions about the industry, the role, and its recruitment process.",
  },
  {
    title: "Social Impact Project Mentor",
    org: "Leaders Cafe",
    period: "Oct — Nov 2021",
    body: "Facilitated 3 mentees in aligning Café Class learnings with their personal objectives, sharing peer insights, and applying them to self-development routines and a problem-solving group project.",
  },
  {
    title: "Ganesha Academy: Pioneer (GAP) Mentor",
    org: "Kabinet KM ITB · Health Cluster",
    period: "Jan — Feb 2021",
    body: "Selected mental-health mentor on the strength of Mental Wellness Movie Club. Worked with 6 GAP participants to create a 3-day film festival on ITB academic life and was the speaker for the mental-health session.",
  },
];

export const COMMUNITY: any[] = [
  {
    title: "MBA Venture Associate",
    org: "Endless Frontier Labs · NYU Stern",
    period: "Aug 2023 — May 2024",
    body: "Worked alongside Digital, Deep, and Life Sciences founders in the EFL cohort of 78, helping articulate and hit 8-week SMART goals with entrepreneurship, investment, and science mentors.",
  },
  {
    title: "Founder",
    org: "Elysium Mentalcare · Mental Wellness Movie Club",
    period: "Aug 2019 — present",
    body: "Built and run a non-profit project connecting people to mental health resources in Indonesia. Partnered with 25 professionals and organizations; gathered 2,500+ participants in screenings and discussions.",
  },
  {
    title: "Delegate",
    org: "World Bank Group Youth Summit",
    period: "2024",
    body: "Selected delegate discussing digital transformation in international development, producing a digital solutions proposal to revitalize climate-smart agriculture in Sub-Saharan Africa.",
  },
  {
    title: "Student Club Leadership",
    org: "NYU Stern",
    period: "2023 — 2024",
    body: "AVP, Stern Technology Association · AVP, Gaming & eSports Management Society · Member: Asian Business Society, Stern Women in Business, Stern Football Club.",
  },
];

export const ACHIEVEMENTS: any[] = [
  { title: "Dean's List · Beta Gamma Sigma Honor", org: "NYU Stern Tech MBA", year: "2024" },
  {
    title: "Delegate · World Bank Group Youth Summit",
    org: "Digital transformation in international development",
    year: "2024",
  },
  { title: "CHIEF Award · Q4", org: "Best employee among 600+ Ruangguru candidates", year: "2021" },
  {
    title: "Top 25 Fellow · Paragon Innovation Fellowship",
    org: "Founded Mental Wellness Movie Club (SDG 3)",
    year: "2019",
  },
  {
    title: "Top 9 National Finalist · L'Oréal Brandstorm",
    org: "Innovation pitch using facial recognition + ML + QR",
    year: "2019",
  },
  {
    title: "Cum Laude · Bachelor of Science in Business Management with Finance Major",
    org: "Bandung Institute of Technology",
    year: "2020",
  },
];
