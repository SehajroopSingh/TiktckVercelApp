import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ContentLab | Create and test educational media content",
  description: "A simple web-based tool for preparing educational content for social sharing with user control.",
};

export default function Home() {
  return (
    <article className="max-w-3xl mx-auto space-y-12">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Create and test educational media content
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 font-medium">
          A simple web-based tool for preparing educational content for social sharing with user control.
        </p>
      </div>

      <div className="prose prose-lg prose-gray">
        <p className="text-gray-600 leading-relaxed text-lg">
          ContentLab helps users create and test educational media content from ideas, articles, and source material, 
          then prepare that content for sharing through supported social platforms. 
          Content is managed with user control throughout the workflow.
        </p>
      </div>

      <div className="pt-10 flex flex-wrap gap-4">
        <button disabled className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors opacity-50 cursor-not-allowed">
          Sign Up (Coming Soon)
        </button>
        <button disabled className="px-8 py-4 border border-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors opacity-50 cursor-not-allowed">
          Contact Support
        </button>
      </div>
    </article>
  );
}
