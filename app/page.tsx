"use client";

import { useState } from "react";

import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  Fingerprint,
  Globe,
  LineChart,
  Lock,
  Menu,
  MessageSquareMore,
  Network,
  ServerCog,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
  Gauge,
  ShieldCheck,
  Rocket,
  Building2,
  Layers3,
  CircuitBoard,
  MonitorSmartphone,
} from "lucide-react";

const navItems = [
  "Home",
  "Solutions",
  "QA Engineering",
  "AI Systems",
  "Transformation",
  "Clients",
  "Insights",
  "Contact",
];

const qaServices = [
  {
    title: "AI Automation Testing",
    icon: Bot,
    text: "Self-healing AI-powered automation frameworks accelerating enterprise release cycles.",
  },
  {
    title: "Performance Engineering",
    icon: Gauge,
    text: "Advanced scalability validation and high-load performance optimization systems.",
  },
  {
    title: "Security Testing",
    icon: Fingerprint,
    text: "Enterprise penetration testing, compliance validation and cyber resilience systems.",
  },
  {
    title: "Cloud QA",
    icon: Cloud,
    text: "Testing modern cloud-native distributed infrastructures across enterprise ecosystems.",
  },
  {
    title: "Analytics Validation",
    icon: BarChart3,
    text: "AI analytics validation ensuring enterprise-grade reporting accuracy and integrity.",
  },
  {
    title: "Continuous QA",
    icon: Workflow,
    text: "CI/CD-integrated continuous testing frameworks enabling intelligent delivery pipelines.",
  },
];

const aiSystems = [
  {
    title: "Enterprise AI Chatbots",
    icon: MessageSquareMore,
    text: "AI conversational systems transforming customer engagement and support.",
  },
  {
    title: "AI Agents",
    icon: BrainCircuit,
    text: "Autonomous enterprise AI agents handling intelligent workflows and operations.",
  },
  {
    title: "Workflow Automation",
    icon: Network,
    text: "Business process automation reducing operational overhead and increasing efficiency.",
  },
  {
    title: "Predictive Intelligence",
    icon: TrendingUp,
    text: "Advanced AI-driven forecasting and predictive business intelligence systems.",
  },
  {
    title: "Enterprise Data Intelligence",
    icon: Database,
    text: "Unified enterprise analytics and centralized intelligent decision systems.",
  },
  {
    title: "AI Infrastructure",
    icon: ServerCog,
    text: "Scalable AI infrastructure optimized for enterprise-grade deployment environments.",
  },
];

const clients = [
  "IBM",
  "Infosys",
  "TCS",
  "Wipro",
  "Capgemini",
  "Deloitte",
  "Accenture",
  "Tech Mahindra",
];

