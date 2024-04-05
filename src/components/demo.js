import { img } from "../components/img";

export const SubscriptionPlans = [
    {
        planLogo: img.basic,
        plan: "Normal User",
        info1: "Ads will be display in an appropriate section",
        info2: "Limited access to the content of the job post",
        info3: "Ability to save only 3 job posts",
        info4: "Can communicate with other users",
        price: "Free",
        planId: "FREE_USER",
    },
    {
        planLogo: img.standard,
        plan: "Job Seeker",
        info1: "Move up to top as a Featured applicant when recruiter search",
        info2: "Access to all job posts with detail salary Information",
        info3: "Ability to save unlimited job posts",
        info4: "Will be notified whenever there is a new job post",
        price: "9.99$",
        planId: "JOBSEEKER",
    },
    {
        planLogo: img.premium,
        plan: "Recruiter",
        info1: "Ability to create job post",
        info2: "Ability to view expanded profile",
        info3: "Ability to save unlimited candidates",
        info4: "Alert for new candidates who meet determined criteria",
        price: "29.99$",
        planId: "RECRUITER",
    },
];