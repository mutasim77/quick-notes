import { IconType } from "react-icons";
import { FaLightbulb } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { GiProgression, GiBookshelf, GiClover } from "react-icons/gi";

interface Feature {
    title: string;
    description: string;
    logo: IconType;
}

export const features: Feature[] = [
    {
        title: "💡 Smart Reminders",
        description: "Stay On Top of Your Tasks. Never forget an important deadline again.",
        logo: FaLightbulb
    },
    {
        title: "🔒 Secure Encryption",
        description: "Protect Your Private Notes. Keep your thoughts safe and secure.",
        logo: GrSecure
    },
    {
        title: "📈 Progress Tracking",
        description: "Monitor Your Academic Journey. Stay motivated with progress insights.",
        logo: GiProgression
    },
    {
        title: "📚 Integrated Learning",
        description: "Sync Your Study Materials. Seamlessly integrate with your classes.",
        logo: GiBookshelf
    },
    {
        title: "🌟 Inspirational Quotes",
        description: "Find Daily Motivation. Fuel your inspiration every day.",
        logo: GiClover
    },
    {
        title: "🎯 Goal Setting",
        description: "Set and Achieve Your Objectives. Keep your goals organized and on track.",
        logo: GoGoal
    }
];
