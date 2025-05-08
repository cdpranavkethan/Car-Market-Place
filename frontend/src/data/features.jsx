import { 
  BarChart3, 
  Users, 
  Zap, 
  Shield, 
  MessageSquare, 
  Settings 
} from "lucide-react"

export const features = [
  {
    title: "Advanced Analytics",
    description: "Get detailed insights into your team's performance with our comprehensive analytics dashboard.",
    icon: <BarChart3 className="size-5" />,
  },
  {
    title: "Team Collaboration",
    description: "Work seamlessly with your team members through real-time collaboration features.",
    icon: <Users className="size-5" />,
  },
  {
    title: "Automation",
    description: "Automate repetitive tasks and workflows to save time and reduce errors.",
    icon: <Zap className="size-5" />,
  },
  {
    title: "Enterprise Security",
    description: "Your data is protected with enterprise-grade security and compliance features.",
    icon: <Shield className="size-5" />,
  },
  {
    title: "Communication Tools",
    description: "Built-in messaging and video conferencing for seamless team communication.",
    icon: <MessageSquare className="size-5" />,
  },
  {
    title: "Customization",
    description: "Tailor the platform to your team's needs with extensive customization options.",
    icon: <Settings className="size-5" />,
  },
] 