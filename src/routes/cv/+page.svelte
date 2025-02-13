<!--
Purpose: Resume/CV page displaying Brendan Scullion's professional profile
Context: Modern, tech-focused layout optimized for developers and tech industry
-->

<script lang="ts">
</script>

<main class="min-h-screen bg-gray-50 text-gray-800 py-8 px-4 sm:px-6 lg:px-8 font-mono overflow-x-hidden">
  <div class="max-w-7xl mx-auto">
    <!-- Header Section with Terminal-like appearance -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-200">
      <div class="flex items-center space-x-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
        <div class="w-3 h-3 rounded-full bg-red-400"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div class="w-3 h-3 rounded-full bg-green-400"></div>
        <span class="ml-2 text-sm text-gray-600">brendan.scullion.profile</span>
      </div>
      <div class="p-8">
        <div class="flex flex-col lg:flex-row gap-8 items-start">
          <div class="lg:w-1/3">
            <h1 class="text-4xl font-bold text-indigo-600 mb-4">Brendan Scullion</h1>
            <div class="flex items-center gap-2 mb-6">
              <span class="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span class="text-indigo-600 font-semibold">Software Engineer</span>
            </div>
            <p class="text-gray-600 leading-relaxed mb-6">
              Software engineer with 9+ years of experience, specializing in AI-driven applications and large-scale solutions.
            </p>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span class="text-gray-600">Dublin, Ireland</span>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:me@brendanscullion.com" class="text-gray-600 hover:text-indigo-600 transition-colors">me@brendanscullion.com</a>
              </div>
            </div>
          </div>
          <div class="lg:w-2/3 space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div class="text-2xl font-bold text-indigo-600 mb-2">9+</div>
                <div class="text-sm text-gray-600">Years Experience</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div class="text-2xl font-bold text-indigo-600 mb-2">4+</div>
                <div class="text-sm text-gray-600">Years AI Focus</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div class="text-2xl font-bold text-indigo-600 mb-2">2x</div>
                <div class="text-sm text-gray-600">Founder</div>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div class="text-sm text-indigo-600 mb-2 font-semibold">$ tech_stack --primary</div>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-white rounded text-sm border border-gray-200 text-gray-700 hover:border-indigo-500 transition-colors">Python</span>
                <span class="px-3 py-1 bg-white rounded text-sm border border-gray-200 text-gray-700 hover:border-indigo-500 transition-colors">TypeScript</span>
                <span class="px-3 py-1 bg-white rounded text-sm border border-gray-200 text-gray-700 hover:border-indigo-500 transition-colors">React</span>
                <span class="px-3 py-1 bg-white rounded text-sm border border-gray-200 text-gray-700 hover:border-indigo-500 transition-colors">SvelteKit</span>
                <span class="px-3 py-1 bg-white rounded text-sm border border-gray-200 text-gray-700 hover:border-indigo-500 transition-colors">AWS</span>
                <span class="px-3 py-1 bg-white rounded text-sm border border-gray-200 text-gray-700 hover:border-indigo-500 transition-colors">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience Section -->
    <div class="space-y-8">
      <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h2 class="text-xl font-bold text-indigo-600 mb-6 flex items-center gap-3">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Experience
        </h2>

        <div class="space-y-8">
          <div class="group">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 class="text-lg font-semibold group-hover:text-indigo-600 transition-colors">Coso.ai</h3>
                <p class="text-gray-600">Founder/CTO</p>
              </div>
              <div class="text-sm text-gray-500">July 2023 – Present</div>
            </div>
            <div class="pl-4 border-l-2 border-gray-200 group-hover:border-indigo-500 transition-colors">
              <p class="mb-3 text-gray-700">
                <a href="https://www.coso.ai" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-700">
                  Coso.ai
                </a>
                is an AI-driven social media marketing platform.
              </p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <div>
                    <p>Developed and manage an AI-focused social media marketing platform:</p>
                    <ul class="mt-2 ml-4 space-y-1">
                      <li class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span><strong>Main Platform</strong>: SvelteKit</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span><strong>Microservices</strong>: Python</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span><strong>Database</strong>: PostgreSQL</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span><strong>Hosting/Deployment</strong>: AWS (deployed via SST)</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <span>Oversee product direction, architecture, and AI integrations</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="group">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 class="text-lg font-semibold group-hover:text-indigo-600 transition-colors">Connect Mor</h3>
                <p class="text-gray-600">Founder/CTO</p>
              </div>
              <div class="text-sm text-gray-500">January 2021 – July 2023</div>
            </div>
            <div class="pl-4 border-l-2 border-gray-200 group-hover:border-indigo-500 transition-colors">
              <p class="mb-3 text-gray-700">A SaaS platform empowering marketers to leverage millions of social media posts using AI to create highly engaging content.</p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <div>
                    <p>Served as CTO and led the development of the platform, including:</p>
                    <ul class="mt-2 ml-4 space-y-1">
                      <li class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span><strong>Backend APIs</strong> (Django/Flask/FastAPI)</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span><strong>Front End</strong> (React/TypeScript)</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span><strong>Database</strong> (PostgreSQL)</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span><strong>CI/CD</strong> using GitHub Automation</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span><strong>AWS Infrastructure</strong></span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="group">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 class="text-lg font-semibold group-hover:text-indigo-600 transition-colors">BlackShore Technology</h3>
                <p class="text-gray-600">Contract Developer</p>
              </div>
              <div class="text-sm text-gray-500">December 2022 – July 2023</div>
            </div>
            <div class="pl-4 border-l-2 border-gray-200 group-hover:border-indigo-500 transition-colors">
              <p class="mb-3 text-gray-700">Provided contract services through BlackShore Technology in two major projects:</p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <span><strong>Multinational Bank</strong> - Python-based financial model auditing system</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <span><strong>MNC</strong> - Cloud Migration of legacy applications  (ReactJS - Azure)</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="group">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 class="text-lg font-semibold group-hover:text-indigo-600 transition-colors">Susquehanna International Group</h3>
                <p class="text-gray-600">Database Engineer</p>
              </div>
              <div class="text-sm text-gray-500">March 2017 – January 2021</div>
            </div>
            <div class="pl-4 border-l-2 border-gray-200 group-hover:border-indigo-500 transition-colors">
              <p class="mb-3 text-gray-700">SIG is a global quantitative trading firm built on a rigorous, analytical foundation in financial markets.</p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <span>Developed Python tools for teams across compliance, BI, and ETL</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <span>Created and maintained highly available data services for high-frequency trading (Oracle, MySQL, Kafka, PostgreSQL, MongoDB)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <span>Built dashboards and productivity tools in Oracle Apex</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <span>Performed general Linux administration</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <span>Delivered presentations to new employees on database usage and best practices</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="group">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 class="text-lg font-semibold group-hover:text-indigo-600 transition-colors">AwesomeJar Consulting</h3>
                <p class="text-gray-600">Engineering Intern</p>
              </div>
              <div class="text-sm text-gray-500">February 2016 – December 2016</div>
            </div>
            <div class="pl-4 border-l-2 border-gray-200 group-hover:border-indigo-500 transition-colors">
              <p class="mb-3 text-gray-700">A technology and cybersecurity consulting firm specializing in hedge funds, venture capital groups, private equity firms, and other financial services institutions.</p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <span>Provided Linux and Windows administration</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <span>Developed in-house productivity tools (Java/Python)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 shrink-0">▹</span>
                  <span>Assisted with website maintenance tasks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Section -->
      <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h2 class="text-xl font-bold text-indigo-600 mb-6 flex items-center gap-3">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Projects
        </h2>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a href="https://github.com/brsc2909/twitter-analysis"
             target="_blank"
             rel="noopener noreferrer"
             class="block group">
            <div class="bg-gray-50 rounded-lg p-6 h-full border border-gray-200 hover:border-indigo-500 transition-colors">
              <div class="flex items-center justify-between mb-4">
                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 class="font-semibold mb-2 group-hover:text-indigo-600 transition-colors">Twitter Analysis</h3>
              <p class="text-gray-600 text-sm">Python package for analyzing MonkeyPox-related Twitter data</p>
            </div>
          </a>

          <div class="bg-gray-50 rounded-lg p-6 h-full border border-gray-200">
            <div class="flex items-center justify-between mb-4">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span class="text-xs font-mono text-gray-400 px-2 py-1 bg-gray-100 rounded">SIG</span>
            </div>
            <h3 class="font-semibold mb-2">Piranha</h3>
            <p class="text-gray-600 text-sm">ETL Tool written in Python with an Oracle APEX front-end. Used for converting multiple document formats into JSON to be consumed by various teams</p>
          </div>

          <a href="https://github.com/BlackShoreTech/blackshoretech.github.io"
          target="_blank"
             rel="noopener noreferrer"
             class="block group">
            <div class="bg-gray-50 rounded-lg p-6 h-full border border-gray-200 hover:border-indigo-500 transition-colors">
              <div class="flex items-center justify-between mb-4">
                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 class="font-semibold mb-2 group-hover:text-indigo-600 transition-colors">blackshoretech.com</h3>
              <p class="text-gray-600 text-sm">Static website built with ReactJS/NextJS</p>
            </div>
          </a>

          <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-4">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 class="font-semibold mb-2">combine-harvester</h3>
            <span class="text-xs font-mono text-gray-400 px-2 py-1 bg-gray-100 rounded">Connect Mor</span>
            <p class="text-gray-600 text-sm">Python package for social media post analysis using AI tools (TensorFlow, Keras, PyTorch)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  @media print {
    :global(body) {
      margin: 0;
      padding: 0;
      background: white !important;
      color: #1f2937 !important;
    }

    :global(*) {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    main {
      background: white !important;
    }

    .bg-gray-50 {
      background: white !important;
    }

    .border {
      border-color: #e5e7eb !important;
    }

    .text-indigo-600 {
      color: #4f46e5 !important;
    }

    .text-gray-600 {
      color: #4b5563 !important;
    }

    .shadow-lg {
      box-shadow: none !important;
    }
  }
</style>