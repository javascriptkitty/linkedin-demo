
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
            visibility: 'public'
        },
        {
            id: '2',
            authorName: 'Adecco',
            authorTitle: '10,058,979 followers\nPromoted',
            authorPhoto: `${LINKEDIN_ASSETS}/images/avatar_adecco.png`,
            authorVerified: false,
            timeAgo: '',
            content: 'Adecco specializes in rapidly placing qualified Clinical Trial Coordinators, CRAs, and site support staff — so you can scale your workforce in weeks, not months.\n\n✅ Pre-vetted clinical talent\n✅ Flexible contract & direct hire options\n✅ Deep expertise in biotech, pharma & CRO environments',
            contentHashtags: '#AdeccoGroup #BusinessLeaders #FutureOfWork The Adecco Group',
            reactions: 18,
            commentsCount: 0,
            repostsCount: 3,
            visibility: 'public',
            mediaImageUrl: `${LINKEDIN_ASSETS}/images/adecco_ad_photo.png`,
            mediaTitle: 'Join thousands of companies. Build your best team.',
            mediaDomain: 'adecco.com',
            mediaCtaLabel: 'Learn more',
            mediaCtaUrl: 'https://www.adecco.com/',
            mediaFooterBg: '#ecf3fa'
        },
        {
            id: '3',
            authorName: 'Marcus Lee',
            authorTitle: 'Engineering Lead at ScaleAI',
            authorPhoto: `${LINKEDIN_ASSETS}/images/avatar_marcus.png`,
            authorVerified: false,
            timeAgo: '1d',
            content: "This is the best summary I've seen on the current state of AI dev tools.",
            reactions: 62,
            commentsCount: 12,
            repostsCount: 0,
            visibility: 'public'
        }
    ],

    chat: {
        enabled: true,
        unreadCount: 1,
        initiallyOpen: false,
        openDelayMs: 2500,
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


