import { Section } from "./Section";

// Liste des chemins relatifs aux vidéos dans le dossier `public`
const videos = [
  {
    url: "autooccasion.webm",
    title: "AutoOccasion",
    date: "Oct 2024 - Dec 2024",
    description: "AutoOccasion is an online car dealership platform where customers can purchase vehicles, schedule test drives, and employees utilize a CRM to manage sales and customer interactions efficiently.",
    tags: ["Laravel", "Supabase", "php", "PostgreSQL", "Bootsrap5", "Javascript" ],
    website: "https://github.com/kvmelxv/AutoOccasion/tree/master",
  },
  {
    url: "/simbud.mp4",
    title: "SimBUD",
    date: "Jun 2024 - Jul 2024",
    description: "A component that allows filtering all available offers and displays them directly without page reloading can be described as a dynamic filtering interface.",
    tags: ["Wordpress", "TypeScript", "PostgreSQL"],
    website: "https://simbud.com/",
  },
  {
    url: "/filmfinder.mp4",
    title: "Film Finder",
    date: "Mar 2024 - May 2024",
    description: "FilmFinder is a web application where users can rate, comment on, and discover movies, while connecting with a community of fellow movie enthusiasts.",
    tags: ["React", "Firebase", "Javascript", "Express", "API REST", "NodeJs"],
    website: "https://filmsfinderapp.netlify.app/",
  },
  {
    url: "/juice.mp4",
    title: "Juice App",
    date: "Mar 2023 - Apr 2023",
    description: "A video ad for beverages that rotates between showcasing three different drinks can highlight each product in a visually appealing and dynamic way.",
    tags: ["Figma"],
    website: "#",
  },
];

export function BlurFadeDemo() {
  return (
    <Section>
      <p className="text-xl text-muted-foreground">Works</p>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-10">
        Showcase of My Recent Projects
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-4xl mx-auto">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="opacity: 1; filter: blur(0px); transform: translateY(-6px) translateZ(0px);"
          >
            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
              <a className="block cursor-pointer" href={video.website} target="_blank" rel="noopener noreferrer">
                <video
                  src={video.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
                ></video>
              </a>
              <div className="flex flex-col px-2">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight mt-1 text-base">{video.title}</h3>
                  <time className="font-sans text-xs">{video.date}</time>
                  <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                    <p>{video.description}</p>
                  </div>
                </div>
              </div>
              <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
                <div className="mt-2 flex flex-wrap gap-1">
                  {video.tags.map((tag, tagIdx) => (
                    <div
                      key={tagIdx}
                      className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center pt-2 px-2 pb-2">
                <div className="flex flex-row flex-wrap items-start gap-1">
                  <a target="_blank" href={video.website}>
                    <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe size-3"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Website
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
