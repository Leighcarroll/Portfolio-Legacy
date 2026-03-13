import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Palette, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [showTechnical, setShowTechnical] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (e) => {
    if (!isDragging) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleSliderStart = () => {
    setIsDragging(true);
  };

  const handleSliderEnd = () => {
    setIsDragging(false);
  };

  const sassCode = `// _var-media-queries.scss
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
$root-font-size: 16px;
$primary: var(--vilkas-design-theme-color-primary);
$border-radius: 3px;
$transition: 300ms ease-in-out;`;

  const jsSnippet = `// Sticky header
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    header.classList.add('sticky');
  }
});`;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-br from-[#59a1a4] via-[#1e324b] to-[#1e324b]">
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
                href="https://github.com/yourusername/project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
              >
                <Github size={20} />
                View Code
              </a>
              <a 
                href="https://www.hafengeburtstag24.de/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-slate-900 transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
          <ChevronDown size={32} />
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Implementing a SCSS template for custom shop design
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            As a web designer I create custom shop designs for ecommerce shops, often for shops that use antiquated legacy software. This requires that a lot of additional styling needs to be added to a shop to make it look good, not just a few lines of CSS. With the help of some friends in Finland, in 2024 I started using a SCSS template to style custom shops. The template adds a basic 'skin' update to the shop, and I can add custom SCSS and JavaScript to fully customize the shop. The code is modular and implements easily adaptable variables and mixins to efficiently create unique branding, and interface tweaks for each store, transforming a shared codebase into multiple differentiated storefronts. Here are a few examples of the befores and afters of shops I transformed using the same base code, as well as a few of the specific challenges faced by using this template.
          </p>
        </div>
      </div>

      {/* Before & After Slider */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-full mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Before & After
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transforming a non-responsive 2010 platform into a modern, mobile-friendly shopping experience
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Hafengeburtstag24, shop created in 2008</h3>
            <div 
              className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl cursor-ew-resize select-none"
              onMouseMove={handleSliderMove}
              onMouseDown={handleSliderStart}
              onMouseUp={handleSliderEnd}
              onMouseLeave={handleSliderEnd}
            >
              <img 
                src="https://i.imgur.com/t34FRLw.jpg"
                alt="After redesign"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src="https://i.imgur.com/mqskxHX.jpg"
                  alt="Before redesign"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-6 bg-slate-400"></div>
                    <div className="w-0.5 h-6 bg-slate-400"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                BEFORE
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                AFTER
              </div>
            </div>
          </div>

          {/* More Shops - Side by Side */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">More Shop Redesigns</h3>
            <div className="max-w-6xl mx-auto space-y-8">
              
              {/* Shop 1 */}
              <div className="p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
                <h4 className="text-lg font-semibold text-slate-900 mb-6">S-Tec Sports, shop created 2008</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute -top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-md font-bold text-xs z-10">
                      BEFORE
                    </div>
                    <div className="rounded-lg overflow-hidden border-2 border-slate-300 shadow cursor-pointer h-[400px]" onClick={() => setEnlargedImage('https://i.imgur.com/L6mJSnj.jpg')}>
                      <img 
                        src="https://i.imgur.com/L6mJSnj.jpg"
                        alt="Shop 1 before"
                        className="w-full object-cover object-top h-[400px]"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-md font-bold text-xs z-10">
                      AFTER
                    </div>
                    <div className="rounded-lg overflow-hidden border-2 border-blue-500 shadow cursor-pointer h-[400px]" onClick={() => setEnlargedImage('https://i.imgur.com/NE3OmUx.jpg')}>
                      <img 
                        src="https://i.imgur.com/NE3OmUx.jpg"
                        alt="Shop 1 after"
                        className="w-full object-cover object-top h-[400px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shop 2 */}
              <div className="p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
                <h4 className="text-lg font-semibold text-slate-900 mb-6">Selbstklebe-Filz, shop created 2014</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute -top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-md font-bold text-xs z-10">
                      BEFORE
                    </div>
                    <div className="rounded-lg overflow-hidden border-2 border-slate-300 shadow cursor-pointer h-[400px]" onClick={() => setEnlargedImage('https://i.imgur.com/Jn3yEsc.jpg')}>
                      <img 
                        src="https://i.imgur.com/Jn3yEsc.jpg"
                        alt="Shop 2 before"
                        className="w-full object-cover object-top h-[400px]"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-md font-bold text-xs z-10">
                      AFTER
                    </div>
                    <div className="rounded-lg overflow-hidden border-2 border-blue-500 shadow cursor-pointer h-[400px]" onClick={() => setEnlargedImage('https://i.imgur.com/Mk04P6J.jpg')}>
                      <img 
                        src="https://i.imgur.com/Mk04P6J.jpg"
                        alt="Shop 2 after"
                        className="w-full object-cover object-top h-[400px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shop 3 */}
              <div className="p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
                <h4 className="text-lg font-semibold text-slate-900 mb-6">Sanitaer Discount 24, shop created 2005</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute -top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-md font-bold text-xs z-10">
                      BEFORE
                    </div>
                    <div className="rounded-lg overflow-hidden border-2 border-slate-300 shadow cursor-pointer h-[400px]" onClick={() => setEnlargedImage('https://i.imgur.com/igPyJ1d.jpg')}>
                      <img 
                        src="https://i.imgur.com/igPyJ1d.jpg"
                        alt="Shop 3 before"
                        className="w-full object-cover object-top h-[400px]"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-md font-bold text-xs z-10">
                      AFTER
                    </div>
                    <div className="rounded-lg overflow-hidden border-2 border-blue-500 shadow cursor-pointer h-[400px]" onClick={() => setEnlargedImage('https://i.imgur.com/5bzZEHy.jpg')}>
                      <img 
                        src="https://i.imgur.com/5bzZEHy.jpg"
                        alt="Shop 3 after"
                        className="w-full object-cover object-top h-[400px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shop 4 */}
              <div className="p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
                <h4 className="text-lg font-semibold text-slate-900 mb-6">Tröbnitzer Getränkehandel, shop created 2009</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute -top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-md font-bold text-xs z-10">
                      BEFORE
                    </div>
                    <div className="rounded-lg overflow-hidden border-2 border-slate-300 shadow cursor-pointer h-[400px]" onClick={() => setEnlargedImage('https://i.imgur.com/pI4Fi7d.jpg')}>
                      <img 
                        src="https://i.imgur.com/pI4Fi7d.jpg"
                        alt="Shop 4 before"
                        className="w-full object-cover object-top h-[400px]"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-md font-bold text-xs z-10">
                      AFTER
                    </div>
                    <div className="rounded-lg overflow-hidden border-2 border-blue-500 shadow cursor-pointer h-[400px]" onClick={() => setEnlargedImage('https://i.imgur.com/CxrWEAZ.jpg')}>
                      <img 
                        src="https://i.imgur.com/CxrWEAZ.jpg"
                        alt="Shop 4 after"
                        className="w-full object-cover object-top h-[400px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Technical Details */}
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
                          Worked within an established Sass system to implement custom styling and functionality.
                        </p>
                      </div>

                      <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
                        <pre className="text-sm">
                          <code className="text-green-400 font-mono">{sassCode}</code>
                        </pre>
                      </div>
                    </div>
                  )}

                  {activeTab === 'challenges' && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">Technical Challenges</h2>
                        <p className="text-slate-700 leading-relaxed">
                          Working with legacy systems requires creative problem-solving.
                        </p>
                      </div>

                      <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
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
              href="https://github.com/yourusername" 
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
