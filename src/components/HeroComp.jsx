// components/Hero.js
import Link from "next/link";

const HeroComp = ({ image, title, tagline, breadcrumbs }) => {
  return (
    <div className="relative h-64 md:h-80 lg:h-96">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="relative z-10 flex items-center justify-start h-full py-6 px-7 md:px-0 text-white bg-teal-600 bg-opacity-50">
        <div className="max-w-5xl w-full  mx-auto">
          <nav className="mb-4">
            <ol className="flex space-x-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  <Link href={crumb.href} legacyBehavior>
                    <a className="hover:underline">{crumb.label}</a>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="mt-2 text-lg">{tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
