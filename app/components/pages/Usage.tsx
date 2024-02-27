import Image from "next/image";

export default async function Usage() {
  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, technologies and services I use to build and deploy my
          projects.
        </p>
      </div>  

      <Image 
        src="https://res.cloudinary.com/dwrrey9e3/image/upload/v1706313939/o4xhgjhckxohvvmab5ho.png" 
        alt="White Usage" 
        width={1200} 
        height={630} 
        quality={100}
        placeholder="blur"
        blurDataURL="https://res.cloudinary.com/dwrrey9e3/image/upload/v1706313939/o4xhgjhckxohvvmab5ho.png"
        priority
        className="hidden dark:block" />
      <Image src="https://res.cloudinary.com/dwrrey9e3/image/upload/v1706313939/a0ee7iqz7devxyvyivk6.png" 
        alt="Dark Usage" 
        width={1200} 
        height={630} 
        className="block dark:hidden"
        quality={100}
        placeholder="blur"
        blurDataURL="https://res.cloudinary.com/dwrrey9e3/image/upload/v1706313939/a0ee7iqz7devxyvyivk6.png"
        priority />
    </section>
  );
}
