"use client"

import { useState, useEffect } from "react"
import { motion } from 'framer-motion'
import { Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Star,
  Users,
  BarChart3,
  Shield,
  TrendingUp,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  Building2,
  Download,
  ChevronUp,
  DollarSign,
  Clock,
  Lock,
  Award,
  Calendar,
  Phone,
  MapPin,
  AlertTriangle,
  Database,
  Cloud,
  Cpu,
  Menu,
  X,
  ChevronDown,
  CheckCircle,
  Globe,
  FileText,
  Code,
  Layers,
} from "lucide-react"

// Stable position generator function
function getStablePosition(index: number, type: 'particle' | 'orb' | 'small-orb' | 'med-orb') {
  const seed = `smarttracker-${type}-${index}`
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i)
    hash |= 0 // Convert to 32bit integer
  }
  const left = Math.abs((Math.sin(hash) * 10000) % 100)
  const top = Math.abs((Math.cos(hash) * 10000) % 100)
  return { left, top }
}

export default function LandingPage() {
  const [isDark, setIsDark] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showHighlights, setShowHighlights] = useState(false)
  const [attendanceCount, setAttendanceCount] = useState(0)
  const [productivityCount, setProductivityCount] = useState(0)
  const [savingsCount, setSavingsCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const heroTitle = "Transform Your Enterprise Workforce with AI-Powered Analytics"
  const heroSubtitle =
    "Reduce operational costs by 40%, increase productivity by 35%, and ensure 100% compliance with our enterprise-grade workforce management platform trusted by Fortune 500 companies."

  const navigationItems = [
    {
      name: "Features",
      items: ["AI Attendance", "Productivity Analytics", "Compliance Management", "Blockchain Rewards"],
    },
    {
      name: "Technology",
      items: ["AI & Machine Learning", "Blockchain Security", "Cloud Infrastructure", "API Integration"],
    },
    {
      name: "Resources",
      items: ["Case Studies", "Whitepapers", "Documentation", "API Docs"],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHighlights(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const animateCounter = (setter: (value: number) => void, target: number, duration: number) => {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(start))
        }
      }, 16)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(setAttendanceCount, 1240000, 2000)
          animateCounter(setProductivityCount, 95, 1500)
          animateCounter(setSavingsCount, 35, 1800)
        }
      })
    })

    const statsElement = document.getElementById("animated-stats")
    if (statsElement) observer.observe(statsElement)

    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const clientLogos = [
    { name: "TechCorp", logo: "/techcorp-logo.png" },
    { name: "Global Industries", logo: "/placeholder-da4r5.png" },
    { name: "Enterprise Solutions", logo: "/placeholder-ycxau.png" },
    { name: "Innovation Labs", logo: "/innovation-labs-logo.png" },
    { name: "Future Systems", logo: "/placeholder-01af3.png" },
  ]

  const problems = [
    {
      icon: AlertTriangle,
      title: "Manual Attendance Tracking",
      description: "Time-consuming processes prone to errors and fraud",
      impact: "15-20% productivity loss",
    },
    {
      icon: Clock,
      title: "Inefficient Resource Allocation",
      description: "Lack of real-time insights into workforce utilization",
      impact: "$2M+ annual waste",
    },
    {
      icon: Shield,
      title: "Compliance Risks",
      description: "Difficulty meeting regulatory requirements and audit trails",
      impact: "Legal exposure",
    },
  ]

  const features = [
    {
      icon: Users,
      title: "AI-Powered Attendance",
      description: "Facial recognition with 99.9% accuracy and anti-spoofing technology",
      benefit: "Zero time theft",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive productivity insights with predictive modeling",
      benefit: "35% efficiency gain",
    },
    {
      icon: Shield,
      title: "Compliance Automation",
      description: "Automated reporting for labor laws and industry regulations",
      benefit: "100% audit ready",
    },
    {
      icon: Award,
      title: "Blockchain Rewards",
      description: "Transparent, gamified incentive system with EMP-Coins",
      benefit: "40% engagement boost",
    },
  ]

  const benefits = [
    {
      icon: DollarSign,
      value: "40%",
      title: "Cost Reduction",
      description: "Average operational savings within 6 months",
    },
    {
      icon: TrendingUp,
      value: "35%",
      title: "Productivity Increase",
      description: "Measurable improvement in workforce efficiency",
    },
    {
      icon: Clock,
      value: "90%",
      title: "Time Savings",
      description: "Reduction in administrative overhead",
    },
    {
      icon: Shield,
      value: "100%",
      title: "Compliance Rate",
      description: "Full regulatory compliance and audit readiness",
    },
  ]

  const techStack = [
    {
      icon: Cpu,
      title: "Advanced AI/ML",
      description: "Computer vision, NLP, and predictive analytics",
    },
    {
      icon: Database,
      title: "Blockchain Security",
      description: "Immutable records and transparent reward system",
    },
    {
      icon: Cloud,
      title: "Enterprise Cloud",
      description: "99.9% uptime with global scalability",
    },
    {
      icon: Lock,
      title: "Zero-Trust Security",
      description: "End-to-end encryption and multi-factor authentication",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Chief Operations Officer",
      company: "TechCorp Industries",
      image: "/professional-woman-diverse.png",
      quote:
        "SmartTracker transformed our workforce management completely. The ROI was evident within the first quarter.",
      rating: 5,
      results: "42% cost reduction, 38% productivity increase",
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Human Resources",
      company: "Global Manufacturing",
      image: "/professional-man.png",
      quote: "The compliance features alone saved us from potential regulatory issues worth millions in fines.",
      rating: 5,
      results: "100% audit compliance, zero violations",
    },
    {
      name: "Dr. Emily Watson",
      role: "Director of Operations",
      company: "Healthcare Systems Inc",
      image: "/professional-woman-manager.png",
      quote: "The AI-powered insights helped us optimize our workforce allocation across multiple facilities.",
      rating: 5,
      results: "35% efficiency gain, $1.2M annual savings",
    },
  ]

  const comparisonData = [
    {
      metric: "Setup Time",
      manual: "6-8 weeks",
      ai: "2-3 days",
      improvement: "90% faster",
    },
    {
      metric: "Accuracy Rate",
      manual: "85-90%",
      ai: "99.9%",
      improvement: "10%+ improvement",
    },
    {
      metric: "Processing Cost",
      manual: "$15/employee/month",
      ai: "$3/employee/month",
      improvement: "80% reduction",
    },
    {
      metric: "Compliance Risk",
      manual: "High",
      ai: "Zero",
      improvement: "100% mitigation",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${isDark ? "dark bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950" : "bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"}`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-indigo-600/5 via-purple-600/5 to-cyan-600/5" : "bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-cyan-100/30"}`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />

        {/* Floating particles with deterministic positioning */}
        {[...Array(8)].map((_, i) => {
          const { left, top } = getStablePosition(i, 'particle')
          return (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full backdrop-blur-sm ${isDark ? "bg-white/10 shadow-lg shadow-indigo-500/20" : "bg-indigo-200/40 shadow-lg shadow-indigo-300/30"} animate-float-particle-${i % 4}`}
              style={{
                left: `${left.toFixed(4)}%`,
                top: `${top.toFixed(4)}%`,
                animationDelay: `${(i * 0.5).toFixed(2)}s`,
              }}
            />
          )
        })}

        {/* Small orbs */}
        {[...Array(8)].map((_, i) => {
          const { left, top } = getStablePosition(i, 'small-orb');
          return (
            <div
              key={`small-${i}`}
              className={`absolute w-4 h-4 rounded-full backdrop-blur-sm ${isDark ? "bg-indigo-400/30 shadow-lg shadow-indigo-500/20" : "bg-indigo-200/40 shadow-lg shadow-indigo-300/30"} animate-float-orb-fast`}
              style={{
                left: `${left.toFixed(4)}%`,
                top: `${top.toFixed(4)}%`,
                animationDelay: `${(i * 0.7).toFixed(2)}s`,
              }}
            />
          )
        })}

        {/* Medium orbs */}
        {[...Array(4)].map((_, i) => {
          const { left, top } = getStablePosition(i, 'med-orb');
          return (
            <div
              key={`med-${i}`}
              className={`absolute w-10 h-10 rounded-full backdrop-blur-md ${isDark ? "bg-purple-400/20 shadow-lg shadow-purple-500/15" : "bg-purple-200/30 shadow-lg shadow-purple-300/20"} animate-float-orb-med`}
              style={{
                left: `${left.toFixed(4)}%`,
                top: `${top.toFixed(4)}%`,
                animationDelay: `${(i * 0.9).toFixed(2)}s`,
              }}
            />
          )
        })}
      </div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${isDark
          ? "bg-slate-900/80 border-b border-slate-700/50 shadow-lg shadow-indigo-500/5"
          : "bg-white/80 border-b border-gray-200/50 shadow-lg shadow-indigo-300/10"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-600">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>SmartTracker</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${isDark
                      ? "text-gray-300 hover:text-white hover:bg-slate-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"
                      } border`}
                  >
                    <div className="p-4 space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className={`block px-3 py-2 rounded-lg transition-colors ${isDark
                            ? "text-gray-300 hover:text-white hover:bg-slate-700"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            }`}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                size="sm"
                className="hidden md:flex bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Request Demo
              </Button>

              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-colors ${isDark
                  ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${isDark
                  ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 pt-20">
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div className="space-y-8" variants={titleVariants} initial="hidden" animate="visible">
                <div className="space-y-6">
                  <h1
                    className={`text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r ${isDark ? "from-white via-indigo-200 to-purple-200" : "from-gray-900 via-indigo-700 to-purple-700"} bg-clip-text text-transparent`}
                  >
                    Transform Your{" "}
                    <span className="relative inline-block">
                      <span
                        className={`bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent typing-text ${isDark ? "drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" : ""}`}
                        style={{
                          animation: "typeWriter 2s steps(18) 0.5s both",
                        }}
                      >
                        Enterprise Workforce
                      </span>
                    </span>{" "}
                    with AI-Powered Analytics
                  </h1>

                  <p
                    className={`text-lg lg:text-xl leading-relaxed ${isDark ? "text-gray-200/90" : "text-gray-700/90"}`}
                  >
                    Reduce operational costs by{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        40%
                      </span>
                      <span
                        className={`absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 -skew-x-12 highlight-swipe backdrop-blur-sm ${showHighlights ? "animate-highlight-1" : ""}`}
                      />
                    </span>
                    ,{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        increase productivity by 35%
                      </span>
                      <span
                        className={`absolute inset-0 bg-gradient-to-r from-green-400/30 to-emerald-400/30 -skew-x-12 highlight-swipe backdrop-blur-sm ${showHighlights ? "animate-highlight-2" : ""}`}
                      />
                    </span>
                    , and ensure{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        100% compliance
                      </span>
                      <span
                        className={`absolute inset-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 -skew-x-12 highlight-swipe backdrop-blur-sm ${showHighlights ? "animate-highlight-3" : ""}`}
                      />
                    </span>{" "}
                    with our{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        enterprise-grade
                      </span>
                      <span
                        className={`absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 -skew-x-12 highlight-swipe backdrop-blur-sm ${showHighlights ? "animate-highlight-4" : ""}`}
                      />
                    </span>{" "}
                    workforce management platform{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-semibold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                        trusted by Fortune 500 companies
                      </span>
                      <span
                        className={`absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-violet-400/30 -skew-x-12 highlight-swipe backdrop-blur-sm ${showHighlights ? "animate-highlight-5" : ""}`}
                      />
                    </span>
                    .
                  </p>
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-500 text-white px-8 py-4 text-lg transition-all duration-500 hover:scale-105 shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-400/40 border-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Calendar className="mr-2 h-5 w-5 relative z-10" />
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={`group relative overflow-hidden px-8 py-4 text-lg transition-all duration-500 hover:scale-105 backdrop-blur-sm ${isDark
                        ? "border-2 border-indigo-400/50 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-300 shadow-lg shadow-indigo-500/10"
                        : "border-2 border-indigo-500/50 text-indigo-600 hover:bg-indigo-500/10 hover:border-indigo-400 shadow-lg shadow-indigo-300/20"
                      }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Eye className="mr-2 h-5 w-5 relative z-10" />   {/* 👈 Eye icon */}
                    <span className="relative z-10">See Live Demo</span>
                  </Button>
                </motion.div>

                <motion.div
                  className="pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <p className={`text-sm font-medium mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Trusted by Fortune 500 companies worldwide
                  </p>
                  <div className="flex flex-wrap items-center gap-8 opacity-60">
                    {clientLogos.map((client, index) => (
                      <img
                        key={index}
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="lg:pl-16"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Card
                  className={`p-8 backdrop-blur-sm border ${isDark ? "bg-slate-900/80 border-slate-700/50" : "bg-white/80 border-gray-200/50"
                    }`}
                >
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        Get Your Demo in 30 Seconds
                      </h3>
                      <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        See how Fortune 500 companies save 40% on workforce costs
                      </p>
                    </div>

                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${isDark
                          ? "bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-indigo-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500"
                          } focus:outline-none focus:ring-2 focus:ring-indigo-500/20`}
                      />
                      <input
                        type="email"
                        placeholder="Work Email"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${isDark
                          ? "bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-indigo-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500"
                          } focus:outline-none focus:ring-2 focus:ring-indigo-500/20`}
                      />
                      <input
                        type="text"
                        placeholder="Company Name"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${isDark
                          ? "bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-indigo-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500"
                          } focus:outline-none focus:ring-2 focus:ring-indigo-500/20`}
                      />
                      <select
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${isDark
                          ? "bg-slate-800 border-slate-600 text-white focus:border-indigo-400"
                          : "bg-white border-gray-300 text-gray-900 focus:border-indigo-500"
                          } focus:outline-none focus:ring-2 focus:ring-indigo-500/20`}
                      >
                        <option>Company Size</option>
                        <option>50-200 employees</option>
                        <option>200-1000 employees</option>
                        <option>1000+ employees</option>
                      </select>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white py-3">
                      Get Instant Demo Access
                    </Button>

                    <p className={`text-xs text-center ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      No spam. Unsubscribe anytime. GDPR compliant.
                    </p>
                  </div>
                </Card>

                <motion.div
                  id="animated-stats"
                  className="grid grid-cols-3 gap-4 mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
                      {attendanceCount.toLocaleString()}+
                    </div>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>Records Processed</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
                      {productivityCount}%
                    </div>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>Productivity Boost</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
                      {savingsCount}%
                    </div>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>Cost Reduction</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          className={`py-8 border-y ${isDark ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-gray-200"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2">
                <Shield className={`h-6 w-6 ${isDark ? "text-green-400" : "text-green-600"}`} />
                <span className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  GDPR Compliant
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className={`h-6 w-6 ${isDark ? "text-green-400" : "text-green-600"}`} />
                <span className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  SOC 2 Type II
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className={`h-6 w-6 ${isDark ? "text-green-400" : "text-green-600"}`} />
                <span className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className={`h-6 w-6 ${isDark ? "text-green-400" : "text-green-600"}`} />
                <span className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Blockchain Secured
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className={`h-6 w-6 ${isDark ? "text-green-400" : "text-green-600"}`} />
                <span className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  99.9% Uptime SLA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <Card
              className={`p-12 backdrop-blur-xl border-0 shadow-2xl ${isDark ? "bg-slate-900/40 shadow-indigo-500/10" : "bg-white/40 shadow-indigo-300/20"}`}
            >
              <motion.div
                className="text-center mb-16"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${isDark ? "from-white via-red-200 to-orange-200" : "from-gray-900 via-red-700 to-orange-700"} bg-clip-text text-transparent`}
                >
                  The Enterprise Challenge
                </h2>
                <p
                  className={`text-xl lg:text-2xl max-w-4xl mx-auto ${isDark ? "text-gray-200/90" : "text-gray-700/90"}`}
                >
                  Traditional workforce management creates operational inefficiencies that cost enterprises millions
                  annually
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {problems.map((problem, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card
                      className={`group transition-all duration-500 hover:scale-105 hover:-translate-y-2 backdrop-blur-xl border-0 shadow-xl ${isDark
                        ? "bg-red-900/20 shadow-red-500/20 hover:shadow-red-400/30"
                        : "bg-red-50/60 shadow-red-300/30 hover:shadow-red-400/40"
                        }`}
                    >
                      <CardContent className="p-8 text-center space-y-6">
                        <div
                          className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm ${isDark
                            ? "bg-red-500/20 shadow-lg shadow-red-500/30"
                            : "bg-red-100/80 shadow-lg shadow-red-300/40"
                            }`}
                        >
                          <problem.icon
                            className={`h-10 w-10 ${isDark ? "text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.6)]" : "text-red-600"}`}
                          />
                        </div>
                        <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                          {problem.title}
                        </h3>
                        <p className={`${isDark ? "text-gray-300/90" : "text-gray-600/90"}`}>{problem.description}</p>
                        <div
                          className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${isDark
                            ? "bg-red-500/20 text-red-400 shadow-lg shadow-red-500/20"
                            : "bg-red-100/80 text-red-700 shadow-lg shadow-red-300/30"
                            }`}
                        >
                          {problem.impact}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <Card
              className={`p-12 backdrop-blur-xl border-0 shadow-2xl ${isDark
                ? "bg-slate-900/40 shadow-indigo-500/10"
                : "bg-white/40 shadow-indigo-300/20"
                }`}
            >
              <motion.div
                className="text-center mb-16"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${isDark
                    ? "from-white via-indigo-200 to-cyan-200"
                    : "from-gray-900 via-indigo-700 to-cyan-700"
                    } bg-clip-text text-transparent`}
                >
                  Our Enterprise Solution
                </h2>
                <p
                  className={`text-xl lg:text-2xl max-w-4xl mx-auto ${isDark ? "text-gray-200/90" : "text-gray-700/90"
                    }`}
                >
                  Comprehensive AI-powered workforce management that transforms your
                  operations and delivers measurable ROI
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {features.map((feature, index) => (
                  <motion.div key={index} variants={itemVariants} className="h-full">
                    <Card
                      className={`h-full group transition-all duration-500 hover:-translate-y-2 backdrop-blur-xl border-0 shadow-xl ${isDark
                        ? "bg-gradient-to-br from-slate-800/20 to-slate-700/20 shadow-indigo-500/20 hover:shadow-indigo-400/30"
                        : "bg-gradient-to-br from-white/60 to-gray-50/60 shadow-indigo-300/30 hover:shadow-indigo-400/40"
                        }`}
                    >
                      <CardContent className="p-8 text-center space-y-6 h-full flex flex-col">
                        <div
                          className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center ${isDark
                            ? "bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 shadow-lg shadow-indigo-500/30"
                            : "bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 shadow-lg shadow-indigo-300/40"
                            }`}
                        >
                          <feature.icon className="h-10 w-10 text-white" />
                        </div>
                        <h3
                          className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"
                            }`}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className={`${isDark ? "text-gray-400/90" : "text-gray-600/90"
                            } flex-grow`}
                        >
                          {feature.description}
                        </p>
                        <div
                          className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${isDark
                            ? "bg-green-500/20 text-green-400 shadow-lg shadow-green-500/20"
                            : "bg-green-100/80 text-green-700 shadow-lg shadow-green-300/30"
                            }`}
                        >
                          {feature.benefit}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <Card
              className={`p-12 backdrop-blur-xl border-0 shadow-2xl ${isDark ? "bg-slate-900/40 shadow-indigo-500/10" : "bg-white/40 shadow-indigo-300/20"}`}
            >
              <motion.div
                className="text-center mb-16"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${isDark ? "from-white via-green-200 to-emerald-200" : "from-gray-900 via-green-700 to-emerald-700"} bg-clip-text text-transparent`}
                >
                  Measurable Business Impact
                </h2>
                <p
                  className={`text-xl lg:text-2xl max-w-4xl mx-auto ${isDark ? "text-gray-200/90" : "text-gray-700/90"}`}
                >
                  Real results from enterprise implementations across industries
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {benefits.map((benefit, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card
                      className={`group text-center p-8 transition-all duration-500 hover:scale-105 backdrop-blur-xl border-0 shadow-xl ${isDark
                        ? "bg-gradient-to-br from-green-900/20 to-emerald-900/20 shadow-green-500/20 hover:shadow-green-400/30"
                        : "bg-gradient-to-br from-green-50/60 to-emerald-50/60 shadow-green-300/30 hover:shadow-green-400/40"
                        }`}
                    >
                      <benefit.icon
                        className={`h-12 w-12 mx-auto mb-4 ${isDark ? "text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]" : "text-green-600"}`}
                      />
                      <div
                        className={`text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent`}
                      >
                        {benefit.value}
                      </div>
                      <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        {benefit.title}
                      </h3>
                      <p className={`text-sm ${isDark ? "text-gray-400/90" : "text-gray-600/90"}`}>
                        {benefit.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <Card
              className={`p-12 backdrop-blur-xl border-0 shadow-2xl ${isDark ? "bg-slate-900/40 shadow-indigo-500/10" : "bg-white/40 shadow-indigo-300/20"}`}
            >
              <motion.div
                className="text-center mb-16"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${isDark ? "from-white via-indigo-200 to-purple-200" : "from-gray-900 via-indigo-700 to-purple-700"} bg-clip-text text-transparent`}
                >
                  Enterprise-Grade Technology
                </h2>
                <p
                  className={`text-xl lg:text-2xl max-w-4xl mx-auto ${isDark ? "text-gray-200/90" : "text-gray-700/90"}`}
                >
                  Built on cutting-edge infrastructure designed for scale, security, and reliability
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {techStack.map((tech, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    {/* Enhanced technology cards with glassmorphism */}
                    <Card
                      className={`group text-center p-8 transition-all duration-500 hover:scale-105 backdrop-blur-xl border-0 shadow-xl ${isDark
                        ? "bg-slate-800/40 shadow-indigo-500/20 hover:shadow-indigo-400/30"
                        : "bg-white/60 shadow-indigo-300/30 hover:shadow-indigo-400/40"
                        }`}
                    >
                      <tech.icon
                        className={`h-12 w-12 mx-auto mb-4 ${isDark ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" : "text-indigo-600"}`}
                      />
                      <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        {tech.title}
                      </h3>
                      <p className={`text-sm ${isDark ? "text-gray-400/90" : "text-gray-600/90"}`}>
                        {tech.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <Card
              className={`p-12 backdrop-blur-xl border-0 shadow-2xl ${isDark
                ? "bg-slate-900/40 shadow-indigo-500/10"
                : "bg-white/40 shadow-indigo-300/20"
                }`}
            >
              <motion.div
                className="text-center mb-16"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${isDark
                    ? "from-white via-indigo-200 to-purple-200"
                    : "from-gray-900 via-indigo-700 to-purple-700"
                    } bg-clip-text text-transparent`}
                >
                  Success Stories
                </h2>
                <p
                  className={`text-xl lg:text-2xl max-w-4xl mx-auto ${isDark ? "text-gray-200/90" : "text-gray-700/90"
                    }`}
                >
                  Trusted by industry leaders worldwide
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 items-stretch">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="h-full"
                  >
                    <Card
                      className={`h-full flex flex-col transition-all duration-500 hover:scale-105 hover:-translate-y-2 backdrop-blur-xl border-0 shadow-xl ${isDark
                        ? "bg-slate-800/40 shadow-indigo-500/20 hover:shadow-indigo-400/30"
                        : "bg-white/60 shadow-indigo-300/30 hover:shadow-indigo-400/40"
                        }`}
                    >
                      <CardContent className="p-8 space-y-6 flex flex-col flex-grow">
                        {/* Rating Stars */}
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 fill-yellow-400 text-yellow-400 ${isDark
                                ? "drop-shadow-[0_0_4px_rgba(251,191,36,0.6)]"
                                : ""
                                }`}
                            />
                          ))}
                        </div>

                        {/* Quote */}
                        <p
                          className={`italic ${isDark ? "text-gray-300/90" : "text-gray-600/90"
                            } flex-grow`}
                        >
                          "{testimonial.quote}"
                        </p>

                        {/* Results Badge */}
                        <div
                          className={`px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm ${isDark
                            ? "bg-green-500/20 text-green-400 shadow-lg shadow-green-500/20"
                            : "bg-green-100/80 text-green-700 shadow-lg shadow-green-300/30"
                            }`}
                        >
                          {testimonial.results}
                        </div>

                        {/* Profile */}
                        <div className="flex items-center space-x-3 mt-auto">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <h4
                              className={`font-semibold ${isDark ? "text-white" : "text-gray-900"
                                }`}
                            >
                              {testimonial.name}
                            </h4>
                            <p
                              className={`text-sm ${isDark ? "text-gray-400/90" : "text-gray-600/90"
                                }`}
                            >
                              {testimonial.role}
                            </p>
                            <p
                              className={`text-sm font-medium ${isDark ? "text-indigo-400" : "text-indigo-600"
                                }`}
                            >
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <Card
              className={`p-12 backdrop-blur-xl border-0 shadow-2xl ${isDark ? "bg-slate-900/40 shadow-indigo-500/10" : "bg-white/40 shadow-indigo-300/20"}`}
            >
              <motion.div
                className="text-center mb-16"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${isDark ? "from-white via-indigo-200 to-cyan-200" : "from-gray-900 via-indigo-700 to-cyan-700"} bg-clip-text text-transparent`}
                >
                  Ready to Transform Your Workforce?
                </h2>
                <p
                  className={`text-xl lg:text-2xl max-w-4xl mx-auto mb-12 ${isDark ? "text-gray-200/90" : "text-gray-700/90"}`}
                >
                  Join thousands of enterprises already benefiting from our AI-powered workforce management platform
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-500 text-white px-8 py-4 text-lg transition-all duration-500 hover:scale-105 shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-400/40 border-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Calendar className="mr-2 h-5 w-5 relative z-10" />
                    <span className="relative z-10">Schedule Demo</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                  </Button>
                  <a
                    href="https://pdflink.to/whitepaper07/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className={`group relative overflow-hidden px-8 py-4 text-lg transition-all duration-500 hover:scale-105 backdrop-blur-sm ${isDark
                        ? "border-2 border-indigo-400/50 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-300 shadow-lg shadow-indigo-500/10"
                        : "border-2 border-indigo-500/50 text-indigo-600 hover:bg-indigo-500/10 hover:border-indigo-400 shadow-lg shadow-indigo-300/20"
                        }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Eye className="mr-2 h-5 w-5 relative z-10" />
                      <span className="relative z-10">View Whitepaper</span>
                    </Button>
                  </a>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <Phone
                    className={`h-12 w-12 mx-auto ${isDark ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" : "text-indigo-600"}`}
                  />
                  <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                    Sales Inquiries
                  </h3>
                  <p className={`${isDark ? "text-gray-400/90" : "text-gray-600/90"}`}>+91 8984***400</p>
                </div>
                <div className="space-y-4">
                  <Mail
                    className={`h-12 w-12 mx-auto ${isDark ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" : "text-indigo-600"}`}
                  />
                  <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                    Enterprise Support
                  </h3>
                  <p className={`${isDark ? "text-gray-400/90" : "text-gray-600/90"}`}>enterprise@smarttracker.com</p>
                </div>
                <div className="space-y-4">
                  <MapPin
                    className={`h-12 w-12 mx-auto ${isDark ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" : "text-indigo-600"}`}
                  />
                  <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Headquarters</h3>
                  <p className={`${isDark ? "text-gray-400/90" : "text-gray-600/90"}`}>Bhubaneswar, IN</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <Card
              className={`p-12 backdrop-blur-xl border-0 shadow-2xl ${isDark ? "bg-slate-900/40 shadow-indigo-500/10" : "bg-white/40 shadow-indigo-300/20"
                }`}
            >
              <motion.div
                className="text-center mb-16"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${isDark ? "from-white via-indigo-200 to-purple-200" : "from-gray-900 via-indigo-700 to-purple-700"} bg-clip-text text-transparent`}
                >
                  Manual Process vs. Our AI System
                </h2>
                <p
                  className={`text-xl lg:text-2xl max-w-4xl mx-auto ${isDark ? "text-gray-200/90" : "text-gray-700/90"}`}
                >
                  See the dramatic difference our enterprise solution makes
                </p>
              </motion.div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${isDark ? "border-slate-700" : "border-gray-200"}`}>
                      <th className={`text-left py-4 px-6 font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                        Metric
                      </th>
                      <th className={`text-center py-4 px-6 font-semibold ${isDark ? "text-red-400" : "text-red-600"}`}>
                        Manual Process
                      </th>
                      <th
                        className={`text-center py-4 px-6 font-semibold ${isDark ? "text-green-400" : "text-green-600"}`}
                      >
                        SmartTracker AI
                      </th>
                      <th
                        className={`text-center py-4 px-6 font-semibold ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
                      >
                        Improvement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <motion.tr
                        key={index}
                        className={`border-b ${isDark ? "border-slate-700/50" : "border-gray-100"}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <td className={`py-4 px-6 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                          {row.metric}
                        </td>
                        <td className={`py-4 px-6 text-center ${isDark ? "text-red-400" : "text-red-600"}`}>
                          {row.manual}
                        </td>
                        <td className={`py-4 px-6 text-center ${isDark ? "text-green-400" : "text-green-600"}`}>
                          {row.ai}
                        </td>
                        <td
                          className={`py-4 px-6 text-center font-semibold ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
                        >
                          {row.improvement}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <Card
              className={`p-12 backdrop-blur-xl border-0 shadow-2xl ${isDark ? "bg-slate-900/40 shadow-indigo-500/10" : "bg-white/40 shadow-indigo-300/20"}`}
            >
              <motion.div
                className="text-center mb-16"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${isDark ? "from-white via-indigo-200 to-purple-200" : "from-gray-900 via-indigo-700 to-purple-700"} bg-clip-text text-transparent`}
                >
                  Live Dashboard Preview
                </h2>
                <p
                  className={`text-xl lg:text-2xl max-w-4xl mx-auto ${isDark ? "text-gray-200/90" : "text-gray-700/90"}`}
                >
                  Real-time insights that drive business decisions
                </p>
              </motion.div>

              <div className="relative">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img src="/hr-dashboard.png" alt="HR Dashboard Preview" className="w-full h-auto" />

                  <motion.div
                    className={`absolute top-4 right-4 backdrop-blur-xl px-4 py-2 rounded-full text-sm font-semibold shadow-xl ${isDark ? "bg-green-500/20 text-green-400 shadow-green-500/30" : "bg-green-100/80 text-green-700 shadow-green-300/40"}`}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    92% Productivity
                  </motion.div>
                  <motion.div
                    className={`absolute bottom-4 left-4 backdrop-blur-xl px-4 py-2 rounded-full text-sm font-semibold shadow-xl ${isDark ? "bg-indigo-500/20 text-indigo-400 shadow-indigo-500/30" : "bg-indigo-100/80 text-indigo-700 shadow-indigo-300/40"}`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  >
                    80 EMP-Coins Today
                  </motion.div>
                  <motion.div
                    className={`absolute top-1/2 left-4 backdrop-blur-xl px-4 py-2 rounded-full text-sm font-semibold shadow-xl ${isDark ? "bg-blue-500/20 text-blue-400 shadow-blue-500/30" : "bg-blue-100/80 text-blue-700 shadow-blue-300/40"}`}
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  >
                    $2.4M Saved This Quarter
                  </motion.div>
                </motion.div>

                <div className="flex justify-center mt-8 space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`backdrop-blur-sm ${isDark ? "border-indigo-400/50 text-indigo-300 hover:bg-indigo-500/20" : "border-indigo-500/50 text-indigo-600 hover:bg-indigo-500/10"}`}
                  >
                    HR Dashboard
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`backdrop-blur-sm ${isDark ? "border-indigo-400/50 text-indigo-300 hover:bg-indigo-500/20" : "border-indigo-500/50 text-indigo-600 hover:bg-indigo-500/10"}`}
                  >
                    Analytics View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`backdrop-blur-sm ${isDark ? "border-indigo-400/50 text-indigo-300 hover:bg-indigo-500/20" : "border-indigo-500/50 text-indigo-600 hover:bg-indigo-500/10"}`}
                  >
                    Compliance Report
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <Card
              className={`p-12 backdrop-blur-xl border-0 shadow-2xl ${isDark ? "bg-slate-900/40 shadow-indigo-500/10" : "bg-white/40 shadow-indigo-300/20"
                }`}
            >
              <motion.div
                className="text-center mb-16"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${isDark ? "from-white via-indigo-200 to-purple-200" : "from-gray-900 via-indigo-700 to-purple-700"} bg-clip-text text-transparent`}
                >
                  For Developers
                </h2>
                <p
                  className={`text-xl lg:text-2xl max-w-4xl mx-auto ${isDark ? "text-gray-200/90" : "text-gray-700/90"}`}
                >
                  Enterprise-grade APIs and SDKs for seamless integration
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card
                    className={`p-8 h-full ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"}`}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <Code className={`h-8 w-8 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} />
                      <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>RESTful API</h3>
                    </div>
                    <div className={`bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto`}>
                      <div>curl -X POST https://api.smarttracker.com/v1/attendance</div>
                      <div className="text-gray-500"> -H "Authorization: Bearer YOUR_API_KEY"</div>
                      <div className="text-gray-500"> -H "Content-Type: application/json"</div>
                      <div className="text-gray-500">
                        {" "}
                        -d '{('timestamp": "2025-01-15T09:00:00Z')}'
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>99.9% uptime SLA</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                          Rate limiting: 10,000 req/min
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>Webhook support</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card
                    className={`p-8 h-full ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"}`}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <Layers className={`h-8 w-8 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} />
                      <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                        Security Architecture
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div
                        className={`p-4 rounded-lg border ${isDark ? "bg-slate-700 border-slate-600" : "bg-gray-50 border-gray-200"
                          }`}
                      >
                        <h4 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                          Zero-Trust Architecture
                        </h4>
                        <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                          Every request authenticated and authorized
                        </p>
                      </div>
                      <div
                        className={`p-4 rounded-lg border ${isDark ? "bg-slate-700 border-slate-600" : "bg-gray-50 border-gray-200"
                          }`}
                      >
                        <h4 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                          End-to-End Encryption
                        </h4>
                        <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                          AES-256 encryption for data at rest and in transit
                        </p>
                      </div>
                      <div
                        className={`p-4 rounded-lg border ${isDark ? "bg-slate-700 border-slate-600" : "bg-gray-50 border-gray-200"
                          }`}
                      >
                        <h4 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                          Blockchain Integrity
                        </h4>
                        <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                          Immutable audit trails and tamper-proof records
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              <div className="text-center mt-12">
                <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white">
                  <FileText className="mr-2 h-5 w-5" />
                  View Full API Documentation
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`py-16 px-6 border-t backdrop-blur-xl ${isDark
            ? "bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 border-slate-700/50 shadow-2xl shadow-indigo-500/5"
            : "bg-gradient-to-br from-gray-50/80 via-white/80 to-gray-50/80 border-gray-200/50 shadow-2xl shadow-indigo-300/10"
            }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 shadow-lg shadow-indigo-500/30">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <span
                    className={`text-2xl font-bold bg-gradient-to-r ${isDark ? "from-white to-indigo-200" : "from-gray-900 to-indigo-700"} bg-clip-text text-transparent`}
                  >
                    SmartTracker
                  </span>
                </div>
                <p className={`${isDark ? "text-gray-400/90" : "text-gray-600/90"} max-w-md`}>
                  Enterprise workforce analytics platform trusted by Fortune 500 companies worldwide. Transform your
                  workforce management with AI-powered insights and blockchain security.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/himanshu-sekhar04/" },
                    { icon: Github, href: "https://github.com/Himanshusekharsahoo" },
                    { icon: Mail, href: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3 rounded-xl transition-all duration-300 hover:scale-110 ${isDark
                        ? "bg-slate-800 hover:bg-indigo-600 text-gray-400 hover:text-white"
                        : "bg-white hover:bg-indigo-600 text-gray-600 hover:text-white"
                        }`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Solutions</h3>
                <ul className="space-y-3">
                  {[
                    "AI Attendance Tracking",
                    "Productivity Analytics",
                    "Compliance Management",
                    "Employee Engagement",
                    "Blockchain Rewards",
                    "Real-time Dashboards",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={`transition-colors duration-300 ${isDark ? "text-gray-400 hover:text-indigo-400" : "text-gray-600 hover:text-indigo-600"
                          }`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Resources</h3>
                <ul className="space-y-3">
                  {[
                    "API Documentation",
                    "Case Studies",
                    "Whitepapers",
                    "Security Center",
                    "Compliance Guide",
                    "Developer Tools",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={`transition-colors duration-300 ${isDark ? "text-gray-400 hover:text-indigo-400" : "text-gray-600 hover:text-indigo-600"
                          }`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Company</h3>
                <ul className="space-y-3">
                  {["About Us", "Careers", "Press Kit", "Partners", "Contact Sales", "Support Center"].map(
                    (item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className={`transition-colors duration-300 ${isDark ? "text-gray-400 hover:text-indigo-400" : "text-gray-600 hover:text-indigo-600"
                            }`}
                        >
                          {item}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            <div
              className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${isDark ? "border-slate-700" : "border-gray-200"
                }`}
            >
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                © 2025{" "}
                <a
                  href="https://www.linkedin.com/in/himanshu-sekhar04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-indigo-500 transition-colors duration-300"
                >
                  SmartTracker Enterprise
                </a>
                . All rights reserved.
              </p>

              <div className="flex space-x-6">
                {["Privacy Policy", "Terms of Service", "Security", "GDPR"].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`text-sm transition-colors duration-300 ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                      }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-500 backdrop-blur-xl ${isDark
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-indigo-500/30 hover:shadow-indigo-400/50"
            : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-indigo-300/40 hover:shadow-indigo-400/60"
            }`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  )
}
