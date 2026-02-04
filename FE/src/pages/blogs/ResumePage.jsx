import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResumePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-5xl font-alike font-bold text-[#161a5a] mb-4">
            How to Build a Winning Resume: Stand Out From the Crowd
          </h1>
          <div className="flex items-center justify-between text-gray-600 font-raleway">
            <div>
              <p className="text-sm">By <span className="font-semibold">Career Expert</span></p>
              <p className="text-sm">Published: January 20, 2026</p>
            </div>
            <span className="text-sm">Medium • 10 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full h-96 bg-gradient-to-br from-[#161a5a] to-[#8b0000] flex items-center justify-center text-9xl rounded-xl mb-12">
          📄
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none font-raleway text-gray-800">
          
          <section className="mb-8">
            <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">Introduction</h2>
            <p className="mb-4">
              Your resume is your first impression—a crucial marketing document that opens the door to interviews and career opportunities. With recruiters spending an average of 6-7 seconds reviewing each resume, every word must count. This comprehensive guide reveals the secrets to crafting a resume that not only catches the eye but also convinces hiring managers that you're the perfect candidate for the job.
            </p>
            <p>
              Whether you're a recent graduate, career changer, or seasoned professional, these proven strategies will help you create a winning resume that gets results.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">1. Start With a Strong Professional Summary or Objective</h2>
            <p className="mb-4">
              Your professional summary is a brief 2-3 line overview of who you are professionally and what value you bring. This is your chance to make an immediate impact before the recruiter reads further.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <p><strong>Weak Example:</strong> "Motivated professional looking for a challenging position in marketing."</p>
              <p className="mt-2"><strong>Strong Example:</strong> "Results-driven Marketing Manager with 7+ years of experience driving 40%+ growth in digital campaigns. Proven expertise in SEO, content strategy, and team leadership seeking to leverage data-driven insights at a forward-thinking organization."</p>
            </div>
            <p>
              Customize your summary for each job application, incorporating keywords from the job description to pass through Applicant Tracking Systems (ATS).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">2. Highlight Achievements, Not Just Responsibilities</h2>
            <p className="mb-4">
              The most common resume mistake is listing job duties instead of accomplishments. Hiring managers want to know what you achieved, not what your job was supposed to be.
            </p>
            <p className="mb-4">
              Transform your experience using action verbs and quantifiable results:
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-4">
              <p><strong>❌ Weak:</strong> "Responsible for managing social media accounts."</p>
              <p className="mt-2"><strong>✓ Strong:</strong> "Increased Instagram followers by 156% and boosted engagement rate from 2.3% to 8.7% through strategic content creation and community management, resulting in $250K additional revenue."</p>
            </div>
            <p>
              Every bullet point should demonstrate impact. Use metrics like percentages, dollar amounts, time saved, or efficiency gains.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">3. Use Power Words and Action Verbs</h2>
            <p className="mb-4">
              Start each bullet point with a strong action verb. This not only makes your resume more dynamic but also helps with ATS optimization.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Leadership Verbs:</p>
                <ul className="text-sm space-y-1">
                  <li>• Directed</li>
                  <li>• Spearheaded</li>
                  <li>• Orchestrated</li>
                  <li>• Championed</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Achievement Verbs:</p>
                <ul className="text-sm space-y-1">
                  <li>• Accelerated</li>
                  <li>• Maximized</li>
                  <li>• Transformed</li>
                  <li>• Optimized</li>
                </ul>
              </div>
            </div>
            <p>
              Avoid overused words like "responsible for," "worked on," or "helped with." Be specific and impactful.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">4. Tailor Your Resume for Each Job Application</h2>
            <p className="mb-4">
              Generic resumes get generic responses. Take time to customize your resume for each position by:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Reading the job description carefully and identifying key skills and qualifications</li>
              <li>Mirroring the language and terminology used in the job posting</li>
              <li>Reordering your bullet points to highlight most relevant experience first</li>
              <li>Emphasizing skills that match the job requirements</li>
              <li>Adjusting your professional summary to address the specific role</li>
            </ul>
            <p>
              This approach increases your chances of passing ATS filters and catching a recruiter's attention. Spend 10-15 minutes customizing for each application—it's worth the effort.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">5. Optimize for Applicant Tracking Systems (ATS)</h2>
            <p className="mb-4">
              Many companies use ATS software to screen resumes before a human ever sees them. Here's how to ensure your resume passes the ATS test:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Use standard formatting:</strong> Avoid graphics, tables, text boxes, and headers/footers</li>
              <li><strong>Use simple fonts:</strong> Stick to Arial, Calibri, or Times New Roman</li>
              <li><strong>Include relevant keywords:</strong> Use terminology from the job description</li>
              <li><strong>Use standard section headers:</strong> "Experience," "Education," "Skills," etc.</li>
              <li><strong>Save as PDF or DOCX:</strong> Follow the application instructions exactly</li>
              <li><strong>Avoid columns and graphics:</strong> Use simple bullet points instead</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">6. Structure Your Experience Effectively</h2>
            <p className="mb-4">
              Present your work experience in reverse chronological order (most recent first). For each position, include:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <p><strong>Job Title</strong> | Company Name | Location | Month Year – Month Year</p>
              <p className="mt-4">3-5 bullet points highlighting key achievements and responsibilities</p>
            </div>
            <p>
              If you have employment gaps, address them briefly or focus on what you were doing during that time (education, volunteer work, freelancing, etc.).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">7. Showcase Your Skills Strategically</h2>
            <p className="mb-4">
              Create a dedicated skills section that aligns with the job requirements. Prioritize:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Technical skills:</strong> Software, programming languages, tools specific to your field</li>
              <li><strong>Industry-specific skills:</strong> Knowledge and certifications relevant to the role</li>
              <li><strong>Soft skills:</strong> Leadership, communication, problem-solving abilities</li>
              <li><strong>Languages:</strong> Any additional languages you speak fluently</li>
            </ul>
            <p>
              Organize skills by proficiency level or category. If applying for a tech role, list programming languages; if sales, highlight negotiation and closing abilities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">8. Education and Certifications</h2>
            <p className="mb-4">
              Include your educational background in reverse chronological order. For each entry, provide:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Degree earned and field of study</li>
              <li>University/Institution name and location</li>
              <li>Graduation date (month and year)</li>
              <li>GPA (if 3.5 or higher and recent graduate)</li>
              <li>Relevant coursework, honors, or achievements</li>
            </ul>
            <p>
              Include relevant certifications, licenses, and professional development courses that demonstrate your commitment to continuous learning and advancement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">9. Keep Formatting Clean and Professional</h2>
            <p className="mb-4">
              Your resume's appearance matters. Follow these formatting guidelines:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Length:</strong> 1 page for entry-level, 1-2 pages for experienced professionals</li>
              <li><strong>Margins:</strong> 0.5-1 inch on all sides</li>
              <li><strong>Font size:</strong> 10-12 point for body text, 14-16 point for headings</li>
              <li><strong>Line spacing:</strong> 1-1.15 for readability</li>
              <li><strong>Color:</strong> Use 1-2 accent colors sparingly, mostly black text on white background</li>
              <li><strong>Consistency:</strong> Use the same formatting throughout</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">10. Proofread and Polish</h2>
            <p className="mb-4">
              A single typo or grammatical error can eliminate your candidacy. Before submitting:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Read your resume out loud to catch awkward phrasing</li>
              <li>Use spell-check and grammar tools</li>
              <li>Have a friend or mentor review it</li>
              <li>Check all dates and numbers for accuracy</li>
              <li>Ensure consistency in tense and formatting</li>
              <li>Verify email address and phone number are current</li>
            </ul>
            <p>
              A polished resume shows attention to detail and professionalism—qualities every employer values.
            </p>
          </section>

          <section className="mb-8 bg-gradient-to-r from-[#161a5a] to-[#8b0000] text-white p-8 rounded-xl">
            <h2 className="text-3xl font-alike font-bold mb-4">Conclusion</h2>
            <p className="mb-4">
              Building a winning resume is about balancing professionalism with personality, achievements with clarity, and optimization with authenticity. Your resume should tell the story of your professional journey while compelling hiring managers to learn more about you.
            </p>
            <p>
              Remember: Your resume is a living document. Update it regularly with your accomplishments, and maintain multiple versions tailored to different industry sectors or roles. With these strategies in place, you'll create a resume that not only passes through ATS systems but also resonates with hiring managers and opens doors to exciting career opportunities.
            </p>
            <p className="mt-6 font-semibold">
              It's time to let your achievements shine! 🌟
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-300">
            <h3 className="text-2xl font-alike font-bold text-[#161a5a] mb-4">Related Resources</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="/blog" className="text-[#8b0000] hover:underline">Top 10 Interview Tips for 2026</a></li>
              <li><a href="/blog" className="text-[#8b0000] hover:underline">Salary Negotiation Tactics</a></li>
              <li><a href="/blog" className="text-[#8b0000] hover:underline">Career Transitions Guide</a></li>
            </ul>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8">
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 bg-[#161a5a] text-white font-raleway rounded-lg hover:bg-[#0d0f3a] transition-all"
          >
            ← Back to All Blogs
          </button>
        </div>
      </article>
    </div>
  );
};

export default ResumePage;
