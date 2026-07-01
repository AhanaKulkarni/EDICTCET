export default function MembershipPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 bg-neutral-50/50">
      <div className="w-full max-w-4xl bg-white shadow-xl border border-neutral-100 rounded-3xl overflow-hidden mt-8 mb-8">
        <div className="h-2 w-full bg-gradient-to-r from-orange-500 to-red-500"></div>
        <div className="p-8 pb-0">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">EDIC Membership</h1>
          <p className="text-neutral-500 mt-2">Join the central operating system for entrepreneurship at TCET.</p>
        </div>
        <div className="w-full h-[800px] mt-4">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeTeZFplD_KtDrk2s3rNhsJzUYWBve70vP1O0LAsl-BynFGWw/viewform?embedded=true" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            title="EDIC Membership Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
