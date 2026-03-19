import React from 'react';

export default function ResumeBuilderPage() {
  return (
    <div className="w-full h-screen bg-black">
      {/* iframe to load the Resume Builder HTML application */}
      <iframe
        src="/resume-builder/resume-builder.html"
        title="Resume Builder"
        className="w-full h-full border-none"
        style={{ minHeight: '100vh' }}
      />
    </div>
  );
}
