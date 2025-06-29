import { useRouter } from "next/router";

export default function WorkDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main className="bg-[#d8d1c5] text-black min-h-screen px-8 py-28 font-serif">
      <h1 className="text-6xl font-bold mb-12 text-center capitalize">
        Project {slug}
      </h1>
      <div className="max-w-4xl mx-auto text-xl leading-relaxed">
        <p>
          This is a detailed description page for project <strong>{slug}</strong>.
          You can add images, process, tools, challenges, and anything else here to showcase the project in depth.
        </p>
        <div className="mt-8">
          <img
            src={`/images/project${slug}.jpg`}
            alt={`Project ${slug}`}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
