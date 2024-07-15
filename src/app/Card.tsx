import Image from "next/image";

const Card: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-4xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-64 w-full object-cover md:h-full md:w-48"
            src="data:image/jpeg;base64,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"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            <h2>What is the game?</h2>
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Galactic realms
          </a>
          <p className="mt-2 text-slate-500">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
