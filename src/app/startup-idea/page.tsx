export default function StartupIdeaPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 bg-neutral-50/50">
      <div className="w-full max-w-4xl bg-white shadow-xl border border-neutral-100 rounded-3xl overflow-hidden mt-8 mb-8">
        <div className="h-2 w-full bg-gradient-to-r from-orange-500 to-red-500"></div>
        <div className="p-8 pb-0">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Submit Your Startup Idea</h1>
          <p className="text-neutral-500 mt-2">Take the first step towards building your venture. Pitch your idea to EDIC.</p>
        </div>
        <div className="w-full h-[800px] mt-4">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSf38NNIcUXq_hrthchbnW8WQE9ySu6glFtSuDhJbGB8_6ED9w/viewform?embedded=true" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            title="Startup Idea Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
