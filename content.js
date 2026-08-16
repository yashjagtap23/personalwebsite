export const siteData = {
  title: "Yash Jagtap",
  nav: [
    { label: "Home", href: "" },
    { label: "About", href: "about-frommenu/" }
  ],
  footer: {
    headline: "I build products where strategy, code, and business impact meet.",
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "Home", href: "" },
          { label: "About", href: "about-frommenu/" },
          { label: "Resume", href: "assets/Yash-Jagtap-Resume.pdf" }
        ]
      },
      {
        title: "Connect",
        links: [
          { label: "LinkedIn", href: "https://www.linkedin.com/in/yashjagtap23/" },
          { label: "GitHub", href: "https://github.com/yashjagtap23" },
          { label: "Email", href: "mailto:yashjagtapcollege@gmail.com" }
        ]
      },
      {
        title: "Featured Work",
        links: [
          { label: "HackIllinois 2026", href: "untitledlyrics-fromhome/" },
          { label: "Nurish", href: "stitch-fromhome/" },
          { label: "HackIllinois 2025", href: "play-case-study/" }
        ]
      }
    ]
  },
  home: {
    title: "Hi, I’m Yash. I build products with code, data, and user insight.",
    projects: [
      {
        href: "untitledlyrics-fromhome/",
        title: "HackIllinois Event App - 2026",
        kicker: "Product Management, Product Design",
        variant: "landscape-overlay",
        image: "assets/generated/bg 1 tree .png",
        overlayImage: "assets/generated/group4-phone-overlay.png"
      },
      {
        href: "stitch-fromhome/",
        title: "Nurish - Nutrition Tracker",
        kicker: "Product Design, Software Engineering",
        variant: "landscape-overlay",
        image: "assets/generated/nurish-phones-bg-v1.png",
        overlayImage: "assets/generated/nurish-phones-overlay-framed-v9.png?v=20260812n",
        overlayStageClass: "phone-stage--wide"
      },
      {
        href: "play-case-study/",
        title: "HackIllinois Event App - 2025",
        kicker: "Product Management, Software Engineering",
        variant: "landscape-overlay",
        image: "assets/generated/play-card-bg-v1.png",
        overlayImage: "assets/generated/play-card-phones-overlay.png",
        overlayStageClass: "phone-stage--play"
      }
    ]
  },
  about: {
    summary:
      "Computer Science + Advertising at UIUC, product leadership at HackIllinois, and hands-on shipping across startup, enterprise, and growth teams.",
    stats: [
      {
        label: "Studying",
        value: "UIUC CS + Advertising"
      },
      {
        label: "Latest role",
        value: "Capital One PM Intern"
      },
      {
        label: "Now",
        value: "HackIllinois Co-Director"
      }
    ],
    title: "Yash's journey",
    lead: "I like working where product strategy, engineering depth, and business context overlap.",
    paragraphs: [
      "I’m a Computer Science + Advertising student at the University of Illinois Urbana-Champaign with a 3.93 GPA and a bias toward shipping. My path has moved across student products, startup MVPs, enterprise platforms, and growth systems, but the common thread is simple: find the user pain clearly, turn it into a plan, and execute fast.",
      "At HackIllinois, I helped take the mobile app from zero to one for 750+ attendees, coordinating design and engineering to ship authentication, deep links, maps, QR check-in, and event tools. At DapUp, I defined core product workflows for a NIL marketplace, iterated through 15+ interviews, and shipped wallet, analytics, and campaign dashboards in React and Firebase.",
      "I’ve also done deeply technical product work. At Rocket Mortgage, I automated event parsing and measurement systems that reduced ad waste and improved attribution accuracy. At Capital One, I owned strategy for an AI ETL workflow that saves roughly $80K and 400+ engineering hours a year across 20 teams. I’m most energized by roles where I can sit close to the user, the roadmap, and the implementation at the same time."
    ],
    journey: [
      {
        title: "Content to product",
        body: "Building Rebels Wrestling into a 7K-subscriber channel taught me audience growth, analytics, SEO, and how feedback loops shape better products."
      },
      {
        title: "Zero-to-one builder",
        body: "HackIllinois gave me an operating ground for end-to-end PM work: requirements, prioritization, launch planning, and on-the-ground execution for attendee products."
      },
      {
        title: "Startup + enterprise range",
        body: "From DapUp MVP decisions to Capital One AI workflow strategy, I’ve worked across very different environments without losing speed or ownership."
      },
      {
        title: "Leadership now",
        body: "As Co-Director of HackIllinois and former VP of Product Space UIUC, I like building systems, teaching product thinking, and unblocking teams so good ideas actually ship."
      }
    ],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yashjagtap23/" },
      { label: "GitHub", href: "https://github.com/yashjagtap23" },
      { label: "Email", href: "mailto:yashjagtapcollege@gmail.com" },
      { label: "Resume", href: "assets/Yash-Jagtap-Resume.pdf" }
    ]
  },
  cases: {
    untitled: {
      slug: "untitled",
      title: "HackIllinois Event App",
      backHref: "",
      titleFont: "tiempos-text",
      heroBackground: "assets/generated/untitled-space-bg-v2.png",
      heroOverlay: "rgba(17, 10, 38, 0.28)",
      heroScreenshot: "assets/generated/hackillinois-case-hero-v1.png",
      heroCrops: [
        { x: 188, y: 112, width: 288, height: 595 },
        { x: 496, y: 112, width: 288, height: 595 },
        { x: 802, y: 112, width: 288, height: 595 }
      ],
      toc: [
        { id: "overview", label: "TLDR;" },
        { id: "problem", label: "Problem" },
        { id: "research", label: "Research" },
        { id: "solution", label: "Solution" },
        { id: "learnings", label: "Learnings" }
      ],
      overview: {
        summary: "My team and I designed the HackIllinois 2026 event app for attendees to navigate the weekend, stay on top of events, and interact with the hackathon beyond just hacking. My contributions for this project include shaping the attendee experience, defining feature priorities, working closely with design and engineering, and helping build flows for check-in, event discovery, reminders, and gamification.",
        meta: [
          { term: "Role", value: "Mobile Lead" },
          { term: "Timeline", value: "06/2025 - 03/2026" },
          { term: "Team", value: ["HackIllinois Mobile", "HackIllinois Design", "HackIllinois API"] },
          { term: "Skills", value: ["Product strategy", "Interaction design", "iOS development"] }
        ]
      },
      sections: [
        {
          id: "problem",
          kicker: "The Problem",
          panel: true,
          heading: "Hackathons move fast - attendees are juggling schedules, locations, announcements, and side quests all weekend long.",
          paragraphs: ["How can we design an event companion that helps attendees know what is happening, where to go, and how to participate without feeling overwhelmed?"]
        },
        {
          id: "research",
          kicker: "Research",
          heading: "Key insights about the attendee experience",
          paragraphs: [],
          insights: [
            {
              image: "assets/generated/hackillinois-case-hero-v1.png",
              body: "Attendees needed one place to keep up with ceremonies, workshops, sponsor events, meals, and deadlines throughout the weekend."
            },
            {
              image: "assets/generated/untitled-space-hero-v2.png",
              body: "Because the app handled check-in, scanning, and points, it had to behave like event infrastructure rather than a nice extra."
            },
            {
              image: "assets/generated/untitled-space-bg-v2.png",
              body: "The strongest opportunity was reducing platform hopping by making schedule, event context, and participation live in one place."
            }
          ]
        },
        {
          id: "solution",
          kicker: "The Solution",
          heading: "Help attendees stay oriented throughout the weekend, while making the event feel more interactive and rewarding.",
          paragraphs: [],
          solutionSteps: [
            {
              title: "User opens the home screen and immediately sees what matters now",
              body: "An attendee arrives at Siebel and checks in through the app. From the home screen, they can quickly understand the current moment, the next event, and the parts of the weekend that need attention first.",
              video: "assets/videos/hackillinois-solution/homepage.mp4"
            },
            {
              title: "User checks the schedule to decide where to go next",
              body: "Throughout the weekend, they browse ceremonies, workshops, sponsor events, meals, and deadlines in one place. Instead of depending on scattered updates across channels, the schedule becomes the fastest way to stay in sync with the hackathon.",
              video: "assets/videos/hackillinois-solution/schedule.mp4"
            },
            {
              title: "User jumps into duels and side quests across the weekend",
              body: "The app goes beyond logistics by giving attendees lightweight ways to participate. Duels turn the event into something active and social instead of just a schedule to follow.",
              video: "assets/videos/hackillinois-solution/duels.mp4"
            },
            {
              title: "User redeems rewards in the item shop as they earn points",
              body: "As attendees scan into events and complete activities, the points system creates a visible loop. The item shop makes progress tangible and keeps the gamification layer tied to real event behavior.",
              video: "assets/videos/hackillinois-solution/itemshop.mp4"
            },
            {
              title: "User checks their profile to track progress and activity",
              body: "The profile gives attendees one place to see their standing, progress, and event participation. It helps the app feel like a connected system rather than a set of disconnected tools.",
              video: "assets/videos/hackillinois-solution/profile.mp4"
            }
          ]
        },
        {
          id: "learnings",
          kicker: "Learnings",
          heading: "Key Takeaways",
          paragraphs: [
            "After the event, I reviewed 51 attendee responses to understand which parts of the app held up in the real environment. The app averaged a 4.3/5 for ease of finding information and features, which validated that the core structure was working.",
            "The feedback also made the hierarchy of the product very clear. Schedule, QR Code Scanner, and Points Shop were the most frequently used features by a wide margin, while the biggest issues centered on QR discoverability, points-shop clarity, game-feature confusion, and unreliable notifications."
          ],
          takeaways: [
            {
              title: "The core product was schedule + scanning + points",
              body: "In the survey, Schedule appeared in 44 responses, QR Code Scanner in 36, and Points Shop in 29. Those features carried the event experience, so they deserved the highest level of polish and reliability."
            },
            {
              title: "Gamification works best when it stays legible",
              body: "Attendees liked earning points, but they also wanted clearer rules, cleaner redemption, faster QR access, and more reliable updates. The game layer worked best when it reinforced the event instead of adding ambiguity."
            }
          ]
        }
      ],
      related: { label: "Stitch: Video Creation", href: "stitch-fromhome/" }
    },
    stitch: {
      slug: "stitch",
      title: "Stitch",
      backHref: "",
      titleFont: "tiempos-fine",
      heroBackground: "https://framerusercontent.com/images/JRqRIol4n96IO0DEndrfVqGGaY.png?width=2912&height=1632",
      heroOverlay: "rgba(21, 34, 39, 0.56)",
      heroScreenshot: "assets/reference/ref-stitch-full.png",
      heroCrops: [
        { x: 188, y: 112, width: 288, height: 595 },
        { x: 496, y: 112, width: 288, height: 595 },
        { x: 802, y: 112, width: 288, height: 595 }
      ],
      toc: [
        { id: "overview", label: "TLDR;" },
        { id: "problem", label: "Problem" },
        { id: "research", label: "Research" },
        { id: "ideation", label: "Ideation" },
        { id: "solution", label: "Solution" },
        { id: "learnings", label: "Learnings" }
      ],
      overview: {
        summary: "My team and I designed Stitch, a mobile video editing tool for beginners who want to start vlogging. I helped shape the UX through UI iterations and prototyped the flow where the user opens a chapter, trims a video, and records themselves.",
        meta: [
          { term: "Role", value: "Product Designer" },
          { term: "Timeline", value: "08/2025 - 10/2025" },
          { term: "Team", value: "Piper Yu, Justin Kim, Maya Parthasarathy" },
          { term: "Skills", value: "User research, UIUX design, Prototyping" }
        ]
      },
      sections: [
        {
          id: "problem",
          kicker: "The Problem",
          heading: "Everyone has a story to tell — whether they share it publicly or keep it to themselves. But video editing is not easy.",
          paragraphs: [
            "How can we empower regular people to tell the stories of their life?"
          ],
          media: [
            { type: "video", src: "https://framerusercontent.com/assets/Q9aovHEExM52p9rqOv1SzxmPVw.mp4", span: "third", phone: true },
            { type: "video", src: "https://framerusercontent.com/assets/kF8paCmB0g7WC4FDRrEWz2311s.mp4", span: "third", phone: true },
            { type: "video", src: "https://framerusercontent.com/assets/8ohzMjIpcU09SMalhAgTEkL9d2A.mp4", span: "third", phone: true }
          ]
        },
        {
          id: "research",
          kicker: "Research",
          heading: "Current video creation tools and AI capabilities",
          paragraphs: [
            "We looked at what video creation tools exist today to assess strengths and opportunities. We also researched AI tools to see what was feasible to integrate into our solution.",
            "Though there are a lot of video creation tools, we found that they were focused on editing, not storytelling."
          ],
          quotes: [
            { title: "Beginner tools", body: "Accessible, but often rigid and template-driven." },
            { title: "AI tools", body: "Promising for summarization and rough assembly, but still hard to direct narratively." },
            { title: "Pro tools", body: "Powerful, yet intimidating for people who just want to tell a story." }
          ]
        },
        {
          id: "ideation",
          kicker: "Ideation",
          heading: "Coming up with different solutions",
          paragraphs: [
            "The pain points, competitor audit, and AI research became starting nodes for branching into many possible directions.",
            "We explored structured templates, an AI vlogging buddy, camera assistance, and script-led editing before converging on a more flexible flow."
          ],
          journey: [
            { title: "Fill-in-the-Slot", body: "Helpful for structure, but too rigid once a story changes direction." },
            { title: "AI Vlogging Buddy", body: "Interesting for confidence, but weaker than solving the broader authoring problem." },
            { title: "AI Camera Assistant", body: "Could reduce mistakes, but didn’t align with how creators naturally work." },
            { title: "Edit by script", body: "Conceptually elegant, but hard to map sentences cleanly to footage." }
          ]
        },
        {
          id: "solution",
          kicker: "The Solution",
          heading: "What if you could just dump your media into one place and AI stitches a video together for you? Introducing Stitch.",
          paragraphs: [
            "The product organizes raw media into a narrative structure while still giving the user approachable controls for trimming, reordering, and recording.",
            "Rather than requiring expertise with a timeline, Stitch tries to keep the experience grounded in story beats and chapter flow."
          ],
          solutions: [
            { title: "Gather clips", body: "Bring all footage into one place and let the story begin as a collection." },
            { title: "Shape chapters", body: "Navigate the vlog through lightweight structural edits." },
            { title: "Refine details", body: "Trim, record, and adjust without committing to a pro-grade timeline." }
          ],
          media: [
            { type: "image", src: "https://framerusercontent.com/images/nyM8R8oRE5y2gxxzlK3KPWHau8.png?width=2560&height=1793", span: "half" },
            { type: "image", src: "https://framerusercontent.com/images/I6St8SaHnFqxybOeX6IcdLHyaU.png?width=1200&height=1170", span: "half" },
            { type: "video", src: "https://framerusercontent.com/assets/EPI8L4YZ5ga4GilHgfxGGMD3L8.mp4", span: "third", phone: true },
            { type: "video", src: "https://framerusercontent.com/assets/mLA08fJ0B7kC2kx7rXiBbZXA6vc.mp4", span: "third", phone: true },
            { type: "video", src: "https://framerusercontent.com/assets/BPQWjicijZ5lLb9pZ3ja740kmkE.mp4", span: "third", phone: true }
          ]
        },
        {
          id: "learnings",
          kicker: "Learnings",
          heading: "Key Takeaways",
          paragraphs: [],
          takeaways: [
            {
              title: "Story beats matter more than tools",
              body: "We kept discovering that beginners were blocked by storytelling confidence before they were blocked by editing controls."
            },
            {
              title: "Use research to kill attractive ideas",
              body: "Several promising concepts fell away once we compared them against the reality of creator workflows."
            }
          ]
        }
      ],
      related: { label: "HackIllinois Event App", href: "untitledlyrics-fromhome/" }
    },
    play: {
      slug: "play",
      title: "Play",
      backHref: "",
      titleFont: "tiempos-fine",
      heroBackground: "https://framerusercontent.com/images/WJQjlNCRVOLbhXxlC74hA75DBw.png?width=2912&height=1632",
      heroOverlay: "rgba(30, 44, 48, 0.62)",
      heroScreenshot: "assets/reference/ref-play-full.png",
      heroCrops: [
        { x: 205, y: 127, width: 273, height: 564 },
        { x: 504, y: 127, width: 273, height: 564 },
        { x: 801, y: 127, width: 273, height: 564 }
      ],
      toc: [
        { id: "overview", label: "TLDR;" },
        { id: "research", label: "Research" },
        { id: "ideation", label: "Ideation" },
        { id: "testing", label: "Final Touches" },
        { id: "solution", label: "Solution" },
        { id: "learnings", label: "Learnings" }
      ],
      overview: {
        summary: "I designed Play, a social fitness app that connects remote workers through active hobbies. My contributions included designing the search, forum, and onboarding pages, spearheading research, and creating Play’s design system.",
        meta: [
          { term: "Role", value: "Product Designer" },
          { term: "Timeline", value: "October 2024 - December 2024" },
          { term: "Tools", value: "Figma, Slack" },
          { term: "Skills", value: "User research, Wireframes, Prototyping" }
        ]
      },
      sections: [
        {
          id: "research",
          kicker: "Research",
          heading: "Background",
          paragraphs: [
            "Since graduating college, many of my friends and I talk about how hard it is to make friends as an adult. Everyone’s moved to different cities across the U.S.",
            "A lot of my friends work remotely, so I wanted to understand whether remote work was a large factor in feelings of loneliness."
          ],
          media: [
            { type: "image", src: "https://framerusercontent.com/images/WJQjlNCRVOLbhXxlC74hA75DBw.png?width=2912&height=1632", span: "half" },
            { type: "image", src: "https://framerusercontent.com/images/YQgpKopKv0jk8ToQHX610sQ4sA.jpg?width=320&height=480", span: "half" }
          ]
        },
        {
          id: "research-users",
          kicker: "Research",
          heading: "Target users and user interviews",
          paragraphs: [
            "Since young adults aged 24 to 35 make up the majority of remote workers, we focused our research on that user segment.",
            "We launched a survey across four platforms to learn more about what contributed to loneliness and what people looked for when making friends as an adult.",
            "We found that 93.3% of respondents prioritized shared interests over other factors like gender, age, and even location."
          ],
          quotes: [
            { title: "Physical distance", body: "Respondents mentioned physical distance from others made them feel lonely." },
            { title: "Hard to meet new people", body: "Because of their lifestyle, respondents weren’t seeing new people frequently." },
            { title: "Difficulty scheduling", body: "53.3% of respondents said coordinating time to hang out was hard." }
          ]
        },
        {
          id: "ideation",
          kicker: "Ideation",
          heading: "How might we connect young remote workers to others that share similar interests?",
          paragraphs: [
            "We explored several directions: one-to-one matching, a B2B service for employers, and a broader hobby marketplace.",
            "Through interviews, we found that many users enjoyed physical activity, so we narrowed toward a focused fitness and hobby app."
          ],
          journey: [
            { title: "1:1 Matching", body: "Dating-app logic for friendship discovery based on shared interests." },
            { title: "B2B Service", body: "Encourage employees to socialize more through company-sponsored programming." },
            { title: "All-inclusive", body: "A broader app with many activity options and local event discovery." },
            { title: "Focused hobby app", body: "The clearest overlap between the need to socialize and real user passion." }
          ]
        },
        {
          id: "testing",
          kicker: "Final Touches",
          heading: "Testing with users and building a style guide",
          paragraphs: [
            "We tested early lo-fi wireframes with three students to understand their experience with the initial designs, especially the Search and Forum pages that I designed.",
            "I created a style guide to bring cohesion across the wireframes. Orange became the core accent because it feels cheerful and social, and Poppins helped reinforce a playful tone."
          ],
          styleChips: [
            { title: "Primary color", body: "#C75400 — used for buttons or links." },
            { title: "Darkest variation", body: "#331814 — primary text for headings, body, and labels." },
            { title: "Dark variation", body: "#735450 — secondary or supporting text." },
            { title: "Medium variation", body: "#A88A87 — form borders and softer framing." },
            { title: "Light variation", body: "#F2DCDA — decorative borders and dividers." },
            { title: "Lightest variation", body: "#FAF5F5 — alternate section background." }
          ]
        },
        {
          id: "solution",
          kicker: "The Solution",
          heading: "How Play works",
          paragraphs: [],
          solutions: [
            { title: "Find an activity", body: "Find events that fit into your lifestyle and meet new people through active hobbies near you." },
            { title: "Communicate with others", body: "Join an event group and reach out to people who will actually be there with you." },
            { title: "Post your activities", body: "Capture memories, invite new people, and explore what others are up to in your city." }
          ],
          media: [
            { type: "image", src: "https://framerusercontent.com/images/RlzrOekKtRFifo9Fz5rhaU0lVw.png?width=1792&height=864", span: "third" },
            { type: "image", src: "https://framerusercontent.com/images/yJaziSSBL4NTPuMO0BHpNiX1V4.png?width=1792&height=864", span: "third" },
            { type: "image", src: "https://framerusercontent.com/images/Y00WeSIwcTDd9bwJHB850JH1AtE.png?width=1792&height=864", span: "third" }
          ]
        },
        {
          id: "learnings",
          kicker: "Learnings",
          heading: "Key Takeaways",
          paragraphs: [],
          takeaways: [
            {
              title: "Design is rarely linear",
              body: "Even with the double diamond in mind, the real process was cyclical. We moved back and forth between research, design, and testing."
            },
            {
              title: "There’s always an opportunity to learn",
              body: "Working across cultural and communication differences widened the team’s understanding of how products are shaped."
            }
          ]
        }
      ]
    }
  }
};
