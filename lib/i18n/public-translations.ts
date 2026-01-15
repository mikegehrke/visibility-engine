export const publicTranslations = {
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      about: 'About',
      blog: 'Blog',
      login: 'Login',
      getStarted: 'Get Started',
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
      login: {
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
        title: 'Create your account',
        subtitle: 'Join Visibility Engine today',
        role: 'I am a...',
        roleCreator: 'Creator',
        roleCompany: 'Company',
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
        title: 'Reset your password',
        subtitle: 'Enter your email to receive a reset link',
        email: 'Email',
        submit: 'Send Reset Link',
        backToLogin: 'Back to login',
        uiOnly: 'Password reset UI only - no backend implemented',
      },
      resetPassword: {
        title: 'Set new password',
        subtitle: 'Enter your new password',
        password: 'New password',
        confirmPassword: 'Confirm new password',
        submit: 'Reset Password',
        passwordMismatch: 'Passwords do not match',
        uiOnly: 'Password reset UI only - no backend implemented',
      },
      verifyEmail: {
        title: 'Verify your email',
        verifying: 'Verifying your email...',
        success: 'Email verified successfully!',
        error: 'Verification failed',
        goToDashboard: 'Go to Dashboard',
        uiOnly: 'Email verification UI only - no backend implemented',
      },
    },
    landing: {
      hero: {
        title: 'Build Your Visibility Empire',
        subtitle: 'The professional platform for creators and companies to manage content, grow audiences, and maximize reach across all channels.',
        ctaPrimary: 'Start Free',
        ctaSecondary: 'See How It Works',
      },
      forWho: {
        title: 'Built For Professionals',
        creators: {
          title: 'For Creators',
          description: 'Manage your content pipeline, schedule across platforms, analyze performance, and scale your personal brand with AI-powered tools.',
        },
        companies: {
          title: 'For Companies',
          description: 'Coordinate multiple creators, manage brand campaigns, automate workflows, and maintain consistent visibility across all marketing channels.',
        },
      },
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
      cta: {
        title: 'Ready to Scale Your Visibility?',
        subtitle: 'Join creators and companies building their presence the professional way.',
        button: 'Get Started Free',
      },
    },
    features: {
      meta: {
        title: 'Features – Visibility Engine',
        description: 'Discover all features for professional content management, automation, analytics, and AI-powered optimization.',
      },
      hero: {
        title: 'Features Built for Scale',
        subtitle: 'Professional tools for creators and companies who take visibility seriously.',
      },
      contentMedia: {
        title: 'Content & Media Management',
        video: {
          title: 'Video Library',
          description: 'Store, organize, and manage all video assets with metadata, tags, and version control.',
        },
        images: {
          title: 'Image Management',
          description: 'Centralized image library with automatic optimization and format conversion.',
        },
        editor: {
          title: 'Content Editor',
          description: 'Write, format, and prepare content with templates and collaborative editing.',
        },
      },
      automation: {
        title: 'Automation & Scheduling',
        campaigns: {
          title: 'Campaign Management',
          description: 'Plan and execute multi-platform campaigns with automated deployment.',
        },
        schedules: {
          title: 'Smart Scheduling',
          description: 'Schedule posts across platforms with optimal timing recommendations.',
        },
      },
      analytics: {
        title: 'Analytics & Insights',
        performance: {
          title: 'Performance Tracking',
          description: 'Real-time metrics across all platforms and content types.',
        },
        reports: {
          title: 'Custom Reports',
          description: 'Generate detailed reports with exportable data and visualizations.',
        },
      },
      ai: {
        title: 'AI & Automation',
        agents: {
          title: 'AI Agents',
          description: 'Deploy specialized AI agents for content optimization, trend analysis, and recommendations.',
        },
        optimization: {
          title: 'Auto-Optimization',
          description: 'AI-powered suggestions for titles, thumbnails, descriptions, and posting times.',
        },
      },
      collaboration: {
        title: 'Team & Collaboration',
        workspaces: {
          title: 'Team Workspaces',
          description: 'Separate workspaces for different teams, clients, or brands.',
        },
        roles: {
          title: 'Role Management',
          description: 'Granular permissions and access control for team members.',
        },
      },
      developer: {
        title: 'Developer Tools',
        api: {
          title: 'REST API',
          description: 'Full API access for custom integrations and automation.',
        },
        webhooks: {
          title: 'Webhooks',
          description: 'Real-time event notifications for external systems.',
        },
      },
    },
    pricing: {
      meta: {
        title: 'Pricing – Visibility Engine',
        description: 'Choose the plan that fits your needs. From free for beginners to enterprise for teams.',
      },
      hero: {
        title: 'Simple, Transparent Pricing',
        subtitle: 'Start free, upgrade as you grow. No hidden fees.',
      },
      free: {
        name: 'Free',
        price: 'Free Forever',
        description: 'Perfect for getting started',
        features: [
          '1 workspace',
          'Basic content management',
          'Up to 10 scheduled posts/month',
          'Community support',
          '7 days data retention',
        ],
        cta: 'Start Free',
      },
      pro: {
        name: 'Pro',
        price: 'Coming Soon',
        description: 'For serious creators',
        features: [
          '3 workspaces',
          'Full content library',
          'Unlimited scheduled posts',
          'Basic analytics',
          'Email support',
          '90 days data retention',
        ],
        cta: 'Notify Me',
      },
      proPlus: {
        name: 'Pro+',
        price: 'Coming Soon',
        description: 'For power users',
        features: [
          '10 workspaces',
          'Advanced analytics',
          'AI agents (5 concurrent)',
          'Campaign automation',
          'Priority support',
          '1 year data retention',
        ],
        cta: 'Notify Me',
      },
      ultimate: {
        name: 'Ultimate',
        price: 'Coming Soon',
        description: 'For teams and agencies',
        features: [
          'Unlimited workspaces',
          'Team collaboration',
          'AI agents (20 concurrent)',
          'Custom reports',
          'API access',
          'Unlimited data retention',
        ],
        cta: 'Notify Me',
      },
      ultimatePlus: {
        name: 'Ultimate+',
        price: 'Coming Soon',
        description: 'For enterprises',
        features: [
          'Everything in Ultimate',
          'Dedicated support',
          'Custom integrations',
          'SLA guarantees',
          'White-label options',
          'On-premise deployment',
        ],
        cta: 'Contact Sales',
      },
      faq: {
        title: 'Frequently Asked Questions',
        q1: {
          question: 'Can I change plans later?',
          answer: 'Yes, you can upgrade or downgrade at any time. Changes take effect immediately.',
        },
        q2: {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, and bank transfer for annual plans.',
        },
        q3: {
          question: 'Is there a free trial for paid plans?',
          answer: 'The Free plan is available forever. Paid plans will offer a 14-day trial when launched.',
        },
      },
    },
    about: {
      meta: {
        title: 'About – Visibility Engine',
        description: 'Learn about our vision to empower creators and companies with professional visibility tools.',
      },
      hero: {
        title: 'About Visibility Engine',
        subtitle: 'Building the future of professional content management.',
      },
      vision: {
        title: 'Our Vision',
        content: 'Visibility Engine exists to solve a fundamental problem: managing content at scale is broken. Creators and companies waste countless hours switching between platforms, manually posting content, and trying to make sense of fragmented analytics. We believe there is a better way. Our vision is to create a unified platform that treats content management as a serious professional discipline—not an afterthought. We are building tools that respect your time, your content, and your ambition to reach audiences at scale.',
      },
      philosophy: {
        title: 'Platform Philosophy',
        principle1: {
          title: 'Professional First',
          description: 'No toys, no gimmicks. Every feature is built for people who take their work seriously.',
        },
        principle2: {
          title: 'Data Ownership',
          description: 'Your content, your data, your control. We provide the tools; you own the results.',
        },
        principle3: {
          title: 'Performance Matters',
          description: 'Fast, reliable, and efficient. We optimize every detail so you can focus on creating.',
        },
      },
      values: {
        title: 'What We Stand For',
        transparency: {
          title: 'Transparency',
          description: 'Clear pricing, honest communication, no hidden agendas.',
        },
        quality: {
          title: 'Quality Over Speed',
          description: 'We ship when it is ready, not when it is rushed.',
        },
        empowerment: {
          title: 'Empowerment',
          description: 'We build tools that make you more capable, not more dependent.',
        },
      },
    },
    blog: {
      meta: {
        title: 'Blog – Visibility Engine',
        description: 'Insights, updates, and best practices for content creators and marketing teams.',
      },
      hero: {
        title: 'Blog',
        subtitle: 'Insights, updates, and best practices.',
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
      login: {
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
        title: 'Account erstellen',
        subtitle: 'Werde heute Teil von Visibility Engine',
        role: 'Ich bin...',
        roleCreator: 'Creator',
        roleCompany: 'Unternehmen',
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
        title: 'Passwort zurücksetzen',
        subtitle: 'Gib deine E-Mail ein, um einen Reset-Link zu erhalten',
        email: 'E-Mail',
        submit: 'Reset-Link senden',
        backToLogin: 'Zurück zum Login',
        uiOnly: 'Passwort-Reset UI only - kein Backend implementiert',
      },
      resetPassword: {
        title: 'Neues Passwort setzen',
        subtitle: 'Gib dein neues Passwort ein',
        password: 'Neues Passwort',
        confirmPassword: 'Passwort bestätigen',
        submit: 'Passwort zurücksetzen',
        passwordMismatch: 'Passwörter stimmen nicht überein',
        uiOnly: 'Passwort-Reset UI only - kein Backend implementiert',
      },
      verifyEmail: {
        title: 'E-Mail verifizieren',
        verifying: 'E-Mail wird verifiziert...',
        success: 'E-Mail erfolgreich verifiziert!',
        error: 'Verifizierung fehlgeschlagen',
        goToDashboard: 'Zum Dashboard',
        uiOnly: 'E-Mail-Verifizierung UI only - kein Backend implementiert',
      },
    },
    landing: {
      hero: {
        title: 'Baue Dein Visibility Empire',
        subtitle: 'Die professionelle Plattform für Creator und Unternehmen, um Content zu managen, Audiences zu wachsen und Reichweite über alle Kanäle zu maximieren.',
        ctaPrimary: 'Kostenlos starten',
        ctaSecondary: 'So funktioniert es',
      },
      forWho: {
        title: 'Gebaut für Professionals',
        creators: {
          title: 'Für Creator',
          description: 'Manage deine Content-Pipeline, plane plattformübergreifend, analysiere Performance und skaliere deine Personal Brand mit KI-gestützten Tools.',
        },
        companies: {
          title: 'Für Unternehmen',
          description: 'Koordiniere mehrere Creator, manage Brand-Kampagnen, automatisiere Workflows und halte konsistente Visibility über alle Marketing-Kanäle.',
        },
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
      cta: {
        title: 'Bereit, deine Visibility zu skalieren?',
        subtitle: 'Schließe dich Creators und Unternehmen an, die ihre Präsenz professionell aufbauen.',
        button: 'Kostenlos starten',
      },
    },
    features: {
      meta: {
        title: 'Features – Visibility Engine',
        description: 'Entdecke alle Features für professionelles Content-Management, Automation, Analytics und KI-gestützte Optimierung.',
      },
      hero: {
        title: 'Features für Scale',
        subtitle: 'Professionelle Tools für Creator und Unternehmen, die Visibility ernst nehmen.',
      },
      contentMedia: {
        title: 'Content & Media Management',
        video: {
          title: 'Video Library',
          description: 'Speichere, organisiere und manage alle Video-Assets mit Metadaten, Tags und Versionskontrolle.',
        },
        images: {
          title: 'Image Management',
          description: 'Zentralisierte Bild-Library mit automatischer Optimierung und Format-Konvertierung.',
        },
        editor: {
          title: 'Content Editor',
          description: 'Schreibe, formatiere und bereite Content vor mit Templates und kollaborativem Editing.',
        },
      },
      automation: {
        title: 'Automation & Scheduling',
        campaigns: {
          title: 'Campaign Management',
          description: 'Plane und führe Multi-Plattform-Kampagnen mit automatisiertem Deployment aus.',
        },
        schedules: {
          title: 'Smart Scheduling',
          description: 'Plane Posts über Plattformen mit optimalen Timing-Empfehlungen.',
        },
      },
      analytics: {
        title: 'Analytics & Insights',
        performance: {
          title: 'Performance Tracking',
          description: 'Echtzeit-Metriken über alle Plattformen und Content-Typen.',
        },
        reports: {
          title: 'Custom Reports',
          description: 'Generiere detaillierte Reports mit exportierbaren Daten und Visualisierungen.',
        },
      },
      ai: {
        title: 'KI & Automation',
        agents: {
          title: 'KI-Agenten',
          description: 'Deploye spezialisierte KI-Agenten für Content-Optimierung, Trend-Analyse und Empfehlungen.',
        },
        optimization: {
          title: 'Auto-Optimierung',
          description: 'KI-gestützte Vorschläge für Titel, Thumbnails, Beschreibungen und Posting-Zeiten.',
        },
      },
      collaboration: {
        title: 'Team & Collaboration',
        workspaces: {
          title: 'Team Workspaces',
          description: 'Separate Workspaces für verschiedene Teams, Kunden oder Brands.',
        },
        roles: {
          title: 'Rollen-Management',
          description: 'Granulare Berechtigungen und Zugriffskontrolle für Team-Mitglieder.',
        },
      },
      developer: {
        title: 'Developer Tools',
        api: {
          title: 'REST API',
          description: 'Vollständiger API-Zugang für Custom-Integrationen und Automation.',
        },
        webhooks: {
          title: 'Webhooks',
          description: 'Echtzeit-Event-Benachrichtigungen für externe Systeme.',
        },
      },
    },
    pricing: {
      meta: {
        title: 'Preise – Visibility Engine',
        description: 'Wähle den Plan, der zu deinen Bedürfnissen passt. Von kostenlos für Einsteiger bis Enterprise für Teams.',
      },
      hero: {
        title: 'Einfache, transparente Preise',
        subtitle: 'Starte kostenlos, upgrade während du wächst. Keine versteckten Gebühren.',
      },
      free: {
        name: 'Free',
        price: 'Kostenlos Forever',
        description: 'Perfekt für den Einstieg',
        features: [
          '1 Workspace',
          'Basis Content-Management',
          'Bis zu 10 geplante Posts/Monat',
          'Community Support',
          '7 Tage Daten-Retention',
        ],
        cta: 'Kostenlos starten',
      },
      pro: {
        name: 'Pro',
        price: 'Kommt bald',
        description: 'Für ernsthafte Creator',
        features: [
          '3 Workspaces',
          'Vollständige Content Library',
          'Unbegrenzte geplante Posts',
          'Basis Analytics',
          'Email Support',
          '90 Tage Daten-Retention',
        ],
        cta: 'Benachrichtige mich',
      },
      proPlus: {
        name: 'Pro+',
        price: 'Kommt bald',
        description: 'Für Power User',
        features: [
          '10 Workspaces',
          'Erweiterte Analytics',
          'KI-Agenten (5 gleichzeitig)',
          'Campaign Automation',
          'Priority Support',
          '1 Jahr Daten-Retention',
        ],
        cta: 'Benachrichtige mich',
      },
      ultimate: {
        name: 'Ultimate',
        price: 'Kommt bald',
        description: 'Für Teams und Agenturen',
        features: [
          'Unbegrenzte Workspaces',
          'Team Collaboration',
          'KI-Agenten (20 gleichzeitig)',
          'Custom Reports',
          'API-Zugang',
          'Unbegrenzte Daten-Retention',
        ],
        cta: 'Benachrichtige mich',
      },
      ultimatePlus: {
        name: 'Ultimate+',
        price: 'Kommt bald',
        description: 'Für Enterprises',
        features: [
          'Alles aus Ultimate',
          'Dedicated Support',
          'Custom Integrationen',
          'SLA-Garantien',
          'White-Label-Optionen',
          'On-Premise Deployment',
        ],
        cta: 'Vertrieb kontaktieren',
      },
      faq: {
        title: 'Häufig gestellte Fragen',
        q1: {
          question: 'Kann ich später den Plan wechseln?',
          answer: 'Ja, du kannst jederzeit upgraden oder downgraden. Änderungen treten sofort in Kraft.',
        },
        q2: {
          question: 'Welche Zahlungsmethoden akzeptiert ihr?',
          answer: 'Wir akzeptieren alle gängigen Kreditkarten, PayPal und Banküberweisung für Jahrespläne.',
        },
        q3: {
          question: 'Gibt es eine kostenlose Testversion für bezahlte Pläne?',
          answer: 'Der Free Plan ist für immer verfügbar. Bezahlte Pläne werden eine 14-tägige Testversion anbieten, sobald sie gelauncht sind.',
        },
      },
    },
    about: {
      meta: {
        title: 'Über uns – Visibility Engine',
        description: 'Erfahre mehr über unsere Vision, Creators und Unternehmen mit professionellen Visibility-Tools zu empowern.',
      },
      hero: {
        title: 'Über Visibility Engine',
        subtitle: 'Wir bauen die Zukunft des professionellen Content-Managements.',
      },
      vision: {
        title: 'Unsere Vision',
        content: 'Visibility Engine existiert, um ein fundamentales Problem zu lösen: Content-Management at Scale ist kaputt. Creators und Unternehmen verschwenden unzählige Stunden damit, zwischen Plattformen zu wechseln, manuell Content zu posten und fragmentierte Analytics zu verstehen. Wir glauben, dass es einen besseren Weg gibt. Unsere Vision ist es, eine einheitliche Plattform zu schaffen, die Content-Management als ernsthafte professionelle Disziplin behandelt—nicht als nachträglichen Gedanken. Wir bauen Tools, die deine Zeit, deinen Content und deinen Anspruch respektieren, Audiences at Scale zu erreichen.',
      },
      philosophy: {
        title: 'Plattform-Philosophie',
        principle1: {
          title: 'Professional First',
          description: 'Keine Spielzeuge, keine Gimmicks. Jedes Feature ist für Menschen gebaut, die ihre Arbeit ernst nehmen.',
        },
        principle2: {
          title: 'Daten-Ownership',
          description: 'Dein Content, deine Daten, deine Kontrolle. Wir liefern die Tools; du besitzt die Ergebnisse.',
        },
        principle3: {
          title: 'Performance zählt',
          description: 'Schnell, zuverlässig und effizient. Wir optimieren jedes Detail, damit du dich aufs Erstellen konzentrieren kannst.',
        },
      },
      values: {
        title: 'Wofür wir stehen',
        transparency: {
          title: 'Transparenz',
          description: 'Klare Preise, ehrliche Kommunikation, keine versteckten Agenden.',
        },
        quality: {
          title: 'Qualität vor Speed',
          description: 'Wir shippen, wenn es fertig ist, nicht wenn es gehetzt ist.',
        },
        empowerment: {
          title: 'Empowerment',
          description: 'Wir bauen Tools, die dich fähiger machen, nicht abhängiger.',
        },
      },
    },
    blog: {
      meta: {
        title: 'Blog – Visibility Engine',
        description: 'Insights, Updates und Best Practices für Content Creator und Marketing-Teams.',
      },
      hero: {
        title: 'Blog',
        subtitle: 'Insights, Updates und Best Practices.',
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
      },
    },
  },
} as const;

export type PublicLanguage = 'en' | 'de';
export type PublicTranslations = typeof publicTranslations.en;
