"use client";

import { useState } from "react";

import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Fingerprint,
  Globe,
  Layers3,
  LineChart,
  Lock,
  Menu,
  MessageSquareMore,
  MonitorSmartphone,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
  Gauge,
  CircuitBoard,
  Zap,
  Binary,
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
    text: "Self-healing automation frameworks accelerating enterprise release cycles.",
  },
  {
    title: "Performance Engineering",
    icon: Gauge,
    text: "High-load performance optimization for enterprise-scale systems.",
  },
  {
    title: "Security Testing",
    icon: Fingerprint,
    text: "Enterprise-grade penetration testing and cyber resilience systems.",
  },
  {
    title: "Cloud QA",
    icon: Cloud,
    text: "Validation for distributed cloud-native infrastructures.",
  },
  {
    title: "Analytics Validation",
    icon: BarChart3,
    text: "AI analytics validation ensuring enterprise reporting accuracy.",
  },
  {
    title: "Continuous QA",
    icon: Workflow,
    text: "CI/CD-integrated continuous intelligent testing pipelines.",
  },
];

const aiServices = [
  {
    title: "Enterprise AI Chatbots",
    icon: MessageSquareMore,
    text: "AI conversational systems transforming enterprise customer engagement.",
  },
  {
    title: "AI Workflow Automation",
    icon: Workflow,
    text: "Automate repetitive business operations using AI orchestration.",
  },
  {
    title: "Predictive Intelligence",
    icon: TrendingUp,
    text: "Forecast trends and enterprise outcomes using advanced AI systems.",
  },
  {
    title: "Document Intelligence",
    icon: Database,
    text: "AI-powered extraction of insights from contracts, invoices and documents.",
  },
  {
    title: "Generative AI Integration",
    icon: BrainCircuit,
    text: "Deploy OpenAI and enterprise LLM ecosystems securely.",
  },
  {
    title: "AI Governance",
    icon: ShieldCheck,
    text: "Responsible and compliant AI deployment across enterprise environments.",
  },
];

const solutions = [
  {
    title: "AI Readiness Assessment",
    icon: BrainCircuit,
  },
  {
    title: "Cloud Transformation",
    icon: Cloud,
  },
  {
    title: "Hyperautomation",
    icon: Zap,
  },
  {
    title: "Enterprise Data Intelligence",
    icon: Database,
  },
  {
    title: "Digital Platforms",
    icon: Globe,
  },
  {
    title: "Cybersecurity Engineering",
    icon: Lock,
  },
];

const clientLogos = [
  "IBM",
  "Microsoft",
  "Google",
  "Amazon",
  "Accenture",
  "Infosys",
  "Deloitte",
  "Oracle",
];

const stats = [
  {
    number: "98%",
    label: "Defect Detection Accuracy",
  },
  {
    number: "40%",
    label: "Automation Cost Reduction",
  },
  {
    number: "24/7",
    label: "AI Monitoring",
  },
  {
    number: "500+",
    label: "Enterprise Deployments",
  },
];

