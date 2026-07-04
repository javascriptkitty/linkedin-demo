
import LINKEDIN_ASSETS from '@salesforce/resourceUrl/linkedinAssets';

export const LINKEDIN_FEED_CONFIG = {
    currentUser: {
        id: 'current-user',
        name: 'Maya Reyes',
        jobTitle: 'Director of Workforce Strategy at Vantage Clinical Solutions',
        location: 'Chicago, IL',
        avatarPhoto: `${LINKEDIN_ASSETS}/images/avatar_user.png`,
        coverPhoto: `${LINKEDIN_ASSETS}/images/profile_banner.png`,
        isVerified: true,
        isPremium: false,
        profileViewers: 32,
        badges: {
            home: true,
            network: 1,
            jobs: 0,
            messaging: 1,
            notifications: 4
        }
    },

    nav: {
        searchPlaceholder: 'Search',
        activeItem: 'home',
        notifications:{
            home:11,
            network:1,
            jobs:0,
            messaging:1,
            notifications:4
        }
    },

    profileCard: {
        showStats: true,
        showLinks: true
    },

    composer: {
        placeholder: 'Start a post'
    },

    feed: {
        sortLabel: 'Top'
    },

    news: {
        title: 'LinkedIn News',
        showMoreLabel: 'Show more news',
        items: [
            { id: '1', headline: 'Remote work levels stabilize', timeAgo: 'Top news', readersCount: 12402 },
            { id: '2', headline: 'AI roles on the rise in 2024', timeAgo: '2d ago', readersCount: 8941 },
            { id: '3', headline: "Big tech's hiring shift", timeAgo: '4h ago', readersCount: 4128 },
            { id: '4', headline: 'Sustainability in manufacturing', timeAgo: '1d ago', readersCount: 2340 }
        ]
    },

    posts: [
        {
            id: '1',
            authorName: 'Sarah Chen',
            authorTitle: 'Senior CRA at Freelance Clinical Consultant',
            authorPhoto: `${LINKEDIN_ASSETS}/images/avatar_sarah.png`,
            authorVerified: false,
            timeAgo: '3h',
            content: 'Something nobody talks about enough in clinical ops:\nThe coordinators are the ones holding your study together.\nNot the PIs. Not the sponsors.',
            reactions: 62,
            commentsCount: 12,
            repostsCount: 0,
            visibility: 'public',
            reactionTypes: 'like,celebrate,love',
        },
        {
            id: '2',
            variant: 'promoted',
            authorName: 'Adecco',
            authorTitle: '10,058,979 followers',
            authorPhoto: `${LINKEDIN_ASSETS}/images/avatar_adecco.png`,
            authorVerified: false,
            timeAgo: '',
            content: 'Adecco specializes in rapidly placing qualified Clinical Trial Coordinators, CRAs, and site support staff — so you can scale your workforce in weeks, not months.\n\n✅ Pre-vetted clinical talent\n✅ Flexible contract & direct hire options\n✅ Deep expertise in biotech, pharma & CRO environments',
            contentHashtags: '#AdeccoGroup #BusinessLeaders #FutureOfWork The Adecco Group',
            reactions: 18,
            commentsCount: 0,
            repostsCount: 3,
            visibility: 'public',
            mediaType: 'linkCard',
            mediaImageUrl: `${LINKEDIN_ASSETS}/images/adecco_ad_photo.png`,
            mediaTitle: 'Join thousands of companies. Build your best team.',
            mediaDomain: 'adecco.com',
            mediaCtaLabel: 'Learn more',
            mediaCtaUrl: 'https://www.adecco.com/',
            mediaFooterBg: '#ecf3fa',
            reactionTypes: 'like,insightful,love',

        },
        {
            id: '3',
            contextType: 'commented',
            contextText: 'Sarah Chen commented',
            authorName: 'Marcus Lee',
            authorTitle: 'Engineering Lead at ScaleAI',
            authorBadge: '2nd',
            authorPhoto: `${LINKEDIN_ASSETS}/images/avatar_marcus.png`,
            authorVerified: false,
            timeAgo: '1d',
            content: "This is the best summary I've seen on the current state of AI dev tools.",
            reactions: 62,
            commentsCount: 12,
            repostsCount: 0,
            visibility: 'public',
            reactionTypes: 'like,celebrate,love',
        },
        {
            id: '4',
            contextType: 'reposted',
            contextText: 'Sarah Wilson reposted this',
            authorName: 'Sarah Wilson',
            authorTitle: 'Engineering Manager at Stripe',
            authorPhoto: `${LINKEDIN_ASSETS}/images/avatar_sarah.png`,
            authorVerified: false,
            timeAgo: '1w',
            content: 'Hiring great engineers is mostly about creating an environment where they can do their best work.',
            reactions: 214,
            commentsCount: 61,
            repostsCount: 8,
            reactionTypes: 'like,love,support',
        },
        {
            id: '5',
            variant: 'promoted',
            authorName: 'Microsoft',
            authorTitle: '20,485,000 followers',
            authorPhoto: `${LINKEDIN_ASSETS}/images/avatar_microsoft.jpeg`,
            authorVerified: true,
            timeAgo: '2d',
            content: 'Build AI experiences with Azure OpenAI Service and GitHub Copilot. Accelerate development with enterprise-grade security.',
            mediaType: 'image',
            mediaImageUrl: `${LINKEDIN_ASSETS}/images/microsoft_ai.png`,
            reactions:2594,
            commentsCount: 85,
            repostsCount: 112,
            isSponsored: true,
            reactionTypes: 'like,love,insightful',
        },
        {
            id: '6',
            authorName: 'Salesforce',
            authorTitle: '6,628,259 followers',
            authorPhoto: `${LINKEDIN_ASSETS}/images/avatar_salesforce.jpeg`,
            authorVerified: true,
            timeAgo: '4d',
            content: 'Customer Success careers are growing in Mexico City.',
            mediaImageUrl: `${LINKEDIN_ASSETS}/images/salesforce_people.jpeg`,
            mediaType: 'image',
            reactions: 2341,
            commentsCount: 134,
            repostsCount: 87,
            reactionTypes: 'like,celebrate,insightful',
        },
        {
            id: '7',
            variant: 'promoted',
            contextType: 'recommended',
            contextText: 'Recommended for you',
            showFollow: true,
            showDismiss: true,
            authorName: 'GitHub',
            authorTitle: '5,841,000 followers',
            authorPhoto: `${LINKEDIN_ASSETS}/images/avatar_github.jpeg`,
            authorVerified: true,
            timeAgo: '4h',
            content: 'The future of software development is agentic.',
            mediaType: 'linkCard',
            mediaImageUrl: `${LINKEDIN_ASSETS}/images/github_agents.jpg`,
            mediaTitle: 'Introducing GitHub Spark',
            mediaDomain: 'github.blog',
            mediaCtaLabel: 'Learn more',
            reactions: 523,
            commentsCount: 39,
            repostsCount: 112,
            reactionTypes: 'like,insightful,celebrate',
        },
        {
            id: '8',
            contextType: 'reposted',
            contextText: 'David Kim reposted this',
            authorName: 'David Kim',
            authorTitle: 'Software Engineer',
            authorVerified: false,
            timeAgo: '3d',
            content: "The best engineers aren't the ones who write the most code.",
            reactions: 7,
            commentsCount: 12,
            repostsCount: 4,
            reactionTypes: 'like,love,support',
        },
    ],

    chat: {
        enabled: true,
        initiallyOpen: false,
        openDelayMs: 2500,
        title: 'Messaging',
        contact: {
            name: 'Sarah Chen',
            photo: `${LINKEDIN_ASSETS}/images/avatar_sarah.png`,
            isOnline: true
        },
        conversation: [
            { id: '1', from: 'them', text: 'Hi Maya, do you have a minute?', delayMs: 800 },
            { id: '2', from: 'me', text: 'Sure, what’s up?', autoFillOnArrow: true },
            { id: '3', from: 'them', text: 'I wanted to ask about the workforce plan.', delayMs: 1200 }
        ]
    }
};


