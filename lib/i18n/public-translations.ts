export const publicTranslations = {
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      about: 'About',
      blog: 'Blog',
      login: 'Login',
      getStarted: 'Get Started',
      // MegaMenu Navigation
      product: 'Product',
      useCases: 'Use Cases',
      resources: 'Resources',
      menu: {
        product: {
          title: 'Product',
          core: {
            label: 'Core Platform',
            items: {
              visibilityEngine: { title: 'Visibility Engine', desc: 'The complete visibility operating system' },
              distribution: { title: 'Distribution', desc: 'Multi-platform content delivery' },
              signals: { title: 'Signals & Insights', desc: 'Real-time analytics and monitoring' },
              automation: { title: 'Automation', desc: 'Rules-based workflow automation' },
            },
          },
          advanced: {
            label: 'Advanced',
            items: {
              explainability: { title: 'Explainability', desc: 'Transparent AI decision making' },
              reporting: { title: 'Reporting', desc: 'Professional analytics dashboards' },
              api: { title: 'API & Integrations', desc: 'Developer-friendly extensibility' },
            },
          },
        },
        useCases: {
          title: 'Use Cases',
          items: {
            creators: { title: 'Creators', desc: 'Scale your personal brand' },
            companies: { title: 'Companies', desc: 'Enterprise content management' },
            enterprise: { title: 'Enterprise', desc: 'Large-scale visibility operations' },
            agencies: { title: 'Agencies', desc: 'Multi-client content workflows' },
          },
        },
        industries: {
          title: 'Industries',
          items: {
            marketing: { title: 'Marketing', desc: 'Campaign performance & reach' },
            saas: { title: 'SaaS', desc: 'Product-led growth content' },
            ecommerce: { title: 'E-Commerce', desc: 'Product visibility at scale' },
            finance: { title: 'Finance', desc: 'Compliant financial content' },
            media: { title: 'Media & Publishing', desc: 'Editorial workflow automation' },
          },
        },
        resources: {
          title: 'Resources',
          learn: {
            label: 'Learn',
            items: {
              blog: { title: 'Blog', desc: 'Insights and strategies' },
              guides: { title: 'Guides', desc: 'In-depth tutorials' },
              playbooks: { title: 'Automation Playbooks', desc: 'Ready-to-use workflows' },
            },
          },
          company: {
            label: 'Company',
            items: {
              about: { title: 'About', desc: 'Our mission and team' },
              changelog: { title: 'Changelog', desc: 'Product updates' },
            },
          },
        },
        trust: {
          title: 'Trust',
          items: {
            security: { title: 'Security', desc: 'How we protect your data' },
            privacy: { title: 'Privacy', desc: 'Data handling practices' },
            compliance: { title: 'Compliance', desc: 'Standards and certifications' },
            transparency: { title: 'Transparency', desc: 'Control and explainability' },
          },
        },
      },
    },
    footer: {
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      features: 'Features',
      pricing: 'Pricing',
      about: 'About',
      blog: 'Blog',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      imprint: 'Imprint',
      copyright: '© 2026 Visibility Engine. All rights reserved.',
    },
    auth: {
      common: {
        or: 'or',
        backToHome: 'Back to homepage',
        backToLogin: 'Back to login',
        goToLogin: 'Go to Login',
        loading: 'Loading...',
        sending: 'Sending...',
        saving: 'Saving...',
        registering: 'Registering...',
        signingIn: 'Signing in...',
        emailPlaceholder: 'name@example.com',
        passwordPlaceholder: 'At least 8 characters',
        passwordHint: 'At least 8 characters. Recommended: uppercase, lowercase, numbers and special characters.',
        repeatPassword: 'Repeat password',
        termsPrefix: 'By registering you accept our',
        termsLink: 'Terms of Service',
        termsAnd: 'and',
        privacyLink: 'Privacy Policy',
      },
      login: {
        overline: 'Welcome back',
        title: 'Welcome back',
        subtitle: 'Sign in to your account',
        email: 'Email',
        password: 'Password',
        submit: 'Sign In',
        forgotPassword: 'Forgot password?',
        noAccount: "Don't have an account?",
        signUp: 'Sign up',
        uiOnly: 'Login UI only - no backend implemented',
      },
      register: {
        overline: 'Get Started',
        title: 'Create your account',
        subtitle: 'Join Visibility Engine today',
        role: 'I am a...',
        roleCreator: 'Creator',
        roleCompany: 'Company',
        creatorDesc: 'For content creators & influencers',
        companyDesc: 'For companies & teams',
        creatorFeatures: ['Automatic content generation', 'Social media management', 'Performance analytics', 'Personal branding tools'],
        companyFeatures: ['Team collaboration', 'Brand management', 'Multi-channel publishing', 'Advanced analytics'],
        startAsCreator: 'Start as Creator',
        startAsCompany: 'Start as Company',
        creatorAccount: 'Creator Account',
        companyAccount: 'Company Account',
        createAccountOverline: 'Create Account',
        changeAccountType: 'Change account type',
        yourName: 'Your name',
        companyName: 'Company name',
        namePlaceholder: 'John Doe',
        companyPlaceholder: 'Example Inc.',
        name: 'Name',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm password',
        submit: 'Create Account',
        hasAccount: 'Already have an account?',
        signIn: 'Sign in',
        passwordMismatch: 'Passwords do not match',
        uiOnly: 'Registration UI only - no backend implemented',
      },
      forgotPassword: {
        overline: 'Forgot password?',
        title: 'No problem',
        subtitle: 'Enter your email and we will send you a reset link.',
        email: 'Email',
        submit: 'Send Reset Link',
        backToLogin: 'Back to login',
        remembered: 'Remembered?',
        emailSentOverline: 'Email sent',
        emailSentTitle: 'Check your inbox',
        emailSentTo: 'We sent an email to',
        emailSentDesc: 'Click the link in the email to reset your password.',
        noEmail: 'No email received? Check your spam folder or',
        tryAgain: 'try again',
        uiOnly: 'Password reset UI only - no backend implemented',
      },
      resetPassword: {
        overline: 'New password',
        title: 'Reset password',
        subtitle: 'Choose a secure password for your account',
        password: 'New password',
        confirmPassword: 'Confirm password',
        submit: 'Reset Password',
        successOverline: 'Success',
        successTitle: 'Password reset',
        successSubtitle: 'Your password has been successfully changed',
        successDesc: 'You can now sign in with your new password.',
        passwordMismatch: 'Passwords do not match',
        uiOnly: 'Password reset UI only - no backend implemented',
      },
      verifyEmail: {
        overline: 'One moment...',
        title: 'Verifying email',
        verifying: 'Verifying your email...',
        successOverline: 'Verified',
        successTitle: 'Email confirmed',
        successSubtitle: 'Your account has been successfully activated',
        successDesc: 'Thank you! Your email address has been confirmed. You can now sign in and get started.',
        success: 'Email verified successfully!',
        errorOverline: 'Error',
        errorTitle: 'Verification failed',
        errorSubtitle: 'The link is invalid or expired',
        errorDesc: 'Please check the link in your email or request a new verification link.',
        error: 'Verification failed',
        goToDashboard: 'Go to Dashboard',
        registerAgain: 'Register again',
        uiOnly: 'Email verification UI only - no backend implemented',
      },
    },
    landing: {
      hero: {
        overline: 'The Visibility Platform',
        title: 'Turn Content Into',
        titleHighlight: 'Measurable Growth',
        subtitle: 'The operating system for creators and companies to orchestrate content, automate distribution, and transform visibility into revenue.',
        ctaPrimary: 'Start Free Trial',
        ctaSecondary: 'See Platform',
      },
      trustBar: {
        title: 'Trusted by leading creators and growth teams',
      },
      problem: {
        overline: 'The Challenge',
        title: 'Content Chaos Kills Growth',
        subtitle: 'Scattered tools, manual processes, zero visibility into what actually works. Most creators and teams are flying blind while competitors systematize their success.',
        stats: [
          { stat: '73%', label: 'of content never reaches its potential audience' },
          { stat: '12hrs', label: 'average weekly time lost to manual distribution' },
          { stat: '40%', label: 'of opportunities missed due to timing errors' },
        ],
      },
      solution: {
        overline: 'The Solution',
        title: 'One Platform, Complete Visibility',
        subtitle: 'From content creation to performance insights—orchestrate your entire visibility engine in one intelligent system.',
        steps: [
          {
            num: '01',
            title: 'Signals & Insights',
            description: 'Real-time tracking across all channels. Know what works, what does not, and why—before anyone else.',
            features: ['Cross-platform analytics', 'Trend detection', 'Competitive signals'],
          },
          {
            num: '02',
            title: 'Smart Automation',
            description: 'Rules-based workflows that execute at the perfect moment. From distribution to engagement—automated.',
            features: ['Scheduling engine', 'Trigger-based actions', 'A/B optimization'],
          },
          {
            num: '03',
            title: 'Growth Intelligence',
            description: 'AI-powered recommendations that turn data into actionable growth strategies you can trust.',
            features: ['Predictive insights', 'Content scoring', 'ROI attribution'],
          },
        ],
      },
      forWho: {
        overline: 'Built For',
        title: 'Professionals Who Take Visibility Seriously',
        creators: {
          title: 'Creators & Influencers',
          description: 'Scale your personal brand without scaling your workload. Automate the repetitive, focus on the creative—while your visibility compounds.',
          features: ['Multi-platform scheduling', 'Audience insights', 'Monetization tracking', 'Brand deal management'],
        },
        companies: {
          title: 'Teams & Agencies',
          description: 'Coordinate campaigns, manage multiple brands, and prove ROI—all from one command center built for professional workflows.',
          features: ['Multi-brand workspaces', 'Team collaboration', 'Client reporting', 'White-label options'],
        },
      },
      platform: {
        overline: 'Platform',
        title: 'Everything You Need to Win',
        subtitle: 'A complete toolkit for modern visibility management.',
        features: [
          { label: 'Content Hub', desc: 'Centralized asset management' },
          { label: 'Smart Scheduling', desc: 'AI-optimized timing' },
          { label: 'Analytics Engine', desc: 'Cross-platform insights' },
          { label: 'Automation Rules', desc: 'Trigger-based workflows' },
          { label: 'Team Workspaces', desc: 'Collaborative environment' },
          { label: 'API & Integrations', desc: 'Extensible platform' },
        ],
      },
      testimonials: {
        overline: 'Results',
        title: 'Trusted by Growth Leaders',
        items: [
          {
            quote: 'Visibility Engine transformed how we approach content distribution. What used to take our team days now happens automatically—with better results.',
            name: 'Sarah Kim',
            role: 'Head of Content, TechScale',
          },
          {
            quote: 'Finally, a platform that understands creators need insights, not just scheduling. The automation rules alone save me 10+ hours every week.',
            name: 'Marcus Rodriguez',
            role: 'Creator, 500K+ followers',
          },
        ],
      },
      cta: {
        title: 'Ready to Build Your Visibility Engine?',
        subtitle: 'Join thousands of creators and teams who have transformed their content strategy. Start your free trial today—no credit card required.',
        ctaPrimary: 'Start Free Trial',
        ctaSecondary: 'View Pricing',
      },
      // Keep old keys for compatibility
      howItWorks: {
        title: 'How It Works',
        step1: {
          title: 'Create & Organize',
          description: 'Centralize all your content assets—videos, images, copy—in one workspace.',
        },
        step2: {
          title: 'Automate & Schedule',
          description: 'Deploy content across platforms with intelligent scheduling and automated campaigns.',
        },
        step3: {
          title: 'Analyze & Optimize',
          description: 'Track performance, identify trends, and refine your strategy with real-time analytics.',
        },
      },
      features: {
        title: 'Everything You Need',
        contentHub: 'Unified content library with version control',
        automation: 'Multi-platform scheduling and campaigns',
        analytics: 'Deep insights and performance tracking',
        ai: 'AI agents for content optimization',
        collaboration: 'Team workspaces and role management',
        api: 'Developer-friendly API access',
      },
    },
    features: {
      meta: {
        title: 'Features – Visibility Engine',
        description: 'Discover all features for professional content management, automation, analytics, and AI-powered optimization.',
      },
      hero: {
        overline: 'Platform Features',
        title: 'Everything You Need to',
        titleHighlight: 'Own Your Visibility',
        subtitle: 'A complete operating system for content, automation, and growth intelligence—built for professionals who refuse to settle for scattered tools.',
      },
      cta: {
        title: 'Ready to See It in Action?',
        subtitle: 'Start your free trial today and experience the complete visibility platform. No credit card required.',
        primary: 'Start Free Trial',
        secondary: 'View Pricing',
      },
      sections: {
        signals: {
          overline: 'Signals & Monitoring',
          title: 'Real-Time Visibility Into What Matters',
          description: 'Track performance across every channel with intelligent monitoring. Get instant notifications when metrics shift, trends emerge, or opportunities appear—so you can act before your competition even notices.',
          features: [
            { title: 'Cross-Platform Analytics', description: 'Unified metrics from all your channels' },
            { title: 'Trend Detection', description: 'AI-powered pattern recognition' },
            { title: 'Alert System', description: 'Custom triggers for any metric' },
          ],
        },
        automation: {
          overline: 'Smart Automation',
          title: 'Rules That Work While You Sleep',
          description: 'Set up intelligent workflows that execute automatically based on triggers, schedules, or performance thresholds. From content distribution to engagement responses—your visibility engine runs 24/7.',
          features: [
            { title: 'Scheduling Engine', description: 'AI-optimized publishing times' },
            { title: 'Trigger Actions', description: 'If-this-then-that automations' },
            { title: 'Workflow Builder', description: 'Visual automation designer' },
          ],
        },
        content: {
          overline: 'Content Management',
          title: 'Your Command Center for All Content',
          description: 'Organize, edit, and repurpose content from one central hub. Whether video, images, or text—manage your entire content library with powerful tools built for scale.',
          features: [
            { title: 'Media Library', description: 'Organized asset management' },
            { title: 'Format Conversion', description: 'Repurpose across platforms' },
            { title: 'Version Control', description: 'Track changes and history' },
          ],
        },
        intelligence: {
          overline: 'AI Intelligence',
          title: 'Data-Driven Decisions, Automated',
          description: 'Let artificial intelligence analyze your performance, predict outcomes, and recommend actions. From content scoring to optimal timing—make every decision backed by data.',
          features: [
            { title: 'Predictive Analytics', description: 'Forecast performance trends' },
            { title: 'Content Scoring', description: 'Quality and potential ratings' },
            { title: 'Smart Recommendations', description: 'AI-powered action suggestions' },
          ],
        },
        collaboration: {
          overline: 'Team Collaboration',
          title: 'Built for Teams at Scale',
          description: 'Whether you are a solo creator or a global agency, Visibility Engine scales with you. Manage permissions, collaborate in real-time, and keep everyone aligned on what matters.',
          features: [
            { title: 'Multi-Brand Workspaces', description: 'Separate environments per brand' },
            { title: 'Role-Based Access', description: 'Granular permission controls' },
            { title: 'Activity Audit', description: 'Complete action history' },
          ],
        },
        integrations: {
          overline: 'Developer Tools',
          title: 'Extend, Integrate, Automate',
          description: 'Connect Visibility Engine to your existing stack. Our robust API, webhooks, and native integrations ensure you can build exactly the workflow you need.',
          features: [
            { title: 'REST API', description: 'Full platform access via API' },
            { title: 'Webhooks', description: 'Real-time event notifications' },
            { title: 'Native Integrations', description: 'Connect to 50+ platforms' },
          ],
        },
      },
    },
    pricing: {
      meta: {
        title: 'Pricing – Visibility Engine',
        description: 'Choose the plan that fits your needs. From free for beginners to enterprise for teams.',
      },
      hero: {
        overline: 'Pricing',
        title: 'Simple, Transparent Pricing',
        subtitle: 'Start free, upgrade when you\'re ready. No hidden fees, no surprises. All paid plans include a 14-day free trial.',
      },
      plans: {
        starter: {
          name: 'Starter',
          price: 'Free',
          period: '',
          description: 'Perfect for getting started and exploring the platform.',
          features: [
            '1 connected account',
            '50 scheduled posts/month',
            'Basic analytics',
            'Community support',
          ],
          cta: 'Get Started',
        },
        creator: {
          name: 'Creator',
          price: '$19',
          period: '/month',
          description: 'For individual creators ready to scale their presence.',
          features: [
            '5 connected accounts',
            'Unlimited scheduled posts',
            'Advanced analytics',
            'Automation rules (5)',
            'Priority support',
          ],
          cta: 'Start Free Trial',
        },
        professional: {
          name: 'Professional',
          price: '$49',
          period: '/month',
          description: 'For power users who need the full visibility toolkit.',
          features: [
            '15 connected accounts',
            'Unlimited scheduled posts',
            'Full analytics suite',
            'Unlimited automation rules',
            'AI-powered insights',
            'API access',
            'Priority support',
          ],
          cta: 'Start Free Trial',
          badge: 'Most Popular',
        },
        team: {
          name: 'Team',
          price: '$149',
          period: '/month',
          description: 'For teams and agencies managing multiple brands.',
          features: [
            'Unlimited connected accounts',
            'Multi-brand workspaces',
            '5 team members included',
            'Role-based permissions',
            'Client reporting',
            'White-label options',
            'Dedicated account manager',
          ],
          cta: 'Contact Sales',
        },
      },
      enterprise: {
        title: 'Need a custom solution?',
        description: 'For large organizations with specific requirements, we offer custom Enterprise plans with dedicated infrastructure, SLA guarantees, and tailored onboarding.',
        cta: 'Contact Sales',
      },
      compare: {
        overline: 'Compare Plans',
        title: 'Find the Right Fit for Your Needs',
        headers: {
          feature: 'Feature',
          starter: 'Starter',
          creator: 'Creator',
          professional: 'Professional',
          team: 'Team',
        },
        rows: {
          connectedAccounts: 'Connected accounts',
          scheduledPosts: 'Scheduled posts',
          analytics: 'Analytics',
          automationRules: 'Automation rules',
          aiInsights: 'AI insights',
          apiAccess: 'API access',
          teamMembers: 'Team members',
          whiteLabel: 'White-label',
        },
        values: {
          starter: ['1', '50/mo', 'Basic', '—', '—', '—', '1', '—'],
          creator: ['5', 'Unlimited', 'Advanced', '5', '—', '—', '1', '—'],
          professional: ['15', 'Unlimited', 'Full suite', 'Unlimited', '✓', '✓', '1', '—'],
          team: ['Unlimited', 'Unlimited', 'Full suite', 'Unlimited', '✓', '✓', '5+', '✓'],
        },
      },
      faq: {
        overline: 'FAQ',
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'Can I switch plans at any time?',
            answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll be charged the prorated difference. When downgrading, the change takes effect at the start of your next billing cycle.',
          },
          {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. For Team and Enterprise plans, we also offer invoicing with NET 30 terms.',
          },
          {
            question: 'Is there a free trial?',
            answer: 'Yes! All paid plans include a 14-day free trial with full access to all features. No credit card required to start your trial.',
          },
          {
            question: 'What happens when my trial ends?',
            answer: 'At the end of your trial, you can choose to subscribe to continue using premium features, or your account will automatically switch to our free Starter plan.',
          },
          {
            question: 'Do you offer discounts for annual billing?',
            answer: 'Yes, you can save 20% by choosing annual billing. This option is available for all paid plans during checkout.',
          },
          {
            question: 'Can I cancel my subscription?',
            answer: 'Absolutely. You can cancel your subscription at any time from your account settings. Your access continues until the end of your current billing period.',
          },
        ],
      },
      cta: {
        title: 'Ready to Get Started?',
        subtitle: 'Join thousands of creators and teams building their visibility engines. Start your 14-day free trial today.',
        button: 'Start Free Trial',
      },
    },
    about: {
      meta: {
        title: 'About – Visibility Engine',
        description: 'Learn about our vision to empower creators and companies with professional visibility tools.',
      },
      hero: {
        overline: 'About Us',
        title: 'Building the Operating System',
        titleHighlight: 'for Digital Visibility',
        subtitle: 'We\'re on a mission to give every creator and company the tools to turn content into measurable growth—without the chaos of scattered systems.',
      },
      stats: {
        users: { value: '10K+', label: 'Active Users' },
        posts: { value: '50M+', label: 'Posts Scheduled' },
        uptime: { value: '99.9%', label: 'Uptime SLA' },
        support: { value: '24/7', label: 'Support Coverage' },
      },
      vision: {
        overline: 'Our Vision',
        title: 'From Content Chaos to Visibility Control',
        paragraph1: 'The creator economy and content-driven business landscape have exploded—but the tools haven\'t kept up. Most professionals are juggling five or more platforms, losing hours to manual tasks, and flying blind on what actually works.',
        paragraph2: 'We built Visibility Engine to be the command center that brings it all together: one platform where content, automation, and intelligence converge. Not another tool to manage—a system that manages itself.',
        quote: 'Every creator and company deserves the visibility infrastructure that was once only available to enterprises with dedicated teams and million-dollar budgets.',
        quoteAuthor: 'The Founding Principle',
        quoteTeam: 'Visibility Engine Team',
      },
      values: {
        overline: 'Our Values',
        title: 'What Guides Every Decision',
        clarity: {
          title: 'Clarity Over Complexity',
          description: 'We believe the best tools feel invisible. Every feature, every interface decision is made to reduce cognitive load—not add to it.',
        },
        dataInformed: {
          title: 'Data-Informed, Not Data-Overwhelmed',
          description: 'Raw data is noise. Insights are signal. We transform metrics into actionable intelligence that drives real decisions.',
        },
        automation: {
          title: 'Automation That Amplifies',
          description: 'The goal isn\'t to replace human judgment—it\'s to free humans to focus on what matters. Automation handles the repetitive; you handle the creative.',
        },
        trust: {
          title: 'Trust Through Transparency',
          description: 'No black boxes. No hidden agendas. We show you exactly how things work, what we measure, and why. Your data stays yours.',
        },
      },
      approach: {
        overline: 'Our Approach',
        title: 'Built Different, On Purpose',
        privacy: {
          num: '01',
          title: 'Privacy-First Architecture',
          description: 'Your data never trains our models. Your content stays yours. We build trust through strict data isolation and transparent policies.',
        },
        performance: {
          num: '02',
          title: 'Performance Without Compromise',
          description: 'Sub-100ms response times. 99.9% uptime guarantee. We obsess over the milliseconds so you never have to wait.',
        },
        open: {
          num: '03',
          title: 'Open Where It Matters',
          description: 'Full API access. Extensive webhooks. Native integrations. Your visibility engine should fit your stack, not the other way around.',
        },
      },
      cta: {
        title: 'Ready to Join Us?',
        subtitle: 'Start building your visibility engine today. Free to start, powerful enough to scale with you.',
        primaryButton: 'Start Free Trial',
        secondaryButton: 'Explore Features',
      },
    },
    blog: {
      meta: {
        title: 'Blog – Visibility Engine',
        description: 'Insights, updates, and best practices for content creators and marketing teams.',
      },
      hero: {
        overline: 'Blog',
        title: 'Insights for Modern',
        titleHighlight: 'Visibility Leaders',
        subtitle: 'Strategies, research, and actionable insights for creators and teams who take content performance seriously.',
      },
      categories: {
        all: 'All',
        strategy: 'Strategy',
        analytics: 'Analytics',
        workflow: 'Workflow',
        aiTechnology: 'AI & Technology',
        systems: 'Systems',
        research: 'Research',
      },
      sections: {
        featured: 'Featured',
        allPosts: 'All Posts',
      },
      newsletter: {
        title: 'Stay Ahead of the Curve',
        subtitle: 'Get weekly insights on content strategy, automation, and growth delivered straight to your inbox. No spam, unsubscribe anytime.',
        placeholder: 'Enter your email',
        subscribe: 'Subscribe',
        joinCount: 'Join 5,000+ visibility leaders',
      },
      readMore: 'Read More',
      readingTime: 'min read',
      publishedOn: 'Published on',
      backToBlog: 'Back to Blog',
      posts: {
        post1: {
          title: 'Why Content Creators Need a Professional Platform',
          excerpt: 'The creator economy has matured. It is time for the tools to catch up. Learn why serious creators are moving beyond consumer-grade tools.',
          date: '2026-01-10',
          readingTime: 5,
          slug: 'why-creators-need-professional-platform',
          content: [
            {
              heading: 'The Problem with Consumer Tools',
              text: 'Most content management tools were built for casual users. They prioritize simplicity over capability, and ease of use over depth. For hobbyists, this is perfect. For professionals managing multiple platforms, brands, and campaigns, it is a limitation.',
            },
            {
              heading: 'What Professionals Need',
              text: 'Professional creators need tools that handle complexity without friction. Batch operations, automation, version control, real analytics—not vanity metrics. They need systems that scale with their ambitions, not platforms that constrain them.',
            },
            {
              heading: 'The Shift to Professional Infrastructure',
              text: 'Just as developers moved from FTP to Git, and designers from Photoshop to Figma, content creators are ready for their infrastructure upgrade. Visibility Engine is built for this next generation of professionals.',
            },
          ],
        },
        post2: {
          title: 'How AI Agents Can Transform Your Content Workflow',
          excerpt: 'AI is not here to replace you. It is here to multiply your output. Discover how AI agents can handle the repetitive work while you focus on creativity.',
          date: '2026-01-08',
          readingTime: 7,
          slug: 'ai-agents-transform-content-workflow',
          content: [
            {
              heading: 'The Bottleneck of Manual Work',
              text: 'Creating content is the creative part. Formatting, scheduling, cross-posting, analyzing—that is the repetitive work that drains energy and time. This is where AI agents excel.',
            },
            {
              heading: 'What AI Agents Can Do',
              text: 'AI agents in Visibility Engine can optimize titles for SEO, suggest posting times based on audience behavior, auto-tag content, generate platform-specific variants, and identify trending topics. They work in the background, always learning, always improving.',
            },
            {
              heading: 'Human + AI = Scale',
              text: 'The best results come from collaboration. You bring the creativity, strategy, and voice. AI brings speed, consistency, and data-driven optimization. Together, you can produce more, faster, without sacrificing quality.',
            },
          ],
        },
        post3: {
          title: 'Building a Sustainable Content Strategy for 2026',
          excerpt: 'Random posting does not build an audience. Strategic consistency does. Learn the framework top creators use to plan and execute sustainable content strategies.',
          date: '2026-01-05',
          readingTime: 6,
          slug: 'sustainable-content-strategy-2026',
          content: [
            {
              heading: 'Why Most Content Strategies Fail',
              text: 'Inconsistency is the killer. Creators start strong, burn out, and disappear. The problem is not lack of ideas—it is lack of systems. Without a sustainable workflow, even the best content strategy will collapse.',
            },
            {
              heading: 'The Three Pillars of Sustainability',
              text: 'First, batch creation—record multiple pieces in one session. Second, smart scheduling—use automation to maintain consistency. Third, performance tracking—double down on what works, cut what does not. These three pillars form the foundation of a strategy that lasts.',
            },
            {
              heading: 'Tools Enable Sustainability',
              text: 'Manual processes do not scale. Professional tools like Visibility Engine remove the friction from batching, scheduling, and analyzing. When the workflow is smooth, consistency becomes effortless.',
            },
          ],
        },
        post4: {
          title: 'How AI is Transforming Content Optimization',
          excerpt: 'AI is not just generating content—it is revolutionizing how we optimize, distribute, and measure it. Here is what the latest developments mean for your strategy.',
          date: '2026-01-02',
          readingTime: 7,
          slug: 'ai-content-optimization',
          content: [
            {
              heading: 'Beyond Content Generation',
              text: 'The conversation about AI in content has focused on generation—writing articles, creating images, producing videos. But the real transformation is happening in optimization: how AI helps us understand what works and why.',
            },
            {
              heading: 'Predictive Performance Analysis',
              text: 'Modern AI can predict content performance before you publish. It analyzes patterns from millions of posts to identify what resonates with specific audiences. This moves content strategy from guesswork to data-driven decisions.',
            },
            {
              heading: 'Automated A/B Testing at Scale',
              text: 'AI enables testing variations at a scale impossible for humans. Headlines, thumbnails, posting times, hashtags—all can be optimized simultaneously. The result is continuous improvement without continuous effort.',
            },
          ],
        },
        post5: {
          title: 'Building Content Systems That Scale',
          excerpt: 'The difference between creators who burn out and those who build empires? Systems. Learn how to create repeatable processes that compound your efforts.',
          date: '2025-12-28',
          readingTime: 10,
          slug: 'building-content-systems',
          content: [
            {
              heading: 'The System Mindset',
              text: 'Individual pieces of content are tactics. Systems are strategy. When you build a system, every piece of content feeds into a larger machine that grows more efficient over time.',
            },
            {
              heading: 'Components of a Content System',
              text: 'A complete content system includes: ideation pipelines, production workflows, distribution automation, and feedback loops. Each component must connect seamlessly to the others.',
            },
            {
              heading: 'From Manual to Automated',
              text: 'The goal is to automate everything that does not require human creativity. Research, formatting, scheduling, cross-posting, analytics—these should run in the background while you focus on what only you can do.',
            },
          ],
        },
        post6: {
          title: 'Decoding the Algorithm: What Actually Drives Engagement',
          excerpt: 'Platform algorithms are complex, but not incomprehensible. Based on analysis of millions of posts, here is what we have learned about what makes content spread.',
          date: '2025-12-20',
          readingTime: 9,
          slug: 'decoding-engagement-algorithms',
          content: [
            {
              heading: 'The Engagement Hierarchy',
              text: 'Not all engagement is equal. Comments outweigh likes. Shares outweigh comments. Saves outweigh shares. Understanding this hierarchy is essential for optimizing content for algorithmic reach.',
            },
            {
              heading: 'Timing and Velocity',
              text: 'Early engagement signals are disproportionately important. The first hour after posting often determines whether content gets amplified or buried. This is why audience analysis and optimal timing matter.',
            },
            {
              heading: 'The Authenticity Factor',
              text: 'Algorithms increasingly reward authenticity. They detect engagement bait, clickbait, and artificial patterns. The best strategy is genuine value—content that people actually want to consume and share.',
            },
          ],
        },
      },
    },
    legalPages: {
      imprint: {
        overline: 'Legal',
        title: 'Imprint',
        subtitle: 'Legal disclosure according to § 5 TMG',
        company: {
          title: 'Company Information',
          name: 'Visibility Engine GmbH',
          address: 'Musterstraße 123\n10115 Berlin\nGermany',
        },
        contact: {
          title: 'Contact',
          email: 'Email',
          phone: 'Phone',
          website: 'Website',
        },
        registration: {
          title: 'Registration',
          court: 'Commercial Register',
          number: 'Registration Number',
          vatId: 'VAT ID',
        },
        responsibility: {
          title: 'Responsible for Content',
          according: 'According to § 55 Abs. 2 RStV',
        },
        disclaimer: {
          title: 'Disclaimer',
          liability: {
            title: 'Liability for Content',
            text: 'As a service provider, we are responsible for our own content on these pages according to general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
          },
          links: {
            title: 'Liability for Links',
            text: 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents.',
          },
        },
      },
      privacy: {
        overline: 'Legal',
        title: 'Privacy Policy',
        subtitle: 'How we collect, use, and protect your personal information',
        lastUpdated: 'Last updated',
        overview: {
          title: '1. Overview',
          text: 'Visibility Engine GmbH ("we", "us", or "our") operates the visibility-engine.com website and the Visibility Engine platform (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.',
        },
        dataController: {
          title: '2. Data Controller',
          text: 'The data controller responsible for your data is:',
        },
        dataCollection: {
          title: '3. Data We Collect',
          account: {
            title: '3.1 Account Information',
            text: 'When you create an account, we collect your email address, name, and password.',
          },
          usage: {
            title: '3.2 Usage Data',
            text: 'We collect information about how you use our Service, including features accessed and time spent.',
          },
        },
        rights: {
          title: '4. Your Rights',
          text: 'Under GDPR, you have the right to access, correct, delete, and port your personal data.',
        },
        contact: {
          title: '5. Contact',
          text: 'For privacy-related inquiries, contact us at:',
        },
      },
      terms: {
        overline: 'Legal',
        title: 'Terms of Service',
        subtitle: 'Please read these terms carefully before using Visibility Engine',
        lastUpdated: 'Last updated',
        introduction: {
          title: '1. Introduction',
          text: 'These Terms of Service ("Terms") govern your access to and use of the Visibility Engine platform, website, and services (collectively, the "Service") operated by Visibility Engine GmbH.',
        },
        eligibility: {
          title: '2. Eligibility',
          text: 'You must be at least 16 years old to use the Service. By using the Service, you represent and warrant that you are at least 16 years of age.',
        },
        account: {
          title: '3. Account Registration',
          text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
        },
        acceptable: {
          title: '4. Acceptable Use',
          text: 'You agree not to use the Service for any unlawful purpose or in violation of these Terms.',
        },
        termination: {
          title: '5. Termination',
          text: 'We may terminate or suspend your account at our sole discretion, without prior notice, for conduct that violates these Terms.',
        },
        contact: {
          title: '6. Contact',
          text: 'For questions about these Terms, contact us at:',
        },
      },
    },
    productPages: {
      visibilityEngine: {
        meta: {
          title: 'Visibility Engine – The Complete Visibility Platform',
          description: 'The operating system for digital visibility. Orchestrate content, automate distribution, and transform reach into measurable growth.',
        },
        hero: {
          overline: 'Core Platform',
          title: 'The Complete Visibility',
          titleHighlight: 'Operating System',
          subtitle: 'One unified platform to orchestrate content, automate distribution, and turn visibility into revenue. Stop juggling tools—start building a system.',
        },
        problem: {
          overline: 'The Problem',
          title: 'Scattered Tools Kill Momentum',
          description: 'Most creators and companies operate with 5+ disconnected tools. Analytics here, scheduling there, content management somewhere else. The result? Hours lost to context switching, insights that never connect, and opportunities that slip through the cracks.',
          points: [
            'No single source of truth for performance',
            'Manual copy-paste between platforms',
            'Insights locked in silos, impossible to act on',
          ],
        },
        howItWorks: {
          overline: 'How It Works',
          title: 'One Platform, Complete Control',
          steps: [
            {
              title: 'Connect Everything',
              description: 'Link all your platforms, content sources, and analytics in one place. Setup takes minutes, not days.',
            },
            {
              title: 'Orchestrate Automatically',
              description: 'Create rules that trigger actions across platforms. When X happens, do Y—without manual intervention.',
            },
            {
              title: 'Measure What Matters',
              description: 'See unified metrics across all channels. Understand what works, what does not, and why.',
            },
          ],
        },
        different: {
          overline: 'Why Different',
          title: 'Built for Professionals, Not Hobbyists',
          points: [
            {
              title: 'System Thinking',
              description: 'Not another tool—a complete operating system designed around workflows, not features.',
            },
            {
              title: 'Explainable Intelligence',
              description: 'Every recommendation comes with reasoning. No black boxes, no blind trust required.',
            },
            {
              title: 'Scale Without Chaos',
              description: 'From solo creator to enterprise team—the platform grows with you without breaking.',
            },
          ],
        },
        cta: {
          title: 'Ready to Build Your Visibility Engine?',
          subtitle: 'Join thousands of professionals who have replaced tool chaos with systematic growth.',
          primary: 'Start Free Trial',
          secondary: 'View All Features',
        },
      },
      distribution: {
        meta: {
          title: 'Distribution – Multi-Platform Content Delivery',
          description: 'Publish once, distribute everywhere. Automated multi-platform content delivery with intelligent scheduling and format optimization.',
        },
        hero: {
          overline: 'Distribution',
          title: 'Publish Once,',
          titleHighlight: 'Reach Everywhere',
          subtitle: 'Stop manually cross-posting. Create once, and let intelligent distribution handle the rest—right format, right time, right platform.',
        },
        problem: {
          overline: 'The Problem',
          title: 'Manual Distribution Does Not Scale',
          description: 'Every platform has different formats, optimal times, and audience behaviors. Manually adapting and posting content to each channel wastes hours every week—and still misses opportunities.',
          points: [
            'Hours spent reformatting for each platform',
            'Inconsistent posting schedules hurt reach',
            'No way to coordinate campaigns across channels',
          ],
        },
        howItWorks: {
          overline: 'How It Works',
          title: 'Intelligent Multi-Platform Delivery',
          steps: [
            {
              title: 'Create Your Content',
              description: 'Write, design, or upload once. Our system understands your master content and its purpose.',
            },
            {
              title: 'Define Distribution Rules',
              description: 'Set up which platforms get what, when. Platform-specific formatting happens automatically.',
            },
            {
              title: 'Let Automation Execute',
              description: 'Content goes out at optimal times, in the right format, with tracking built in from the start.',
            },
          ],
        },
        different: {
          overline: 'Why Different',
          title: 'Beyond Basic Scheduling',
          points: [
            {
              title: 'Format Intelligence',
              description: 'Automatic adaptation for each platform—character limits, image dimensions, hashtag strategies.',
            },
            {
              title: 'Timing Optimization',
              description: 'AI-powered scheduling based on your audience behavior, not generic best practices.',
            },
            {
              title: 'Campaign Coordination',
              description: 'Orchestrate multi-platform campaigns with sequencing, dependencies, and rollback options.',
            },
          ],
        },
        cta: {
          title: 'Ready to Automate Your Distribution?',
          subtitle: 'Stop spending hours on manual cross-posting. Let intelligent automation handle the logistics.',
          primary: 'Start Free Trial',
          secondary: 'Learn More',
        },
      },
      signalsInsights: {
        meta: {
          title: 'Signals & Insights – Real-Time Analytics',
          description: 'Real-time monitoring and intelligent alerts across all your channels. Know what is happening before your competitors do.',
        },
        hero: {
          overline: 'Signals & Insights',
          title: 'See What Others',
          titleHighlight: 'Cannot See',
          subtitle: 'Real-time visibility across every channel. Intelligent signals that surface opportunities, threats, and trends—before they become obvious.',
        },
        problem: {
          overline: 'The Problem',
          title: 'Data Without Insight Is Noise',
          description: 'You have access to more data than ever. The problem is not lack of metrics—it is drowning in dashboards while missing the signals that actually matter. By the time you notice a trend, it is too late.',
          points: [
            'Metrics scattered across platform dashboards',
            'No unified view of cross-channel performance',
            'Reactive instead of proactive decision-making',
          ],
        },
        howItWorks: {
          overline: 'How It Works',
          title: 'From Raw Data to Actionable Signals',
          steps: [
            {
              title: 'Unified Data Collection',
              description: 'All your platforms feed into one analytics engine. No more switching between dashboards.',
            },
            {
              title: 'Intelligent Pattern Detection',
              description: 'Algorithms identify trends, anomalies, and opportunities from the noise of raw metrics.',
            },
            {
              title: 'Actionable Alerts',
              description: 'Get notified when something matters—with context, not just numbers.',
            },
          ],
        },
        different: {
          overline: 'Why Different',
          title: 'Intelligence, Not Just Analytics',
          points: [
            {
              title: 'Cross-Platform Correlation',
              description: 'Understand how performance on one channel affects others. See the complete picture.',
            },
            {
              title: 'Predictive Signals',
              description: 'Trend detection that spots patterns early—days or weeks before they peak.',
            },
            {
              title: 'Custom Alert Logic',
              description: 'Define exactly what matters to you. Get alerted on your terms, not platform defaults.',
            },
          ],
        },
        cta: {
          title: 'Ready to Turn Data Into Decisions?',
          subtitle: 'Stop drowning in dashboards. Get the signals that actually drive growth.',
          primary: 'Start Free Trial',
          secondary: 'See Dashboard Demo',
        },
      },
      automation: {
        meta: {
          title: 'Automation – Rules-Based Workflow Automation',
          description: 'Build workflows that execute automatically. If-this-then-that logic for serious content operations.',
        },
        hero: {
          overline: 'Automation',
          title: 'Rules That Work',
          titleHighlight: 'While You Sleep',
          subtitle: 'Set up intelligent workflows once. Let them execute forever—or until you decide otherwise. Your visibility engine runs 24/7, so you do not have to.',
        },
        problem: {
          overline: 'The Problem',
          title: 'Manual Execution Breaks at Scale',
          description: 'When you are small, manual works. As you grow, it becomes a bottleneck. Every repetitive task you do manually is time stolen from strategy and creativity. Worse—humans forget, automation does not.',
          points: [
            'Repetitive tasks drain creative energy',
            'Inconsistent execution hurts results',
            'Scaling means hiring, not automating',
          ],
        },
        howItWorks: {
          overline: 'How It Works',
          title: 'Visual Workflow Building',
          steps: [
            {
              title: 'Define Triggers',
              description: 'What should start the workflow? A schedule, a metric threshold, an event, or a manual trigger.',
            },
            {
              title: 'Build Actions',
              description: 'What happens when triggered? Post content, send notifications, update data, call APIs.',
            },
            {
              title: 'Set Conditions',
              description: 'Add logic. Only execute if certain conditions are met. Branch based on outcomes.',
            },
          ],
        },
        different: {
          overline: 'Why Different',
          title: 'Serious Automation for Serious Work',
          points: [
            {
              title: 'Rollback Protection',
              description: 'Something goes wrong? Undo entire automation runs. Every action is reversible.',
            },
            {
              title: 'Simulation Mode',
              description: 'Test workflows before they run. See what would happen without any risk.',
            },
            {
              title: 'Full Audit Trail',
              description: 'Complete history of every automation run. Know exactly what happened and why.',
            },
          ],
        },
        cta: {
          title: 'Ready to Automate Your Workflows?',
          subtitle: 'Stop doing the same things manually every day. Build systems that scale.',
          primary: 'Start Free Trial',
          secondary: 'View Playbook Library',
        },
      },
      explainability: {
        meta: {
          title: 'Explainability – Transparent AI Decisions',
          description: 'Understand every recommendation. Full transparency into why the system suggests what it suggests.',
        },
        hero: {
          overline: 'Explainability',
          title: 'AI You Can',
          titleHighlight: 'Actually Trust',
          subtitle: 'Every recommendation comes with reasoning. Every decision is traceable. No black boxes—just transparent intelligence you can verify and understand.',
        },
        problem: {
          overline: 'The Problem',
          title: 'Black Box AI Erodes Trust',
          description: 'Most AI tools tell you what to do, but not why. When you cannot understand the reasoning, you cannot improve it. You cannot trust it. And when something goes wrong, you have no idea how to fix it.',
          points: [
            'Recommendations without explanation',
            'No way to verify AI reasoning',
            'Impossible to debug when things go wrong',
          ],
        },
        howItWorks: {
          overline: 'How It Works',
          title: 'Traceable Intelligence',
          steps: [
            {
              title: 'Every Recommendation Shows Why',
              description: 'Click on any suggestion to see the data, patterns, and logic that led to it.',
            },
            {
              title: 'Adjustable Weights',
              description: 'Disagree with the AI? Adjust the factors it considers. Train it to match your judgment.',
            },
            {
              title: 'Full Decision Logs',
              description: 'Historical record of all AI decisions. Review, learn, and continuously improve.',
            },
          ],
        },
        different: {
          overline: 'Why Different',
          title: 'Transparency as a Feature',
          points: [
            {
              title: 'Human + AI Collaboration',
              description: 'The AI is a tool, not a replacement. You stay in control, with better information.',
            },
            {
              title: 'Bias Detection',
              description: 'Visibility into potential biases in recommendations. Know the limitations.',
            },
            {
              title: 'Continuous Calibration',
              description: 'Provide feedback, and the system learns. Your expertise makes the AI better.',
            },
          ],
        },
        cta: {
          title: 'Ready for AI You Can Trust?',
          subtitle: 'No more black boxes. Understand every recommendation, adjust every decision.',
          primary: 'Start Free Trial',
          secondary: 'See How It Works',
        },
      },
      reporting: {
        meta: {
          title: 'Reporting – Professional Analytics Dashboards',
          description: 'Beautiful, actionable reports that tell the story of your visibility. Built for stakeholders, not just analysts.',
        },
        hero: {
          overline: 'Reporting',
          title: 'Reports That Tell',
          titleHighlight: 'The Real Story',
          subtitle: 'Move beyond vanity metrics. Professional reporting that connects activity to outcomes, and outcomes to business impact.',
        },
        problem: {
          overline: 'The Problem',
          title: 'Reports No One Reads',
          description: 'Exporting CSVs. Copy-pasting into spreadsheets. Building slides that are outdated by the time they are presented. Traditional reporting is painful, slow, and often ignored.',
          points: [
            'Hours spent building manual reports',
            'Metrics without context or narrative',
            'Stakeholders still asking "so what?"',
          ],
        },
        howItWorks: {
          overline: 'How It Works',
          title: 'From Data to Narrative',
          steps: [
            {
              title: 'Automated Report Generation',
              description: 'Schedule reports that build themselves. Daily, weekly, monthly—your choice.',
            },
            {
              title: 'Narrative Templates',
              description: 'Pre-built templates that tell stories, not just show numbers. Customize to your brand.',
            },
            {
              title: 'Stakeholder Views',
              description: 'Different reports for different audiences. C-suite gets the summary, teams get the details.',
            },
          ],
        },
        different: {
          overline: 'Why Different',
          title: 'Reporting for Decision-Makers',
          points: [
            {
              title: 'White-Label Ready',
              description: 'Brand reports with your logo, colors, and domain. Perfect for agencies.',
            },
            {
              title: 'Live Dashboards',
              description: 'Share real-time dashboards with stakeholders. No more stale reports.',
            },
            {
              title: 'Export Anywhere',
              description: 'PDF, PowerPoint, Google Slides, or live embed. Deliver in the format they want.',
            },
          ],
        },
        cta: {
          title: 'Ready for Reports That Matter?',
          subtitle: 'Stop wasting hours on manual reporting. Let automation tell your story.',
          primary: 'Start Free Trial',
          secondary: 'View Report Templates',
        },
      },
      api: {
        meta: {
          title: 'API & Integrations – Developer-Friendly Extensibility',
          description: 'Full REST API, webhooks, and native integrations. Build exactly the workflow you need.',
        },
        hero: {
          overline: 'API & Integrations',
          title: 'Build Exactly What',
          titleHighlight: 'You Need',
          subtitle: 'Full REST API, real-time webhooks, and 50+ native integrations. Your visibility engine should fit your stack—not the other way around.',
        },
        problem: {
          overline: 'The Problem',
          title: 'Walled Gardens Block Innovation',
          description: 'Most platforms trap your data. No API, limited exports, integrations only with their partners. When your tools do not talk to each other, you become the integration layer—manually.',
          points: [
            'Data locked inside platform silos',
            'Limited or nonexistent API access',
            'Custom workflows impossible to build',
          ],
        },
        howItWorks: {
          overline: 'How It Works',
          title: 'Open by Design',
          steps: [
            {
              title: 'Full REST API',
              description: 'Every feature available in the UI is available via API. No artificial limitations.',
            },
            {
              title: 'Real-Time Webhooks',
              description: 'Get notified instantly when events happen. Build reactive systems that respond in real-time.',
            },
            {
              title: 'Native Integrations',
              description: 'Pre-built connections to 50+ platforms. One-click setup, bidirectional sync.',
            },
          ],
        },
        different: {
          overline: 'Why Different',
          title: 'Developer Experience First',
          points: [
            {
              title: 'Comprehensive Documentation',
              description: 'Interactive API docs, SDKs in major languages, and real code examples.',
            },
            {
              title: 'Sandbox Environment',
              description: 'Test your integrations safely. Full API access without affecting production.',
            },
            {
              title: 'Rate Limits That Make Sense',
              description: 'Generous limits, clear overage policies, and enterprise options for heavy usage.',
            },
          ],
        },
        cta: {
          title: 'Ready to Integrate?',
          subtitle: 'Build custom workflows, connect your stack, and unlock the full power of your data.',
          primary: 'View API Docs',
          secondary: 'Explore Integrations',
        },
      },
    },
    useCasePages: {
      creators: {
        hero: {
          overline: 'For Creators',
          title: 'Scale Your Personal Brand',
          titleHighlight: 'Without the Burnout',
          subtitle: 'Automate the repetitive work of content distribution while maintaining your authentic voice. More reach, less time spent on logistics.',
          ctaPrimary: 'Start Free Trial',
          ctaSecondary: 'See How It Works',
        },
        challenges: {
          overline: 'Your Challenges',
          title: 'The Creator Struggle Is Real',
          subtitle: 'You create great content, but getting it seen across platforms takes more time than creating it.',
          items: [
            { title: 'Time Drain', description: 'Hours spent manually posting, reformatting, and scheduling across platforms instead of creating.' },
            { title: 'Platform Chaos', description: 'Each platform has different formats, optimal times, and algorithms. Keeping up is exhausting.' },
            { title: 'Blind Spots', description: 'No unified view of what is working. Analytics scattered across 5+ dashboards.' },
            { title: 'Monetization Gaps', description: 'Missing opportunities because you cannot track which content drives revenue.' },
          ],
        },
        solutions: {
          overline: 'How We Help',
          title: 'Your Visibility, Automated',
          subtitle: 'Focus on creating. Let Visibility Engine handle the distribution, timing, and insights.',
          items: [
            { title: 'Smart Scheduling', description: 'AI-optimized posting times for each platform. Set it once, reach more people.' },
            { title: 'Unified Analytics', description: 'One dashboard for all platforms. See what works at a glance.' },
            { title: 'Content Intelligence', description: 'Know which topics, formats, and hooks resonate with your audience.' },
            { title: 'Personal Brand Tracking', description: 'Monitor mentions, track growth, and spot collaboration opportunities.' },
          ],
        },
        metrics: {
          overline: 'Results',
          title: 'What Creators Achieve',
          items: [
            { value: '10h+', label: 'Hours saved weekly' },
            { value: '3x', label: 'More consistent posting' },
            { value: '47%', label: 'Higher engagement' },
            { value: '2.5x', label: 'Faster audience growth' },
          ],
        },
        cta: {
          title: 'Ready to Scale Your Creator Business?',
          subtitle: 'Join thousands of creators who spend less time on logistics and more time on what they love.',
          primary: 'Start Free Trial',
          secondary: 'View Pricing',
        },
      },
      companies: {
        hero: {
          overline: 'For Companies',
          title: 'Align Your Team Around',
          titleHighlight: 'Content That Performs',
          subtitle: 'Centralized content operations for marketing teams. Consistent brand voice, measurable results, and clear ROI across all channels.',
          ctaPrimary: 'Start Free Trial',
          ctaSecondary: 'See How It Works',
        },
        challenges: {
          overline: 'Your Challenges',
          title: 'The Coordination Problem',
          subtitle: 'Great content ideas die in silos. Teams work in isolation, brand consistency suffers, and proving ROI feels impossible.',
          items: [
            { title: 'Team Silos', description: 'Content created in isolation. No visibility into what others are publishing or planning.' },
            { title: 'Brand Inconsistency', description: 'Different team members, different interpretations. Your brand voice gets diluted.' },
            { title: 'ROI Blindness', description: 'Cannot connect content efforts to business outcomes. Budget justification is guesswork.' },
            { title: 'Manual Bottlenecks', description: 'Approvals, scheduling, and publishing still require too much manual coordination.' },
          ],
        },
        solutions: {
          overline: 'How We Help',
          title: 'One Command Center for Content',
          subtitle: 'Visibility Engine gives your team the tools to collaborate, stay on-brand, and prove impact.',
          items: [
            { title: 'Multi-Brand Workspaces', description: 'Separate spaces for each brand or product line. Clear ownership, no confusion.' },
            { title: 'Brand Guidelines Built-In', description: 'Enforce tone, terminology, and visual standards automatically.' },
            { title: 'ROI Attribution', description: 'Connect content to leads, conversions, and revenue. Know what drives results.' },
            { title: 'Workflow Automation', description: 'Approval chains, scheduled publishing, and notifications—all automated.' },
          ],
        },
        metrics: {
          overline: 'Results',
          title: 'What Teams Achieve',
          items: [
            { value: '65%', label: 'Faster content production' },
            { value: '40%', label: 'Fewer brand violations' },
            { value: '3x', label: 'Clearer ROI visibility' },
            { value: '8h', label: 'Saved per team member weekly' },
          ],
        },
        cta: {
          title: 'Ready to Unify Your Content Operations?',
          subtitle: 'Give your team the visibility platform they need to collaborate effectively and prove their impact.',
          primary: 'Start Free Trial',
          secondary: 'View Pricing',
        },
      },
      enterprise: {
        hero: {
          overline: 'For Enterprise',
          title: 'Visibility at Scale',
          titleHighlight: 'With Enterprise Control',
          subtitle: 'Built for organizations that need global coordination, strict compliance, and seamless integration with existing systems.',
          ctaPrimary: 'Contact Sales',
          ctaSecondary: 'See Capabilities',
        },
        challenges: {
          overline: 'Your Challenges',
          title: 'Enterprise-Grade Complexity',
          subtitle: 'At scale, every content decision involves security, compliance, and coordination across multiple stakeholders.',
          items: [
            { title: 'Scale Limitations', description: 'Most tools break down at enterprise volume. Slow performance, limited users, no global infrastructure.' },
            { title: 'Security Requirements', description: 'SSO, audit logs, data residency—non-negotiable requirements that most platforms cannot meet.' },
            { title: 'Compliance Burden', description: 'Regulated industries need approval workflows, retention policies, and complete audit trails.' },
            { title: 'Integration Complexity', description: 'Your tech stack is custom. Off-the-shelf integrations are not enough.' },
          ],
        },
        solutions: {
          overline: 'How We Help',
          title: 'Built for Enterprise Requirements',
          subtitle: 'Visibility Engine meets the security, scale, and integration needs of global organizations.',
          items: [
            { title: 'Dedicated Infrastructure', description: 'Single-tenant deployment, custom data residency, and 99.99% SLA guarantees.' },
            { title: 'SSO & SCIM', description: 'Enterprise identity management. SAML, OIDC, and automatic user provisioning.' },
            { title: 'Complete Audit Trail', description: 'Every action logged. Retention policies, compliance exports, and role-based access.' },
            { title: 'Custom SLAs & Support', description: 'Dedicated account team, custom integrations, and priority support.' },
          ],
        },
        metrics: {
          overline: 'Results',
          title: 'Enterprise Performance',
          items: [
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '50+', label: 'Native integrations' },
            { value: 'SOC 2', label: 'Compliance certified' },
            { value: '24/7', label: 'Dedicated support' },
          ],
        },
        cta: {
          title: 'Ready for Enterprise-Grade Visibility?',
          subtitle: 'Talk to our enterprise team about custom deployment, security requirements, and integration needs.',
          primary: 'Contact Sales',
          secondary: 'View Security Docs',
        },
      },
      agencies: {
        hero: {
          overline: 'For Agencies',
          title: 'Manage Multiple Clients',
          titleHighlight: 'From One Platform',
          subtitle: 'The visibility platform built for agencies. Separate client workspaces, white-label reporting, and scalable workflows.',
          ctaPrimary: 'Start Free Trial',
          ctaSecondary: 'See Agency Features',
        },
        challenges: {
          overline: 'Your Challenges',
          title: 'The Agency Juggling Act',
          subtitle: 'Managing multiple clients means multiple logins, scattered data, and reporting that takes longer than the actual work.',
          items: [
            { title: 'Client Chaos', description: 'Switching between accounts, platforms, and dashboards. No unified view of all client work.' },
            { title: 'Reporting Overhead', description: 'Building client reports manually. Hours spent on formatting instead of strategy.' },
            { title: 'White-Label Needs', description: 'Clients expect reports and dashboards branded with their identity, not yours.' },
            { title: 'Scaling Pains', description: 'Each new client means more complexity. Your tools do not scale with your business.' },
          ],
        },
        solutions: {
          overline: 'How We Help',
          title: 'Built for Multi-Client Operations',
          subtitle: 'Visibility Engine gives agencies the tools to manage any number of clients efficiently.',
          items: [
            { title: 'Client Workspaces', description: 'Isolated environments for each client. Switch contexts in one click.' },
            { title: 'White-Label Branding', description: 'Reports, dashboards, and emails in your client\'s branding. Professional presentation.' },
            { title: 'Automated Reporting', description: 'Scheduled client reports that generate and send automatically. Reclaim your hours.' },
            { title: 'Scalable Workflows', description: 'Templates and automation that work across all clients. Add new clients without adding complexity.' },
          ],
        },
        metrics: {
          overline: 'Results',
          title: 'What Agencies Achieve',
          items: [
            { value: '75%', label: 'Less reporting time' },
            { value: '3x', label: 'More clients per manager' },
            { value: '60%', label: 'Faster onboarding' },
            { value: '4.8/5', label: 'Client satisfaction' },
          ],
        },
        cta: {
          title: 'Ready to Scale Your Agency?',
          subtitle: 'Join agencies that manage more clients with less overhead using Visibility Engine.',
          primary: 'Start Free Trial',
          secondary: 'View Pricing',
        },
      },
    },
    industryPages: {
      marketing: {
        hero: {
          overline: 'For Marketing Teams',
          title: 'Maximize Campaign Reach',
          titleHighlight: 'Across Every Channel',
          subtitle: 'Orchestrate multi-channel campaigns with precise attribution, automated distribution, and real-time performance visibility that proves ROI.',
          ctaPrimary: 'Start Free Trial',
          ctaSecondary: 'See How It Works',
        },
        challenges: {
          overline: 'Marketing Challenges',
          title: 'The Multi-Channel Struggle',
          subtitle: 'Modern marketing demands presence everywhere, but scattered tools and siloed data make it impossible to see what actually works.',
          items: [
            { title: 'Fragmented Attribution', description: 'Customer journeys span dozens of touchpoints. Connecting the dots to prove ROI feels like guesswork.' },
            { title: 'Channel Chaos', description: 'Every platform requires different formats, timing, and strategies. Managing them separately wastes hours daily.' },
            { title: 'Blind Optimization', description: 'Without unified analytics, you cannot see which campaigns actually drive conversions and revenue.' },
            { title: 'Timing Misfires', description: 'Posting at the wrong time kills reach. Manual scheduling means missed opportunities across time zones.' },
          ],
        },
        solutions: {
          overline: 'How We Help',
          title: 'Unified Campaign Command Center',
          subtitle: 'Visibility Engine gives marketing teams the tools to orchestrate, measure, and optimize across every channel.',
          items: [
            { title: 'Cross-Channel Analytics', description: 'One dashboard for all platforms. See performance, compare channels, and identify winners instantly.' },
            { title: 'Smart Scheduling', description: 'AI-optimized posting times per channel and audience segment. Maximize reach automatically.' },
            { title: 'Attribution Modeling', description: 'Multi-touch attribution that connects content to conversions. Know exactly what drives revenue.' },
            { title: 'Campaign Automation', description: 'Rules-based workflows that publish, promote, and optimize without manual intervention.' },
          ],
        },
        features: {
          overline: 'Key Features for Marketing',
          title: 'Built for Performance Marketing',
          subtitle: 'Every feature designed to amplify reach, prove ROI, and save time.',
          items: [
            { title: 'Campaign Performance Hub', description: 'Real-time dashboards showing reach, engagement, and conversion metrics across all channels.' },
            { title: 'Audience Insights', description: 'Understand who engages with your content. Demographics, behavior, and preferences in one view.' },
            { title: 'A/B Testing', description: 'Test headlines, visuals, and timing. Let data decide what performs best.' },
            { title: 'Automated Alerts', description: 'Get notified when campaigns over- or underperform. React before small issues become big problems.' },
            { title: 'Custom Reporting', description: 'Generate stakeholder reports automatically. White-label exports that impress clients and leadership.' },
            { title: 'Budget Tracking', description: 'Connect spend to results. Know your true cost per acquisition across every channel.' },
          ],
        },
        cta: {
          title: 'Ready to Unify Your Marketing?',
          subtitle: 'Join marketing teams that have cut reporting time in half while doubling their campaign reach.',
          primary: 'Start Free Trial',
          secondary: 'View Pricing',
        },
      },
      saas: {
        hero: {
          overline: 'For SaaS Companies',
          title: 'Fuel Product-Led Growth',
          titleHighlight: 'With Strategic Content',
          subtitle: 'From developer documentation to thought leadership, orchestrate the content engine that drives trials, adoption, and expansion revenue.',
          ctaPrimary: 'Start Free Trial',
          ctaSecondary: 'See How It Works',
        },
        challenges: {
          overline: 'SaaS Content Challenges',
          title: 'Content That Converts Is Hard',
          subtitle: 'SaaS growth depends on content that educates, activates, and retains. Most teams struggle to maintain quality at scale.',
          items: [
            { title: 'Developer Content Gaps', description: 'Technical documentation, tutorials, and API guides need constant updates. Falling behind hurts adoption.' },
            { title: 'Scattered Knowledge Base', description: 'Help docs, blog posts, and guides live in different systems. Users cannot find answers, support tickets pile up.' },
            { title: 'Unclear Content ROI', description: 'Which blog post drove that enterprise signup? Without attribution, content investment feels like a leap of faith.' },
            { title: 'Scaling Challenges', description: 'Growing means more content, more channels, more localization. Manual processes break at scale.' },
          ],
        },
        solutions: {
          overline: 'How We Help',
          title: 'The SaaS Content Operating System',
          subtitle: 'Visibility Engine helps SaaS teams create, distribute, and measure content that drives growth.',
          items: [
            { title: 'Unified Content Hub', description: 'Blog, docs, changelog, and help center—all managed from one place with consistent structure.' },
            { title: 'Developer-Focused Features', description: 'Markdown support, code snippets, API documentation templates, and version control for technical content.' },
            { title: 'Adoption Analytics', description: 'Track content consumption throughout the user journey. See what drives activation and retention.' },
            { title: 'Growth Automation', description: 'Trigger content delivery based on user behavior. Onboarding sequences, feature announcements, and re-engagement.' },
          ],
        },
        features: {
          overline: 'Key Features for SaaS',
          title: 'Built for Product-Led Growth',
          subtitle: 'Every feature designed to support the content needs of modern SaaS companies.',
          items: [
            { title: 'Documentation Management', description: 'Version-controlled docs with search, navigation, and automatic changelog generation.' },
            { title: 'Developer Portal Integration', description: 'Connect your docs to your API. Keep examples current and reference always accurate.' },
            { title: 'Knowledge Base Builder', description: 'Self-service help content that reduces support load and improves user experience.' },
            { title: 'Content Personalization', description: 'Show different content based on user segment, plan tier, or lifecycle stage.' },
            { title: 'Community Content', description: 'Manage user-generated tutorials, case studies, and integration guides alongside official content.' },
            { title: 'Launch Coordination', description: 'Orchestrate product launches with aligned messaging across blog, docs, email, and social.' },
          ],
        },
        cta: {
          title: 'Ready to Scale Your Content Engine?',
          subtitle: 'Join SaaS companies that use Visibility Engine to drive product-led growth with strategic content.',
          primary: 'Start Free Trial',
          secondary: 'View Pricing',
        },
      },
      ecommerce: {
        hero: {
          overline: 'For E-Commerce',
          title: 'Drive Product Visibility',
          titleHighlight: 'At Scale',
          subtitle: 'Manage thousands of product descriptions, automate seasonal campaigns, and optimize content for every marketplace and channel.',
          ctaPrimary: 'Start Free Trial',
          ctaSecondary: 'See How It Works',
        },
        challenges: {
          overline: 'E-Commerce Challenges',
          title: 'Product Content Chaos',
          subtitle: 'Managing content for hundreds or thousands of SKUs across multiple channels is a logistical nightmare.',
          items: [
            { title: 'Catalog Overwhelm', description: 'Thousands of products, each needing descriptions, images, and specs. Updates take weeks, not hours.' },
            { title: 'Seasonal Pressure', description: 'Holiday campaigns, flash sales, and promotions demand rapid content changes across all channels simultaneously.' },
            { title: 'Marketplace Fragmentation', description: 'Amazon, Shopify, eBay, social commerce—each platform has different requirements and optimization rules.' },
            { title: 'Attribution Blindness', description: 'Which content drives sales? Without connecting content to conversions, optimization is impossible.' },
          ],
        },
        solutions: {
          overline: 'How We Help',
          title: 'Product Content at Scale',
          subtitle: 'Visibility Engine helps e-commerce teams manage, optimize, and distribute product content efficiently.',
          items: [
            { title: 'Bulk Content Management', description: 'Update thousands of listings at once. Templates, bulk editing, and automated formatting.' },
            { title: 'Multi-Channel Distribution', description: 'Publish to Amazon, Shopify, social, and more from one place. Format automatically per platform.' },
            { title: 'Sales Attribution', description: 'Connect content views to purchases. Know which descriptions, images, and videos drive revenue.' },
            { title: 'Seasonal Automation', description: 'Schedule campaign content months ahead. Automatic rollout and rollback for promotions.' },
          ],
        },
        features: {
          overline: 'Key Features for E-Commerce',
          title: 'Built for Product Catalogs',
          subtitle: 'Every feature designed to handle the unique demands of e-commerce content.',
          items: [
            { title: 'Product Feed Management', description: 'Centralize product data. Push updates to all channels with one click.' },
            { title: 'Visual Asset Library', description: 'Organize product photos, lifestyle images, and videos. Resize and format for each platform.' },
            { title: 'SEO Optimization', description: 'Keyword-optimized titles and descriptions. A/B test to maximize organic traffic.' },
            { title: 'Promotional Calendars', description: 'Plan seasonal campaigns visually. Coordinate content across email, social, and marketplace.' },
            { title: 'Performance Analytics', description: 'Track which products get views, which convert, and which need content improvements.' },
            { title: 'Marketplace Sync', description: 'Real-time sync with major marketplaces. Inventory, pricing, and content always current.' },
          ],
        },
        cta: {
          title: 'Ready to Scale Your Product Content?',
          subtitle: 'Join e-commerce teams that manage thousands of SKUs efficiently with Visibility Engine.',
          primary: 'Start Free Trial',
          secondary: 'View Pricing',
        },
      },
      finance: {
        hero: {
          overline: 'For Financial Services',
          title: 'Compliant Content',
          titleHighlight: 'That Builds Trust',
          subtitle: 'Navigate regulatory requirements while building thought leadership. Secure workflows, audit trails, and approval chains for financial content.',
          ctaPrimary: 'Start Free Trial',
          ctaSecondary: 'See How It Works',
        },
        challenges: {
          overline: 'Finance Industry Challenges',
          title: 'Compliance Meets Content',
          subtitle: 'Financial services content must be accurate, compliant, and timely—a challenging combination that requires specialized workflows.',
          items: [
            { title: 'Regulatory Burden', description: 'Every piece of content needs compliance review. Manual processes create bottlenecks and slow time-to-market.' },
            { title: 'Risk Management', description: 'One wrong word can trigger regulatory issues. Version control and approval tracking are not optional.' },
            { title: 'Security Requirements', description: 'Financial data demands enterprise-grade security. Consumer tools cannot meet audit and compliance needs.' },
            { title: 'Audit Trail Gaps', description: 'Regulators require proof of who approved what and when. Scattered tools make this nearly impossible.' },
          ],
        },
        solutions: {
          overline: 'How We Help',
          title: 'Built for Regulated Industries',
          subtitle: 'Visibility Engine provides the security, compliance, and workflow features financial services demand.',
          items: [
            { title: 'Compliance Workflows', description: 'Multi-step approval chains with role-based access. Legal, compliance, and marketing collaborate seamlessly.' },
            { title: 'Complete Audit Trails', description: 'Every edit, approval, and publication logged. Export-ready reports for regulatory review.' },
            { title: 'Enterprise Security', description: 'SSO, encryption at rest and in transit, SOC 2 compliance, and custom data residency options.' },
            { title: 'Automated Compliance Checks', description: 'Flag potentially problematic language before publication. Reduce review cycles and risk.' },
          ],
        },
        features: {
          overline: 'Key Features for Finance',
          title: 'Security-First Content Management',
          subtitle: 'Every feature designed with compliance and security as the foundation.',
          items: [
            { title: 'Role-Based Permissions', description: 'Granular access control. Define who can create, edit, approve, and publish.' },
            { title: 'Document Retention', description: 'Automated retention policies. Keep records as long as regulations require, then securely delete.' },
            { title: 'Compliance Templates', description: 'Pre-approved templates for common content types. Reduce review burden while ensuring consistency.' },
            { title: 'Disclosure Management', description: 'Automated disclaimers and disclosures. Never forget required regulatory language.' },
            { title: 'Performance Dashboards', description: 'Track content performance while maintaining compliance. Prove ROI to stakeholders.' },
            { title: 'Real-Time Alerts', description: 'Get notified of pending approvals, expiring content, and compliance review deadlines.' },
          ],
        },
        cta: {
          title: 'Ready for Compliant Content at Scale?',
          subtitle: 'Join financial services firms that trust Visibility Engine for secure, compliant content management.',
          primary: 'Start Free Trial',
          secondary: 'View Pricing',
        },
      },
      media: {
        hero: {
          overline: 'For Media & Publishing',
          title: 'Streamline Editorial Workflows',
          titleHighlight: 'Monetize Content',
          subtitle: 'From newsroom to revenue, orchestrate editorial calendars, automate distribution, and maximize audience engagement and monetization.',
          ctaPrimary: 'Start Free Trial',
          ctaSecondary: 'See How It Works',
        },
        challenges: {
          overline: 'Media Industry Challenges',
          title: 'Publishing at the Speed of News',
          subtitle: 'Modern media demands constant content, tight deadlines, and diversified revenue—all with shrinking resources.',
          items: [
            { title: 'Editorial Bottlenecks', description: 'Stories stuck in approval queues. Breaking news waits while editors juggle competing priorities.' },
            { title: 'Content Sprawl', description: 'Articles, videos, podcasts, newsletters—each with different workflows, platforms, and teams.' },
            { title: 'Monetization Pressure', description: 'Advertising revenue declines. Subscriptions, sponsorships, and affiliate require new content strategies.' },
            { title: 'Distribution Complexity', description: 'Website, app, social, newsletters, syndication—reaching audiences requires publishing everywhere, fast.' },
          ],
        },
        solutions: {
          overline: 'How We Help',
          title: 'The Modern Publishing Platform',
          subtitle: 'Visibility Engine helps media teams produce, distribute, and monetize content efficiently.',
          items: [
            { title: 'Editorial Calendars', description: 'Visual planning for all content types. Assign, track, and collaborate across teams and deadlines.' },
            { title: 'Multi-Format Workflows', description: 'Articles, videos, podcasts—unified workflows that respect each format\'s unique requirements.' },
            { title: 'Revenue Analytics', description: 'Connect content to revenue streams. Track ads, subscriptions, and affiliate conversions per piece.' },
            { title: 'Automated Distribution', description: 'Publish once, distribute everywhere. Automatic formatting for each channel and platform.' },
          ],
        },
        features: {
          overline: 'Key Features for Media',
          title: 'Built for Editorial Excellence',
          subtitle: 'Every feature designed to support fast-moving newsrooms and publishing teams.',
          items: [
            { title: 'Story Planning Tools', description: 'From pitch to publication. Track story development, sources, and multimedia assets.' },
            { title: 'Editorial Calendar', description: 'Visual calendar with drag-and-drop scheduling. See what is coming across all content types.' },
            { title: 'Contributor Management', description: 'Manage freelancers, guest authors, and staff. Assignments, deadlines, and payments in one place.' },
            { title: 'Syndication Hub', description: 'Distribute to partners automatically. Track where your content appears and measure performance.' },
            { title: 'Audience Analytics', description: 'Understand what resonates. Track reads, time-on-page, shares, and subscriber conversions.' },
            { title: 'AI-Powered Recommendations', description: 'Suggest topics, optimize headlines, and identify trending subjects before competitors.' },
          ],
        },
        cta: {
          title: 'Ready to Transform Your Newsroom?',
          subtitle: 'Join media companies that use Visibility Engine to publish faster and monetize smarter.',
          primary: 'Start Free Trial',
          secondary: 'View Pricing',
        },
      },
    },
    trustPages: {
      security: {
        hero: {
          overline: 'Security',
          title: 'Your Data, Protected',
          subtitle: 'Security is not an afterthought. It is built into every layer of our platform, from infrastructure to application.',
        },
        principles: {
          overline: 'Our Commitments',
          title: 'Security Principles',
          encryption: {
            title: 'End-to-End Encryption',
            description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256. Your content never travels unprotected.',
          },
          access: {
            title: 'Strict Access Controls',
            description: 'Role-based access, multi-factor authentication, and principle of least privilege ensure only authorized access.',
          },
          monitoring: {
            title: '24/7 Monitoring',
            description: 'Continuous security monitoring, intrusion detection, and automated threat response protect your data around the clock.',
          },
          availability: {
            title: 'High Availability',
            description: 'Redundant infrastructure across multiple regions ensures your data is always accessible when you need it.',
          },
        },
        technical: {
          overline: 'Technical Details',
          title: 'How We Protect Your Data',
          infrastructure: {
            title: 'Infrastructure',
            items: [
              'Hosted on SOC 2 Type II certified cloud providers',
              'Isolated network environments per tenant',
              'Regular penetration testing by third parties',
              'Automated vulnerability scanning',
            ],
          },
          dataProtection: {
            title: 'Data Protection',
            items: [
              'AES-256 encryption at rest',
              'TLS 1.3 encryption in transit',
              'Secure key management with HSM',
              'Regular encrypted backups',
            ],
          },
          accessControl: {
            title: 'Access Control',
            items: [
              'Multi-factor authentication',
              'Single sign-on (SSO) support',
              'Role-based permissions',
              'Session management and timeout',
            ],
          },
        },
        certifications: {
          overline: 'Standards & Certifications',
          title: 'Industry-Recognized Security',
          soc2: {
            title: 'SOC 2 Type II',
            status: 'In Progress',
            description: 'We are actively pursuing SOC 2 Type II certification to demonstrate our commitment to security, availability, and confidentiality.',
          },
          gdpr: {
            title: 'GDPR Compliant',
            status: 'Compliant',
            description: 'Full compliance with the European General Data Protection Regulation for data privacy and protection.',
          },
          iso: {
            title: 'ISO 27001',
            status: 'Planned',
            description: 'ISO 27001 certification is on our roadmap to formalize our information security management system.',
          },
        },
        contact: {
          title: 'Security Questions?',
          description: 'Our security team is available to answer questions, review our security practices, or discuss specific requirements for your organization.',
        },
      },
      privacy: {
        hero: {
          overline: 'Privacy',
          title: 'Your Data Stays Yours',
          subtitle: 'We believe privacy is a fundamental right. Your data belongs to you, and we treat it with the respect it deserves.',
        },
        principles: {
          overline: 'Privacy Principles',
          title: 'How We Handle Your Data',
          ownership: {
            title: 'You Own Your Data',
            description: 'Your content, your analytics, your audience data—it all belongs to you. We are custodians, not owners.',
          },
          minimal: {
            title: 'Data Minimization',
            description: 'We only collect what we need to provide our service. Nothing more. No hidden tracking or unnecessary data collection.',
          },
          noSelling: {
            title: 'We Never Sell Your Data',
            description: 'Your data is not a product. We do not sell, rent, or trade your information to third parties. Period.',
          },
          control: {
            title: 'You Are in Control',
            description: 'Export your data anytime. Delete your account completely. You decide what happens to your information.',
          },
        },
        practices: {
          overline: 'Data Practices',
          title: 'Transparency in Action',
          collection: {
            title: 'What We Collect',
            items: [
              'Account information you provide',
              'Content you create and upload',
              'Platform usage for service improvement',
              'Analytics data you choose to track',
            ],
          },
          storage: {
            title: 'How We Store It',
            items: [
              'Encrypted at rest and in transit',
              'Stored in EU data centers',
              'Regular security audits',
              'Strict retention policies',
            ],
          },
          sharing: {
            title: 'Who Has Access',
            items: [
              'Only authorized team members',
              'No third-party data sales',
              'Minimal vendor access',
              'Full audit trails',
            ],
          },
        },
        rights: {
          overline: 'Your Rights',
          title: 'Complete Data Control',
          subtitle: 'Under GDPR and other privacy regulations, you have specific rights regarding your personal data.',
          access: {
            title: 'Right to Access',
            description: 'Request a complete copy of all personal data we hold about you.',
          },
          portability: {
            title: 'Right to Portability',
            description: 'Export your data in a machine-readable format anytime.',
          },
          deletion: {
            title: 'Right to Deletion',
            description: 'Request complete deletion of your account and all associated data.',
          },
          correction: {
            title: 'Right to Correction',
            description: 'Update or correct any inaccurate personal information.',
          },
        },
        gdpr: {
          overline: 'GDPR Compliance',
          title: 'Built for Privacy by Design',
          description: 'We have designed our platform from the ground up with GDPR principles in mind. Privacy is not a feature we added—it is how we operate.',
          items: [
            'Lawful basis for all data processing',
            'Data Protection Impact Assessments',
            'Designated Data Protection Officer',
            'Sub-processor agreements in place',
            'Breach notification procedures',
            'Regular privacy training for staff',
          ],
        },
        contact: {
          title: 'Privacy Questions?',
          description: 'Our privacy team is here to answer your questions about how we handle your data.',
        },
      },
      compliance: {
        hero: {
          overline: 'Compliance',
          title: 'Standards You Can Trust',
          subtitle: 'We hold ourselves to the highest standards of regulatory compliance and industry best practices.',
        },
        principles: {
          overline: 'Our Approach',
          title: 'Compliance Principles',
          standards: {
            title: 'Industry Standards',
            description: 'We align with recognized frameworks and standards to ensure consistent, verifiable compliance across our operations.',
          },
          audits: {
            title: 'Regular Audits',
            description: 'Independent third-party audits verify our controls and practices, providing objective assurance of our compliance.',
          },
          documentation: {
            title: 'Complete Documentation',
            description: 'Comprehensive policies, procedures, and records demonstrate our commitment to compliance at every level.',
          },
          continuous: {
            title: 'Continuous Improvement',
            description: 'Compliance is not a checkbox. We continuously monitor, assess, and improve our practices as requirements evolve.',
          },
        },
        frameworks: {
          overline: 'Frameworks & Standards',
          title: 'Certifications & Compliance',
          gdpr: {
            title: 'GDPR',
            status: 'Compliant',
            description: 'Full compliance with EU data protection requirements.',
            items: [
              'Data processing agreements',
              'Privacy impact assessments',
              'Consent management',
              'Data subject rights handling',
            ],
          },
          soc2: {
            title: 'SOC 2 Type II',
            status: 'In Progress',
            description: 'Demonstrating security, availability, and confidentiality controls.',
            items: [
              'Security policies and procedures',
              'Access control systems',
              'Incident response plans',
              'Change management processes',
            ],
          },
          iso: {
            title: 'ISO 27001',
            status: 'Planned',
            description: 'Information security management system certification.',
            items: [
              'Risk assessment framework',
              'Security control implementation',
              'Management review process',
              'Continuous improvement cycle',
            ],
          },
        },
        audits: {
          overline: 'Audit Readiness',
          title: 'Always Prepared',
          subtitle: 'Our systems and processes are designed to support audits and demonstrate compliance at any time.',
          security: {
            title: 'Security Controls',
            description: 'Documented security policies, technical controls, and regular testing.',
          },
          dataHandling: {
            title: 'Data Handling',
            description: 'Clear data flows, retention policies, and processing records.',
          },
          accessControl: {
            title: 'Access Management',
            description: 'User provisioning, permission audits, and access reviews.',
          },
          vendorManagement: {
            title: 'Vendor Management',
            description: 'Due diligence, contracts, and ongoing monitoring of third parties.',
          },
        },
        contact: {
          title: 'Compliance Inquiries',
          description: 'For compliance documentation, audit requests, or regulatory questions, contact our compliance team.',
        },
      },
      transparency: {
        hero: {
          overline: 'Transparency',
          title: 'No Black Boxes',
          subtitle: 'We believe you should understand exactly how our platform works, what decisions it makes, and why.',
        },
        principles: {
          overline: 'Transparency Principles',
          title: 'Openness by Design',
          noBlackBox: {
            title: 'No Hidden Logic',
            description: 'Every recommendation, every score, every automated decision can be traced back to clear, understandable factors.',
          },
          explainableAI: {
            title: 'Explainable AI',
            description: 'When our AI makes suggestions or predictions, it tells you why. No mysterious algorithms—just clear reasoning.',
          },
          control: {
            title: 'You Set the Rules',
            description: 'Automation works for you, not the other way around. You define the rules, set the thresholds, and approve the actions.',
          },
          visibility: {
            title: 'Full Visibility',
            description: 'Dashboards show exactly what is happening with your content, your data, and your performance—in real time.',
          },
        },
        features: {
          overline: 'How We Deliver Transparency',
          title: 'Built-In Visibility',
          decisionLogs: {
            title: 'Decision Logs',
            items: [
              'Complete history of automated actions',
              'Reasoning behind each decision',
              'Before and after comparisons',
              'Easy rollback options',
            ],
          },
          auditTrail: {
            title: 'Audit Trail',
            items: [
              'Every change tracked',
              'User action logging',
              'Timestamp verification',
              'Exportable records',
            ],
          },
          explainability: {
            title: 'AI Explainability',
            items: [
              'Factor breakdown for scores',
              'Confidence levels shown',
              'Data sources referenced',
              'Alternative options explained',
            ],
          },
        },
        commitments: {
          overline: 'Our Commitments',
          title: 'Transparency in Practice',
          subtitle: 'These are not just words. They are commitments we make to every user of our platform.',
          openCommunication: {
            title: 'Open Communication',
            description: 'We share our roadmap, explain our decisions, and listen to your feedback. No surprises.',
          },
          changelog: {
            title: 'Public Changelog',
            description: 'Every update, every change, every improvement is documented and communicated clearly.',
          },
          feedback: {
            title: 'Feedback Loop',
            description: 'Your input directly shapes our product. We share what we are working on and why.',
          },
          honesty: {
            title: 'Honest Limitations',
            description: 'We are clear about what our platform can and cannot do. No overpromises, no misleading claims.',
          },
        },
        quote: {
          text: 'The best AI is not the one that makes decisions for you—it is the one that helps you make better decisions yourself.',
          attribution: 'Our Product Philosophy',
        },
        contact: {
          title: 'Questions About Our Approach?',
          description: 'We welcome questions about how our platform works. Transparency starts with open dialogue.',
        },
      },
    },
    resourcePages: {
      guides: {
        hero: {
          overline: 'Guides & Tutorials',
          title: 'Master Visibility Engine',
          subtitle: 'Step-by-step guides to help you get the most out of every feature. From first setup to advanced automation.',
        },
        categories: {
          all: 'All Guides',
          gettingStarted: 'Getting Started',
          advanced: 'Advanced',
          integration: 'Integration',
          bestPractices: 'Best Practices',
        },
        items: {
          quickStart: {
            title: 'Quick Start Guide',
            description: 'Get up and running in 15 minutes. Connect your first platform, create your first content piece, and schedule your first post.',
            readTime: '15 min read',
          },
          advancedAutomation: {
            title: 'Advanced Automation Setup',
            description: 'Build sophisticated automation rules that react to performance signals and optimize your content distribution automatically.',
            readTime: '25 min read',
          },
          apiIntegration: {
            title: 'API Integration Guide',
            description: 'Connect Visibility Engine to your existing tools and workflows using our REST API and webhooks.',
            readTime: '30 min read',
          },
          contentStrategy: {
            title: 'Content Strategy Framework',
            description: 'Learn the proven framework for creating content that performs consistently across all platforms.',
            readTime: '20 min read',
          },
          analyticsDeepDive: {
            title: 'Analytics Deep Dive',
            description: 'Understand every metric, learn to read performance patterns, and make data-driven decisions for your content.',
            readTime: '35 min read',
          },
          schedulingMastery: {
            title: 'Scheduling Mastery',
            description: 'Optimize your posting schedule based on audience behavior, time zones, and platform algorithms.',
            readTime: '18 min read',
          },
        },
        cta: 'Read Guide',
        newsletter: {
          title: 'Get New Guides in Your Inbox',
          description: 'Subscribe to receive new guides, tips, and best practices directly in your email.',
          placeholder: 'your@email.com',
          button: 'Subscribe',
        },
      },
      automationPlaybooks: {
        hero: {
          overline: 'Automation Playbooks',
          title: 'Ready-to-Use Workflows',
          subtitle: 'Pre-built automation templates that you can deploy in minutes. Each playbook is battle-tested and optimized for results.',
        },
        benefits: [
          'Deploy in minutes',
          'Fully customizable',
          'Performance optimized',
          'No coding required',
        ],
        grid: {
          title: 'Popular Playbooks',
          subtitle: 'Choose a playbook that matches your goals and start automating today.',
        },
        items: {
          contentCalendar: {
            title: 'Smart Content Calendar',
            description: 'Automatically schedule and distribute content across platforms based on optimal posting times.',
            stepsCount: '5 automation steps',
            useCase: 'Best for: Consistent publishing',
          },
          performanceAlerts: {
            title: 'Performance Alerts',
            description: 'Get notified when content performs exceptionally well or needs attention based on custom thresholds.',
            stepsCount: '3 automation steps',
            useCase: 'Best for: Real-time monitoring',
          },
          engagementBoost: {
            title: 'Engagement Boost',
            description: 'Automatically resurface and promote high-performing content to maximize reach and engagement.',
            stepsCount: '4 automation steps',
            useCase: 'Best for: Maximizing ROI',
          },
          crossPosting: {
            title: 'Cross-Platform Publishing',
            description: 'Publish content to multiple platforms simultaneously with platform-specific optimizations.',
            stepsCount: '6 automation steps',
            useCase: 'Best for: Multi-platform reach',
          },
          aiOptimization: {
            title: 'AI Content Optimization',
            description: 'Use AI to automatically suggest improvements and optimize content for each platform.',
            stepsCount: '4 automation steps',
            useCase: 'Best for: Content quality',
          },
          republishing: {
            title: 'Evergreen Republishing',
            description: 'Automatically identify and republish evergreen content at optimal intervals.',
            stepsCount: '5 automation steps',
            useCase: 'Best for: Content longevity',
          },
        },
        cta: 'Use Playbook',
        custom: {
          title: 'Need a Custom Playbook?',
          description: 'Our team can help you build custom automation workflows tailored to your specific needs and goals.',
          button: 'Contact Us',
        },
      },
      changelog: {
        hero: {
          overline: 'Changelog',
          title: 'What\'s New',
          subtitle: 'Track every update, improvement, and new feature. We ship frequently and document everything.',
          currentVersion: 'v2.8.0',
          lastUpdated: 'January 2026',
        },
        filters: {
          all: 'All Updates',
          features: 'Features',
          fixes: 'Fixes',
          improvements: 'Improvements',
        },
        entries: {
          v280: {
            date: 'Jan 15, 2026',
            version: 'v2.8.0',
            title: 'AI-Powered Content Suggestions',
            description: 'Introducing intelligent content suggestions based on your performance data and trending topics. The AI analyzes your best-performing content and suggests new ideas that are likely to resonate with your audience.',
          },
          v275: {
            date: 'Jan 8, 2026',
            version: 'v2.7.5',
            title: 'Enhanced Analytics Dashboard',
            description: 'Completely redesigned analytics dashboard with new visualization options, custom date ranges, and exportable reports. Now includes predictive performance metrics.',
          },
          v270: {
            date: 'Dec 20, 2025',
            version: 'v2.7.0',
            title: 'Performance Optimization',
            description: 'Major performance improvements across the platform. Page load times reduced by 40%, real-time updates are now instant, and mobile experience is smoother than ever.',
          },
          v265: {
            date: 'Dec 12, 2025',
            version: 'v2.6.5',
            title: 'New Platform Integrations',
            description: 'Added support for three new platforms: Threads, Bluesky, and Mastodon. Connect and manage all your social presence from one place.',
          },
          v260: {
            date: 'Dec 5, 2025',
            version: 'v2.6.0',
            title: 'Automation Rule Builder 2.0',
            description: 'Rebuilt the automation rule builder from the ground up. New visual interface, more trigger options, and better condition logic for complex workflows.',
          },
          v255: {
            date: 'Nov 28, 2025',
            version: 'v2.5.5',
            title: 'Team Collaboration Features',
            description: 'New team features including role-based permissions, content approval workflows, and shared content libraries. Perfect for agencies and enterprise teams.',
          },
        },
        subscribe: {
          title: 'Stay Updated',
          description: 'Get notified about new features, improvements, and important updates directly in your inbox.',
          placeholder: 'your@email.com',
          button: 'Subscribe',
        },
      },
      blog: {
        overline: 'Redirecting',
        title: 'Heading to the Blog',
        subtitle: 'You\'ll be redirected to our main blog section in a moment.',
        primaryCta: 'Go to Blog Now',
        secondaryCta: 'Browse Guides Instead',
        redirectNotice: 'Redirecting automatically in 3 seconds...',
      },
    },
  },
  de: {
    nav: {
      features: 'Features',
      pricing: 'Preise',
      about: 'Über uns',
      blog: 'Blog',
      login: 'Anmelden',
      getStarted: 'Jetzt starten',
      // MegaMenu Navigation
      product: 'Produkt',
      useCases: 'Anwendungsfälle',
      resources: 'Ressourcen',
      menu: {
        product: {
          title: 'Produkt',
          core: {
            label: 'Kernplattform',
            items: {
              visibilityEngine: { title: 'Visibility Engine', desc: 'Das komplette Visibility-Betriebssystem' },
              distribution: { title: 'Distribution', desc: 'Multi-Plattform Content-Verteilung' },
              signals: { title: 'Signale & Insights', desc: 'Echtzeit-Analytics und Monitoring' },
              automation: { title: 'Automatisierung', desc: 'Regelbasierte Workflow-Automation' },
            },
          },
          advanced: {
            label: 'Erweitert',
            items: {
              explainability: { title: 'Erklärbarkeit', desc: 'Transparente KI-Entscheidungen' },
              reporting: { title: 'Reporting', desc: 'Professionelle Analytics-Dashboards' },
              api: { title: 'API & Integrationen', desc: 'Entwicklerfreundliche Erweiterbarkeit' },
            },
          },
        },
        useCases: {
          title: 'Anwendungsfälle',
          items: {
            creators: { title: 'Creator', desc: 'Skaliere deine Personal Brand' },
            companies: { title: 'Unternehmen', desc: 'Enterprise Content Management' },
            enterprise: { title: 'Enterprise', desc: 'Großangelegte Visibility-Operationen' },
            agencies: { title: 'Agenturen', desc: 'Multi-Client Content-Workflows' },
          },
        },
        industries: {
          title: 'Branchen',
          items: {
            marketing: { title: 'Marketing', desc: 'Kampagnen-Performance & Reichweite' },
            saas: { title: 'SaaS', desc: 'Product-led Growth Content' },
            ecommerce: { title: 'E-Commerce', desc: 'Produktsichtbarkeit im großen Maßstab' },
            finance: { title: 'Finanzen', desc: 'Compliance-konformer Finanz-Content' },
            media: { title: 'Medien & Publishing', desc: 'Redaktionelle Workflow-Automatisierung' },
          },
        },
        resources: {
          title: 'Ressourcen',
          learn: {
            label: 'Lernen',
            items: {
              blog: { title: 'Blog', desc: 'Insights und Strategien' },
              guides: { title: 'Guides', desc: 'Ausführliche Tutorials' },
              playbooks: { title: 'Automation Playbooks', desc: 'Sofort einsetzbare Workflows' },
            },
          },
          company: {
            label: 'Unternehmen',
            items: {
              about: { title: 'Über uns', desc: 'Unsere Mission und Team' },
              changelog: { title: 'Changelog', desc: 'Produkt-Updates' },
            },
          },
        },
        trust: {
          title: 'Vertrauen',
          items: {
            security: { title: 'Sicherheit', desc: 'Wie wir deine Daten schützen' },
            privacy: { title: 'Datenschutz', desc: 'Datenverarbeitungspraktiken' },
            compliance: { title: 'Compliance', desc: 'Standards und Zertifizierungen' },
            transparency: { title: 'Transparenz', desc: 'Kontrolle und Erklärbarkeit' },
          },
        },
      },
    },
    footer: {
      product: 'Produkt',
      company: 'Unternehmen',
      legal: 'Rechtliches',
      features: 'Features',
      pricing: 'Preise',
      about: 'Über uns',
      blog: 'Blog',
      privacy: 'Datenschutz',
      terms: 'AGB',
      imprint: 'Impressum',
      copyright: '© 2026 Visibility Engine. Alle Rechte vorbehalten.',
    },
    auth: {
      common: {
        or: 'oder',
        backToHome: 'Zurück zur Startseite',
        backToLogin: 'Zurück zum Login',
        goToLogin: 'Zum Login',
        loading: 'Laden...',
        sending: 'Wird gesendet...',
        saving: 'Wird gespeichert...',
        registering: 'Registrierung...',
        signingIn: 'Anmelden...',
        emailPlaceholder: 'name@beispiel.de',
        passwordPlaceholder: 'Mindestens 8 Zeichen',
        passwordHint: 'Mindestens 8 Zeichen. Empfohlen: Groß-/Kleinbuchstaben, Zahlen und Sonderzeichen.',
        repeatPassword: 'Passwort wiederholen',
        termsPrefix: 'Mit der Registrierung akzeptierst du unsere',
        termsLink: 'AGB',
        termsAnd: 'und',
        privacyLink: 'Datenschutzerklärung',
      },
      login: {
        overline: 'Willkommen zurück',
        title: 'Willkommen zurück',
        subtitle: 'Melde dich bei deinem Account an',
        email: 'E-Mail',
        password: 'Passwort',
        submit: 'Anmelden',
        forgotPassword: 'Passwort vergessen?',
        noAccount: 'Noch kein Account?',
        signUp: 'Registrieren',
        uiOnly: 'Login UI only - kein Backend implementiert',
      },
      register: {
        overline: 'Loslegen',
        title: 'Account erstellen',
        subtitle: 'Werde heute Teil von Visibility Engine',
        role: 'Ich bin...',
        roleCreator: 'Creator',
        roleCompany: 'Unternehmen',
        creatorDesc: 'Für Content-Creator & Influencer',
        companyDesc: 'Für Firmen & Teams',
        creatorFeatures: ['Automatische Content-Generierung', 'Social Media Management', 'Performance Analytics', 'Personal Branding Tools'],
        companyFeatures: ['Team-Kollaboration', 'Brand Management', 'Multi-Channel Publishing', 'Advanced Analytics'],
        startAsCreator: 'Als Creator starten',
        startAsCompany: 'Als Unternehmen starten',
        creatorAccount: 'Creator-Account',
        companyAccount: 'Unternehmens-Account',
        createAccountOverline: 'Account erstellen',
        changeAccountType: 'Account-Typ ändern',
        yourName: 'Dein Name',
        companyName: 'Firmenname',
        namePlaceholder: 'Max Mustermann',
        companyPlaceholder: 'Muster GmbH',
        name: 'Name',
        email: 'E-Mail',
        password: 'Passwort',
        confirmPassword: 'Passwort bestätigen',
        submit: 'Account erstellen',
        hasAccount: 'Bereits einen Account?',
        signIn: 'Anmelden',
        passwordMismatch: 'Passwörter stimmen nicht überein',
        uiOnly: 'Registrierung UI only - kein Backend implementiert',
      },
      forgotPassword: {
        overline: 'Passwort vergessen?',
        title: 'Kein Problem',
        subtitle: 'Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum Zurücksetzen.',
        email: 'E-Mail',
        submit: 'Reset-Link senden',
        backToLogin: 'Zurück zum Login',
        remembered: 'Doch erinnert?',
        emailSentOverline: 'E-Mail versendet',
        emailSentTitle: 'Überprüfe dein Postfach',
        emailSentTo: 'Wir haben dir eine E-Mail an',
        emailSentDesc: 'Klicke auf den Link in der E-Mail, um dein Passwort zurückzusetzen.',
        noEmail: 'Keine E-Mail erhalten? Überprüfe deinen Spam-Ordner oder',
        tryAgain: 'versuche es erneut',
        uiOnly: 'Passwort-Reset UI only - kein Backend implementiert',
      },
      resetPassword: {
        overline: 'Neues Passwort',
        title: 'Passwort zurücksetzen',
        subtitle: 'Wähle ein sicheres Passwort für deinen Account',
        password: 'Neues Passwort',
        confirmPassword: 'Passwort bestätigen',
        submit: 'Passwort zurücksetzen',
        successOverline: 'Erfolgreich',
        successTitle: 'Passwort zurückgesetzt',
        successSubtitle: 'Dein Passwort wurde erfolgreich geändert',
        successDesc: 'Du kannst dich jetzt mit deinem neuen Passwort anmelden.',
        passwordMismatch: 'Passwörter stimmen nicht überein',
        uiOnly: 'Passwort-Reset UI only - kein Backend implementiert',
      },
      verifyEmail: {
        overline: 'Einen Moment...',
        title: 'E-Mail wird verifiziert',
        verifying: 'E-Mail wird verifiziert...',
        successOverline: 'Verifiziert',
        successTitle: 'E-Mail bestätigt',
        successSubtitle: 'Dein Account wurde erfolgreich aktiviert',
        successDesc: 'Vielen Dank! Deine E-Mail-Adresse wurde bestätigt. Du kannst dich jetzt anmelden und loslegen.',
        success: 'E-Mail erfolgreich verifiziert!',
        errorOverline: 'Fehler',
        errorTitle: 'Verifizierung fehlgeschlagen',
        errorSubtitle: 'Der Link ist ungültig oder abgelaufen',
        errorDesc: 'Bitte überprüfe den Link in deiner E-Mail oder fordere einen neuen Verifizierungs-Link an.',
        error: 'Verifizierung fehlgeschlagen',
        goToDashboard: 'Zum Dashboard',
        registerAgain: 'Neu registrieren',
        uiOnly: 'E-Mail-Verifizierung UI only - kein Backend implementiert',
      },
    },
    landing: {
      hero: {
        overline: 'Die Visibility Plattform',
        title: 'Content in',
        titleHighlight: 'Messbares Wachstum',
        subtitle: 'Das Betriebssystem für Creator und Unternehmen, um Content zu orchestrieren, Distribution zu automatisieren und Sichtbarkeit in Umsatz zu verwandeln.',
        ctaPrimary: 'Kostenlos testen',
        ctaSecondary: 'Plattform ansehen',
      },
      trustBar: {
        title: 'Vertraut von führenden Creators und Growth Teams',
      },
      problem: {
        overline: 'Die Herausforderung',
        title: 'Content-Chaos tötet Wachstum',
        subtitle: 'Verstreute Tools, manuelle Prozesse, null Sichtbarkeit in das, was wirklich funktioniert. Die meisten Creator und Teams fliegen blind, während die Konkurrenz ihren Erfolg systematisiert.',
        stats: [
          { stat: '73%', label: 'des Contents erreicht nie sein potenzielles Publikum' },
          { stat: '12 Std', label: 'durchschnittliche wöchentliche Zeit verloren durch manuelle Distribution' },
          { stat: '40%', label: 'der Chancen verpasst durch Timing-Fehler' },
        ],
      },
      solution: {
        overline: 'Die Lösung',
        title: 'Eine Plattform, komplette Sichtbarkeit',
        subtitle: 'Von Content-Erstellung bis Performance-Insights—orchestriere deine gesamte Visibility Engine in einem intelligenten System.',
        steps: [
          {
            num: '01',
            title: 'Signals & Insights',
            description: 'Echtzeit-Tracking über alle Kanäle. Wisse was funktioniert, was nicht, und warum—bevor es andere tun.',
            features: ['Cross-Platform Analytics', 'Trend-Erkennung', 'Wettbewerbs-Signale'],
          },
          {
            num: '02',
            title: 'Smart Automation',
            description: 'Regelbasierte Workflows, die im perfekten Moment ausgeführt werden. Von Distribution bis Engagement—automatisiert.',
            features: ['Scheduling Engine', 'Trigger-basierte Aktionen', 'A/B Optimierung'],
          },
          {
            num: '03',
            title: 'Growth Intelligence',
            description: 'KI-gestützte Empfehlungen, die Daten in umsetzbare Wachstumsstrategien verwandeln, denen du vertrauen kannst.',
            features: ['Predictive Insights', 'Content Scoring', 'ROI Attribution'],
          },
        ],
      },
      forWho: {
        overline: 'Gebaut für',
        title: 'Professionals, die Sichtbarkeit ernst nehmen',
        creators: {
          title: 'Creator & Influencer',
          description: 'Skaliere deine Personal Brand ohne deinen Workload zu skalieren. Automatisiere das Repetitive, fokussiere auf das Kreative—während deine Sichtbarkeit wächst.',
          features: ['Multi-Plattform Scheduling', 'Audience Insights', 'Monetarisierungs-Tracking', 'Brand Deal Management'],
        },
        companies: {
          title: 'Teams & Agenturen',
          description: 'Koordiniere Kampagnen, manage mehrere Marken und beweise ROI—alles von einem Command Center, gebaut für professionelle Workflows.',
          features: ['Multi-Brand Workspaces', 'Team Collaboration', 'Client Reporting', 'White-Label Optionen'],
        },
      },
      platform: {
        overline: 'Plattform',
        title: 'Alles was du brauchst um zu gewinnen',
        subtitle: 'Ein komplettes Toolkit für modernes Visibility Management.',
        features: [
          { label: 'Content Hub', desc: 'Zentralisiertes Asset Management' },
          { label: 'Smart Scheduling', desc: 'KI-optimiertes Timing' },
          { label: 'Analytics Engine', desc: 'Cross-Platform Insights' },
          { label: 'Automation Rules', desc: 'Trigger-basierte Workflows' },
          { label: 'Team Workspaces', desc: 'Kollaborative Umgebung' },
          { label: 'API & Integrations', desc: 'Erweiterbare Plattform' },
        ],
      },
      testimonials: {
        overline: 'Ergebnisse',
        title: 'Vertraut von Growth Leaders',
        items: [
          {
            quote: 'Visibility Engine hat transformiert, wie wir Content Distribution angehen. Was früher Tage dauerte, passiert jetzt automatisch—mit besseren Ergebnissen.',
            name: 'Sarah Kim',
            role: 'Head of Content, TechScale',
          },
          {
            quote: 'Endlich eine Plattform, die versteht, dass Creator Insights brauchen, nicht nur Scheduling. Die Automation Rules allein sparen mir 10+ Stunden pro Woche.',
            name: 'Marcus Rodriguez',
            role: 'Creator, 500K+ Follower',
          },
        ],
      },
      cta: {
        title: 'Bereit deine Visibility Engine zu bauen?',
        subtitle: 'Schließe dich tausenden von Creators und Teams an, die ihre Content-Strategie transformiert haben. Starte heute kostenlos—keine Kreditkarte erforderlich.',
        ctaPrimary: 'Kostenlos testen',
        ctaSecondary: 'Preise ansehen',
      },
      howItWorks: {
        title: 'So funktioniert es',
        step1: {
          title: 'Erstellen & Organisieren',
          description: 'Zentralisiere alle Content-Assets—Videos, Bilder, Texte—in einem Workspace.',
        },
        step2: {
          title: 'Automatisieren & Planen',
          description: 'Verbreite Content über Plattformen mit intelligentem Scheduling und automatisierten Kampagnen.',
        },
        step3: {
          title: 'Analysieren & Optimieren',
          description: 'Tracke Performance, identifiziere Trends und verfeinere deine Strategie mit Echtzeit-Analytics.',
        },
      },
      features: {
        title: 'Alles, was du brauchst',
        contentHub: 'Einheitliche Content-Library mit Versionskontrolle',
        automation: 'Multi-Plattform-Scheduling und Kampagnen',
        analytics: 'Tiefe Insights und Performance-Tracking',
        ai: 'KI-Agenten für Content-Optimierung',
        collaboration: 'Team-Workspaces und Rollen-Management',
        api: 'Entwicklerfreundlicher API-Zugang',
      },
    },
    features: {
      meta: {
        title: 'Features – Visibility Engine',
        description: 'Entdecke alle Features für professionelles Content-Management, Automation, Analytics und KI-gestützte Optimierung.',
      },
      hero: {
        overline: 'Plattform-Features',
        title: 'Alles was du brauchst, um deine',
        titleHighlight: 'Sichtbarkeit zu kontrollieren',
        subtitle: 'Ein komplettes Betriebssystem für Content, Automation und Growth Intelligence—entwickelt für Profis, die sich nicht mit verstreuten Tools zufrieden geben.',
      },
      cta: {
        title: 'Bereit, es in Aktion zu sehen?',
        subtitle: 'Starte noch heute deine kostenlose Testversion und erlebe die komplette Visibility-Plattform. Keine Kreditkarte erforderlich.',
        primary: 'Kostenlos starten',
        secondary: 'Preise ansehen',
      },
      sections: {
        signals: {
          overline: 'Signale & Monitoring',
          title: 'Echtzeit-Sichtbarkeit in das, was zählt',
          description: 'Tracke Performance über jeden Kanal mit intelligentem Monitoring. Erhalte sofortige Benachrichtigungen, wenn sich Metriken verändern, Trends entstehen oder Chancen auftauchen—sodass du handeln kannst, bevor deine Konkurrenz es überhaupt bemerkt.',
          features: [
            { title: 'Cross-Platform Analytics', description: 'Einheitliche Metriken aus allen Kanälen' },
            { title: 'Trend-Erkennung', description: 'KI-gestützte Mustererkennung' },
            { title: 'Alert-System', description: 'Benutzerdefinierte Trigger für jede Metrik' },
          ],
        },
        automation: {
          overline: 'Smarte Automation',
          title: 'Regeln, die arbeiten, während du schläfst',
          description: 'Richte intelligente Workflows ein, die automatisch basierend auf Triggern, Zeitplänen oder Performance-Schwellenwerten ausgeführt werden. Von Content-Distribution bis Engagement-Responses—deine Visibility Engine läuft 24/7.',
          features: [
            { title: 'Scheduling Engine', description: 'KI-optimierte Veröffentlichungszeiten' },
            { title: 'Trigger-Aktionen', description: 'If-this-then-that Automationen' },
            { title: 'Workflow Builder', description: 'Visueller Automation-Designer' },
          ],
        },
        content: {
          overline: 'Content Management',
          title: 'Dein Command Center für allen Content',
          description: 'Organisiere, bearbeite und verwerte Content von einem zentralen Hub aus neu. Ob Video, Bilder oder Text—manage deine gesamte Content-Library mit leistungsstarken Tools, die für Scale gebaut wurden.',
          features: [
            { title: 'Media Library', description: 'Organisiertes Asset Management' },
            { title: 'Format-Konvertierung', description: 'Wiederverwertung über Plattformen' },
            { title: 'Versionskontrolle', description: 'Änderungen und Historie tracken' },
          ],
        },
        intelligence: {
          overline: 'KI-Intelligenz',
          title: 'Datengetriebene Entscheidungen, automatisiert',
          description: 'Lass künstliche Intelligenz deine Performance analysieren, Ergebnisse vorhersagen und Aktionen empfehlen. Von Content Scoring bis optimales Timing—triff jede Entscheidung datengestützt.',
          features: [
            { title: 'Predictive Analytics', description: 'Performance-Trends vorhersagen' },
            { title: 'Content Scoring', description: 'Qualitäts- und Potentialbewertungen' },
            { title: 'Smarte Empfehlungen', description: 'KI-gestützte Aktionsvorschläge' },
          ],
        },
        collaboration: {
          overline: 'Team-Kollaboration',
          title: 'Für Teams in jeder Größe gebaut',
          description: 'Ob Solo-Creator oder globale Agentur—Visibility Engine skaliert mit dir. Verwalte Berechtigungen, kollaboriere in Echtzeit und halte alle auf dem gleichen Stand.',
          features: [
            { title: 'Multi-Brand Workspaces', description: 'Separate Umgebungen pro Marke' },
            { title: 'Rollenbasierter Zugriff', description: 'Granulare Berechtigungskontrollen' },
            { title: 'Aktivitäts-Audit', description: 'Vollständige Aktionshistorie' },
          ],
        },
        integrations: {
          overline: 'Developer Tools',
          title: 'Erweitern, Integrieren, Automatisieren',
          description: 'Verbinde Visibility Engine mit deinem bestehenden Stack. Unsere robuste API, Webhooks und native Integrationen stellen sicher, dass du genau den Workflow bauen kannst, den du brauchst.',
          features: [
            { title: 'REST API', description: 'Vollständiger Plattform-Zugang via API' },
            { title: 'Webhooks', description: 'Echtzeit-Event-Benachrichtigungen' },
            { title: 'Native Integrationen', description: 'Verbindung zu 50+ Plattformen' },
          ],
        },
      },
    },
    pricing: {
      meta: {
        title: 'Preise – Visibility Engine',
        description: 'Wähle den Plan, der zu deinen Bedürfnissen passt. Von kostenlos für Einsteiger bis Enterprise für Teams.',
      },
      hero: {
        overline: 'Preise',
        title: 'Einfache, transparente Preise',
        subtitle: 'Starte kostenlos, upgrade wenn du bereit bist. Keine versteckten Gebühren, keine Überraschungen. Alle bezahlten Pläne beinhalten eine 14-tägige kostenlose Testphase.',
      },
      plans: {
        starter: {
          name: 'Starter',
          price: 'Kostenlos',
          period: '',
          description: 'Perfekt zum Einstieg und Erkunden der Plattform.',
          features: [
            '1 verbundenes Konto',
            '50 geplante Posts/Monat',
            'Basis Analytics',
            'Community Support',
          ],
          cta: 'Jetzt starten',
        },
        creator: {
          name: 'Creator',
          price: '19 €',
          period: '/Monat',
          description: 'Für Creator, die ihre Präsenz skalieren wollen.',
          features: [
            '5 verbundene Konten',
            'Unbegrenzte geplante Posts',
            'Erweiterte Analytics',
            'Automation-Regeln (5)',
            'Priority Support',
          ],
          cta: 'Kostenlos testen',
        },
        professional: {
          name: 'Professional',
          price: '49 €',
          period: '/Monat',
          description: 'Für Power User, die das komplette Visibility-Toolkit brauchen.',
          features: [
            '15 verbundene Konten',
            'Unbegrenzte geplante Posts',
            'Volles Analytics-Paket',
            'Unbegrenzte Automation-Regeln',
            'KI-gestützte Insights',
            'API-Zugang',
            'Priority Support',
          ],
          cta: 'Kostenlos testen',
          badge: 'Beliebteste Wahl',
        },
        team: {
          name: 'Team',
          price: '149 €',
          period: '/Monat',
          description: 'Für Teams und Agenturen, die mehrere Marken verwalten.',
          features: [
            'Unbegrenzte verbundene Konten',
            'Multi-Brand Workspaces',
            '5 Teammitglieder inklusive',
            'Rollenbasierte Berechtigungen',
            'Client Reporting',
            'White-Label-Optionen',
            'Dedizierter Account Manager',
          ],
          cta: 'Vertrieb kontaktieren',
        },
      },
      enterprise: {
        title: 'Benötigst du eine maßgeschneiderte Lösung?',
        description: 'Für große Organisationen mit spezifischen Anforderungen bieten wir individuelle Enterprise-Pläne mit dedizierter Infrastruktur, SLA-Garantien und maßgeschneidertem Onboarding.',
        cta: 'Vertrieb kontaktieren',
      },
      compare: {
        overline: 'Pläne vergleichen',
        title: 'Finde den passenden Plan für deine Bedürfnisse',
        headers: {
          feature: 'Feature',
          starter: 'Starter',
          creator: 'Creator',
          professional: 'Professional',
          team: 'Team',
        },
        rows: {
          connectedAccounts: 'Verbundene Konten',
          scheduledPosts: 'Geplante Posts',
          analytics: 'Analytics',
          automationRules: 'Automation-Regeln',
          aiInsights: 'KI Insights',
          apiAccess: 'API-Zugang',
          teamMembers: 'Teammitglieder',
          whiteLabel: 'White-Label',
        },
        values: {
          starter: ['1', '50/Mo', 'Basis', '—', '—', '—', '1', '—'],
          creator: ['5', 'Unbegrenzt', 'Erweitert', '5', '—', '—', '1', '—'],
          professional: ['15', 'Unbegrenzt', 'Volles Paket', 'Unbegrenzt', '✓', '✓', '1', '—'],
          team: ['Unbegrenzt', 'Unbegrenzt', 'Volles Paket', 'Unbegrenzt', '✓', '✓', '5+', '✓'],
        },
      },
      faq: {
        overline: 'FAQ',
        title: 'Häufig gestellte Fragen',
        items: [
          {
            question: 'Kann ich den Plan jederzeit wechseln?',
            answer: 'Ja, du kannst deinen Plan jederzeit upgraden oder downgraden. Bei einem Upgrade wird dir die anteilige Differenz berechnet. Bei einem Downgrade tritt die Änderung zu Beginn des nächsten Abrechnungszeitraums in Kraft.',
          },
          {
            question: 'Welche Zahlungsmethoden akzeptiert ihr?',
            answer: 'Wir akzeptieren alle gängigen Kreditkarten (Visa, MasterCard, American Express) und PayPal. Für Team- und Enterprise-Pläne bieten wir auch Rechnungsstellung mit NET 30 Zahlungsziel an.',
          },
          {
            question: 'Gibt es eine kostenlose Testversion?',
            answer: 'Ja! Alle bezahlten Pläne beinhalten eine 14-tägige kostenlose Testversion mit vollem Zugang zu allen Features. Keine Kreditkarte erforderlich.',
          },
          {
            question: 'Was passiert, wenn meine Testphase endet?',
            answer: 'Am Ende der Testphase kannst du ein Abo abschließen, um die Premium-Features weiter zu nutzen, oder dein Konto wechselt automatisch zu unserem kostenlosen Starter-Plan.',
          },
          {
            question: 'Bietet ihr Rabatte für jährliche Abrechnung?',
            answer: 'Ja, du sparst 20% bei jährlicher Abrechnung. Diese Option ist für alle bezahlten Pläne beim Checkout verfügbar.',
          },
          {
            question: 'Kann ich mein Abo kündigen?',
            answer: 'Absolut. Du kannst dein Abo jederzeit in deinen Kontoeinstellungen kündigen. Dein Zugang bleibt bis zum Ende des aktuellen Abrechnungszeitraums bestehen.',
          },
        ],
      },
      cta: {
        title: 'Bereit loszulegen?',
        subtitle: 'Schließe dich tausenden von Creators und Teams an, die ihre Visibility Engines aufbauen. Starte noch heute deine 14-tägige kostenlose Testversion.',
        button: 'Kostenlos testen',
      },
    },
    about: {
      meta: {
        title: 'Über uns – Visibility Engine',
        description: 'Erfahre mehr über unsere Vision, Creators und Unternehmen mit professionellen Visibility-Tools zu empowern.',
      },
      hero: {
        overline: 'Über uns',
        title: 'Das Betriebssystem',
        titleHighlight: 'für digitale Sichtbarkeit',
        subtitle: 'Unsere Mission ist es, jedem Creator und Unternehmen die Tools zu geben, um Content in messbares Wachstum zu verwandeln—ohne das Chaos verstreuter Systeme.',
      },
      stats: {
        users: { value: '10K+', label: 'Aktive Nutzer' },
        posts: { value: '50M+', label: 'Geplante Posts' },
        uptime: { value: '99,9%', label: 'Uptime SLA' },
        support: { value: '24/7', label: 'Support-Abdeckung' },
      },
      vision: {
        overline: 'Unsere Vision',
        title: 'Von Content-Chaos zu Visibility Control',
        paragraph1: 'Die Creator Economy und die content-getriebene Geschäftswelt sind explodiert—aber die Tools haben nicht mitgehalten. Die meisten Professionals jonglieren mit fünf oder mehr Plattformen, verlieren Stunden an manuelle Aufgaben und tappen im Dunkeln, was wirklich funktioniert.',
        paragraph2: 'Wir haben Visibility Engine als Kommandozentrale gebaut, die alles zusammenbringt: eine Plattform, auf der Content, Automatisierung und Intelligenz konvergieren. Nicht noch ein Tool zum Managen—ein System, das sich selbst verwaltet.',
        quote: 'Jeder Creator und jedes Unternehmen verdient die Visibility-Infrastruktur, die einst nur Enterprises mit dedizierten Teams und Millionen-Budgets zur Verfügung stand.',
        quoteAuthor: 'Das Gründungsprinzip',
        quoteTeam: 'Visibility Engine Team',
      },
      values: {
        overline: 'Unsere Werte',
        title: 'Was jede Entscheidung leitet',
        clarity: {
          title: 'Klarheit statt Komplexität',
          description: 'Wir glauben, dass die besten Tools unsichtbar wirken. Jedes Feature, jede Interface-Entscheidung zielt darauf ab, die kognitive Last zu reduzieren—nicht zu erhöhen.',
        },
        dataInformed: {
          title: 'Daten-informiert, nicht daten-überwältigt',
          description: 'Rohdaten sind Rauschen. Insights sind Signal. Wir transformieren Metriken in handlungsrelevante Intelligenz, die echte Entscheidungen antreibt.',
        },
        automation: {
          title: 'Automatisierung, die verstärkt',
          description: 'Das Ziel ist nicht, menschliches Urteilsvermögen zu ersetzen—sondern Menschen zu befreien, sich auf das Wesentliche zu konzentrieren. Automatisierung übernimmt das Repetitive; du übernimmst das Kreative.',
        },
        trust: {
          title: 'Vertrauen durch Transparenz',
          description: 'Keine Black Boxes. Keine versteckten Agenden. Wir zeigen dir genau, wie Dinge funktionieren, was wir messen und warum. Deine Daten bleiben deine.',
        },
      },
      approach: {
        overline: 'Unser Ansatz',
        title: 'Anders gebaut, mit Absicht',
        privacy: {
          num: '01',
          title: 'Privacy-First Architektur',
          description: 'Deine Daten trainieren niemals unsere Modelle. Dein Content bleibt deiner. Wir bauen Vertrauen durch strikte Datenisolation und transparente Richtlinien.',
        },
        performance: {
          num: '02',
          title: 'Performance ohne Kompromisse',
          description: 'Unter 100ms Antwortzeiten. 99,9% Uptime-Garantie. Wir sind besessen von Millisekunden, damit du nie warten musst.',
        },
        open: {
          num: '03',
          title: 'Offen, wo es zählt',
          description: 'Voller API-Zugang. Umfangreiche Webhooks. Native Integrationen. Deine Visibility Engine sollte zu deinem Stack passen, nicht umgekehrt.',
        },
      },
      cta: {
        title: 'Bereit, dabei zu sein?',
        subtitle: 'Beginne heute mit dem Aufbau deiner Visibility Engine. Kostenlos starten, leistungsstark genug, um mit dir zu skalieren.',
        primaryButton: 'Kostenlos starten',
        secondaryButton: 'Features erkunden',
      },
    },
    blog: {
      meta: {
        title: 'Blog – Visibility Engine',
        description: 'Insights, Updates und Best Practices für Content Creator und Marketing-Teams.',
      },
      hero: {
        overline: 'Blog',
        title: 'Insights für moderne',
        titleHighlight: 'Visibility Leader',
        subtitle: 'Strategien, Forschung und umsetzbare Insights für Creator und Teams, die Content-Performance ernst nehmen.',
      },
      categories: {
        all: 'Alle',
        strategy: 'Strategie',
        analytics: 'Analytics',
        workflow: 'Workflow',
        aiTechnology: 'KI & Technologie',
        systems: 'Systeme',
        research: 'Forschung',
      },
      sections: {
        featured: 'Empfohlen',
        allPosts: 'Alle Beiträge',
      },
      newsletter: {
        title: 'Bleib der Kurve voraus',
        subtitle: 'Erhalte wöchentlich Insights zu Content-Strategie, Automatisierung und Wachstum direkt in deinen Posteingang. Kein Spam, jederzeit abmeldbar.',
        placeholder: 'E-Mail eingeben',
        subscribe: 'Abonnieren',
        joinCount: 'Schließe dich 5.000+ Visibility Leadern an',
      },
      readMore: 'Weiterlesen',
      readingTime: 'Min. Lesezeit',
      publishedOn: 'Veröffentlicht am',
      backToBlog: 'Zurück zum Blog',
      posts: {
        post1: {
          title: 'Warum Content Creator eine professionelle Plattform brauchen',
          excerpt: 'Die Creator Economy ist gereift. Es ist Zeit, dass die Tools nachziehen. Erfahre, warum ernsthafte Creator über Consumer-Grade-Tools hinausgehen.',
          date: '2026-01-10',
          readingTime: 5,
          slug: 'why-creators-need-professional-platform',
          content: [
            {
              heading: 'Das Problem mit Consumer-Tools',
              text: 'Die meisten Content-Management-Tools wurden für Gelegenheitsnutzer gebaut. Sie priorisieren Einfachheit über Fähigkeit und Benutzerfreundlichkeit über Tiefe. Für Hobbyisten ist das perfekt. Für Professionals, die mehrere Plattformen, Brands und Kampagnen managen, ist es eine Limitation.',
            },
            {
              heading: 'Was Professionals brauchen',
              text: 'Professionelle Creator brauchen Tools, die Komplexität ohne Reibung handhaben. Batch-Operationen, Automation, Versionskontrolle, echte Analytics—keine Vanity-Metriken. Sie brauchen Systeme, die mit ihren Ambitionen skalieren, nicht Plattformen, die sie einschränken.',
            },
            {
              heading: 'Der Shift zu professioneller Infrastruktur',
              text: 'So wie Entwickler von FTP zu Git gewechselt sind und Designer von Photoshop zu Figma, sind Content Creator bereit für ihr Infrastruktur-Upgrade. Visibility Engine ist für diese nächste Generation von Professionals gebaut.',
            },
          ],
        },
        post2: {
          title: 'Wie KI-Agenten deinen Content-Workflow transformieren können',
          excerpt: 'KI ist nicht hier, um dich zu ersetzen. Sie ist hier, um deinen Output zu multiplizieren. Entdecke, wie KI-Agenten die repetitive Arbeit übernehmen, während du dich auf Kreativität konzentrierst.',
          date: '2026-01-08',
          readingTime: 7,
          slug: 'ai-agents-transform-content-workflow',
          content: [
            {
              heading: 'Der Bottleneck manueller Arbeit',
              text: 'Content erstellen ist der kreative Teil. Formatieren, planen, cross-posten, analysieren—das ist die repetitive Arbeit, die Energie und Zeit saugt. Hier exzellieren KI-Agenten.',
            },
            {
              heading: 'Was KI-Agenten können',
              text: 'KI-Agenten in Visibility Engine können Titel für SEO optimieren, Posting-Zeiten basierend auf Audience-Verhalten vorschlagen, Content auto-taggen, plattformspezifische Varianten generieren und trendende Topics identifizieren. Sie arbeiten im Hintergrund, lernen immer, verbessern sich immer.',
            },
            {
              heading: 'Mensch + KI = Scale',
              text: 'Die besten Ergebnisse kommen aus Kollaboration. Du bringst Kreativität, Strategie und Voice. KI bringt Speed, Konsistenz und datengetriebene Optimierung. Zusammen kannst du mehr produzieren, schneller, ohne Qualität zu opfern.',
            },
          ],
        },
        post3: {
          title: 'Eine nachhaltige Content-Strategie für 2026 aufbauen',
          excerpt: 'Zufälliges Posten baut keine Audience auf. Strategische Konsistenz schon. Lerne das Framework, das Top-Creator nutzen, um nachhaltige Content-Strategien zu planen und auszuführen.',
          date: '2026-01-05',
          readingTime: 6,
          slug: 'sustainable-content-strategy-2026',
          content: [
            {
              heading: 'Warum die meisten Content-Strategien scheitern',
              text: 'Inkonsistenz ist der Killer. Creator starten stark, brennen aus und verschwinden. Das Problem ist nicht mangelnde Ideen—es ist mangelnde Systeme. Ohne nachhaltigen Workflow wird selbst die beste Content-Strategie kollabieren.',
            },
            {
              heading: 'Die drei Säulen der Nachhaltigkeit',
              text: 'Erstens, Batch-Creation—nimm mehrere Pieces in einer Session auf. Zweitens, Smart Scheduling—nutze Automation, um Konsistenz zu halten. Drittens, Performance-Tracking—verdopple, was funktioniert, schneide, was nicht funktioniert. Diese drei Säulen bilden das Fundament einer Strategie, die hält.',
            },
            {
              heading: 'Tools ermöglichen Nachhaltigkeit',
              text: 'Manuelle Prozesse skalieren nicht. Professionelle Tools wie Visibility Engine entfernen die Reibung aus Batching, Scheduling und Analysieren. Wenn der Workflow smooth ist, wird Konsistenz mühelos.',
            },
          ],
        },
        post4: {
          title: 'Wie KI die Content-Optimierung transformiert',
          excerpt: 'KI generiert nicht nur Content—sie revolutioniert, wie wir ihn optimieren, verteilen und messen. Hier ist, was die neuesten Entwicklungen für deine Strategie bedeuten.',
          date: '2026-01-02',
          readingTime: 7,
          slug: 'ai-content-optimization',
          content: [
            {
              heading: 'Jenseits der Content-Generierung',
              text: 'Die Diskussion über KI im Content hat sich auf Generierung fokussiert—Artikel schreiben, Bilder erstellen, Videos produzieren. Aber die echte Transformation passiert bei der Optimierung: wie KI uns hilft zu verstehen, was funktioniert und warum.',
            },
            {
              heading: 'Prädiktive Performance-Analyse',
              text: 'Moderne KI kann Content-Performance vorhersagen, bevor du veröffentlichst. Sie analysiert Muster aus Millionen von Posts, um zu identifizieren, was bei spezifischen Zielgruppen ankommt. Das bewegt Content-Strategie von Raten zu datengetriebenen Entscheidungen.',
            },
            {
              heading: 'Automatisiertes A/B-Testing in Skala',
              text: 'KI ermöglicht das Testen von Variationen in einer Skala, die für Menschen unmöglich ist. Headlines, Thumbnails, Posting-Zeiten, Hashtags—alles kann simultan optimiert werden. Das Ergebnis ist kontinuierliche Verbesserung ohne kontinuierlichen Aufwand.',
            },
          ],
        },
        post5: {
          title: 'Content-Systeme aufbauen, die skalieren',
          excerpt: 'Der Unterschied zwischen Creatorn, die ausbrennen, und denen, die Imperien aufbauen? Systeme. Lerne, wie du wiederholbare Prozesse erstellst, die deine Bemühungen potenzieren.',
          date: '2025-12-28',
          readingTime: 10,
          slug: 'building-content-systems',
          content: [
            {
              heading: 'Das System-Mindset',
              text: 'Einzelne Content-Pieces sind Taktik. Systeme sind Strategie. Wenn du ein System baust, fütterst du jedes Content-Piece in eine größere Maschine, die mit der Zeit effizienter wird.',
            },
            {
              heading: 'Komponenten eines Content-Systems',
              text: 'Ein vollständiges Content-System beinhaltet: Ideation-Pipelines, Produktions-Workflows, Distributions-Automation und Feedback-Loops. Jede Komponente muss nahtlos mit den anderen verbunden sein.',
            },
            {
              heading: 'Von manuell zu automatisiert',
              text: 'Das Ziel ist es, alles zu automatisieren, was keine menschliche Kreativität erfordert. Research, Formatierung, Scheduling, Cross-Posting, Analytics—diese sollten im Hintergrund laufen, während du dich auf das fokussierst, was nur du tun kannst.',
            },
          ],
        },
        post6: {
          title: 'Den Algorithmus entschlüsseln: Was wirklich Engagement treibt',
          excerpt: 'Plattform-Algorithmen sind komplex, aber nicht unverständlich. Basierend auf der Analyse von Millionen Posts, hier ist, was wir gelernt haben über das, was Content viral macht.',
          date: '2025-12-20',
          readingTime: 9,
          slug: 'decoding-engagement-algorithms',
          content: [
            {
              heading: 'Die Engagement-Hierarchie',
              text: 'Nicht jedes Engagement ist gleich. Kommentare überwiegen Likes. Shares überwiegen Kommentare. Saves überwiegen Shares. Diese Hierarchie zu verstehen ist essenziell für die Optimierung von Content für algorithmische Reichweite.',
            },
            {
              heading: 'Timing und Velocity',
              text: 'Frühes Engagement-Signal ist überproportional wichtig. Die erste Stunde nach dem Posten entscheidet oft, ob Content verstärkt oder begraben wird. Deshalb sind Audience-Analyse und optimales Timing wichtig.',
            },
            {
              heading: 'Der Authentizitäts-Faktor',
              text: 'Algorithmen belohnen zunehmend Authentizität. Sie erkennen Engagement-Bait, Clickbait und künstliche Muster. Die beste Strategie ist echter Wert—Content, den Menschen tatsächlich konsumieren und teilen wollen.',
            },
          ],
        },
      },
    },
    legalPages: {
      imprint: {
        overline: 'Rechtliches',
        title: 'Impressum',
        subtitle: 'Angaben gemäß § 5 TMG',
        company: {
          title: 'Unternehmensinformationen',
          name: 'Visibility Engine GmbH',
          address: 'Musterstraße 123\n10115 Berlin\nDeutschland',
        },
        contact: {
          title: 'Kontakt',
          email: 'E-Mail',
          phone: 'Telefon',
          website: 'Website',
        },
        registration: {
          title: 'Registrierung',
          court: 'Handelsregister',
          number: 'Registernummer',
          vatId: 'USt-IdNr.',
        },
        responsibility: {
          title: 'Verantwortlich für den Inhalt',
          according: 'Gemäß § 55 Abs. 2 RStV',
        },
        disclaimer: {
          title: 'Haftungsausschluss',
          liability: {
            title: 'Haftung für Inhalte',
            text: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
          },
          links: {
            title: 'Haftung für Links',
            text: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.',
          },
        },
      },
      privacy: {
        overline: 'Rechtliches',
        title: 'Datenschutzerklärung',
        subtitle: 'Wie wir Ihre personenbezogenen Daten erfassen, verwenden und schützen',
        lastUpdated: 'Zuletzt aktualisiert',
        overview: {
          title: '1. Übersicht',
          text: 'Die Visibility Engine GmbH ("wir", "uns" oder "unser") betreibt die Website visibility-engine.com und die Visibility Engine Plattform (der "Service"). Diese Seite informiert Sie über unsere Richtlinien zur Erhebung, Verwendung und Offenlegung personenbezogener Daten bei der Nutzung unseres Services.',
        },
        dataController: {
          title: '2. Verantwortliche Stelle',
          text: 'Der für Ihre Daten Verantwortliche ist:',
        },
        dataCollection: {
          title: '3. Erhobene Daten',
          account: {
            title: '3.1 Kontoinformationen',
            text: 'Wenn Sie ein Konto erstellen, erfassen wir Ihre E-Mail-Adresse, Ihren Namen und Ihr Passwort.',
          },
          usage: {
            title: '3.2 Nutzungsdaten',
            text: 'Wir erfassen Informationen darüber, wie Sie unseren Service nutzen, einschließlich aufgerufener Funktionen und verbrachter Zeit.',
          },
        },
        rights: {
          title: '4. Ihre Rechte',
          text: 'Gemäß DSGVO haben Sie das Recht auf Zugang, Berichtigung, Löschung und Übertragbarkeit Ihrer personenbezogenen Daten.',
        },
        contact: {
          title: '5. Kontakt',
          text: 'Für datenschutzbezogene Anfragen kontaktieren Sie uns unter:',
        },
      },
      terms: {
        overline: 'Rechtliches',
        title: 'Allgemeine Geschäftsbedingungen',
        subtitle: 'Bitte lesen Sie diese Bedingungen sorgfältig, bevor Sie Visibility Engine nutzen',
        lastUpdated: 'Zuletzt aktualisiert',
        introduction: {
          title: '1. Einleitung',
          text: 'Diese Allgemeinen Geschäftsbedingungen ("AGB") regeln Ihren Zugang zu und die Nutzung der Visibility Engine Plattform, Website und Services (zusammen der "Service"), betrieben von der Visibility Engine GmbH.',
        },
        eligibility: {
          title: '2. Berechtigung',
          text: 'Sie müssen mindestens 16 Jahre alt sein, um den Service zu nutzen. Durch die Nutzung des Services erklären und garantieren Sie, dass Sie mindestens 16 Jahre alt sind.',
        },
        account: {
          title: '3. Kontoregistrierung',
          text: 'Sie sind für die Geheimhaltung Ihrer Kontodaten verantwortlich und für alle Aktivitäten, die unter Ihrem Konto stattfinden.',
        },
        acceptable: {
          title: '4. Zulässige Nutzung',
          text: 'Sie stimmen zu, den Service nicht für rechtswidrige Zwecke oder unter Verstoß gegen diese AGB zu nutzen.',
        },
        termination: {
          title: '5. Kündigung',
          text: 'Wir können Ihr Konto nach eigenem Ermessen und ohne vorherige Ankündigung für Verstöße gegen diese AGB kündigen oder sperren.',
        },
        contact: {
          title: '6. Kontakt',
          text: 'Bei Fragen zu diesen AGB kontaktieren Sie uns unter:',
        },
      },
    },
    productPages: {
      visibilityEngine: {
        meta: {
          title: 'Visibility Engine – Die komplette Visibility-Plattform',
          description: 'Das Betriebssystem für digitale Sichtbarkeit. Orchestrieren Sie Content, automatisieren Sie Distribution und verwandeln Sie Reichweite in messbares Wachstum.',
        },
        hero: {
          overline: 'Kernplattform',
          title: 'Das komplette Visibility',
          titleHighlight: 'Betriebssystem',
          subtitle: 'Eine einheitliche Plattform für Content-Orchestrierung, automatisierte Distribution und die Umwandlung von Sichtbarkeit in Umsatz. Schluss mit Tool-Chaos—starten Sie mit einem System.',
        },
        problem: {
          overline: 'Das Problem',
          title: 'Verstreute Tools bremsen Wachstum',
          description: 'Die meisten Creator und Unternehmen arbeiten mit 5+ unverbundenen Tools. Analytics hier, Scheduling da, Content-Management woanders. Das Ergebnis? Stunden verloren durch Kontextwechsel, Insights die nie zusammenfinden, und Chancen die durchs Raster fallen.',
          points: [
            'Keine Single Source of Truth für Performance',
            'Manuelles Copy-Paste zwischen Plattformen',
            'Insights in Silos eingesperrt, unmöglich zu nutzen',
          ],
        },
        howItWorks: {
          overline: 'So funktioniert es',
          title: 'Eine Plattform, volle Kontrolle',
          steps: [
            {
              title: 'Alles verbinden',
              description: 'Verknüpfen Sie alle Plattformen, Content-Quellen und Analytics an einem Ort. Setup dauert Minuten, nicht Tage.',
            },
            {
              title: 'Automatisch orchestrieren',
              description: 'Erstellen Sie Regeln, die plattformübergreifend Aktionen auslösen. Wenn X passiert, tue Y—ohne manuellen Eingriff.',
            },
            {
              title: 'Messen, was zählt',
              description: 'Sehen Sie vereinheitlichte Metriken über alle Kanäle. Verstehen Sie was funktioniert, was nicht, und warum.',
            },
          ],
        },
        different: {
          overline: 'Warum anders',
          title: 'Für Profis gebaut, nicht für Hobbyisten',
          points: [
            {
              title: 'System-Denken',
              description: 'Kein weiteres Tool—ein komplettes Betriebssystem, das um Workflows herum designed wurde, nicht um Features.',
            },
            {
              title: 'Erklärbare Intelligenz',
              description: 'Jede Empfehlung kommt mit Begründung. Keine Black Boxes, kein blindes Vertrauen nötig.',
            },
            {
              title: 'Skalieren ohne Chaos',
              description: 'Vom Solo-Creator bis zum Enterprise-Team—die Plattform wächst mit Ihnen ohne zu brechen.',
            },
          ],
        },
        cta: {
          title: 'Bereit, Ihre Visibility Engine zu bauen?',
          subtitle: 'Schließen Sie sich tausenden Profis an, die Tool-Chaos durch systematisches Wachstum ersetzt haben.',
          primary: 'Kostenlos testen',
          secondary: 'Alle Features ansehen',
        },
      },
      distribution: {
        meta: {
          title: 'Distribution – Multi-Plattform Content-Verteilung',
          description: 'Einmal publizieren, überall erreichen. Automatisierte Multi-Plattform Content-Verteilung mit intelligentem Scheduling und Format-Optimierung.',
        },
        hero: {
          overline: 'Distribution',
          title: 'Einmal publizieren,',
          titleHighlight: 'überall erreichen',
          subtitle: 'Schluss mit manuellem Cross-Posting. Einmal erstellen, und intelligente Distribution erledigt den Rest—richtiges Format, richtige Zeit, richtige Plattform.',
        },
        problem: {
          overline: 'Das Problem',
          title: 'Manuelle Distribution skaliert nicht',
          description: 'Jede Plattform hat unterschiedliche Formate, optimale Zeiten und Audience-Verhalten. Content manuell für jeden Kanal anzupassen und zu posten verschwendet Stunden pro Woche—und verpasst trotzdem Chancen.',
          points: [
            'Stunden für Reformatierung pro Plattform',
            'Inkonsistente Posting-Zeitpläne schaden der Reichweite',
            'Keine Möglichkeit, Kampagnen kanalübergreifend zu koordinieren',
          ],
        },
        howItWorks: {
          overline: 'So funktioniert es',
          title: 'Intelligente Multi-Plattform-Verteilung',
          steps: [
            {
              title: 'Content erstellen',
              description: 'Einmal schreiben, designen oder hochladen. Unser System versteht Ihren Master-Content und seinen Zweck.',
            },
            {
              title: 'Distributions-Regeln definieren',
              description: 'Legen Sie fest, welche Plattformen was wann bekommen. Plattformspezifische Formatierung erfolgt automatisch.',
            },
            {
              title: 'Automation ausführen lassen',
              description: 'Content geht zu optimalen Zeiten raus, im richtigen Format, mit integriertem Tracking von Anfang an.',
            },
          ],
        },
        different: {
          overline: 'Warum anders',
          title: 'Mehr als einfaches Scheduling',
          points: [
            {
              title: 'Format-Intelligenz',
              description: 'Automatische Anpassung für jede Plattform—Zeichenlimits, Bildabmessungen, Hashtag-Strategien.',
            },
            {
              title: 'Timing-Optimierung',
              description: 'KI-gestütztes Scheduling basierend auf Ihrem Audience-Verhalten, nicht generischen Best Practices.',
            },
            {
              title: 'Kampagnen-Koordination',
              description: 'Orchestrieren Sie Multi-Plattform-Kampagnen mit Sequencing, Abhängigkeiten und Rollback-Optionen.',
            },
          ],
        },
        cta: {
          title: 'Bereit, Ihre Distribution zu automatisieren?',
          subtitle: 'Sparen Sie sich stundenlanges manuelles Cross-Posting. Lassen Sie intelligente Automation die Logistik übernehmen.',
          primary: 'Kostenlos testen',
          secondary: 'Mehr erfahren',
        },
      },
      signalsInsights: {
        meta: {
          title: 'Signale & Insights – Echtzeit-Analytics',
          description: 'Echtzeit-Monitoring und intelligente Alerts über alle Ihre Kanäle. Wissen Sie, was passiert, bevor es Ihre Wettbewerber tun.',
        },
        hero: {
          overline: 'Signale & Insights',
          title: 'Sehen, was andere',
          titleHighlight: 'nicht sehen',
          subtitle: 'Echtzeit-Sichtbarkeit über jeden Kanal. Intelligente Signale, die Chancen, Risiken und Trends aufdecken—bevor sie offensichtlich werden.',
        },
        problem: {
          overline: 'Das Problem',
          title: 'Daten ohne Insight sind Rauschen',
          description: 'Sie haben Zugang zu mehr Daten als je zuvor. Das Problem ist nicht Mangel an Metriken—es ist das Ertrinken in Dashboards während man die Signale verpasst, die wirklich zählen. Wenn Sie einen Trend bemerken, ist es oft zu spät.',
          points: [
            'Metriken verstreut über Plattform-Dashboards',
            'Keine einheitliche Sicht auf Cross-Channel-Performance',
            'Reaktiv statt proaktiv entscheiden',
          ],
        },
        howItWorks: {
          overline: 'So funktioniert es',
          title: 'Von Rohdaten zu handlungsrelevanten Signalen',
          steps: [
            {
              title: 'Vereinheitlichte Datensammlung',
              description: 'Alle Ihre Plattformen fließen in eine Analytics-Engine. Kein Wechseln zwischen Dashboards mehr.',
            },
            {
              title: 'Intelligente Mustererkennung',
              description: 'Algorithmen identifizieren Trends, Anomalien und Chancen aus dem Rauschen der Rohdaten.',
            },
            {
              title: 'Actionable Alerts',
              description: 'Werden Sie benachrichtigt, wenn etwas wichtig ist—mit Kontext, nicht nur Zahlen.',
            },
          ],
        },
        different: {
          overline: 'Warum anders',
          title: 'Intelligenz, nicht nur Analytics',
          points: [
            {
              title: 'Cross-Platform-Korrelation',
              description: 'Verstehen Sie, wie Performance auf einem Kanal andere beeinflusst. Sehen Sie das komplette Bild.',
            },
            {
              title: 'Prädiktive Signale',
              description: 'Trenderkennung, die Muster früh erkennt—Tage oder Wochen bevor sie ihren Peak erreichen.',
            },
            {
              title: 'Custom Alert-Logik',
              description: 'Definieren Sie genau, was für Sie wichtig ist. Werden Sie nach Ihren Regeln benachrichtigt, nicht nach Plattform-Defaults.',
            },
          ],
        },
        cta: {
          title: 'Bereit, Daten in Entscheidungen zu verwandeln?',
          subtitle: 'Schluss mit dem Ertrinken in Dashboards. Bekommen Sie die Signale, die wirklich Wachstum treiben.',
          primary: 'Kostenlos testen',
          secondary: 'Dashboard-Demo ansehen',
        },
      },
      automation: {
        meta: {
          title: 'Automatisierung – Regelbasierte Workflow-Automation',
          description: 'Workflows bauen, die automatisch ausgeführt werden. If-this-then-that-Logik für ernsthafte Content-Operations.',
        },
        hero: {
          overline: 'Automatisierung',
          title: 'Regeln, die arbeiten,',
          titleHighlight: 'während Sie schlafen',
          subtitle: 'Intelligente Workflows einmal einrichten. Für immer ausführen lassen—oder bis Sie anders entscheiden. Ihre Visibility Engine läuft 24/7, damit Sie es nicht müssen.',
        },
        problem: {
          overline: 'Das Problem',
          title: 'Manuelle Ausführung bricht bei Skalierung',
          description: 'Wenn Sie klein sind, funktioniert manuell. Wenn Sie wachsen, wird es zum Bottleneck. Jede repetitive Aufgabe, die Sie manuell erledigen, ist Zeit, die von Strategie und Kreativität gestohlen wird. Schlimmer—Menschen vergessen, Automation nicht.',
          points: [
            'Repetitive Tasks rauben kreative Energie',
            'Inkonsistente Ausführung schadet Ergebnissen',
            'Skalieren bedeutet Einstellen, nicht Automatisieren',
          ],
        },
        howItWorks: {
          overline: 'So funktioniert es',
          title: 'Visueller Workflow-Builder',
          steps: [
            {
              title: 'Trigger definieren',
              description: 'Was soll den Workflow starten? Ein Zeitplan, ein Metrik-Schwellwert, ein Event oder ein manueller Trigger.',
            },
            {
              title: 'Aktionen bauen',
              description: 'Was passiert beim Auslösen? Content posten, Benachrichtigungen senden, Daten aktualisieren, APIs aufrufen.',
            },
            {
              title: 'Bedingungen setzen',
              description: 'Logik hinzufügen. Nur ausführen, wenn bestimmte Bedingungen erfüllt sind. Verzweigen basierend auf Ergebnissen.',
            },
          ],
        },
        different: {
          overline: 'Warum anders',
          title: 'Ernsthafte Automation für ernsthafte Arbeit',
          points: [
            {
              title: 'Rollback-Schutz',
              description: 'Etwas geht schief? Ganze Automation-Runs rückgängig machen. Jede Aktion ist reversibel.',
            },
            {
              title: 'Simulationsmodus',
              description: 'Workflows testen bevor sie laufen. Sehen Sie, was passieren würde, ohne jedes Risiko.',
            },
            {
              title: 'Vollständiger Audit Trail',
              description: 'Komplette Historie jedes Automation-Runs. Wissen Sie genau, was passiert ist und warum.',
            },
          ],
        },
        cta: {
          title: 'Bereit, Ihre Workflows zu automatisieren?',
          subtitle: 'Schluss mit den gleichen Dingen jeden Tag manuell. Bauen Sie Systeme, die skalieren.',
          primary: 'Kostenlos testen',
          secondary: 'Playbook-Bibliothek ansehen',
        },
      },
      explainability: {
        meta: {
          title: 'Erklärbarkeit – Transparente KI-Entscheidungen',
          description: 'Verstehen Sie jede Empfehlung. Volle Transparenz darüber, warum das System vorschlägt, was es vorschlägt.',
        },
        hero: {
          overline: 'Erklärbarkeit',
          title: 'KI, der Sie',
          titleHighlight: 'wirklich vertrauen können',
          subtitle: 'Jede Empfehlung kommt mit Begründung. Jede Entscheidung ist nachvollziehbar. Keine Black Boxes—nur transparente Intelligenz, die Sie verifizieren und verstehen können.',
        },
        problem: {
          overline: 'Das Problem',
          title: 'Black-Box-KI untergräbt Vertrauen',
          description: 'Die meisten KI-Tools sagen Ihnen, was Sie tun sollen, aber nicht warum. Wenn Sie die Begründung nicht verstehen können, können Sie sie nicht verbessern. Sie können ihr nicht vertrauen. Und wenn etwas schiefgeht, wissen Sie nicht, wie Sie es beheben sollen.',
          points: [
            'Empfehlungen ohne Erklärung',
            'Keine Möglichkeit, KI-Reasoning zu verifizieren',
            'Unmöglich zu debuggen, wenn Dinge schiefgehen',
          ],
        },
        howItWorks: {
          overline: 'So funktioniert es',
          title: 'Nachvollziehbare Intelligenz',
          steps: [
            {
              title: 'Jede Empfehlung zeigt Warum',
              description: 'Klicken Sie auf jeden Vorschlag, um die Daten, Muster und Logik zu sehen, die dazu geführt haben.',
            },
            {
              title: 'Anpassbare Gewichtungen',
              description: 'Nicht einverstanden mit der KI? Passen Sie die Faktoren an, die sie berücksichtigt. Trainieren Sie sie auf Ihr Urteil.',
            },
            {
              title: 'Vollständige Entscheidungslogs',
              description: 'Historische Aufzeichnung aller KI-Entscheidungen. Überprüfen, lernen und kontinuierlich verbessern.',
            },
          ],
        },
        different: {
          overline: 'Warum anders',
          title: 'Transparenz als Feature',
          points: [
            {
              title: 'Mensch + KI Zusammenarbeit',
              description: 'Die KI ist ein Werkzeug, kein Ersatz. Sie behalten die Kontrolle, mit besseren Informationen.',
            },
            {
              title: 'Bias-Erkennung',
              description: 'Sichtbarkeit in potenzielle Verzerrungen bei Empfehlungen. Kennen Sie die Grenzen.',
            },
            {
              title: 'Kontinuierliche Kalibrierung',
              description: 'Geben Sie Feedback, und das System lernt. Ihre Expertise macht die KI besser.',
            },
          ],
        },
        cta: {
          title: 'Bereit für KI, der Sie vertrauen können?',
          subtitle: 'Keine Black Boxes mehr. Verstehen Sie jede Empfehlung, passen Sie jede Entscheidung an.',
          primary: 'Kostenlos testen',
          secondary: 'Sehen Sie, wie es funktioniert',
        },
      },
      reporting: {
        meta: {
          title: 'Reporting – Professionelle Analytics-Dashboards',
          description: 'Schöne, handlungsrelevante Reports, die die Geschichte Ihrer Sichtbarkeit erzählen. Gebaut für Stakeholder, nicht nur für Analysten.',
        },
        hero: {
          overline: 'Reporting',
          title: 'Reports, die die',
          titleHighlight: 'wahre Geschichte erzählen',
          subtitle: 'Über Vanity-Metriken hinaus. Professionelles Reporting, das Aktivitäten mit Ergebnissen verbindet und Ergebnisse mit Business-Impact.',
        },
        problem: {
          overline: 'Das Problem',
          title: 'Reports, die niemand liest',
          description: 'CSVs exportieren. Copy-Paste in Spreadsheets. Slides bauen, die veraltet sind, wenn sie präsentiert werden. Traditionelles Reporting ist schmerzhaft, langsam und wird oft ignoriert.',
          points: [
            'Stunden für manuelle Reports',
            'Metriken ohne Kontext oder Narrativ',
            'Stakeholder fragen immer noch "Und was bedeutet das?"',
          ],
        },
        howItWorks: {
          overline: 'So funktioniert es',
          title: 'Von Daten zum Narrativ',
          steps: [
            {
              title: 'Automatisierte Report-Generierung',
              description: 'Planen Sie Reports, die sich selbst erstellen. Täglich, wöchentlich, monatlich—Ihre Wahl.',
            },
            {
              title: 'Narrativ-Templates',
              description: 'Vorgefertigte Templates, die Geschichten erzählen, nicht nur Zahlen zeigen. Anpassbar an Ihre Marke.',
            },
            {
              title: 'Stakeholder-Ansichten',
              description: 'Verschiedene Reports für verschiedene Audiences. C-Suite bekommt die Zusammenfassung, Teams bekommen die Details.',
            },
          ],
        },
        different: {
          overline: 'Warum anders',
          title: 'Reporting für Entscheider',
          points: [
            {
              title: 'White-Label-fähig',
              description: 'Branden Sie Reports mit Ihrem Logo, Farben und Domain. Perfekt für Agenturen.',
            },
            {
              title: 'Live-Dashboards',
              description: 'Teilen Sie Echtzeit-Dashboards mit Stakeholdern. Keine veralteten Reports mehr.',
            },
            {
              title: 'Export überall hin',
              description: 'PDF, PowerPoint, Google Slides oder Live-Embed. Liefern Sie im gewünschten Format.',
            },
          ],
        },
        cta: {
          title: 'Bereit für Reports, die zählen?',
          subtitle: 'Verschwenden Sie keine Stunden mehr mit manuellem Reporting. Lassen Sie Automation Ihre Geschichte erzählen.',
          primary: 'Kostenlos testen',
          secondary: 'Report-Templates ansehen',
        },
      },
      api: {
        meta: {
          title: 'API & Integrationen – Entwicklerfreundliche Erweiterbarkeit',
          description: 'Vollständige REST API, Webhooks und native Integrationen. Bauen Sie genau den Workflow, den Sie brauchen.',
        },
        hero: {
          overline: 'API & Integrationen',
          title: 'Bauen Sie genau das,',
          titleHighlight: 'was Sie brauchen',
          subtitle: 'Vollständige REST API, Echtzeit-Webhooks und 50+ native Integrationen. Ihre Visibility Engine sollte zu Ihrem Stack passen—nicht umgekehrt.',
        },
        problem: {
          overline: 'Das Problem',
          title: 'Walled Gardens blockieren Innovation',
          description: 'Die meisten Plattformen sperren Ihre Daten ein. Keine API, begrenzte Exports, Integrationen nur mit ihren Partnern. Wenn Ihre Tools nicht miteinander sprechen, werden Sie zur Integrations-Schicht—manuell.',
          points: [
            'Daten in Plattform-Silos eingesperrt',
            'Begrenzter oder nicht vorhandener API-Zugang',
            'Custom Workflows unmöglich zu bauen',
          ],
        },
        howItWorks: {
          overline: 'So funktioniert es',
          title: 'Open by Design',
          steps: [
            {
              title: 'Vollständige REST API',
              description: 'Jedes Feature, das in der UI verfügbar ist, ist via API verfügbar. Keine künstlichen Limitierungen.',
            },
            {
              title: 'Echtzeit-Webhooks',
              description: 'Werden Sie sofort benachrichtigt, wenn Events passieren. Bauen Sie reaktive Systeme, die in Echtzeit reagieren.',
            },
            {
              title: 'Native Integrationen',
              description: 'Vorgefertigte Verbindungen zu 50+ Plattformen. One-Click-Setup, bidirektionaler Sync.',
            },
          ],
        },
        different: {
          overline: 'Warum anders',
          title: 'Developer Experience First',
          points: [
            {
              title: 'Umfassende Dokumentation',
              description: 'Interaktive API-Docs, SDKs in allen wichtigen Sprachen und echte Code-Beispiele.',
            },
            {
              title: 'Sandbox-Umgebung',
              description: 'Testen Sie Ihre Integrationen sicher. Voller API-Zugang ohne Auswirkungen auf Production.',
            },
            {
              title: 'Rate Limits, die Sinn machen',
              description: 'Großzügige Limits, klare Überschreitungsregeln und Enterprise-Optionen für Heavy Usage.',
            },
          ],
        },
        cta: {
          title: 'Bereit zu integrieren?',
          subtitle: 'Bauen Sie Custom Workflows, verbinden Sie Ihren Stack und erschließen Sie die volle Power Ihrer Daten.',
          primary: 'API-Docs ansehen',
          secondary: 'Integrationen erkunden',
        },
      },
    },
    useCasePages: {
      creators: {
        hero: {
          overline: 'Für Creator',
          title: 'Skaliere deine Personal Brand',
          titleHighlight: 'Ohne Burnout',
          subtitle: 'Automatisiere die repetitive Arbeit der Content-Distribution und behalte dabei deine authentische Stimme. Mehr Reichweite, weniger Zeit für Logistik.',
          ctaPrimary: 'Kostenlos testen',
          ctaSecondary: 'So funktioniert es',
        },
        challenges: {
          overline: 'Deine Herausforderungen',
          title: 'Der Creator-Struggle ist real',
          subtitle: 'Du erstellst großartigen Content, aber ihn auf allen Plattformen sichtbar zu machen kostet mehr Zeit als die Erstellung selbst.',
          items: [
            { title: 'Zeitfresser', description: 'Stunden für manuelles Posten, Umformatieren und Planen auf verschiedenen Plattformen statt fürs Erstellen.' },
            { title: 'Plattform-Chaos', description: 'Jede Plattform hat andere Formate, optimale Zeiten und Algorithmen. Dranzubleiben ist erschöpfend.' },
            { title: 'Blinde Flecken', description: 'Keine einheitliche Sicht auf das, was funktioniert. Analytics über 5+ Dashboards verstreut.' },
            { title: 'Monetarisierungs-Lücken', description: 'Verpasste Chancen, weil du nicht tracken kannst, welcher Content Umsatz bringt.' },
          ],
        },
        solutions: {
          overline: 'Wie wir helfen',
          title: 'Deine Sichtbarkeit, automatisiert',
          subtitle: 'Fokussiere dich aufs Erstellen. Lass Visibility Engine die Distribution, das Timing und die Insights übernehmen.',
          items: [
            { title: 'Smartes Scheduling', description: 'KI-optimierte Posting-Zeiten für jede Plattform. Einmal einrichten, mehr Menschen erreichen.' },
            { title: 'Einheitliche Analytics', description: 'Ein Dashboard für alle Plattformen. Sieh auf einen Blick, was funktioniert.' },
            { title: 'Content Intelligence', description: 'Wisse, welche Themen, Formate und Hooks bei deinem Publikum ankommen.' },
            { title: 'Personal Brand Tracking', description: 'Überwache Erwähnungen, tracke Wachstum und erkenne Kooperationsmöglichkeiten.' },
          ],
        },
        metrics: {
          overline: 'Ergebnisse',
          title: 'Was Creator erreichen',
          items: [
            { value: '10h+', label: 'Stunden pro Woche gespart' },
            { value: '3x', label: 'Konstanteres Posting' },
            { value: '47%', label: 'Höheres Engagement' },
            { value: '2,5x', label: 'Schnelleres Audience-Wachstum' },
          ],
        },
        cta: {
          title: 'Bereit, dein Creator-Business zu skalieren?',
          subtitle: 'Schließe dich Tausenden von Creatorn an, die weniger Zeit für Logistik und mehr Zeit für das verbringen, was sie lieben.',
          primary: 'Kostenlos testen',
          secondary: 'Preise ansehen',
        },
      },
      companies: {
        hero: {
          overline: 'Für Unternehmen',
          title: 'Richte dein Team auf',
          titleHighlight: 'performenden Content aus',
          subtitle: 'Zentralisierte Content-Operations für Marketing-Teams. Konsistente Markenstimme, messbare Ergebnisse und klarer ROI über alle Kanäle.',
          ctaPrimary: 'Kostenlos testen',
          ctaSecondary: 'So funktioniert es',
        },
        challenges: {
          overline: 'Eure Herausforderungen',
          title: 'Das Koordinationsproblem',
          subtitle: 'Großartige Content-Ideen sterben in Silos. Teams arbeiten isoliert, Markenkonsistenz leidet, und ROI zu beweisen fühlt sich unmöglich an.',
          items: [
            { title: 'Team-Silos', description: 'Content wird isoliert erstellt. Keine Sichtbarkeit, was andere veröffentlichen oder planen.' },
            { title: 'Markeninkonsistenz', description: 'Verschiedene Teammitglieder, verschiedene Interpretationen. Deine Markenstimme verwässert.' },
            { title: 'ROI-Blindheit', description: 'Content-Aufwände können nicht mit Geschäftsergebnissen verbunden werden. Budget-Rechtfertigung ist Raten.' },
            { title: 'Manuelle Engpässe', description: 'Freigaben, Planung und Veröffentlichung erfordern immer noch zu viel manuelle Koordination.' },
          ],
        },
        solutions: {
          overline: 'Wie wir helfen',
          title: 'Eine Kommandozentrale für Content',
          subtitle: 'Visibility Engine gibt deinem Team die Tools zur Zusammenarbeit, Markentreue und Wirkungsnachweis.',
          items: [
            { title: 'Multi-Brand Workspaces', description: 'Separate Bereiche für jede Marke oder Produktlinie. Klare Zuständigkeiten, keine Verwirrung.' },
            { title: 'Eingebaute Brand Guidelines', description: 'Automatische Durchsetzung von Tonalität, Terminologie und visuellen Standards.' },
            { title: 'ROI-Attribution', description: 'Verbinde Content mit Leads, Conversions und Umsatz. Wisse, was Ergebnisse bringt.' },
            { title: 'Workflow-Automatisierung', description: 'Freigabeketten, geplante Veröffentlichung und Benachrichtigungen—alles automatisiert.' },
          ],
        },
        metrics: {
          overline: 'Ergebnisse',
          title: 'Was Teams erreichen',
          items: [
            { value: '65%', label: 'Schnellere Content-Produktion' },
            { value: '40%', label: 'Weniger Markenverstöße' },
            { value: '3x', label: 'Klarere ROI-Sichtbarkeit' },
            { value: '8h', label: 'Pro Teammitglied wöchentlich gespart' },
          ],
        },
        cta: {
          title: 'Bereit, eure Content-Operations zu vereinheitlichen?',
          subtitle: 'Gib deinem Team die Visibility-Plattform, die sie brauchen, um effektiv zusammenzuarbeiten und ihre Wirkung zu beweisen.',
          primary: 'Kostenlos testen',
          secondary: 'Preise ansehen',
        },
      },
      enterprise: {
        hero: {
          overline: 'Für Enterprise',
          title: 'Sichtbarkeit im großen Maßstab',
          titleHighlight: 'Mit Enterprise-Kontrolle',
          subtitle: 'Gebaut für Organisationen, die globale Koordination, strenge Compliance und nahtlose Integration mit bestehenden Systemen benötigen.',
          ctaPrimary: 'Vertrieb kontaktieren',
          ctaSecondary: 'Funktionen ansehen',
        },
        challenges: {
          overline: 'Eure Herausforderungen',
          title: 'Enterprise-Komplexität',
          subtitle: 'Im großen Maßstab involviert jede Content-Entscheidung Sicherheit, Compliance und Koordination über mehrere Stakeholder.',
          items: [
            { title: 'Skalierungsgrenzen', description: 'Die meisten Tools versagen bei Enterprise-Volumen. Langsame Performance, begrenzte Nutzer, keine globale Infrastruktur.' },
            { title: 'Sicherheitsanforderungen', description: 'SSO, Audit-Logs, Datenresidenz—nicht verhandelbare Anforderungen, die die meisten Plattformen nicht erfüllen.' },
            { title: 'Compliance-Last', description: 'Regulierte Branchen brauchen Freigabe-Workflows, Aufbewahrungsrichtlinien und vollständige Audit-Trails.' },
            { title: 'Integrations-Komplexität', description: 'Euer Tech-Stack ist individuell. Standard-Integrationen reichen nicht aus.' },
          ],
        },
        solutions: {
          overline: 'Wie wir helfen',
          title: 'Gebaut für Enterprise-Anforderungen',
          subtitle: 'Visibility Engine erfüllt die Sicherheits-, Skalierungs- und Integrationsanforderungen globaler Organisationen.',
          items: [
            { title: 'Dedizierte Infrastruktur', description: 'Single-Tenant-Deployment, individuelle Datenresidenz und 99,99% SLA-Garantien.' },
            { title: 'SSO & SCIM', description: 'Enterprise Identity Management. SAML, OIDC und automatische User-Provisionierung.' },
            { title: 'Vollständiger Audit-Trail', description: 'Jede Aktion protokolliert. Aufbewahrungsrichtlinien, Compliance-Exports und rollenbasierter Zugriff.' },
            { title: 'Custom SLAs & Support', description: 'Dediziertes Account-Team, individuelle Integrationen und Priority-Support.' },
          ],
        },
        metrics: {
          overline: 'Ergebnisse',
          title: 'Enterprise-Performance',
          items: [
            { value: '99,99%', label: 'Uptime SLA' },
            { value: '50+', label: 'Native Integrationen' },
            { value: 'SOC 2', label: 'Compliance-zertifiziert' },
            { value: '24/7', label: 'Dedizierter Support' },
          ],
        },
        cta: {
          title: 'Bereit für Enterprise-Grade Visibility?',
          subtitle: 'Sprich mit unserem Enterprise-Team über individuelles Deployment, Sicherheitsanforderungen und Integrationsbedürfnisse.',
          primary: 'Vertrieb kontaktieren',
          secondary: 'Sicherheitsdocs ansehen',
        },
      },
      agencies: {
        hero: {
          overline: 'Für Agenturen',
          title: 'Verwalte mehrere Kunden',
          titleHighlight: 'Von einer Plattform aus',
          subtitle: 'Die Visibility-Plattform für Agenturen. Separate Kunden-Workspaces, White-Label-Reporting und skalierbare Workflows.',
          ctaPrimary: 'Kostenlos testen',
          ctaSecondary: 'Agentur-Features ansehen',
        },
        challenges: {
          overline: 'Eure Herausforderungen',
          title: 'Der Agentur-Spagat',
          subtitle: 'Mehrere Kunden zu managen bedeutet mehrere Logins, verstreute Daten und Reporting, das länger dauert als die eigentliche Arbeit.',
          items: [
            { title: 'Kunden-Chaos', description: 'Wechseln zwischen Accounts, Plattformen und Dashboards. Keine einheitliche Sicht auf alle Kundenarbeit.' },
            { title: 'Reporting-Overhead', description: 'Kundenreports manuell erstellen. Stunden für Formatierung statt Strategie.' },
            { title: 'White-Label-Bedarf', description: 'Kunden erwarten Reports und Dashboards mit ihrer Markenidentität, nicht eurer.' },
            { title: 'Skalierungsschmerzen', description: 'Jeder neue Kunde bedeutet mehr Komplexität. Eure Tools skalieren nicht mit eurem Business.' },
          ],
        },
        solutions: {
          overline: 'Wie wir helfen',
          title: 'Gebaut für Multi-Client-Operations',
          subtitle: 'Visibility Engine gibt Agenturen die Tools, um beliebig viele Kunden effizient zu managen.',
          items: [
            { title: 'Kunden-Workspaces', description: 'Isolierte Umgebungen für jeden Kunden. Kontextwechsel mit einem Klick.' },
            { title: 'White-Label Branding', description: 'Reports, Dashboards und E-Mails im Branding eures Kunden. Professionelle Präsentation.' },
            { title: 'Automatisiertes Reporting', description: 'Geplante Kundenreports, die sich automatisch generieren und versenden. Holt euch eure Stunden zurück.' },
            { title: 'Skalierbare Workflows', description: 'Templates und Automation, die für alle Kunden funktionieren. Neue Kunden hinzufügen ohne zusätzliche Komplexität.' },
          ],
        },
        metrics: {
          overline: 'Ergebnisse',
          title: 'Was Agenturen erreichen',
          items: [
            { value: '75%', label: 'Weniger Reporting-Zeit' },
            { value: '3x', label: 'Mehr Kunden pro Manager' },
            { value: '60%', label: 'Schnelleres Onboarding' },
            { value: '4,8/5', label: 'Kundenzufriedenheit' },
          ],
        },
        cta: {
          title: 'Bereit, eure Agentur zu skalieren?',
          subtitle: 'Schließt euch Agenturen an, die mit Visibility Engine mehr Kunden mit weniger Overhead managen.',
          primary: 'Kostenlos testen',
          secondary: 'Preise ansehen',
        },
      },
    },
    industryPages: {
      marketing: {
        hero: {
          overline: 'Für Marketing-Teams',
          title: 'Maximiere Kampagnen-Reichweite',
          titleHighlight: 'Über alle Kanäle',
          subtitle: 'Orchestriere Multi-Channel-Kampagnen mit präziser Attribution, automatisierter Distribution und Echtzeit-Performance-Sichtbarkeit, die ROI beweist.',
          ctaPrimary: 'Kostenlos testen',
          ctaSecondary: 'So funktioniert es',
        },
        challenges: {
          overline: 'Marketing-Herausforderungen',
          title: 'Der Multi-Channel-Kampf',
          subtitle: 'Modernes Marketing erfordert Präsenz überall, aber verstreute Tools und isolierte Daten machen es unmöglich zu sehen, was wirklich funktioniert.',
          items: [
            { title: 'Fragmentierte Attribution', description: 'Customer Journeys umfassen Dutzende Touchpoints. Die Verbindungen herzustellen, um ROI zu beweisen, fühlt sich wie Raten an.' },
            { title: 'Kanal-Chaos', description: 'Jede Plattform erfordert unterschiedliche Formate, Timing und Strategien. Sie separat zu verwalten kostet täglich Stunden.' },
            { title: 'Blinde Optimierung', description: 'Ohne einheitliche Analytics kannst du nicht sehen, welche Kampagnen tatsächlich Conversions und Umsatz bringen.' },
            { title: 'Timing-Fehlschüsse', description: 'Posten zur falschen Zeit killt Reichweite. Manuelles Scheduling bedeutet verpasste Chancen über Zeitzonen hinweg.' },
          ],
        },
        solutions: {
          overline: 'Wie wir helfen',
          title: 'Einheitliche Kampagnen-Kommandozentrale',
          subtitle: 'Visibility Engine gibt Marketing-Teams die Tools, um über jeden Kanal zu orchestrieren, zu messen und zu optimieren.',
          items: [
            { title: 'Cross-Channel Analytics', description: 'Ein Dashboard für alle Plattformen. Sieh Performance, vergleiche Kanäle und identifiziere Gewinner sofort.' },
            { title: 'Smartes Scheduling', description: 'KI-optimierte Posting-Zeiten pro Kanal und Audience-Segment. Maximiere Reichweite automatisch.' },
            { title: 'Attribution Modeling', description: 'Multi-Touch Attribution, die Content mit Conversions verbindet. Wisse genau, was Umsatz bringt.' },
            { title: 'Kampagnen-Automatisierung', description: 'Regelbasierte Workflows, die ohne manuellen Eingriff veröffentlichen, promoten und optimieren.' },
          ],
        },
        features: {
          overline: 'Schlüssel-Features für Marketing',
          title: 'Gebaut für Performance Marketing',
          subtitle: 'Jedes Feature darauf ausgelegt, Reichweite zu verstärken, ROI zu beweisen und Zeit zu sparen.',
          items: [
            { title: 'Kampagnen-Performance Hub', description: 'Echtzeit-Dashboards mit Reichweite, Engagement und Conversion-Metriken über alle Kanäle.' },
            { title: 'Audience Insights', description: 'Verstehe, wer mit deinem Content interagiert. Demografie, Verhalten und Präferenzen in einer Ansicht.' },
            { title: 'A/B Testing', description: 'Teste Headlines, Visuals und Timing. Lass Daten entscheiden, was am besten performt.' },
            { title: 'Automatische Alerts', description: 'Werde benachrichtigt, wenn Kampagnen über- oder unterperformen. Reagiere, bevor kleine Probleme groß werden.' },
            { title: 'Custom Reporting', description: 'Generiere Stakeholder-Reports automatisch. White-Label-Exports, die Kunden und Führung beeindrucken.' },
            { title: 'Budget-Tracking', description: 'Verbinde Spend mit Ergebnissen. Kenne deine wahren Kosten pro Akquisition über jeden Kanal.' },
          ],
        },
        cta: {
          title: 'Bereit, euer Marketing zu vereinheitlichen?',
          subtitle: 'Schließe dich Marketing-Teams an, die Reporting-Zeit halbiert und gleichzeitig ihre Kampagnen-Reichweite verdoppelt haben.',
          primary: 'Kostenlos testen',
          secondary: 'Preise ansehen',
        },
      },
      saas: {
        hero: {
          overline: 'Für SaaS-Unternehmen',
          title: 'Treibe Product-Led Growth',
          titleHighlight: 'Mit strategischem Content',
          subtitle: 'Von Developer-Dokumentation bis Thought Leadership – orchestriere die Content-Engine, die Trials, Adoption und Expansion Revenue antreibt.',
          ctaPrimary: 'Kostenlos testen',
          ctaSecondary: 'So funktioniert es',
        },
        challenges: {
          overline: 'SaaS Content-Herausforderungen',
          title: 'Konvertierender Content ist schwer',
          subtitle: 'SaaS-Wachstum hängt von Content ab, der bildet, aktiviert und bindet. Die meisten Teams kämpfen damit, Qualität bei Skalierung zu halten.',
          items: [
            { title: 'Developer Content-Lücken', description: 'Technische Dokumentation, Tutorials und API-Guides brauchen ständige Updates. Zurückfallen schadet der Adoption.' },
            { title: 'Verstreute Wissensbasis', description: 'Help Docs, Blog Posts und Guides leben in verschiedenen Systemen. User finden keine Antworten, Support-Tickets häufen sich.' },
            { title: 'Unklarer Content ROI', description: 'Welcher Blog-Post hat diese Enterprise-Signup gebracht? Ohne Attribution fühlt sich Content-Investment wie ein Glücksspiel an.' },
            { title: 'Skalierungs-Herausforderungen', description: 'Wachsen bedeutet mehr Content, mehr Kanäle, mehr Lokalisierung. Manuelle Prozesse brechen bei Skalierung zusammen.' },
          ],
        },
        solutions: {
          overline: 'Wie wir helfen',
          title: 'Das SaaS Content Operating System',
          subtitle: 'Visibility Engine hilft SaaS-Teams, Content zu erstellen, zu verteilen und zu messen, der Wachstum antreibt.',
          items: [
            { title: 'Einheitlicher Content Hub', description: 'Blog, Docs, Changelog und Help Center – alles von einem Ort aus verwaltet mit konsistenter Struktur.' },
            { title: 'Developer-fokussierte Features', description: 'Markdown-Support, Code-Snippets, API-Dokumentations-Templates und Versionskontrolle für technischen Content.' },
            { title: 'Adoption Analytics', description: 'Tracke Content-Konsum entlang der User Journey. Sieh, was Aktivierung und Retention antreibt.' },
            { title: 'Growth Automation', description: 'Trigger Content-Delivery basierend auf User-Verhalten. Onboarding-Sequenzen, Feature-Announcements und Re-Engagement.' },
          ],
        },
        features: {
          overline: 'Schlüssel-Features für SaaS',
          title: 'Gebaut für Product-Led Growth',
          subtitle: 'Jedes Feature darauf ausgelegt, die Content-Bedürfnisse moderner SaaS-Unternehmen zu unterstützen.',
          items: [
            { title: 'Dokumentations-Management', description: 'Versionskontrollierte Docs mit Suche, Navigation und automatischer Changelog-Generierung.' },
            { title: 'Developer Portal Integration', description: 'Verbinde deine Docs mit deiner API. Halte Beispiele aktuell und Referenzen immer korrekt.' },
            { title: 'Knowledge Base Builder', description: 'Self-Service Help Content, der Support-Last reduziert und User Experience verbessert.' },
            { title: 'Content-Personalisierung', description: 'Zeige unterschiedlichen Content basierend auf User-Segment, Plan-Tier oder Lifecycle-Stage.' },
            { title: 'Community Content', description: 'Verwalte User-generierte Tutorials, Case Studies und Integration Guides neben offiziellem Content.' },
            { title: 'Launch-Koordination', description: 'Orchestriere Produkt-Launches mit abgestimmtem Messaging über Blog, Docs, Email und Social.' },
          ],
        },
        cta: {
          title: 'Bereit, eure Content-Engine zu skalieren?',
          subtitle: 'Schließe dich SaaS-Unternehmen an, die Visibility Engine für Product-Led Growth mit strategischem Content nutzen.',
          primary: 'Kostenlos testen',
          secondary: 'Preise ansehen',
        },
      },
      ecommerce: {
        hero: {
          overline: 'Für E-Commerce',
          title: 'Treibe Produkt-Sichtbarkeit',
          titleHighlight: 'Im großen Maßstab',
          subtitle: 'Verwalte Tausende von Produktbeschreibungen, automatisiere saisonale Kampagnen und optimiere Content für jeden Marktplatz und Kanal.',
          ctaPrimary: 'Kostenlos testen',
          ctaSecondary: 'So funktioniert es',
        },
        challenges: {
          overline: 'E-Commerce Herausforderungen',
          title: 'Produkt-Content-Chaos',
          subtitle: 'Content für Hunderte oder Tausende von SKUs über mehrere Kanäle zu verwalten ist ein logistischer Albtraum.',
          items: [
            { title: 'Katalog-Überwältigung', description: 'Tausende Produkte, jedes mit Beschreibungen, Bildern und Specs. Updates dauern Wochen, nicht Stunden.' },
            { title: 'Saisonaler Druck', description: 'Holiday-Kampagnen, Flash Sales und Promotions erfordern schnelle Content-Änderungen über alle Kanäle gleichzeitig.' },
            { title: 'Marktplatz-Fragmentierung', description: 'Amazon, Shopify, eBay, Social Commerce – jede Plattform hat andere Anforderungen und Optimierungsregeln.' },
            { title: 'Attributions-Blindheit', description: 'Welcher Content treibt Verkäufe? Ohne Verbindung von Content zu Conversions ist Optimierung unmöglich.' },
          ],
        },
        solutions: {
          overline: 'Wie wir helfen',
          title: 'Produkt-Content im großen Maßstab',
          subtitle: 'Visibility Engine hilft E-Commerce-Teams, Produkt-Content effizient zu verwalten, zu optimieren und zu verteilen.',
          items: [
            { title: 'Bulk Content Management', description: 'Aktualisiere Tausende Listings auf einmal. Templates, Massenbearbeitung und automatische Formatierung.' },
            { title: 'Multi-Channel Distribution', description: 'Veröffentliche zu Amazon, Shopify, Social und mehr von einem Ort aus. Automatische Formatierung pro Plattform.' },
            { title: 'Sales Attribution', description: 'Verbinde Content-Views mit Käufen. Wisse, welche Beschreibungen, Bilder und Videos Umsatz bringen.' },
            { title: 'Saisonale Automation', description: 'Plane Kampagnen-Content Monate im Voraus. Automatischer Rollout und Rollback für Promotions.' },
          ],
        },
        features: {
          overline: 'Schlüssel-Features für E-Commerce',
          title: 'Gebaut für Produktkataloge',
          subtitle: 'Jedes Feature darauf ausgelegt, die einzigartigen Anforderungen von E-Commerce-Content zu bewältigen.',
          items: [
            { title: 'Product Feed Management', description: 'Zentralisiere Produktdaten. Pushe Updates zu allen Kanälen mit einem Klick.' },
            { title: 'Visual Asset Library', description: 'Organisiere Produktfotos, Lifestyle-Bilder und Videos. Resize und formatiere für jede Plattform.' },
            { title: 'SEO-Optimierung', description: 'Keyword-optimierte Titel und Beschreibungen. A/B-Teste, um organischen Traffic zu maximieren.' },
            { title: 'Promotion-Kalender', description: 'Plane saisonale Kampagnen visuell. Koordiniere Content über Email, Social und Marktplatz.' },
            { title: 'Performance Analytics', description: 'Tracke, welche Produkte Views bekommen, welche konvertieren und welche Content-Verbesserungen brauchen.' },
            { title: 'Marktplatz-Sync', description: 'Echtzeit-Sync mit großen Marktplätzen. Inventar, Pricing und Content immer aktuell.' },
          ],
        },
        cta: {
          title: 'Bereit, euren Produkt-Content zu skalieren?',
          subtitle: 'Schließe dich E-Commerce-Teams an, die Tausende SKUs effizient mit Visibility Engine verwalten.',
          primary: 'Kostenlos testen',
          secondary: 'Preise ansehen',
        },
      },
      finance: {
        hero: {
          overline: 'Für Finanzdienstleister',
          title: 'Compliance-konformer Content',
          titleHighlight: 'Der Vertrauen aufbaut',
          subtitle: 'Navigiere regulatorische Anforderungen und baue gleichzeitig Thought Leadership auf. Sichere Workflows, Audit-Trails und Freigabeketten für Finanz-Content.',
          ctaPrimary: 'Kostenlos testen',
          ctaSecondary: 'So funktioniert es',
        },
        challenges: {
          overline: 'Finanzbranche-Herausforderungen',
          title: 'Compliance trifft Content',
          subtitle: 'Content im Finanzsektor muss akkurat, compliant und zeitnah sein – eine herausfordernde Kombination, die spezialisierte Workflows erfordert.',
          items: [
            { title: 'Regulatorische Last', description: 'Jeder Content braucht Compliance-Review. Manuelle Prozesse schaffen Engpässe und verlangsamen Time-to-Market.' },
            { title: 'Risikomanagement', description: 'Ein falsches Wort kann regulatorische Probleme auslösen. Versionskontrolle und Freigabe-Tracking sind nicht optional.' },
            { title: 'Sicherheitsanforderungen', description: 'Finanzdaten erfordern Enterprise-Grade Security. Consumer-Tools können Audit- und Compliance-Bedürfnisse nicht erfüllen.' },
            { title: 'Audit-Trail-Lücken', description: 'Regulatoren fordern Nachweis, wer was wann genehmigt hat. Verstreute Tools machen das nahezu unmöglich.' },
          ],
        },
        solutions: {
          overline: 'Wie wir helfen',
          title: 'Gebaut für regulierte Branchen',
          subtitle: 'Visibility Engine bietet die Sicherheits-, Compliance- und Workflow-Features, die Finanzdienstleister fordern.',
          items: [
            { title: 'Compliance Workflows', description: 'Mehrstufige Freigabeketten mit rollenbasiertem Zugriff. Legal, Compliance und Marketing arbeiten nahtlos zusammen.' },
            { title: 'Vollständige Audit-Trails', description: 'Jede Bearbeitung, Genehmigung und Veröffentlichung protokolliert. Export-fertige Reports für regulatorische Prüfungen.' },
            { title: 'Enterprise Security', description: 'SSO, Verschlüsselung at rest und in transit, SOC 2 Compliance und individuelle Datenresidenz-Optionen.' },
            { title: 'Automatische Compliance-Prüfungen', description: 'Flagge potenziell problematische Formulierungen vor Veröffentlichung. Reduziere Review-Zyklen und Risiko.' },
          ],
        },
        features: {
          overline: 'Schlüssel-Features für Finance',
          title: 'Security-First Content Management',
          subtitle: 'Jedes Feature mit Compliance und Sicherheit als Grundlage entwickelt.',
          items: [
            { title: 'Rollenbasierte Berechtigungen', description: 'Granulare Zugriffskontrolle. Definiere, wer erstellen, bearbeiten, genehmigen und veröffentlichen darf.' },
            { title: 'Dokumenten-Aufbewahrung', description: 'Automatisierte Aufbewahrungsrichtlinien. Behalte Datensätze so lange wie Regulierungen erfordern, dann sicher löschen.' },
            { title: 'Compliance-Templates', description: 'Vorab genehmigte Templates für gängige Content-Typen. Reduziere Review-Last bei konsistenter Qualität.' },
            { title: 'Disclaimer-Management', description: 'Automatische Disclaimers und Offenlegungen. Vergiss nie erforderliche regulatorische Sprache.' },
            { title: 'Performance Dashboards', description: 'Tracke Content-Performance bei Einhaltung von Compliance. Beweise ROI gegenüber Stakeholdern.' },
            { title: 'Echtzeit-Alerts', description: 'Werde über ausstehende Genehmigungen, ablaufenden Content und Compliance-Review-Deadlines benachrichtigt.' },
          ],
        },
        cta: {
          title: 'Bereit für Compliance-konformen Content im großen Maßstab?',
          subtitle: 'Schließe dich Finanzdienstleistern an, die Visibility Engine für sicheres, compliance-konformes Content Management vertrauen.',
          primary: 'Kostenlos testen',
          secondary: 'Preise ansehen',
        },
      },
      media: {
        hero: {
          overline: 'Für Media & Publishing',
          title: 'Optimiere Editorial Workflows',
          titleHighlight: 'Monetarisiere Content',
          subtitle: 'Von der Redaktion zum Revenue – orchestriere Editorial-Kalender, automatisiere Distribution und maximiere Audience Engagement und Monetarisierung.',
          ctaPrimary: 'Kostenlos testen',
          ctaSecondary: 'So funktioniert es',
        },
        challenges: {
          overline: 'Medienbranche-Herausforderungen',
          title: 'Publishing im News-Tempo',
          subtitle: 'Moderne Medien erfordern konstanten Content, enge Deadlines und diversifizierte Einnahmen – alles mit schrumpfenden Ressourcen.',
          items: [
            { title: 'Editorial Bottlenecks', description: 'Stories stecken in Freigabe-Queues fest. Breaking News wartet, während Redakteure konkurrierende Prioritäten jonglieren.' },
            { title: 'Content Sprawl', description: 'Artikel, Videos, Podcasts, Newsletter – jeder mit unterschiedlichen Workflows, Plattformen und Teams.' },
            { title: 'Monetarisierungsdruck', description: 'Werbeeinnahmen sinken. Subscriptions, Sponsorings und Affiliate erfordern neue Content-Strategien.' },
            { title: 'Distributions-Komplexität', description: 'Website, App, Social, Newsletter, Syndication – Audiences zu erreichen erfordert überall zu publishen, schnell.' },
          ],
        },
        solutions: {
          overline: 'Wie wir helfen',
          title: 'Die moderne Publishing-Plattform',
          subtitle: 'Visibility Engine hilft Medien-Teams, Content effizient zu produzieren, zu verteilen und zu monetarisieren.',
          items: [
            { title: 'Editorial Kalender', description: 'Visuelle Planung für alle Content-Typen. Zuweisen, tracken und über Teams und Deadlines kollaborieren.' },
            { title: 'Multi-Format Workflows', description: 'Artikel, Videos, Podcasts – einheitliche Workflows, die die einzigartigen Anforderungen jedes Formats respektieren.' },
            { title: 'Revenue Analytics', description: 'Verbinde Content mit Revenue-Streams. Tracke Ads, Subscriptions und Affiliate-Conversions pro Stück.' },
            { title: 'Automatisierte Distribution', description: 'Einmal publishen, überall verteilen. Automatische Formatierung für jeden Kanal und jede Plattform.' },
          ],
        },
        features: {
          overline: 'Schlüssel-Features für Medien',
          title: 'Gebaut für redaktionelle Exzellenz',
          subtitle: 'Jedes Feature darauf ausgelegt, schnelllebige Newsrooms und Publishing-Teams zu unterstützen.',
          items: [
            { title: 'Story-Planungs-Tools', description: 'Von Pitch bis Publication. Tracke Story-Entwicklung, Quellen und Multimedia-Assets.' },
            { title: 'Editorial Kalender', description: 'Visueller Kalender mit Drag-and-Drop-Scheduling. Sieh, was über alle Content-Typen kommt.' },
            { title: 'Contributor Management', description: 'Verwalte Freelancer, Gastautoren und Staff. Aufträge, Deadlines und Payments an einem Ort.' },
            { title: 'Syndication Hub', description: 'Verteile automatisch an Partner. Tracke, wo dein Content erscheint und miss Performance.' },
            { title: 'Audience Analytics', description: 'Verstehe, was resoniert. Tracke Reads, Time-on-Page, Shares und Subscriber-Conversions.' },
            { title: 'KI-gestützte Empfehlungen', description: 'Schlage Themen vor, optimiere Headlines und identifiziere Trending-Subjects vor der Konkurrenz.' },
          ],
        },
        cta: {
          title: 'Bereit, eure Redaktion zu transformieren?',
          subtitle: 'Schließe dich Medienunternehmen an, die mit Visibility Engine schneller publishen und smarter monetarisieren.',
          primary: 'Kostenlos testen',
          secondary: 'Preise ansehen',
        },
      },
    },
    trustPages: {
      security: {
        hero: {
          overline: 'Sicherheit',
          title: 'Deine Daten, geschützt',
          subtitle: 'Sicherheit ist kein Nachgedanke. Sie ist in jede Ebene unserer Plattform eingebaut, von der Infrastruktur bis zur Anwendung.',
        },
        principles: {
          overline: 'Unsere Verpflichtungen',
          title: 'Sicherheitsprinzipien',
          encryption: {
            title: 'Ende-zu-Ende-Verschlüsselung',
            description: 'Alle Daten werden bei der Übertragung mit TLS 1.3 und im Ruhezustand mit AES-256 verschlüsselt. Dein Content reist nie ungeschützt.',
          },
          access: {
            title: 'Strenge Zugriffskontrollen',
            description: 'Rollenbasierter Zugriff, Multi-Faktor-Authentifizierung und das Prinzip der minimalen Rechte gewährleisten nur autorisierten Zugang.',
          },
          monitoring: {
            title: '24/7 Überwachung',
            description: 'Kontinuierliche Sicherheitsüberwachung, Einbruchserkennung und automatisierte Bedrohungsreaktion schützen deine Daten rund um die Uhr.',
          },
          availability: {
            title: 'Hohe Verfügbarkeit',
            description: 'Redundante Infrastruktur über mehrere Regionen stellt sicher, dass deine Daten immer zugänglich sind, wenn du sie brauchst.',
          },
        },
        technical: {
          overline: 'Technische Details',
          title: 'Wie wir deine Daten schützen',
          infrastructure: {
            title: 'Infrastruktur',
            items: [
              'Gehostet bei SOC 2 Type II zertifizierten Cloud-Anbietern',
              'Isolierte Netzwerkumgebungen pro Mandant',
              'Regelmäßige Penetrationstests durch Dritte',
              'Automatisiertes Vulnerability-Scanning',
            ],
          },
          dataProtection: {
            title: 'Datenschutz',
            items: [
              'AES-256-Verschlüsselung im Ruhezustand',
              'TLS 1.3-Verschlüsselung bei der Übertragung',
              'Sichere Schlüsselverwaltung mit HSM',
              'Regelmäßige verschlüsselte Backups',
            ],
          },
          accessControl: {
            title: 'Zugriffskontrolle',
            items: [
              'Multi-Faktor-Authentifizierung',
              'Single Sign-On (SSO) Support',
              'Rollenbasierte Berechtigungen',
              'Session-Management und Timeout',
            ],
          },
        },
        certifications: {
          overline: 'Standards & Zertifizierungen',
          title: 'Branchenanerkannte Sicherheit',
          soc2: {
            title: 'SOC 2 Type II',
            status: 'In Arbeit',
            description: 'Wir arbeiten aktiv an der SOC 2 Type II-Zertifizierung, um unser Engagement für Sicherheit, Verfügbarkeit und Vertraulichkeit zu demonstrieren.',
          },
          gdpr: {
            title: 'DSGVO-konform',
            status: 'Konform',
            description: 'Vollständige Einhaltung der Europäischen Datenschutz-Grundverordnung für Datenschutz und -sicherheit.',
          },
          iso: {
            title: 'ISO 27001',
            status: 'Geplant',
            description: 'Die ISO 27001-Zertifizierung steht auf unserer Roadmap zur Formalisierung unseres Informationssicherheits-Managementsystems.',
          },
        },
        contact: {
          title: 'Sicherheitsfragen?',
          description: 'Unser Sicherheitsteam steht zur Verfügung, um Fragen zu beantworten, unsere Sicherheitspraktiken zu erläutern oder spezifische Anforderungen für dein Unternehmen zu besprechen.',
        },
      },
      privacy: {
        hero: {
          overline: 'Datenschutz',
          title: 'Deine Daten bleiben deine',
          subtitle: 'Wir glauben, dass Privatsphäre ein Grundrecht ist. Deine Daten gehören dir, und wir behandeln sie mit dem Respekt, den sie verdienen.',
        },
        principles: {
          overline: 'Datenschutzprinzipien',
          title: 'Wie wir mit deinen Daten umgehen',
          ownership: {
            title: 'Du besitzt deine Daten',
            description: 'Dein Content, deine Analytics, deine Audience-Daten – alles gehört dir. Wir sind Treuhänder, nicht Eigentümer.',
          },
          minimal: {
            title: 'Datenminimierung',
            description: 'Wir sammeln nur, was wir für unseren Service benötigen. Nicht mehr. Kein verstecktes Tracking oder unnötige Datenerhebung.',
          },
          noSelling: {
            title: 'Wir verkaufen deine Daten nie',
            description: 'Deine Daten sind kein Produkt. Wir verkaufen, vermieten oder tauschen deine Informationen nicht an Dritte. Punkt.',
          },
          control: {
            title: 'Du hast die Kontrolle',
            description: 'Exportiere deine Daten jederzeit. Lösche dein Konto vollständig. Du entscheidest, was mit deinen Informationen passiert.',
          },
        },
        practices: {
          overline: 'Datenpraktiken',
          title: 'Transparenz in Aktion',
          collection: {
            title: 'Was wir sammeln',
            items: [
              'Kontoinformationen, die du angibst',
              'Inhalte, die du erstellst und hochlädst',
              'Plattformnutzung zur Serviceverbesserung',
              'Analytics-Daten, die du trackst',
            ],
          },
          storage: {
            title: 'Wie wir speichern',
            items: [
              'Verschlüsselt im Ruhezustand und bei Übertragung',
              'Gespeichert in EU-Rechenzentren',
              'Regelmäßige Sicherheitsaudits',
              'Strikte Aufbewahrungsrichtlinien',
            ],
          },
          sharing: {
            title: 'Wer hat Zugriff',
            items: [
              'Nur autorisierte Teammitglieder',
              'Kein Datenverkauf an Dritte',
              'Minimaler Vendor-Zugriff',
              'Vollständige Audit-Trails',
            ],
          },
        },
        rights: {
          overline: 'Deine Rechte',
          title: 'Vollständige Datenkontrolle',
          subtitle: 'Nach DSGVO und anderen Datenschutzvorschriften hast du spezifische Rechte bezüglich deiner personenbezogenen Daten.',
          access: {
            title: 'Recht auf Auskunft',
            description: 'Fordere eine vollständige Kopie aller personenbezogenen Daten an, die wir über dich speichern.',
          },
          portability: {
            title: 'Recht auf Datenübertragbarkeit',
            description: 'Exportiere deine Daten jederzeit in einem maschinenlesbaren Format.',
          },
          deletion: {
            title: 'Recht auf Löschung',
            description: 'Fordere die vollständige Löschung deines Kontos und aller zugehörigen Daten an.',
          },
          correction: {
            title: 'Recht auf Berichtigung',
            description: 'Aktualisiere oder korrigiere unrichtige personenbezogene Daten.',
          },
        },
        gdpr: {
          overline: 'DSGVO-Compliance',
          title: 'Entwickelt für Privacy by Design',
          description: 'Wir haben unsere Plattform von Grund auf mit DSGVO-Prinzipien entwickelt. Datenschutz ist kein Feature, das wir hinzugefügt haben – so arbeiten wir.',
          items: [
            'Rechtmäßige Grundlage für alle Datenverarbeitung',
            'Datenschutz-Folgenabschätzungen',
            'Benannter Datenschutzbeauftragter',
            'Auftragsverarbeiter-Vereinbarungen vorhanden',
            'Datenpannen-Meldeverfahren',
            'Regelmäßige Datenschutzschulungen für Mitarbeiter',
          ],
        },
        contact: {
          title: 'Datenschutzfragen?',
          description: 'Unser Datenschutzteam ist hier, um deine Fragen zum Umgang mit deinen Daten zu beantworten.',
        },
      },
      compliance: {
        hero: {
          overline: 'Compliance',
          title: 'Standards, denen du vertrauen kannst',
          subtitle: 'Wir halten uns an die höchsten Standards regulatorischer Compliance und branchenweit bewährter Praktiken.',
        },
        principles: {
          overline: 'Unser Ansatz',
          title: 'Compliance-Prinzipien',
          standards: {
            title: 'Branchenstandards',
            description: 'Wir orientieren uns an anerkannten Frameworks und Standards, um konsistente, überprüfbare Compliance in all unseren Abläufen zu gewährleisten.',
          },
          audits: {
            title: 'Regelmäßige Audits',
            description: 'Unabhängige Drittanbieter-Audits verifizieren unsere Kontrollen und Praktiken und bieten objektive Gewissheit über unsere Compliance.',
          },
          documentation: {
            title: 'Vollständige Dokumentation',
            description: 'Umfassende Richtlinien, Verfahren und Aufzeichnungen demonstrieren unser Engagement für Compliance auf jeder Ebene.',
          },
          continuous: {
            title: 'Kontinuierliche Verbesserung',
            description: 'Compliance ist keine Checkbox. Wir überwachen, bewerten und verbessern unsere Praktiken kontinuierlich, wenn sich Anforderungen entwickeln.',
          },
        },
        frameworks: {
          overline: 'Frameworks & Standards',
          title: 'Zertifizierungen & Compliance',
          gdpr: {
            title: 'DSGVO',
            status: 'Konform',
            description: 'Vollständige Einhaltung der EU-Datenschutzanforderungen.',
            items: [
              'Datenverarbeitungsvereinbarungen',
              'Datenschutz-Folgenabschätzungen',
              'Einwilligungsmanagement',
              'Bearbeitung von Betroffenenrechten',
            ],
          },
          soc2: {
            title: 'SOC 2 Type II',
            status: 'In Arbeit',
            description: 'Nachweis von Sicherheits-, Verfügbarkeits- und Vertraulichkeitskontrollen.',
            items: [
              'Sicherheitsrichtlinien und -verfahren',
              'Zugriffskontrollsysteme',
              'Incident-Response-Pläne',
              'Change-Management-Prozesse',
            ],
          },
          iso: {
            title: 'ISO 27001',
            status: 'Geplant',
            description: 'Zertifizierung des Informationssicherheits-Managementsystems.',
            items: [
              'Risikobewertungs-Framework',
              'Implementierung von Sicherheitskontrollen',
              'Management-Review-Prozess',
              'Kontinuierlicher Verbesserungszyklus',
            ],
          },
        },
        audits: {
          overline: 'Audit-Bereitschaft',
          title: 'Immer vorbereitet',
          subtitle: 'Unsere Systeme und Prozesse sind darauf ausgelegt, Audits zu unterstützen und jederzeit Compliance nachzuweisen.',
          security: {
            title: 'Sicherheitskontrollen',
            description: 'Dokumentierte Sicherheitsrichtlinien, technische Kontrollen und regelmäßige Tests.',
          },
          dataHandling: {
            title: 'Datenverarbeitung',
            description: 'Klare Datenflüsse, Aufbewahrungsrichtlinien und Verarbeitungsaufzeichnungen.',
          },
          accessControl: {
            title: 'Zugriffsverwaltung',
            description: 'Benutzerbereitstellung, Berechtigungsaudits und Zugriffsüberprüfungen.',
          },
          vendorManagement: {
            title: 'Vendor-Management',
            description: 'Due Diligence, Verträge und laufende Überwachung von Drittanbietern.',
          },
        },
        contact: {
          title: 'Compliance-Anfragen',
          description: 'Für Compliance-Dokumentation, Audit-Anfragen oder regulatorische Fragen kontaktiere unser Compliance-Team.',
        },
      },
      transparency: {
        hero: {
          overline: 'Transparenz',
          title: 'Keine Blackboxen',
          subtitle: 'Wir glauben, dass du genau verstehen solltest, wie unsere Plattform funktioniert, welche Entscheidungen sie trifft und warum.',
        },
        principles: {
          overline: 'Transparenzprinzipien',
          title: 'Offenheit by Design',
          noBlackBox: {
            title: 'Keine versteckte Logik',
            description: 'Jede Empfehlung, jede Bewertung, jede automatisierte Entscheidung kann auf klare, verständliche Faktoren zurückgeführt werden.',
          },
          explainableAI: {
            title: 'Erklärbare KI',
            description: 'Wenn unsere KI Vorschläge oder Vorhersagen macht, erklärt sie warum. Keine mysteriösen Algorithmen – nur klare Begründungen.',
          },
          control: {
            title: 'Du bestimmst die Regeln',
            description: 'Automatisierung arbeitet für dich, nicht umgekehrt. Du definierst die Regeln, setzt die Schwellenwerte und genehmigst die Aktionen.',
          },
          visibility: {
            title: 'Volle Transparenz',
            description: 'Dashboards zeigen genau, was mit deinem Content, deinen Daten und deiner Performance passiert – in Echtzeit.',
          },
        },
        features: {
          overline: 'Wie wir Transparenz liefern',
          title: 'Eingebaute Sichtbarkeit',
          decisionLogs: {
            title: 'Entscheidungsprotokolle',
            items: [
              'Vollständige Historie automatisierter Aktionen',
              'Begründung hinter jeder Entscheidung',
              'Vorher-Nachher-Vergleiche',
              'Einfache Rollback-Optionen',
            ],
          },
          auditTrail: {
            title: 'Audit-Trail',
            items: [
              'Jede Änderung wird verfolgt',
              'Benutzeraktions-Protokollierung',
              'Zeitstempelverifizierung',
              'Exportierbare Aufzeichnungen',
            ],
          },
          explainability: {
            title: 'KI-Erklärbarkeit',
            items: [
              'Faktoraufschlüsselung für Bewertungen',
              'Konfidenzlevel werden angezeigt',
              'Datenquellen werden referenziert',
              'Alternative Optionen werden erklärt',
            ],
          },
        },
        commitments: {
          overline: 'Unsere Verpflichtungen',
          title: 'Transparenz in der Praxis',
          subtitle: 'Das sind nicht nur Worte. Es sind Verpflichtungen, die wir jedem Nutzer unserer Plattform geben.',
          openCommunication: {
            title: 'Offene Kommunikation',
            description: 'Wir teilen unsere Roadmap, erklären unsere Entscheidungen und hören auf dein Feedback. Keine Überraschungen.',
          },
          changelog: {
            title: 'Öffentliches Changelog',
            description: 'Jedes Update, jede Änderung, jede Verbesserung wird dokumentiert und klar kommuniziert.',
          },
          feedback: {
            title: 'Feedback-Schleife',
            description: 'Dein Input formt direkt unser Produkt. Wir teilen, woran wir arbeiten und warum.',
          },
          honesty: {
            title: 'Ehrliche Grenzen',
            description: 'Wir sind klar darüber, was unsere Plattform kann und was nicht. Keine Überversprechen, keine irreführenden Behauptungen.',
          },
        },
        quote: {
          text: 'Die beste KI ist nicht die, die Entscheidungen für dich trifft – es ist die, die dir hilft, selbst bessere Entscheidungen zu treffen.',
          attribution: 'Unsere Produktphilosophie',
        },
        contact: {
          title: 'Fragen zu unserem Ansatz?',
          description: 'Wir begrüßen Fragen darüber, wie unsere Plattform funktioniert. Transparenz beginnt mit offenem Dialog.',
        },
      },
    },
    resourcePages: {
      guides: {
        hero: {
          overline: 'Guides & Tutorials',
          title: 'Visibility Engine meistern',
          subtitle: 'Schritt-für-Schritt-Anleitungen, die dir helfen, jedes Feature optimal zu nutzen. Vom ersten Setup bis zur fortgeschrittenen Automatisierung.',
        },
        categories: {
          all: 'Alle Guides',
          gettingStarted: 'Erste Schritte',
          advanced: 'Fortgeschritten',
          integration: 'Integration',
          bestPractices: 'Best Practices',
        },
        items: {
          quickStart: {
            title: 'Schnellstart-Guide',
            description: 'In 15 Minuten startklar. Verbinde deine erste Plattform, erstelle deinen ersten Content und plane deinen ersten Post.',
            readTime: '15 Min. Lesezeit',
          },
          advancedAutomation: {
            title: 'Erweiterte Automatisierung',
            description: 'Erstelle ausgefeilte Automatisierungsregeln, die auf Performance-Signale reagieren und deine Content-Distribution automatisch optimieren.',
            readTime: '25 Min. Lesezeit',
          },
          apiIntegration: {
            title: 'API-Integrations-Guide',
            description: 'Verbinde Visibility Engine mit deinen bestehenden Tools und Workflows über unsere REST API und Webhooks.',
            readTime: '30 Min. Lesezeit',
          },
          contentStrategy: {
            title: 'Content-Strategie-Framework',
            description: 'Lerne das bewährte Framework für Content, der konstant auf allen Plattformen performt.',
            readTime: '20 Min. Lesezeit',
          },
          analyticsDeepDive: {
            title: 'Analytics im Detail',
            description: 'Verstehe jede Metrik, lerne Performance-Muster zu lesen und triff datengestützte Entscheidungen für deinen Content.',
            readTime: '35 Min. Lesezeit',
          },
          schedulingMastery: {
            title: 'Scheduling meistern',
            description: 'Optimiere deinen Posting-Zeitplan basierend auf Nutzerverhalten, Zeitzonen und Plattform-Algorithmen.',
            readTime: '18 Min. Lesezeit',
          },
        },
        cta: 'Guide lesen',
        newsletter: {
          title: 'Neue Guides per E-Mail erhalten',
          description: 'Abonniere, um neue Guides, Tipps und Best Practices direkt in dein Postfach zu bekommen.',
          placeholder: 'deine@email.de',
          button: 'Abonnieren',
        },
      },
      automationPlaybooks: {
        hero: {
          overline: 'Automatisierungs-Playbooks',
          title: 'Fertige Workflows',
          subtitle: 'Vorgefertigte Automatisierungsvorlagen, die du in Minuten einsetzen kannst. Jedes Playbook ist praxiserprobt und auf Ergebnisse optimiert.',
        },
        benefits: [
          'In Minuten einsatzbereit',
          'Vollständig anpassbar',
          'Performance-optimiert',
          'Kein Code erforderlich',
        ],
        grid: {
          title: 'Beliebte Playbooks',
          subtitle: 'Wähle ein Playbook, das zu deinen Zielen passt, und starte heute mit der Automatisierung.',
        },
        items: {
          contentCalendar: {
            title: 'Intelligenter Content-Kalender',
            description: 'Plane und verteile Content automatisch auf allen Plattformen basierend auf optimalen Posting-Zeiten.',
            stepsCount: '5 Automatisierungsschritte',
            useCase: 'Ideal für: Kontinuierliches Publishing',
          },
          performanceAlerts: {
            title: 'Performance-Benachrichtigungen',
            description: 'Erhalte Benachrichtigungen, wenn Content außergewöhnlich gut performt oder Aufmerksamkeit braucht.',
            stepsCount: '3 Automatisierungsschritte',
            useCase: 'Ideal für: Echtzeit-Monitoring',
          },
          engagementBoost: {
            title: 'Engagement-Booster',
            description: 'Bringe automatisch Top-Content wieder hervor und bewirb ihn, um Reichweite und Engagement zu maximieren.',
            stepsCount: '4 Automatisierungsschritte',
            useCase: 'Ideal für: ROI maximieren',
          },
          crossPosting: {
            title: 'Cross-Platform Publishing',
            description: 'Veröffentliche Content gleichzeitig auf mehreren Plattformen mit plattformspezifischen Optimierungen.',
            stepsCount: '6 Automatisierungsschritte',
            useCase: 'Ideal für: Multi-Plattform-Reichweite',
          },
          aiOptimization: {
            title: 'KI-Content-Optimierung',
            description: 'Nutze KI, um automatisch Verbesserungen vorzuschlagen und Content für jede Plattform zu optimieren.',
            stepsCount: '4 Automatisierungsschritte',
            useCase: 'Ideal für: Content-Qualität',
          },
          republishing: {
            title: 'Evergreen-Republishing',
            description: 'Identifiziere und republiziere automatisch zeitlosen Content in optimalen Intervallen.',
            stepsCount: '5 Automatisierungsschritte',
            useCase: 'Ideal für: Content-Langlebigkeit',
          },
        },
        cta: 'Playbook nutzen',
        custom: {
          title: 'Brauchst du ein individuelles Playbook?',
          description: 'Unser Team kann dir helfen, maßgeschneiderte Automatisierungs-Workflows für deine spezifischen Anforderungen zu erstellen.',
          button: 'Kontaktiere uns',
        },
      },
      changelog: {
        hero: {
          overline: 'Changelog',
          title: 'Was gibt es Neues',
          subtitle: 'Verfolge jedes Update, jede Verbesserung und jedes neue Feature. Wir shippen häufig und dokumentieren alles.',
          currentVersion: 'v2.8.0',
          lastUpdated: 'Januar 2026',
        },
        filters: {
          all: 'Alle Updates',
          features: 'Features',
          fixes: 'Fixes',
          improvements: 'Verbesserungen',
        },
        entries: {
          v280: {
            date: '15. Jan. 2026',
            version: 'v2.8.0',
            title: 'KI-gestützte Content-Vorschläge',
            description: 'Einführung intelligenter Content-Vorschläge basierend auf deinen Performance-Daten und Trending-Themen. Die KI analysiert deinen erfolgreichsten Content und schlägt neue Ideen vor, die bei deinem Publikum ankommen werden.',
          },
          v275: {
            date: '8. Jan. 2026',
            version: 'v2.7.5',
            title: 'Erweitertes Analytics-Dashboard',
            description: 'Komplett überarbeitetes Analytics-Dashboard mit neuen Visualisierungsoptionen, benutzerdefinierten Zeiträumen und exportierbaren Berichten. Jetzt mit prädiktiven Performance-Metriken.',
          },
          v270: {
            date: '20. Dez. 2025',
            version: 'v2.7.0',
            title: 'Performance-Optimierung',
            description: 'Große Performance-Verbesserungen auf der gesamten Plattform. Seitenladezeiten um 40% reduziert, Echtzeit-Updates sind jetzt instant, und das mobile Erlebnis ist flüssiger als je zuvor.',
          },
          v265: {
            date: '12. Dez. 2025',
            version: 'v2.6.5',
            title: 'Neue Plattform-Integrationen',
            description: 'Unterstützung für drei neue Plattformen hinzugefügt: Threads, Bluesky und Mastodon. Verbinde und verwalte deine gesamte Social-Präsenz von einem Ort aus.',
          },
          v260: {
            date: '5. Dez. 2025',
            version: 'v2.6.0',
            title: 'Automatisierungs-Rule-Builder 2.0',
            description: 'Der Automatisierungs-Rule-Builder wurde von Grund auf neu gebaut. Neue visuelle Oberfläche, mehr Trigger-Optionen und bessere Bedingungslogik für komplexe Workflows.',
          },
          v255: {
            date: '28. Nov. 2025',
            version: 'v2.5.5',
            title: 'Team-Kollaborations-Features',
            description: 'Neue Team-Features inklusive rollenbasierter Berechtigungen, Content-Freigabe-Workflows und geteilten Content-Bibliotheken. Perfekt für Agenturen und Enterprise-Teams.',
          },
        },
        subscribe: {
          title: 'Bleib auf dem Laufenden',
          description: 'Erhalte Benachrichtigungen über neue Features, Verbesserungen und wichtige Updates direkt in deinem Postfach.',
          placeholder: 'deine@email.de',
          button: 'Abonnieren',
        },
      },
      blog: {
        overline: 'Weiterleitung',
        title: 'Weiter zum Blog',
        subtitle: 'Du wirst gleich zu unserem Hauptblog-Bereich weitergeleitet.',
        primaryCta: 'Jetzt zum Blog',
        secondaryCta: 'Guides durchstöbern',
        redirectNotice: 'Automatische Weiterleitung in 3 Sekunden...',
      },
    },
  },
} as const;

export type PublicLanguage = 'en' | 'de';
export type PublicTranslations = typeof publicTranslations.en;
