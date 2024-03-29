import { features } from "@/constants";
import { FaLightbulb } from "react-icons/fa";

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Quick Notes <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Features</span>  📜</h2>
            <p className="text-xl text-gray-600">Discover the rich array of features in Quick Notes for seamless, efficient note-taking and organization.</p>
          </div>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {features.map((feature, inx) => (
              <div key={inx} className="relative flex flex-col items-center p-6 bg-white rounded shadow-lg border border-[#ccc]">
                <feature.logo className="w-16 h-16 p-1 -mt-1 mb-2  rounded-full" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
