import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-primary hover:underline text-sm mb-6 sm:mb-8 inline-block">&larr; Back to Home</Link>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy — HealthLoop</h1>
          <p className="text-sm sm:text-base text-text-secondary mb-8 sm:mb-10">Last Updated: April 15, 2026</p>

          <div className="space-y-6 sm:space-y-8 text-foreground text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">1. Introduction</h2>
              <p>Welcome to HealthLoop. HealthLoop is a personal health tracking application that helps you monitor your water intake, sleep, steps, mood, calories, exercise, and weight. Your privacy is important to us, and this Privacy Policy explains how we collect, use, and protect your information.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">2. Information We Collect</h2>

              <h3 className="text-lg font-semibold mt-4 mb-2">2.1 Health Data You Provide</h3>
              <p className="mb-2">When you use HealthLoop, you may voluntarily log the following data:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Water intake (glasses per day)</li>
                <li>Sleep hours</li>
                <li>Step count</li>
                <li>Mood entries</li>
                <li>Calorie intake</li>
                <li>Exercise minutes</li>
                <li>Weight</li>
                <li>Personal health goals</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">2.2 Profile Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Display name</li>
                <li>Profile photo (optional, stored locally)</li>
              </ul>

              <h3 className="text-base sm:text-lg font-semibold mt-4 mb-2">2.3 AI-Powered Features</h3>
              <p>When you use the AI Assistant feature, your health data summaries may be sent to third-party AI services (Google Gemini, OpenAI) to generate personalized health suggestions and insights. No personally identifiable information (name, email, phone number) is sent to these services — only anonymized health metrics.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">3. How Your Data Is Stored</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All health data is stored locally on your device using an on-device database.</li>
                <li>HealthLoop does not have its own servers and does not upload your health data to any cloud storage.</li>
                <li>Your data remains entirely on your phone and is never shared with advertisers, analytics platforms, or third parties, except as described in Section 2.3.</li>
                <li>If you uninstall the App, all locally stored data will be permanently deleted.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">4. How We Use Your Data</h2>
              <p className="mb-2">We use your data solely to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Display your health tracking dashboard and history</li>
                <li>Calculate your Health Score and insights</li>
                <li>Generate trend graphs (weekly, monthly, yearly)</li>
                <li>Provide AI-powered health suggestions (when you use the AI Assistant)</li>
                <li>Track streaks and personal goals</li>
              </ul>
              <p className="mb-2">We do <strong>not</strong> use your data for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Advertising or marketing</li>
                <li>Selling to third parties</li>
                <li>User profiling or behavioral tracking</li>
                <li>Analytics or data mining</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">5. Third-Party Services</h2>
              <p className="mb-3">HealthLoop integrates with the following third-party AI services only when you use the AI Assistant feature:</p>

              <div className="overflow-x-auto mb-4">
                <table className="w-full border border-border rounded-lg text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left px-4 py-2 border-b border-border font-semibold">Service</th>
                      <th className="text-left px-4 py-2 border-b border-border font-semibold">Purpose</th>
                      <th className="text-left px-4 py-2 border-b border-border font-semibold">Data Sent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b border-border">Google Gemini API</td>
                      <td className="px-4 py-2 border-b border-border">AI health suggestions</td>
                      <td className="px-4 py-2 border-b border-border">Anonymized health summaries</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-border">OpenAI API</td>
                      <td className="px-4 py-2 border-b border-border">AI health suggestions</td>
                      <td className="px-4 py-2 border-b border-border">Anonymized health summaries</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-1">These services have their own privacy policies:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></li>
                <li>OpenAI: <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://openai.com/privacy</a></li>
              </ul>
              <p className="mt-2">No data is sent to these services unless you actively use the AI Assistant feature.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">6. Data Security</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All data is stored locally in an encrypted on-device database.</li>
                <li>API keys for AI services are stored securely and are not exposed in the application.</li>
                <li>The App does not require an internet connection for core functionality (tracking, insights, graphs). Internet is only needed for the AI Assistant feature.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">7. Children's Privacy</h2>
              <p>HealthLoop is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided data through the App, please contact us.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">8. Your Rights</h2>
              <p className="mb-2">Since all data is stored locally on your device, you have full control:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Access:</strong> View all your data anytime within the App.</li>
                <li><strong>Delete:</strong> Clear your data by uninstalling the App or clearing app data from your device settings.</li>
                <li><strong>Portability:</strong> Your data lives on your device and is under your control.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be reflected with an updated "Last Updated" date. Continued use of the App after changes constitutes acceptance of the revised policy.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">10. Offline Functionality</h2>
              <p>HealthLoop is designed to work fully offline. All health tracking, scoring, insights, and trend analysis features function without an internet connection. Your data never leaves your device unless you explicitly use the AI Assistant feature.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">11. Contact Us</h2>
              <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
              <ul className="list-none space-y-1">
                <li><strong>Email:</strong> jamshidjunaid763@gmail.com</li>
                <li><strong>Developer:</strong> Junaid Jamshid</li>
              </ul>
            </section>

            <div className="border-t border-border pt-6 text-center text-sm text-text-secondary">
              <p>© 2026 HealthLoop. All rights reserved.</p>
              <p>Made with 💜 for your health.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