export default function TekMarkWebsite() {
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* BACKGROUND GLOWS */}

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-200px] top-[-150px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute right-[-200px] top-[0px] h-[600px] w-[600px] rounded-full bg-fuchsia-500/20 blur-[140px]" />

        <div className="absolute bottom-[-250px] left-[20%] h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[140px]" />

      </div>

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-3xl">

        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 xl:px-6">

          {/* LOGO */}

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_0_40px_rgba(0,255,255,0.25)]">

              <Cpu className="h-7 w-7" />

            </div>

            <div>

              <h1 className="text-3xl font-black">
                TekMark
              </h1>

              <p className="mt-1 text-xs uppercase tracking-[0.35em] text-gray-400">
                AI • QA • TRANSFORMATION
              </p>

            </div>

          </div>

          {/* DESKTOP NAV */}

          <div className="hidden flex-wrap justify-center gap-2 lg:flex">

            {navItems.map((item) => (

              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`rounded-2xl px-5 py-3 text-sm transition-all duration-300 ${
                  activeTab === item
                    ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_25px_rgba(0,255,255,0.25)]"
                    : "text-gray-300 hover:bg-white/10"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-3">

            <button
              onClick={() => setConsultOpen(true)}
              className="hidden rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold transition-all hover:scale-105 xl:flex"
            >

              Schedule Consultation

              <ArrowRight className="ml-2 h-4 w-4" />

            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 lg:hidden"
            >

              {menuOpen ? <X /> : <Menu />}

            </button>

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="border-b border-white/10 bg-black/40 backdrop-blur-3xl lg:hidden">

          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6">

            {navItems.map((item) => (

              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  setMenuOpen(false);
                }}
                className={`rounded-2xl px-5 py-4 text-left transition-all ${
                  activeTab === item
                    ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

        </div>

      )}

      {/* HOME */}

      {activeTab === "Home" && (

        <section className="mx-auto max-w-6xl px-6 py-24">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 px-5 py-3">

                <Sparkles className="h-4 w-4 text-cyan-400" />

                <span className="text-sm text-gray-300">
                  AI-Powered Enterprise Reinvention
                </span>

              </div>

              <h1 className="text-6xl font-black leading-[0.95] xl:text-7xl">

                Engineering
                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Intelligent
                </span>

                <br />

                Digital Futures

              </h1>

              <p className="mt-10 text-xl leading-relaxed text-gray-300">

                TekMark delivers enterprise-grade QA engineering,
                AI transformation ecosystems, workflow automation,
                cloud modernization and intelligent digital platforms
                for modern enterprises.

              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <button
                  onClick={() => setConsultOpen(true)}
                  className="rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-8 py-5 text-lg font-semibold shadow-[0_0_40px_rgba(0,255,255,0.25)] transition-all hover:scale-105"
                >
                  Start Transformation
                </button>

                <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg transition-all hover:bg-white/10">
                  Explore Solutions
                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-6">

              <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">

                <div className="mb-8 flex items-center justify-between">

                  <div>

                    <h3 className="text-3xl font-black">
                      Enterprise AI Adoption
                    </h3>

                    <p className="mt-2 text-gray-400">
                      Intelligent modernization lifecycle
                    </p>

                  </div>

                  <Rocket className="h-10 w-10 text-cyan-400" />

                </div>

                <div className="space-y-6">

                  {[
                    {
                      title: "AI Integration",
                      value: "92%",
                    },
                    {
                      title: "Workflow Automation",
                      value: "86%",
                    },
                    {
                      title: "Cloud Modernization",
                      value: "89%",
                    },
                    {
                      title: "Enterprise Intelligence",
                      value: "95%",
                    },
                  ].map((item, i) => (

                    <div key={i}>

                      <div className="mb-2 flex justify-between">

                        <span className="text-gray-300">
                          {item.title}
                        </span>

                        <span className="text-cyan-400">
                          {item.value}
                        </span>

                      </div>

                      <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">

                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500"
                          style={{
                            width: item.value,
                          }}
                        />

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-7">

                  <ShieldCheck className="mb-6 h-12 w-12 text-cyan-400" />

                  <h3 className="text-3xl font-black">
                    Secure
                  </h3>

                  <p className="mt-3 text-gray-300">
                    Enterprise-grade cyber resilience
                  </p>

                </div>

                <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-blue-500/10 p-7">

                  <CircuitBoard className="mb-6 h-12 w-12 text-fuchsia-400" />

                  <h3 className="text-3xl font-black">
                    Smart
                  </h3>

                  <p className="mt-3 text-gray-300">
                    AI-powered intelligent systems
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* STATS */}

          <section className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">

            {stats.map((item, index) => (

              <div
                key={index}
                className="rounded-[32px] border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-2xl"
              >

                <h3 className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-5xl font-black text-transparent">
                  {item.number}
                </h3>

                <p className="mt-4 text-sm text-gray-300">
                  {item.label}
                </p>

              </div>

            ))}

          </section>

          {/* FEATURE STRIP */}

          <section className="mt-20 rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 p-10 backdrop-blur-2xl">

            <div className="flex flex-wrap justify-center gap-4">

              {[
                "AI Readiness Assessments",
                "Hyperautomation",
                "Cloud Migration",
                "AI Chatbot Engineering",
                "Enterprise QA",
                "Data Intelligence",
                "Cybersecurity",
                "DevOps Automation",
              ].map((feature, index) => (

                <div
                  key={index}
                  className="rounded-full border border-cyan-500/20 bg-white/5 px-5 py-3 text-sm text-cyan-100"
                >
                  {feature}
                </div>

              ))}

            </div>

          </section>

        </section>

      )}

      {/* SOLUTIONS */}

      {activeTab === "Solutions" && (

        <section className="mx-auto max-w-6xl px-6 py-24">

          <div className="mb-20 text-center">

            <h2 className="text-5xl font-black">
              Enterprise Solutions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-400">

              Transforming businesses through AI, automation,
              intelligent digital systems and precision engineering.

            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {solutions.map((item, i) => (

              <div
                key={i}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30"
              >

                <item.icon className="mb-8 h-14 w-14 text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-300">

                  Enterprise transformation solutions enabling scalable modernization,
                  intelligent automation and operational excellence.

                </p>

              </div>

            ))}

          </div>

        </section>

      )}

      {/* QA */}

      {activeTab === "QA Engineering" && (

        <section className="mx-auto max-w-6xl px-6 py-24">

          <div className="mb-20 text-center">

            <h2 className="text-5xl font-black">
              QA Engineering
            </h2>

            <p className="mt-6 text-xl text-gray-400">
              Accelerating quality engineering through intelligent automation.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {qaServices.map((service, i) => (

              <div
                key={i}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30"
              >

                <service.icon className="mb-8 h-14 w-14 text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-300">
                  {service.text}
                </p>

              </div>

            ))}

          </div>

          {/* QA CAPABILITIES */}

          <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">

            {[
              "Functional Testing",
              "Regression Testing",
              "API Testing",
              "Mobile Testing",
              "Security Testing",
              "Accessibility Testing",
              "Cloud Validation",
              "AI Assisted QA",
              "DevSecOps",
              "Cross Browser Testing",
              "Automation Frameworks",
              "Performance Validation",
            ].map((item, i) => (

              <div
                key={i}
                className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6 text-center backdrop-blur-xl"
              >

                <CheckCircle2 className="mx-auto mb-4 h-8 w-8 text-cyan-400" />

                <p className="text-sm text-white">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </section>

      )}

      {/* AI SYSTEMS */}

      {activeTab === "AI Systems" && (

        <section className="mx-auto max-w-6xl px-6 py-24">

          <div className="mb-20 text-center">

            <h2 className="text-5xl font-black">
              AI Systems
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-400">

              Deploy enterprise-grade AI ecosystems that modernize operations,
              automate workflows and accelerate intelligent decision making.

            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {aiServices.map((service, i) => (

              <div
                key={i}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
              >

                <service.icon className="mb-8 h-14 w-14 text-cyan-400" />

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-300">
                  {service.text}
                </p>

              </div>

            ))}

          </div>

          {/* INFOGRAPHIC */}

          <div className="mt-20 rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 p-10">

            <div className="grid items-center gap-10 lg:grid-cols-3">

              <div className="text-center">

                <Binary className="mx-auto mb-6 h-20 w-20 text-cyan-400" />

                <h3 className="text-2xl font-black">
                  AI Data Layer
                </h3>

              </div>

              <div className="text-center">

                <BrainCircuit className="mx-auto mb-6 h-20 w-20 text-fuchsia-400" />

                <h3 className="text-2xl font-black">
                  Intelligent AI Engine
                </h3>

              </div>

              <div className="text-center">

                <Workflow className="mx-auto mb-6 h-20 w-20 text-blue-400" />

                <h3 className="text-2xl font-black">
                  Enterprise Automation
                </h3>

              </div>

            </div>

          </div>

        </section>

      )}

      {/* TRANSFORMATION */}

      {activeTab === "Transformation" && (

        <section className="mx-auto max-w-6xl px-6 py-24">

          <div className="mb-20 text-center">

            <h2 className="text-5xl font-black">
              Digital Transformation
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-400">

              Accelerating enterprise innovation through intelligent systems,
              cloud modernization and AI transformation ecosystems.

            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

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
                title: "Workflow Automation",
                icon: Workflow,
              },
              {
                title: "Enterprise Scaling",
                icon: Layers3,
              },
            ].map((step, i) => (

              <div
                key={i}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl transition-all hover:-translate-y-2"
              >

                <step.icon className="mx-auto mb-8 h-14 w-14 text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-5 text-gray-300">
                  Intelligent modernization frameworks enabling scalable digital evolution.
                </p>

              </div>

            ))}

          </div>

        </section>

      )}

      {/* CLIENTS */}

      {activeTab === "Clients" && (

        <section className="mx-auto max-w-6xl px-6 py-24">

          <div className="mb-20 text-center">

            <h2 className="text-5xl font-black">
              Trusted By Industry Leaders
            </h2>

            <p className="mt-6 text-xl text-gray-400">
              Enterprise organizations leveraging TekMark transformation systems.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

            {clientLogos.map((client, i) => (

              <div
                key={i}
                className="flex h-32 items-center justify-center rounded-[32px] border border-white/10 bg-white/5 text-3xl font-black backdrop-blur-2xl transition-all duration-500 hover:scale-105"
              >

                {client}

              </div>

            ))}

          </div>

        </section>

      )}

      {/* INSIGHTS */}

      {activeTab === "Insights" && (

        <section className="mx-auto max-w-6xl px-6 py-24">

          <div className="mb-20 text-center">

            <h2 className="text-5xl font-black">
              Industry Insights
            </h2>

            <p className="mt-6 text-xl text-gray-400">
              Enterprise AI transformation trends and modernization strategies.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {[
              {
                title: "Future of Enterprise AI",
                icon: BrainCircuit,
              },
              {
                title: "Modern Cloud Systems",
                icon: Cloud,
              },
              {
                title: "AI Powered QA",
                icon: MonitorSmartphone,
              },
            ].map((item, i) => (

              <div
                key={i}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl"
              >

                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20">

                  <item.icon className="h-20 w-20 text-cyan-400" />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-300">

                    Insights into the next generation of enterprise modernization,
                    AI integration and intelligent transformation ecosystems.

                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

      )}

      {/* CONTACT */}

      {activeTab === "Contact" && (

        <section className="mx-auto max-w-5xl px-6 py-24">

          <div className="mb-16 text-center">

            <h2 className="text-5xl font-black">
              Contact TekMark
            </h2>

            <p className="mt-6 text-xl text-gray-400">
              Let’s build your enterprise transformation ecosystem.
            </p>

          </div>

          <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl">

            <div className="grid gap-8 md:grid-cols-2">

              <input
                placeholder="Full Name"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
              />

              <input
                placeholder="Email"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
              />

            </div>

            <textarea
              rows={6}
              placeholder="Tell us about your project"
              className="mt-8 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
            />

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-8 py-4 font-semibold shadow-[0_0_25px_rgba(0,255,255,0.25)]">
              Submit Inquiry
            </button>

          </div>

        </section>

      )}

      {/* CONSULTATION POPUP */}

      {consultOpen && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

          <div className="relative w-full max-w-xl rounded-[32px] border border-cyan-500/20 bg-[#081120] p-6 shadow-[0_0_60px_rgba(0,255,255,0.15)]">

            <button
              onClick={() => setConsultOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
            >

              <X className="h-5 w-5" />

            </button>

            <h2 className="text-3xl font-black">
              Schedule Consultation
            </h2>

            <p className="mt-3 text-gray-400">
              Connect with TekMark transformation experts.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">

              <input
                placeholder="Name"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
              />

              <input
                placeholder="Email"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
              />

              <input
                placeholder="Phone"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
              />

              <input
                placeholder="Organization"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
              />

            </div>

            <textarea
              placeholder="Define Business Requirement"
              className="mt-4 min-h-[110px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
            />

            <select className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none">

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

            <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 py-4 font-semibold shadow-[0_0_25px_rgba(0,255,255,0.25)]">

              Submit Request

            </button>

          </div>

        </div>

      )}

    </main>
  );
}