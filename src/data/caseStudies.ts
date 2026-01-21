export interface CaseStudy {
    id: string;
    brand: string;
    niche: string;
    challenge: string;
    strategy: string;
    execution: string;
    results: {
        label: string;
        value: string;
    }[];
    image?: string;
    accentColor: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'harbicious',
        brand: 'Harbicious',
        niche: 'Traditional Herbal Remedies & Wellness',
        challenge: "Harbicious has an extensive range of traditional products but lacked a modern 'digital-first' storefront and social proof to attract Gen-Z/Millennial buyers.",
        strategy: "The 'Grandma’s Secrets' Viral Campaign. We focused purely on one hero product: Rosemary Water for Hair Growth.",
        execution: "We set up an affiliate program where influencers shared 30-day 'Hair Growth Journals'. We managed the entire social media calendar to ensure consistent posting of unique 15% discount codes.",
        results: [
            { label: 'Sales Growth', value: '22% Inc. (60 Days)' },
            { label: 'Brand Awareness', value: '50+ UGC Pieces' }
        ],
        accentColor: '#2D5A27', // Herbal Green
        image: '/assets/harbicious.png'
    },
    {
        id: 'celestique',
        brand: 'Celestique Life',
        niche: 'Luxury Wellness & Aesthetics',
        challenge: "Needed to look 'expensive' and 'exclusive' without a celebrity budget.",
        strategy: "The 'Inner Circle' Affiliate Tier. We hand-picked 10 'Aesthetic' creators with clean, luxury feeds.",
        execution: "Positioned as a 'Founders Secret'. Influencers were given 'VIP Gold' links. We ghost-wrote captions focused on 'Luxury Self-Care Rituals' rather than sales.",
        results: [
            { label: 'Conversion Rate', value: '26% Boost' },
            { label: 'Revenue', value: '25% Inc.' }
        ],
        accentColor: '#D4AF37', // Luxury Gold
        image: '/assets/celestique.png'
    },
    {
        id: 'kalyntika',
        brand: 'Kalyntika',
        niche: 'Superfood-Powered Skincare',
        challenge: "Beautiful packaging but customers were hesitant to spend ₹1,000+ on an unknown brand.",
        strategy: "The 'Face-Mask Friday' Affiliate Loop. Built a community of 'Skin-First' creators focused on transparency.",
        execution: "Synchronized weekly posts created an 'Everywhere Effect'. 8 affiliates posted 'Self-Care Sessions' every Friday simultaneously.",
        results: [
            { label: 'Sales Growth', value: '30% Spike' },
            { label: 'Retention', value: '20% Recurring' }
        ],
        accentColor: '#FF6B6B', // Berry/Skincare Pink
        image: '/assets/kalyntika.png'
    },
    {
        id: 'satliva',
        brand: 'Satliva',
        niche: 'Sustainable Hemp Skincare',
        challenge: "Faced strict restrictions on Facebook/Instagram ads due to hemp ingredients.",
        strategy: "The 'Taboo-Breakers' Affiliate Network. Identified 12 micro-bloggers to educate the audience.",
        execution: "Relied entirely on 'Link-in-Bio' traffic. Creators focused on educational 'Before & After' results for specific skin issues.",
        results: [
            { label: 'Sales Lift', value: '24% Increase' },
            { label: 'New Acquisition', value: '65% of Total' }
        ],
        accentColor: '#4A5D4E', // Hemp Dark Green
        image: '/assets/satliva.png'
    }
];
