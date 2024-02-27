"use client";
import { socialLinks } from "../../data/social";
import UnmountStudio from "./Unmount";

export default function Footer() {
  const sectionsLinks = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  const otherLinks = [
    {
      title: "RSS",
      href: "/rss.xml",
    },
    {
      title: "Sitemap",
      href: "/sitemap.xml",
    },
  ];

  return (
    <UnmountStudio>
      <footer className="border-t dark:border-zinc-800 z-[51] mt-28 border-zinc-100 relative">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16">
          <div className="flex flex-col items-start gap-x-2">
            <h3 className="text-xl font-semibold tracking-tight mb-4">
              Cojocaru David
            </h3>
            <div className="flex gap-x-14 text-gray-500 dark:text-gray-400">
                <div>
                  <h2 className="text-sm font-semibold text-primary-color mb-3 uppercase">Sections</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {sectionsLinks.map((value) => (
                      <li key={value.title}> 
                        <a
                          href={value.href}
                          className="flex items-center gap-x-2 hover:text-primary-color"
                        >
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-primary-color mb-3 uppercase">Social</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {socialLinks
                    .filter((item) => item.status === "social")
                    .map((value) => (
                      <li key={value.id}> 
                        <a
                          href={value.url}
                          className="flex items-center gap-x-2 hover:text-primary-color"
                        >
                          {value.icon && (
                            <value.icon
                              className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                              aria-hidden="true"
                            />
                          )}
                          {value.name && value.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-primary-color mb-3 uppercase">Other</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {otherLinks.map((value) => (
                      <li key={value.title}> 
                        <a
                          href={value.href}
                          className="flex items-center gap-x-2 hover:text-primary-color"
                        >
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
            <small className="text-zinc-500">
              Copyright &copy; Cojocaru David {new Date().getFullYear()} All rights
              Reserved
            </small>
            <small className="text-zinc-500">
              Built with Next.js and Sanity.io
            </small>
          </div>
        </div>
      </footer>
    </UnmountStudio>
  );
}
