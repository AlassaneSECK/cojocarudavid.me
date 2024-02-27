import FeaturedPosts from "../pages/FeaturedPosts";

type props = {
  title: string;
  description: string;
};

export default function NotFoundComponent({ title, description }: props) {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto md:px-16 px-6 flex flex-col justify-center items-center">
      <header className="max-w-4xl w-full flex flex-col items-center">
        <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight">
          {title} 
        </h1>
        <h2 className="font-incognito font-semibold tracking-tight sm:text-3xl text-1xl lg:leading-tight mb-8">
          It looks like you&apos;re lost.
        </h2>

        <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {description}
        </p>
      </header>

      <div className="max-w-4xl grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12">
        <FeaturedPosts />
      </div>
    </main>
  );
}
