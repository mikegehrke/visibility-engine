'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Small, Overline } from '@/components/shared/Typography';
import { useLanguage } from '@/lib/context/LanguageContext';

// Animation wrapper component
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
    >
      {children}
    </div>
  );
}

// Progress indicator component
function ProgressIndicator({ sections, activeIndex }: { sections: { title: string }[]; activeIndex: number }) {
  return (
    <nav className="hidden lg:block sticky top-32">
      <div className="space-y-3">
        <Small className="text-slate font-medium uppercase tracking-wider">On this page</Small>
        {sections.map((section, idx) => (
          <a
            key={idx}
            href={`#section-${idx}`}
            className={`block text-sm transition-all duration-base pl-4 border-l-2 ${
              idx === activeIndex 
                ? 'border-signal text-signal font-medium' 
                : 'border-border text-slate hover:text-ink hover:border-slate'
            }`}
          >
            {section.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

// Guide data with full content
const guideData = {
  en: {
    'quick-start': {
      title: 'Quick Start Guide',
      subtitle: 'Get up and running in 15 minutes. Connect your first platform, create your first content piece, and schedule your first post.',
      readTime: '15 min read',
      category: 'Getting Started',
      lastUpdated: 'January 2026',
      sections: [
        {
          title: 'Welcome to Visibility Engine',
          content: 'Visibility Engine is the professional platform for content creators who want to maximize their reach across multiple platforms. This guide will walk you through the essential steps to get started.',
          tips: ['Make sure you have accounts on platforms you want to connect', 'Have your API keys ready if you use third-party tools'],
        },
        {
          title: 'Connecting Your First Platform',
          content: 'Navigate to Settings → Connections and click "Add Platform". Choose from YouTube, Instagram, TikTok, LinkedIn, Twitter/X, or other supported platforms. Follow the OAuth flow to authorize Visibility Engine to manage your content.',
          code: '// No code needed - just click and authorize!',
        },
        {
          title: 'Creating Your First Content Piece',
          content: 'Click the "New Content" button in your dashboard. You can upload media, write captions, and add hashtags. Our AI assistant will suggest optimizations based on your target platform.',
          tips: ['Use platform-specific formats for best results', 'Let AI optimize your hashtags'],
        },
        {
          title: 'Scheduling Your First Post',
          content: 'Once your content is ready, click "Schedule". Choose your preferred date and time, or let our AI recommend the optimal posting time based on your audience analytics.',
        },
        {
          title: 'Next Steps',
          content: 'Congratulations! You have scheduled your first post. Explore automation rules, analytics dashboards, and content calendars to take your content strategy to the next level.',
        },
      ],
    },
    'advanced-automation': {
      title: 'Advanced Automation Setup',
      subtitle: 'Build sophisticated automation rules that react to performance signals and optimize your content distribution automatically.',
      readTime: '25 min read',
      category: 'Advanced',
      lastUpdated: 'January 2026',
      sections: [
        {
          title: 'Understanding Automation Rules',
          content: 'Automation rules in Visibility Engine follow a trigger-condition-action pattern. When a trigger event occurs and conditions are met, the specified action executes automatically.',
        },
        {
          title: 'Performance-Based Triggers',
          content: 'Set up triggers based on engagement metrics. For example, automatically boost posts that reach 1000 views within the first hour, or pause distribution on underperforming content.',
          code: `trigger: "engagement_threshold"
condition: "views >= 1000 AND time_since_post <= 1h"
action: "boost_distribution"`,
        },
        {
          title: 'Cross-Platform Syndication',
          content: 'Automatically adapt and republish successful content across platforms. A viral TikTok can be reformatted and scheduled for Instagram Reels and YouTube Shorts.',
          tips: ['Each platform has different aspect ratios', 'Captions may need platform-specific adjustments'],
        },
        {
          title: 'Time-Based Automation',
          content: 'Schedule recurring tasks like weekly performance reports, monthly content audits, or daily engagement checks. Combine with webhooks to integrate with external tools.',
        },
        {
          title: 'Monitoring and Debugging',
          content: 'Every automation run is logged. Check the Automation History to see what triggered, what conditions were evaluated, and what actions were taken. Use this for troubleshooting and optimization.',
        },
      ],
    },
    'api-integration': {
      title: 'API Integration Guide',
      subtitle: 'Connect Visibility Engine to your existing tools and workflows using our REST API and webhooks.',
      readTime: '30 min read',
      category: 'Integration',
      lastUpdated: 'January 2026',
      sections: [
        {
          title: 'API Overview',
          content: 'The Visibility Engine API is a RESTful API that allows you to programmatically manage content, schedules, analytics, and automation rules. All endpoints require authentication via API keys.',
          code: `curl -X GET "https://api.visibility-engine.com/v1/content" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
        },
        {
          title: 'Authentication',
          content: 'Generate API keys in Settings → API. Each key can have scoped permissions. Use Bearer token authentication for all requests. Keys can be rotated without downtime.',
          tips: ['Never expose API keys in client-side code', 'Use environment variables for key storage'],
        },
        {
          title: 'Core Endpoints',
          content: 'The API provides endpoints for Content (CRUD operations), Schedules (manage posting times), Analytics (retrieve performance data), and Automation (manage rules and triggers).',
          code: `// Create new content
POST /v1/content
{
  "title": "My Post",
  "platforms": ["youtube", "instagram"],
  "media_url": "https://..."
}`,
        },
        {
          title: 'Webhooks',
          content: 'Configure webhooks to receive real-time notifications when events occur. Supported events include content.published, engagement.threshold, automation.triggered, and more.',
        },
        {
          title: 'Rate Limits and Best Practices',
          content: 'The API allows 1000 requests per minute per API key. Implement exponential backoff for retries. Cache responses where possible to minimize API calls.',
        },
      ],
    },
    'content-strategy': {
      title: 'Content Strategy Framework',
      subtitle: 'Learn the proven framework for creating content that performs consistently across all platforms.',
      readTime: '20 min read',
      category: 'Best Practices',
      lastUpdated: 'January 2026',
      sections: [
        {
          title: 'The Content Pillars System',
          content: 'Define 3-5 content pillars that align with your brand and audience interests. Each pillar represents a topic area you will consistently create content around. This ensures variety while maintaining focus.',
          tips: ['Pillars should overlap with audience interests', 'Review and adjust pillars quarterly'],
        },
        {
          title: 'Content Batching Strategy',
          content: 'Create multiple pieces of content in focused sessions. This is more efficient than daily creation and ensures consistent quality. Use Visibility Engine\'s batch upload feature to streamline this process.',
        },
        {
          title: 'Platform-Specific Adaptation',
          content: 'Each platform has unique characteristics. A successful LinkedIn post differs from a TikTok video. Use our content adaptation tools to automatically adjust format, length, and style for each platform.',
        },
        {
          title: 'The 80/20 Content Mix',
          content: 'Aim for 80% value content (educational, entertaining, inspiring) and 20% promotional content. This ratio builds trust and keeps your audience engaged long-term.',
        },
        {
          title: 'Measuring Success',
          content: 'Define KPIs for each content pillar. Track not just vanity metrics but meaningful engagement: saves, shares, comments, and conversions. Use our analytics dashboard to identify patterns.',
        },
      ],
    },
    'analytics-deep-dive': {
      title: 'Analytics Deep Dive',
      subtitle: 'Understand every metric, learn to read performance patterns, and make data-driven decisions for your content.',
      readTime: '35 min read',
      category: 'Advanced',
      lastUpdated: 'January 2026',
      sections: [
        {
          title: 'Understanding the Metrics Hierarchy',
          content: 'Not all metrics are equal. Impressions show reach, engagement shows interest, and conversions show value. Focus on metrics that align with your goals, not just the biggest numbers.',
        },
        {
          title: 'Engagement Rate Analysis',
          content: 'Engagement rate = (likes + comments + shares + saves) / impressions. Industry benchmarks vary by platform: Instagram 1-5%, LinkedIn 2-4%, TikTok 4-18%. Track your baseline and aim for improvement.',
          tips: ['Compare against your own history, not others', 'Account for audience size in benchmarks'],
        },
        {
          title: 'Audience Insights',
          content: 'Demographics, active times, and interests inform your content strategy. Our unified dashboard aggregates audience data across platforms to give you a complete picture.',
        },
        {
          title: 'Performance Patterns',
          content: 'Identify what works by analyzing your top-performing content. Look for patterns in format, topic, posting time, and style. Use these insights to replicate success.',
        },
        {
          title: 'Building Custom Reports',
          content: 'Create dashboards tailored to your needs. Track specific content pillars, compare platform performance, or monitor automation effectiveness. Export reports for stakeholder presentations.',
        },
      ],
    },
    'scheduling-mastery': {
      title: 'Scheduling Mastery',
      subtitle: 'Optimize your posting schedule based on audience behavior, time zones, and platform algorithms.',
      readTime: '18 min read',
      category: 'Best Practices',
      lastUpdated: 'January 2026',
      sections: [
        {
          title: 'The Science of Timing',
          content: 'Posting time affects initial engagement, which signals quality to platform algorithms. The first hour after posting is critical. Our AI analyzes your audience activity to recommend optimal times.',
        },
        {
          title: 'Time Zone Optimization',
          content: 'If your audience spans multiple time zones, use our scheduling features to target peak activity windows in each region. You can even create region-specific content variants.',
          tips: ['Identify your top 3 audience time zones', 'Schedule separately for each major zone'],
        },
        {
          title: 'Platform Algorithm Considerations',
          content: 'Each platform has different algorithm behaviors. Instagram favors consistency, TikTok rewards any-time posting with good content, LinkedIn peaks on weekday mornings. Adjust your strategy accordingly.',
        },
        {
          title: 'Building a Content Calendar',
          content: 'Use our visual calendar to plan content weeks or months ahead. Maintain a healthy buffer of scheduled content to avoid last-minute stress. Aim for at least 2 weeks of content in the queue.',
        },
        {
          title: 'Smart Rescheduling',
          content: 'If real-time events or trending topics arise, our smart rescheduling feature lets you shift your entire calendar without manual adjustment. Stay agile while maintaining consistency.',
        },
      ],
    },
  },
  de: {
    'quick-start': {
      title: 'Schnellstart-Anleitung',
      subtitle: 'In 15 Minuten startklar. Verbinde deine erste Plattform, erstelle deinen ersten Content und plane deinen ersten Post.',
      readTime: '15 Min. Lesezeit',
      category: 'Erste Schritte',
      lastUpdated: 'Januar 2026',
      sections: [
        {
          title: 'Willkommen bei Visibility Engine',
          content: 'Visibility Engine ist die professionelle Plattform für Content Creator, die ihre Reichweite über mehrere Plattformen maximieren wollen. Diese Anleitung führt dich durch die wichtigsten Schritte zum Start.',
          tips: ['Stelle sicher, dass du Accounts auf den Plattformen hast, die du verbinden willst', 'Halte deine API-Keys bereit, falls du Drittanbieter-Tools nutzt'],
        },
        {
          title: 'Deine erste Plattform verbinden',
          content: 'Navigiere zu Einstellungen → Verbindungen und klicke "Plattform hinzufügen". Wähle aus YouTube, Instagram, TikTok, LinkedIn, Twitter/X oder anderen unterstützten Plattformen. Folge dem OAuth-Flow, um Visibility Engine zu autorisieren.',
          code: '// Kein Code nötig - einfach klicken und autorisieren!',
        },
        {
          title: 'Deinen ersten Content erstellen',
          content: 'Klicke den "Neuer Content" Button in deinem Dashboard. Du kannst Medien hochladen, Captions schreiben und Hashtags hinzufügen. Unser KI-Assistent schlägt Optimierungen basierend auf deiner Zielplattform vor.',
          tips: ['Nutze plattformspezifische Formate für beste Ergebnisse', 'Lass die KI deine Hashtags optimieren'],
        },
        {
          title: 'Deinen ersten Post planen',
          content: 'Sobald dein Content fertig ist, klicke "Planen". Wähle dein bevorzugtes Datum und Uhrzeit, oder lass unsere KI die optimale Posting-Zeit basierend auf deinen Audience-Analytics empfehlen.',
        },
        {
          title: 'Nächste Schritte',
          content: 'Herzlichen Glückwunsch! Du hast deinen ersten Post geplant. Erkunde Automationsregeln, Analytics-Dashboards und Content-Kalender, um deine Content-Strategie auf das nächste Level zu bringen.',
        },
      ],
    },
    'advanced-automation': {
      title: 'Erweiterte Automation einrichten',
      subtitle: 'Erstelle ausgeklügelte Automationsregeln, die auf Performance-Signale reagieren und deine Content-Distribution automatisch optimieren.',
      readTime: '25 Min. Lesezeit',
      category: 'Fortgeschritten',
      lastUpdated: 'Januar 2026',
      sections: [
        {
          title: 'Automationsregeln verstehen',
          content: 'Automationsregeln in Visibility Engine folgen einem Trigger-Bedingung-Aktion-Muster. Wenn ein Trigger-Event eintritt und Bedingungen erfüllt sind, wird die spezifizierte Aktion automatisch ausgeführt.',
        },
        {
          title: 'Performance-basierte Trigger',
          content: 'Richte Trigger basierend auf Engagement-Metriken ein. Zum Beispiel: Booste automatisch Posts, die 1000 Views in der ersten Stunde erreichen, oder pausiere Distribution bei unterperformendem Content.',
          code: `trigger: "engagement_threshold"
condition: "views >= 1000 AND time_since_post <= 1h"
action: "boost_distribution"`,
        },
        {
          title: 'Cross-Platform Syndication',
          content: 'Adaptiere und republiziere erfolgreichen Content automatisch über Plattformen hinweg. Ein virales TikTok kann reformatiert und für Instagram Reels und YouTube Shorts geplant werden.',
          tips: ['Jede Plattform hat unterschiedliche Seitenverhältnisse', 'Captions benötigen möglicherweise plattformspezifische Anpassungen'],
        },
        {
          title: 'Zeitbasierte Automation',
          content: 'Plane wiederkehrende Aufgaben wie wöchentliche Performance-Reports, monatliche Content-Audits oder tägliche Engagement-Checks. Kombiniere mit Webhooks zur Integration externer Tools.',
        },
        {
          title: 'Monitoring und Debugging',
          content: 'Jeder Automation-Durchlauf wird protokolliert. Prüfe die Automation-History um zu sehen, was getriggert wurde, welche Bedingungen evaluiert wurden und welche Aktionen ausgeführt wurden.',
        },
      ],
    },
    'api-integration': {
      title: 'API Integrations-Guide',
      subtitle: 'Verbinde Visibility Engine mit deinen bestehenden Tools und Workflows über unsere REST API und Webhooks.',
      readTime: '30 Min. Lesezeit',
      category: 'Integration',
      lastUpdated: 'Januar 2026',
      sections: [
        {
          title: 'API Übersicht',
          content: 'Die Visibility Engine API ist eine RESTful API, mit der du Content, Zeitpläne, Analytics und Automationsregeln programmatisch verwalten kannst. Alle Endpoints erfordern Authentifizierung via API-Keys.',
          code: `curl -X GET "https://api.visibility-engine.com/v1/content" \\
  -H "Authorization: Bearer DEIN_API_KEY"`,
        },
        {
          title: 'Authentifizierung',
          content: 'Generiere API-Keys unter Einstellungen → API. Jeder Key kann eingeschränkte Berechtigungen haben. Nutze Bearer Token Authentifizierung für alle Requests. Keys können ohne Downtime rotiert werden.',
          tips: ['Niemals API-Keys in Client-Side Code exponieren', 'Nutze Umgebungsvariablen zur Key-Speicherung'],
        },
        {
          title: 'Core Endpoints',
          content: 'Die API bietet Endpoints für Content (CRUD Operationen), Zeitpläne (Posting-Zeiten verwalten), Analytics (Performance-Daten abrufen) und Automation (Regeln und Trigger verwalten).',
          code: `// Neuen Content erstellen
POST /v1/content
{
  "title": "Mein Post",
  "platforms": ["youtube", "instagram"],
  "media_url": "https://..."
}`,
        },
        {
          title: 'Webhooks',
          content: 'Konfiguriere Webhooks um Echtzeit-Benachrichtigungen zu erhalten, wenn Events eintreten. Unterstützte Events sind content.published, engagement.threshold, automation.triggered und mehr.',
        },
        {
          title: 'Rate Limits und Best Practices',
          content: 'Die API erlaubt 1000 Requests pro Minute pro API-Key. Implementiere exponential backoff für Retries. Cache Responses wo möglich um API-Calls zu minimieren.',
        },
      ],
    },
    'content-strategy': {
      title: 'Content-Strategie Framework',
      subtitle: 'Lerne das bewährte Framework für Content, der konsistent auf allen Plattformen performt.',
      readTime: '20 Min. Lesezeit',
      category: 'Best Practices',
      lastUpdated: 'Januar 2026',
      sections: [
        {
          title: 'Das Content-Säulen-System',
          content: 'Definiere 3-5 Content-Säulen, die zu deiner Marke und Audience-Interessen passen. Jede Säule repräsentiert einen Themenbereich, zu dem du konsistent Content erstellst. Das sichert Vielfalt bei gleichzeitigem Fokus.',
          tips: ['Säulen sollten sich mit Audience-Interessen überschneiden', 'Überprüfe und passe Säulen vierteljährlich an'],
        },
        {
          title: 'Content Batching Strategie',
          content: 'Erstelle mehrere Content-Pieces in fokussierten Sessions. Das ist effizienter als tägliche Erstellung und sichert konsistente Qualität. Nutze Visibility Engines Batch-Upload Feature um diesen Prozess zu streamlinen.',
        },
        {
          title: 'Plattformspezifische Anpassung',
          content: 'Jede Plattform hat einzigartige Charakteristiken. Ein erfolgreicher LinkedIn Post unterscheidet sich von einem TikTok Video. Nutze unsere Content-Adaptions-Tools um Format, Länge und Stil automatisch anzupassen.',
        },
        {
          title: 'Der 80/20 Content-Mix',
          content: 'Strebe 80% Value Content (educational, unterhaltend, inspirierend) und 20% Promotional Content an. Dieses Verhältnis baut Vertrauen auf und hält deine Audience langfristig engaged.',
        },
        {
          title: 'Erfolg messen',
          content: 'Definiere KPIs für jede Content-Säule. Tracke nicht nur Vanity Metrics sondern bedeutsames Engagement: Saves, Shares, Kommentare und Conversions. Nutze unser Analytics Dashboard um Muster zu identifizieren.',
        },
      ],
    },
    'analytics-deep-dive': {
      title: 'Analytics Deep Dive',
      subtitle: 'Verstehe jede Metrik, lerne Performance-Muster zu lesen und triff datengetriebene Entscheidungen für deinen Content.',
      readTime: '35 Min. Lesezeit',
      category: 'Fortgeschritten',
      lastUpdated: 'Januar 2026',
      sections: [
        {
          title: 'Die Metriken-Hierarchie verstehen',
          content: 'Nicht alle Metriken sind gleich. Impressions zeigen Reichweite, Engagement zeigt Interesse, und Conversions zeigen Wert. Fokussiere auf Metriken, die mit deinen Zielen aligned sind, nicht nur die größten Zahlen.',
        },
        {
          title: 'Engagement Rate Analyse',
          content: 'Engagement Rate = (Likes + Kommentare + Shares + Saves) / Impressions. Branchen-Benchmarks variieren nach Plattform: Instagram 1-5%, LinkedIn 2-4%, TikTok 4-18%. Tracke deine Baseline und strebe Verbesserung an.',
          tips: ['Vergleiche gegen deine eigene History, nicht andere', 'Berücksichtige Audience-Größe bei Benchmarks'],
        },
        {
          title: 'Audience Insights',
          content: 'Demographics, aktive Zeiten und Interessen informieren deine Content-Strategie. Unser unified Dashboard aggregiert Audience-Daten über Plattformen um dir ein vollständiges Bild zu geben.',
        },
        {
          title: 'Performance-Muster',
          content: 'Identifiziere was funktioniert durch Analyse deines Top-performenden Contents. Suche nach Mustern in Format, Thema, Posting-Zeit und Stil. Nutze diese Insights um Erfolg zu replizieren.',
        },
        {
          title: 'Custom Reports erstellen',
          content: 'Erstelle Dashboards zugeschnitten auf deine Bedürfnisse. Tracke spezifische Content-Säulen, vergleiche Plattform-Performance oder monitore Automation-Effektivität. Exportiere Reports für Stakeholder-Präsentationen.',
        },
      ],
    },
    'scheduling-mastery': {
      title: 'Scheduling Mastery',
      subtitle: 'Optimiere deinen Posting-Zeitplan basierend auf Audience-Verhalten, Zeitzonen und Plattform-Algorithmen.',
      readTime: '18 Min. Lesezeit',
      category: 'Best Practices',
      lastUpdated: 'Januar 2026',
      sections: [
        {
          title: 'Die Wissenschaft des Timings',
          content: 'Posting-Zeit beeinflusst initiales Engagement, das Qualitätssignale an Plattform-Algorithmen sendet. Die erste Stunde nach dem Posten ist kritisch. Unsere KI analysiert deine Audience-Aktivität um optimale Zeiten zu empfehlen.',
        },
        {
          title: 'Zeitzonen-Optimierung',
          content: 'Wenn deine Audience mehrere Zeitzonen umspannt, nutze unsere Scheduling-Features um Peak-Activity-Windows in jeder Region zu targeten. Du kannst sogar regionsspezifische Content-Varianten erstellen.',
          tips: ['Identifiziere deine Top 3 Audience-Zeitzonen', 'Plane separat für jede Major Zone'],
        },
        {
          title: 'Plattform-Algorithmus-Überlegungen',
          content: 'Jede Plattform hat unterschiedliches Algorithmus-Verhalten. Instagram bevorzugt Konsistenz, TikTok belohnt Posting zu jeder Zeit bei gutem Content, LinkedIn peakt an Wochentag-Morgen. Passe deine Strategie entsprechend an.',
        },
        {
          title: 'Content-Kalender aufbauen',
          content: 'Nutze unseren visuellen Kalender um Content Wochen oder Monate im Voraus zu planen. Halte einen gesunden Buffer an geplanten Content um Last-Minute-Stress zu vermeiden. Strebe mindestens 2 Wochen Content in der Queue an.',
        },
        {
          title: 'Smart Rescheduling',
          content: 'Wenn Real-Time Events oder Trending Topics aufkommen, erlaubt unser Smart Rescheduling Feature deinen gesamten Kalender ohne manuelle Anpassung zu verschieben. Bleibe agil bei gleichzeitiger Konsistenz.',
        },
      ],
    },
  },
};

const slugMap: Record<string, string> = {
  'quick-start': 'quickStart',
  'advanced-automation': 'advancedAutomation',
  'api-integration': 'apiIntegration',
  'content-strategy': 'contentStrategy',
  'analytics-deep-dive': 'analyticsDeepDive',
  'scheduling-mastery': 'schedulingMastery',
};

export default function GuidePage({ params }: { params: { slug: string } }) {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState(0);

  const guide = guideData[language]?.[params.slug as keyof typeof guideData.en];

  // Scroll tracking for progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(idx);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <H1 className="mb-4">{language === 'de' ? 'Guide nicht gefunden' : 'Guide Not Found'}</H1>
          <Link href="/resources/guides">
            <span className="text-signal hover:underline">
              ← {language === 'de' ? 'Zurück zu Guides' : 'Back to Guides'}
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animation */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-signal-muted/40 via-signal-muted/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-signal/5 via-transparent to-transparent" />
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-signal/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-signal/10 rounded-full blur-2xl animate-pulse delay-700" />

        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16">
          <FadeIn>
            <Link href="/resources/guides" className="inline-flex items-center gap-2 text-slate hover:text-signal transition-colors mb-8 group">
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              {language === 'de' ? 'Alle Guides' : 'All Guides'}
            </Link>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-signal text-white rounded-full">
                {guide.category}
              </span>
              <span className="text-sm text-slate">{guide.readTime}</span>
              <span className="text-sm text-slate">•</span>
              <span className="text-sm text-slate">{language === 'de' ? 'Aktualisiert' : 'Updated'} {guide.lastUpdated}</span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <H1 className="mb-6 max-w-3xl">{guide.title}</H1>
          </FadeIn>

          <FadeIn delay={300}>
            <Lead className="text-slate max-w-2xl">{guide.subtitle}</Lead>
          </FadeIn>
        </div>
      </section>

      {/* Content with Sidebar */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_250px] gap-12">
          {/* Main Content */}
          <div className="space-y-16">
            {guide.sections.map((section, idx) => (
              <FadeIn key={idx} delay={100 + idx * 50}>
                <article 
                  data-section 
                  id={`section-${idx}`}
                  className="scroll-mt-32 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-signal-muted text-signal font-semibold text-sm group-hover:bg-signal group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <H2 className="text-2xl">{section.title}</H2>
                  </div>

                  <div className="pl-14 space-y-6">
                    <Body className="text-slate text-lg leading-relaxed">
                      {section.content}
                    </Body>

                    {section.tips && (
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                          </svg>
                          <div>
                            <Small className="font-semibold text-amber-800 dark:text-amber-300 mb-2 block">
                              {language === 'de' ? 'Tipps' : 'Tips'}
                            </Small>
                            <ul className="space-y-1">
                              {section.tips.map((tip, i) => (
                                <li key={i} className="text-sm text-amber-700 dark:text-amber-400 flex items-start gap-2">
                                  <span className="text-amber-500">•</span>
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {'code' in section && section.code && (
                      <div className="bg-slate-900 rounded-xl overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <pre className="p-4 text-sm text-slate-300 overflow-x-auto">
                          <code>{section.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Sidebar Progress */}
          <div className="hidden lg:block">
            <ProgressIndicator sections={guide.sections} activeIndex={activeSection} />
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="border-t border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <FadeIn>
            <div className="text-center">
              <H2 className="mb-4">{language === 'de' ? 'Bereit durchzustarten?' : 'Ready to get started?'}</H2>
              <Body className="text-slate mb-8 max-w-xl mx-auto">
                {language === 'de' 
                  ? 'Melde dich kostenlos an und beginne mit der Umsetzung dieser Strategien noch heute.'
                  : 'Sign up for free and start implementing these strategies today.'
                }
              </Body>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <button className="px-6 py-3 bg-signal hover:bg-signal-hover text-white font-medium rounded-lg transition-all duration-base hover:shadow-lg hover:-translate-y-0.5">
                    {language === 'de' ? 'Kostenlos starten' : 'Start Free'}
                  </button>
                </Link>
                <Link href="/resources/guides">
                  <button className="px-6 py-3 bg-canvas border border-border hover:border-signal text-ink font-medium rounded-lg transition-all duration-base">
                    {language === 'de' ? 'Mehr Guides' : 'More Guides'}
                  </button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
