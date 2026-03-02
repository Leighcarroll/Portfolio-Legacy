// FILE 1: src/App.jsx
// Copy this entire file

import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Palette, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [showTechnical, setShowTechnical] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [enlargedImage, setEnlargedImage] = useState(null);

  const sassCode = `// _var-media-queries.scss
// Media screen breakpoints used in mixins
$media: (
  xxs: 0.0125rem,
  xs: 21.875rem,
  sm: 36rem,
  md: 48rem,
  lg: 60rem,
  xl: 64rem,
  xxl: 75rem,
);

// _var-theme.scss
// Root font size for rem calculations
$root-font-size: 16px;
$font: var(--system-ui);
$line-height: 1.5;

// Colors linked to design system
$primary: var(--vilkas-design-theme-color-primary);
$secondary: var(--vilkas-design-theme-color-secondary);
$accent: var(--vilkas-design-theme-color-accent);
$black: var(--vilkas-design-theme-color-black);
$white: var(--vilkas-design-theme-color-white);

// Spacing & sizing
$button-padding: 0.5rem 1.25rem;
$border-radius: 3px;
$transition: 300ms ease-in-out;`;

  const jsSnippet = `// Sticky header implementation
const initStickyHeader = () => {
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
    
    lastScroll = currentScroll;
  });
};

// Back to top button
document.querySelector('.back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});`;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Full Screen */}
      <div className="relative h-[750px] bg-gradient-to-br from-[#59a1a4] via-[#1e324b] to-[#1e324b]">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img 
            src="https://i.imgur.com/zsJAF3W.jpg"
            alt="Portfolio showcase"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#59a1a4]/15 via-[#1e324b]/15 to-[#1e324b]/15"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl z-10">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                Webshop Redesign • 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Modernizing Legacy E-commerce Sites
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Bringing responsive design and modern functionality to a 2010 platform
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.hafengeburtstag24.de/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-slate-900 transition-colors"
              >
                <ExternalLink size={20} />
                View Shop
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
          <ChevronDown size={32} />
        </div>
      </div>

      {/* Before & After Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Before & After
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transforming a non-responsive 2010 platform into a modern, mobile-friendly shopping experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 items-center">
            {/* Before */}
            <div className="relative">
              <div className="absolute -top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm z-10">
                BEFORE
              </div>
              <div className="rounded-xl overflow-hidden border-4 border-slate-300 shadow-lg cursor-pointer" onClick={() => setEnlargedImage('https://i.imgur.com/mqskxHX.jpg')}>
                <img 
                  src="https://i.imgur.com/mqskxHX.jpg"
                  alt="Before redesign"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* After */}
            <div className="relative">
              <div className="absolute -top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm z-10">
                AFTER
              </div>
              <div className="rounded-xl overflow-hidden border-4 border-blue-500 shadow-2xl cursor-pointer" onClick={() => setEnlargedImage('https://i.imgur.com/t34FRLw.jpg')}>
                <img 
                  src="https://i.imgur.com/t34FRLw.jpg"
                  alt="After redesign"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-[#59a1a4] to-[#1e324b] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">2010</div>
              <div className="text-sm md:text-base text-blue-100">Platform Year</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">7</div>
              <div className="text-sm md:text-base text-blue-100">Breakpoints</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
              <div className="text-sm md:text-base text-blue-100">Mobile Responsive</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">Custom</div>
              <div className="text-sm md:text-base text-blue-100">JavaScript Features</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Details - Collapsible */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Technical Details
            </h2>
            <p className="text-lg text-slate-600">
              Dive into the Sass architecture and technical challenges
            </p>
          </div>
          
          <button
            onClick={() => setShowTechnical(!showTechnical)}
            className="w-full flex items-center justify-between p-6 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors mb-6"
          >
            <div className="flex items-center gap-3">
              <Code2 size={24} className="text-blue-600" />
              <span className="text-xl font-bold text-slate-900">
                Technical Details & Process
              </span>
            </div>
            {showTechnical ? (
              <ChevronUp size={24} className="text-slate-600" />
            ) : (
              <ChevronDown size={24} className="text-slate-600" />
            )}
          </button>

          {showTechnical && (
            <div className="space-y-6">
              {/* Navigation Tabs */}
              <div className="bg-white rounded-2xl shadow-lg">
                <div className="border-b border-slate-200">
                  <div className="flex overflow-x-auto">
                    {[
                      { id: 'overview', label: 'Overview', icon: Code2 },
                      { id: 'sass', label: 'Sass System', icon: Palette },
                      { id: 'challenges', label: 'Technical Challenges', icon: Wrench }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <tab.icon size={18} />
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">Project Overview</h2>
                        <p className="text-slate-700 leading-relaxed">
                          My work as a web designer at an older ecommerce company involved redesigning shops on a platform built in 2010. Most of these shops are not responsive on mobile devices. I redesign these sites by integrating and extending carefully maintained Sass architecture, adding custom HTML, and adding JavaScript for custom functionality—all while maintaining compatibility with the existing system.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 rounded-xl p-6">
                          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Code2 size={20} className="text-blue-600" />
                            Tech Stack
                          </h3>
                          <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>HTML5 with semantic markup and accessibility standards</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>Sass/SCSS with BEM methodology and modular architecture</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>Custom CSS Grid and Flexbox for responsive layouts</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>Vanilla JavaScript (ES6+) for custom interactions</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-6">
                          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Wrench size={20} className="text-purple-600" />
                            Key Contributions
                          </h3>
                          <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start gap-2">
                              <span className="text-purple-600 mt-1">•</span>
                              <span>Optimized existing styling by overriding it with responsive Sass</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-purple-600 mt-1">•</span>
                              <span>Write custom JavaScript to add custom functions to site</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-purple-600 mt-1">•</span>
                              <span>Enhanced mobile responsiveness across all pages</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-purple-600 mt-1">•</span>
                              <span>Use adapted legacy markup to integrate modern styling</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'sass' && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">Sass Architecture</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          Worked within an established Sass system to implement custom styling and functionality. This required a deep understanding of the existing architecture, writing new components that integrated seamlessly with the design system, and using an adapted legacy code cartridge to meet modern requirements.
                        </p>
                      </div>

                      <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-slate-400 text-sm font-mono">partials/abstracts/variables/</span>
                          <span className="text-xs text-slate-500">Sass/SCSS</span>
                        </div>
                        <pre className="text-sm">
                          <code className="text-green-400 font-mono">{sassCode}</code>
                        </pre>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-50 rounded-xl p-5">
                          <h4 className="font-bold text-slate-900 mb-2">File Structure</h4>
                          <pre className="text-sm text-slate-700 font-mono">
{`scss/
└── partials/
    ├── abstracts/
    │   ├── variables/
    │   │   ├── _var-media-queries.scss
    │   │   └── _var-theme.scss
    │   └── mixins/
    │       └── _mix-media-queries.scss
    ├── base/
    ├── checkout/
    ├── components/
    ├── content-elements/
    ├── custom-elements/
    ├── pages/
    ├── product-list/
    ├── product-page/
    └── theme-layout/
StyleExtension.scss`}
                          </pre>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-5">
                          <h4 className="font-bold text-slate-900 mb-3">My Contributions</h4>
                          <ul className="space-y-2 text-slate-700 text-sm">
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600 mt-0.5">✓</span>
                              <span>Added custom components within existing Sass structure</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600 mt-0.5">✓</span>
                              <span>Wrote JavaScript for custom interactions and animations</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600 mt-0.5">✓</span>
                              <span>Maintained consistency with existing branding and design systems</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-5">
                        <p className="text-slate-700">
                          <strong className="text-blue-900">Working with Existing Systems:</strong> This project required diving into an established Sass architecture and Vilkas design system. Rather than rebuilding from scratch, I learned to work within existing constraints, add new functionality through custom partials and JavaScript, and bridge legacy code with modern styling approaches.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'challenges' && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">Technical Challenges</h2>
                        <p className="text-slate-700 leading-relaxed">
                          Working with legacy systems requires creative problem-solving and a deep understanding of both modern best practices and older architectural patterns.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="border border-slate-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-slate-900 mb-2">Challenge: Legacy Backend Constraints</h3>
                          <p className="text-slate-700 mb-3">
                            The existing system used inline styles and table-based layouts from 2010, making it difficult to apply modern CSS without breaking functionality.
                          </p>
                          <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-4">
                            <p className="text-sm font-medium text-green-900 mb-1">Solution</p>
                            <p className="text-sm text-green-800">
                              Created a CSS reset strategy with highly specific selectors to override legacy styles without modifying backend templates. Used CSS custom properties to inject modern styling into old markup patterns.
                            </p>
                          </div>
                        </div>

                        <div className="border border-slate-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-slate-900 mb-2">Challenge: No Build Tool Access</h3>
                          <p className="text-slate-700 mb-3">
                            The production environment didn't support modern build tools, requiring manual Sass compilation and careful file management.
                          </p>
                          <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-4">
                            <p className="text-sm font-medium text-green-900 mb-1">Solution</p>
                            <p className="text-sm text-green-800">
                              Set up local compilation workflow with npm scripts and created thorough documentation for the deployment process. Implemented a modular Sass structure that compiled to a single minified CSS file for production.
                            </p>
                          </div>
                        </div>

                        <div className="border border-slate-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-slate-900 mb-2">Challenge: Custom Functionality Requests</h3>
                          <p className="text-slate-700 mb-3">
                            Clients frequently requested custom features that weren't built into the platform, such as sticky navigation, adapted product sliders, and enhanced user interface elements.
                          </p>
                          <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-4">
                            <p className="text-sm font-medium text-green-900 mb-1">Solution</p>
                            <p className="text-sm text-green-800">
                              Wrote vanilla JavaScript to add client-specific functionality including sticky headers, back-to-top buttons, and adapted image/product sliders integrated with JSON data. Combined CSS animations with JavaScript triggers for smooth, performant interactions.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-slate-400 text-sm font-mono">scripts/custom-features.js</span>
                          <span className="text-xs text-slate-500">JavaScript</span>
                        </div>
                        <pre className="text-sm">
                          <code className="text-yellow-400 font-mono">{jsSnippet}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Visual Showcase Grid */}
      <div className="bg-slate-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Visual Showcase
            </h2>
            <p className="text-lg text-slate-600">
              Responsive layouts, custom interactions, and modern design
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="group">
              <div className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://i.imgur.com/Aqqnt77.jpg"
                    alt="Mobile Homepage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 mb-1">Mobile Homepage</h3>
                  <p className="text-sm text-slate-600">Fully responsive layout</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://i.imgur.com/J3Rsv43.jpg"
                    alt="Product Detail Page"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 mb-1">Product Detail Page</h3>
                  <p className="text-sm text-slate-600">Modern card layouts</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://i.imgur.com/EUrbxFu.jpg"
                    alt="Checkout Flow"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 mb-1">Checkout Flow</h3>
                  <p className="text-sm text-slate-600">Accessible form design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to see more?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Check out the complete source code and explore other projects
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://github.com/Leighcarroll" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors text-lg"
            >
              <Github size={24} />
              View GitHub Profile
            </a>
            <a 
              href="#next-project"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-slate-900 transition-colors text-lg"
            >
              Next Project
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute -top-4 -right-4 bg-white text-slate-900 rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-100 transition-colors z-10"
            >
              ✕
            </button>
            <img 
              src={enlargedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;