export default function TekMarkWebsite() {
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <main className="bg-[#040816] text-white min-h-screen overflow-hidden">

      {/* BACKGROUND */}

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-300px] left-[-200px] w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[180px]" />

        <div className="absolute top-[0%] right-[-200px] w-[700px] h-[700px] bg-fuchsia-500/20 rounded-full blur-[180px]" />

        <div className="absolute bottom-[-300px] left-[20%] w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[180px]" />

      </div>

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 backdrop-blur-3xl bg-black/30 border-b border-white/10">

        <div className="max-w-6xl mx-auto px-4 xl:px-6 py-4 flex items-center justify-between gap-4">

          {/* LOGO */}

          <div className="flex items-center gap-4 shrink-0">

            <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,255,0.25)]">

              <Cpu className="w-7 h-7" />

            </div>

            <div>

              <h1 className="text-3xl font-black leading-none">
                TekMark
              </h1>

              <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mt-1">
                AI • QA • Transformation
              </p>

            </div>

          </div>

          {/* DESKTOP MENU */}

          <div className="hidden lg:flex gap-1 xl:gap-2 flex-wrap justify-center">

            {navItems.map((item) => (

              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-4 xl:px-5 py-3 rounded-2xl transition-all duration-300 text-sm xl:text-base ${
                  activeTab === item
                    ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(0,255,255,0.25)]"
                    : "hover:bg-white/10 text-gray-300"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          {/* RIGHT BUTTON */}

          <div className="flex items-center gap-3 shrink-0">

            <button
              onClick={() => setConsultOpen(true)}
              className="
                hidden xl:flex
                items-center
                gap-2
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-fuchsia-500
                px-5
                py-3
                rounded-2xl
                font-semibold
                text-sm
                whitespace-nowrap
                hover:scale-105
                transition-all
                shadow-[0_0_25px_rgba(0,255,255,0.25)]
              "
            >

              Schedule Consultation

              <ArrowRight className="w-4 h-4" />

            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                lg:hidden
                w-12
                h-12
                rounded-2xl
                bg-white/10
                flex
                items-center
                justify-center
              "
            >

              {menuOpen ? <X /> : <Menu />}

            </button>

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="lg:hidden border-b border-white/10 bg-black/40 backdrop-blur-3xl">

          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-3">

            {navItems.map((item) => (

              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  setMenuOpen(false);
                }}
                className={`px-5 py-4 rounded-2xl text-left transition-all ${
                  activeTab === item
                    ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {item}
              </button>

            ))}

            <button
              onClick={() => {
                setConsultOpen(true);
                setMenuOpen(false);
              }}
              className="mt-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 py-4 rounded-2xl font-semibold"
            >
              Schedule Consultation
            </button>

          </div>

        </div>

      )}

      {/* HOME */}

      {activeTab === "Home" && (

        <section className="max-w-6xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-white/10 mb-10">

                <Sparkles className="w-4 h-4 text-cyan-400" />

                <span className="text-sm text-gray-300">
                  Enterprise AI Transformation Platform
                </span>

              </div>

              <h1 className="text-6xl xl:text-7xl font-black leading-[0.95]">

                Future Ready
                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  AI Solutions
                </span>

                <br />

                For Modern Enterprises

              </h1>

              <p className="mt-10 text-xl text-gray-300 leading-relaxed">

                TekMark delivers enterprise-grade QA engineering,
                AI automation ecosystems, intelligent transformation
                frameworks and cloud modernization solutions for
                next-generation businesses.

              </p>

              <div className="flex gap-5 mt-12 flex-wrap">

                <button
                  onClick={() => setConsultOpen(true)}
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-9 py-5 rounded-2xl text-lg font-semibold hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,255,255,0.25)]"
                >

                  Start Transformation

                </button>

                <button className="border border-white/10 bg-white/5 px-9 py-5 rounded-2xl hover:bg-white/10 transition-all">
                  Explore Services
                </button>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-5 mt-16">

                <div className="rounded-3xl bg-white/5 border border-white/10 p-6">

                  <h3 className="text-4xl font-black text-cyan-400">
                    94%
                  </h3>

                  <p className="text-gray-400 mt-3 text-sm">
                    Automation Efficiency
                  </p>

                </div>

                <div className="rounded-3xl bg-white/5 border border-white/10 p-6">

                  <h3 className="text-4xl font-black text-fuchsia-400">
                    3.4X
                  </h3>

                  <p className="text-gray-400 mt-3 text-sm">
                    Productivity Growth
                  </p>

                </div>

                <div className="rounded-3xl bg-white/5 border border-white/10 p-6">

                  <h3 className="text-4xl font-black text-blue-400">
                    24/7
                  </h3>

                  <p className="text-gray-400 mt-3 text-sm">
                    AI Monitoring
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT VISUALS */}

            <div className="space-y-6">

              <div className="rounded-[40px] bg-white/5 border border-white/10 p-8 backdrop-blur-3xl">

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <h3 className="text-2xl font-bold">
                      Enterprise AI Adoption
                    </h3>

                    <p className="text-gray-400 mt-2">
                      Intelligent modernization ecosystem
                    </p>

                  </div>

                  <Rocket className="w-10 h-10 text-cyan-400" />

                </div>

                <div className="space-y-6">

                  {[
                    "Business Intelligence",
                    "AI Automation",
                    "Cloud Migration",
                    "Process Optimization",
                    "Predictive Analytics",
                  ].map((item, i) => (

                    <div key={i}>

                      <div className="flex justify-between mb-2">

                        <span className="text-gray-300">
                          {item}
                        </span>

                        <span className="text-cyan-400">
                          {90 - i * 7}%
                        </span>

                      </div>

                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full"
                          style={{
                            width: `${90 - i * 7}%`,
                          }}
                        />

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-[32px] bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-white/10 p-7">

                  <ShieldCheck className="w-12 h-12 text-cyan-400 mb-6" />

                  <h3 className="text-3xl font-black">
                    Secure
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Enterprise security infrastructure
                  </p>

                </div>

                <div className="rounded-[32px] bg-gradient-to-br from-fuchsia-500/20 to-blue-500/10 border border-white/10 p-7">

                  <CircuitBoard className="w-12 h-12 text-fuchsia-400 mb-6" />

                  <h3 className="text-3xl font-black">
                    Smart
                  </h3>

                  <p className="text-gray-400 mt-3">
                    AI-powered intelligent systems
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      )}

      {/* SOLUTIONS */}

      {activeTab === "Solutions" && (

        <section className="max-w-6xl mx-auto px-6 py-24">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black">
              Enterprise Solutions
            </h2>

            <p className="text-xl text-gray-400 mt-6">
              Complete transformation ecosystems designed for enterprise scalability.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "AI Modernization",
                icon: BrainCircuit,
              },
              {
                title: "Cloud Transformation",
                icon: Cloud,
              },
              {
                title: "Business Automation",
                icon: Workflow,
              },
              {
                title: "Digital Platforms",
                icon: Globe,
              },
              {
                title: "Operational Intelligence",
                icon: LineChart,
              },
              {
                title: "Cyber Security",
                icon: Lock,
              },
            ].map((item, i) => (

              <div
                key={i}
                className="rounded-[32px] bg-white/5 border border-white/10 p-8 hover:-translate-y-2 transition-all duration-300"
              >

                <item.icon className="w-14 h-14 text-cyan-400 mb-8" />

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  Enterprise transformation ecosystems enabling intelligent modernization and operational excellence.
                </p>

              </div>

            ))}

          </div>

        </section>

      )}

      {/* QA */}

      {activeTab === "QA Engineering" && (

        <section className="max-w-6xl mx-auto px-6 py-24">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black">
              QA Engineering
            </h2>

            <p className="text-xl text-gray-400 mt-6">
              Enterprise quality engineering optimized for reliability and speed.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {qaServices.map((service, i) => (

              <div
                key={i}
                className="group rounded-[32px] bg-white/5 border border-white/10 p-8 hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 transition-all" />

                <service.icon className="w-14 h-14 text-cyan-400 mb-8 relative z-10" />

                <h3 className="text-2xl font-bold relative z-10">
                  {service.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed relative z-10">
                  {service.text}
                </p>

              </div>

            ))}

          </div>

        </section>

      )}

      {/* AI SYSTEMS */}

      {activeTab === "AI Systems" && (

        <section className="max-w-6xl mx-auto px-6 py-24">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black">
              AI Systems
            </h2>

            <p className="text-xl text-gray-400 mt-6">
              Intelligent enterprise systems designed for next-generation business operations.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {aiSystems.map((item, i) => (

              <div
                key={i}
                className="rounded-[32px] bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 border border-white/10 p-8 hover:scale-[1.03] transition-all duration-300"
              >

                <item.icon className="w-14 h-14 text-cyan-400 mb-8" />

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </section>

      )}

      {/* TRANSFORMATION */}

      {activeTab === "Transformation" && (

        <section className="max-w-6xl mx-auto px-6 py-24">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black">
              Digital Transformation
            </h2>

            <p className="text-xl text-gray-400 mt-6">
              Strategic transformation lifecycle for modern enterprises.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                title: "Business Assessment",
                icon: Building2,
              },
              {
                title: "AI Integration",
                icon: BrainCircuit,
              },
              {
                title: "Automation",
                icon: Workflow,
              },
              {
                title: "Enterprise Scaling",
                icon: Layers3,
              },
            ].map((step, i) => (

              <div
                key={i}
                className="rounded-[32px] bg-white/5 border border-white/10 p-8 text-center hover:-translate-y-2 transition-all"
              >

                <step.icon className="w-14 h-14 text-cyan-400 mx-auto mb-8" />

                <h3 className="text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="text-gray-400 mt-5">
                  Intelligent modernization strategies enabling scalable business evolution.
                </p>

              </div>

            ))}

          </div>

        </section>

      )}

      {/* CLIENTS */}

      {activeTab === "Clients" && (

        <section className="max-w-6xl mx-auto px-6 py-24">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black">
              Trusted By Industry Leaders
            </h2>

            <p className="text-xl text-gray-400 mt-6">
              Global enterprises leveraging TekMark transformation ecosystems.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {clients.map((client, i) => (

              <div
                key={i}
                className="rounded-[32px] bg-white/5 border border-white/10 p-10 text-center text-3xl font-bold hover:bg-white/10 transition-all duration-300"
              >
                {client}
              </div>

            ))}

          </div>

        </section>

      )}

      {/* INSIGHTS */}

      {activeTab === "Insights" && (

        <section className="max-w-6xl mx-auto px-6 py-24">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black">
              Industry Insights
            </h2>

            <p className="text-xl text-gray-400 mt-6">
              Enterprise AI transformation trends and innovation strategies.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "The Future of Enterprise AI",
                icon: BrainCircuit,
              },
              {
                title: "Cloud Transformation Trends",
                icon: Cloud,
              },
              {
                title: "Modern QA Engineering",
                icon: MonitorSmartphone,
              },
            ].map((article, i) => (

              <div
                key={i}
                className="rounded-[32px] bg-white/5 border border-white/10 overflow-hidden"
              >

                <div className="h-56 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center">

                  <article.icon className="w-20 h-20 text-cyan-400" />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 mt-5">
                    Intelligent transformation insights shaping the future of enterprise technology.
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

      )}

      {/* CONTACT */}

      {activeTab === "Contact" && (

        <section className="max-w-5xl mx-auto px-6 py-24">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black">
              Contact TekMark
            </h2>

            <p className="text-xl text-gray-400 mt-6">
              Let’s build your enterprise transformation ecosystem.
            </p>

          </div>

          <div className="rounded-[40px] bg-white/5 border border-white/10 p-10 backdrop-blur-3xl">

            <div className="grid md:grid-cols-2 gap-8">

              <input
                placeholder="Full Name"
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

            </div>

            <textarea
              rows={6}
              placeholder="Tell us about your project"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none mt-8"
            />

            <button className="mt-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-8 py-4 rounded-2xl font-semibold shadow-[0_0_25px_rgba(0,255,255,0.25)]">
              Submit Inquiry
            </button>

          </div>

        </section>

      )}

      {/* CONSULT POPUP */}

      {consultOpen && (

        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xl flex items-center justify-center px-6">

          <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-[#0b1020] p-7 relative">

            <button
              onClick={() => setConsultOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-3xl font-bold mb-2">
              Schedule Consultation
            </h2>

            <p className="text-gray-400 mb-6">
              Let’s discuss your transformation goals.
            </p>

            <div className="space-y-4">

              <input
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
              />

              <input
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
              />

              <input
                placeholder="Phone"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
              />

              <input
                placeholder="Organization / Business"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
              />

              <textarea
                rows={3}
                placeholder="Define Business Requirement"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
              />

              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3">

                <option>
                  Consultation Type
                </option>

                <option>
                  Video Consultation
                </option>

                <option>
                  Call Back
                </option>

                <option>
                  Physical Visit
                </option>

              </select>

              <button className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 py-4 rounded-2xl font-semibold shadow-[0_0_25px_rgba(0,255,255,0.25)]">
                Submit Request
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}