
import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "5+",
    label: "Active Users, all from Techwise",
  },
  {
    value: "$2B+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating, according to Eziz",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Because who *doesn’t* want AI to tell them exactly how much money they’ve blown on overpriced coffee?",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Snap a pic",
    description:
      "Smart Receipt Scanner",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "We’ll help you create a budget you’ll *definitely* stick to… for at least a week.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "All your accounts in one place — so you can watch your money vanish in real-time, no matter where it’s hiding.",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency",
    description: "now with live currency conversions so you know *exactly* how broke you are abroad.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description: "We’ll give you genius-level advice like ‘stop buying stuff you don’t need.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Eziz Bagshiyev",
    role: "Small Business Owner",
    image: "/Eziz.jpg",
    quote:
      "Team 7 Finance Project didn’t just transform how I manage my business finances—it also made me realize how much money I was setting on fire every month. Thanks, AI, for the intervention I didn’t know I needed. ",
  },
  {
    name: "Felipe Rivera",
    role: "Freelancer",
    image: "/Felipe.png",
    quote:
      "The receipt scanning feature saves me hours every month. Now I can spend that time doing what freelancers do best—drinking coffee and pretending to work.",
  },
  {
    name: "Akon Abazary",
    role: "Financial Advisor",
    image: "/Akon.jpg",
    quote:
      "I recommend Team 7 Finance Project to all my clients. The multi-currency support is amazing—now they can track exactly how broke they are in *multiple* languages.",
  },
];
