import { sanityFetch } from "@/lib/sanity.client";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { BiEnvelope } from "react-icons/bi";
import { Slide } from "../animation/Slide";
import Usage from "../components/pages/Usage";
import { CustomPortableText } from "../components/shared/CustomPortableText";
import Social from "../components/shared/Social";

export const metadata: Metadata = {
  title: "Cojocaru David - About",
  metadataBase: new URL("https://cojocarudavid.me/about"),
  description:
    "About me, David Cojocaru, a passionate Full Stack Developer from Romania, showcase my dedication to web development and continuous learning. Dive into the innovative projects that reflect not just my expertise but also my commitment to growth and creating remarkable web solutions.",
  openGraph: {
    title: "Cojocaru David - About",
    url: "https://cojocarudavid.me/about",
    description:
      "About me, David Cojocaru, a passionate Full Stack Developer from Romania, showcase my dedication to web development and continuous learning. Dive into the innovative projects that reflect not just my expertise but also my commitment to growth and creating remarkable web solutions.",
    images:
      "https://res.cloudinary.com/dwrrey9e3/image/upload/v1706307105/ogimage.png",
  },
};

export default async function About() {
  const profile: ProfileType[] = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <Slide>
                  <h1 className="font-incognito font-semibold tracking-tight sm:text-4xl text-2xl lg:leading-tight basis-1/2 mb-8">
                    I&apos;m {data.fullName}. I live in {data.location}, and I
                    love building things for the web.
                  </h1>

                  <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                    <PortableText
                      value={data.fullBio}
                      components={CustomPortableText}
                    />
                  </div>
                </Slide>
              </div>

              <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <Slide delay={0.2}>
                  <div className="sticky top-10">
                    <Usage />

                    <div className="flex flex-col text-center">
                      <a
                        href={`mailto:${data.email}`}
                        className="flex items-center gap-x-2 hover:text-primary-color"
                      >
                        <BiEnvelope className="text-lg" />
                        {data.email}
                      </a>
                      <Social type="social" />
                    </div>
                  </div>
                </Slide>
              </aside>
            </section>
          </div>
        ))}
    </main>
  );
}
