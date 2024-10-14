import BetterCourses from "@/components/pages/cursos/InitialCourses";
import NoticeCourses from "@/components/pages/cursos/NoticeCourses";
import pbClient from "@/lib/pocketbase";
import Link from "next/link";

export default async function CursosPage() {
  const courses = await pbClient.getCourses();

  return (
    <section
      id="cursosPage"
      className="relative flex-grow bg-white overflow-hidden min-h-screen flex flex-col"
    >
      <div className="relative container mx-auto flex flex-col items-center justify-center px-6">
        <NoticeCourses />

        <BetterCourses courses={courses} />

        <div className="coantainer w-full flex flex-col gap-5 my-10 justify-center p-8 bg-[#1B283F] rounded-lg h-auto text-white">
          <span className="font-semibold  text-2xl">
            ¡Oferta por tiempo limitado: 15% de descuento y acceso a clases
            exclusivas!
          </span>
          <span className="font-extralight w-[90%]">
            Aprende investigación científica de la mano de expertos, con
            contenido en vivo y grabado. ¡Aprovecha esta oportunidad antes de
            que se acabe!
          </span>
          <Link
            className="bg-primary rounded-lg px-4 py-2 self-start font-medium"
            href="/register"
          >
            Unirme a Investiga
          </Link>
        </div>
      </div>

      <div className=" mt-auto w-screen min-mt-5 p-8 bg-[#FFEC8A] h-auto text-black">
        <div className="container flex flex-col gap-5 justify-center items-center">
          <span className="font-semibold text-2xl text-center">
            Encuentra tu curso ideal con nuestras recomendaciones personalizadas
          </span>

          <Link
            className="rounded-lg px-4 py-2 bg-transparent border-2 border-black font-medium"
            href="/register"
          >
            Regístrate Gratis
          </Link>
        </div>
      </div>
    </section>
  );
}