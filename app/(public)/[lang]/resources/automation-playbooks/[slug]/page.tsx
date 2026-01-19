'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Button from '@/components/shared/Button';
import { publicTranslations } from '@/lib/i18n/public-translations';

// Fade-in animation component
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
    >
      {children}
    </div>
  );
}

// Workflow step component with animation
function WorkflowStep({ 
  step, 
  title, 
  description, 
  delay 
}: { 
  step: number; 
  title: string; 
  description: string; 
  delay: number;
}) {
  return (
    <FadeIn delay={delay} className="relative">
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-signal text-white flex items-center justify-center font-bold text-lg">
            {step}
          </div>
          <div className="w-0.5 h-full bg-gradient-to-b from-signal to-signal/20 mt-2" />
        </div>
        <div className="pb-8">
          <H3 className="text-lg mb-2">{title}</H3>
          <Body className="text-slate">{description}</Body>
        </div>
      </div>
    </FadeIn>
  );
}

// Playbook data structure
interface PlaybookContent {
  title: string;
  subtitle: string;
  description: string;
  stepsCount: string;
  useCase: string;
  icon: string;
  steps: { title: string; description: string }[];
  benefits: string[];
  requirements: string[];
  timeToSetup: string;
}

// Get playbook content by slug
function getPlaybookContent(slug: string, language: string): PlaybookContent | null {
  const playbooks: Record<string, Record<string, PlaybookContent>> = {
    'content-calendar': {
      en: {
        title: 'Intelligent Content Calendar',
        subtitle: 'Automate your content planning and distribution',
        description: 'Plan and distribute content automatically across all platforms based on optimal posting times. This playbook analyzes your audience activity patterns and schedules content for maximum visibility.',
        stepsCount: '5 Automation Steps',
        useCase: 'Ideal for: Continuous Publishing',
        icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5',
        steps: [
          { title: 'Connect Your Platforms', description: 'Link all your social media accounts and content platforms to Visibility Engine. We support Instagram, LinkedIn, Twitter/X, TikTok, YouTube, and more.' },
          { title: 'Import or Create Content', description: 'Upload your content library or create new posts directly in the platform. Our AI assistant can help generate captions and hashtags.' },
          { title: 'Set Audience Analysis', description: 'Enable audience activity tracking to learn when your followers are most active. The system needs 7 days to build accurate patterns.' },
          { title: 'Configure Auto-Scheduling', description: 'Define your posting frequency per platform and let the AI schedule content at optimal times automatically.' },
          { title: 'Monitor & Optimize', description: 'Review automated reports and adjust your strategy based on performance insights. The system continuously learns and improves.' },
        ],
        benefits: ['Save 10+ hours per week', 'Never miss optimal posting times', 'Consistent publishing schedule', 'Cross-platform coordination'],
        requirements: ['At least 2 connected platforms', 'Content library with 10+ posts', 'Professional or Enterprise plan'],
        timeToSetup: '15 minutes',
      },
      de: {
        title: 'Intelligenter Content-Kalender',
        subtitle: 'Automatisiere deine Content-Planung und -Verteilung',
        description: 'Plane und verteile Content automatisch auf allen Plattformen basierend auf optimalen Posting-Zeiten. Dieses Playbook analysiert die Aktivitätsmuster deiner Zielgruppe und plant Content für maximale Sichtbarkeit.',
        stepsCount: '5 Automatisierungsschritte',
        useCase: 'Ideal für: Kontinuierliches Publishing',
        icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5',
        steps: [
          { title: 'Plattformen verbinden', description: 'Verknüpfe alle deine Social-Media-Accounts und Content-Plattformen mit Visibility Engine. Wir unterstützen Instagram, LinkedIn, Twitter/X, TikTok, YouTube und mehr.' },
          { title: 'Content importieren oder erstellen', description: 'Lade deine Content-Bibliothek hoch oder erstelle neue Posts direkt in der Plattform. Unser KI-Assistent kann bei Captions und Hashtags helfen.' },
          { title: 'Zielgruppen-Analyse aktivieren', description: 'Aktiviere das Tracking der Zielgruppen-Aktivität, um zu lernen, wann deine Follower am aktivsten sind. Das System braucht 7 Tage für genaue Muster.' },
          { title: 'Auto-Scheduling konfigurieren', description: 'Definiere deine Posting-Frequenz pro Plattform und lass die KI Content automatisch zu optimalen Zeiten planen.' },
          { title: 'Überwachen & optimieren', description: 'Prüfe automatisierte Berichte und passe deine Strategie basierend auf Performance-Insights an. Das System lernt und verbessert sich kontinuierlich.' },
        ],
        benefits: ['Spare 10+ Stunden pro Woche', 'Verpasse nie optimale Posting-Zeiten', 'Konsistenter Publishing-Zeitplan', 'Plattformübergreifende Koordination'],
        requirements: ['Mindestens 2 verbundene Plattformen', 'Content-Bibliothek mit 10+ Posts', 'Professional oder Enterprise Plan'],
        timeToSetup: '15 Minuten',
      },
    },
    'performance-alerts': {
      en: {
        title: 'Performance Notifications',
        subtitle: 'Real-time alerts for content performance',
        description: 'Receive notifications when content performs exceptionally well or needs attention. Stay informed about viral potential and engagement spikes in real-time.',
        stepsCount: '3 Automation Steps',
        useCase: 'Ideal for: Real-time Monitoring',
        icon: 'M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z',
        steps: [
          { title: 'Set Performance Thresholds', description: 'Define what constitutes exceptional performance for your content. Set benchmarks for engagement rate, reach, and viral potential.' },
          { title: 'Configure Notification Channels', description: 'Choose how you want to be notified: push notifications, email, Slack, or SMS. Set quiet hours and priority levels.' },
          { title: 'Enable Smart Alerts', description: 'Activate AI-powered anomaly detection that learns your typical performance patterns and alerts you to significant deviations.' },
        ],
        benefits: ['React to viral content instantly', 'Identify underperforming posts', 'Optimize engagement in real-time', 'Never miss important metrics'],
        requirements: ['At least 1 connected platform', 'Historical data (30+ posts)', 'Any paid plan'],
        timeToSetup: '5 minutes',
      },
      de: {
        title: 'Performance-Benachrichtigungen',
        subtitle: 'Echtzeit-Alerts für Content-Performance',
        description: 'Erhalte Benachrichtigungen, wenn Content außergewöhnlich gut performt oder Aufmerksamkeit braucht. Bleibe in Echtzeit über virales Potenzial und Engagement-Spitzen informiert.',
        stepsCount: '3 Automatisierungsschritte',
        useCase: 'Ideal für: Echtzeit-Monitoring',
        icon: 'M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z',
        steps: [
          { title: 'Performance-Schwellenwerte festlegen', description: 'Definiere, was außergewöhnliche Performance für deinen Content bedeutet. Setze Benchmarks für Engagement-Rate, Reichweite und virales Potenzial.' },
          { title: 'Benachrichtigungskanäle konfigurieren', description: 'Wähle, wie du benachrichtigt werden möchtest: Push-Benachrichtigungen, E-Mail, Slack oder SMS. Lege Ruhezeiten und Prioritätsstufen fest.' },
          { title: 'Smart Alerts aktivieren', description: 'Aktiviere KI-gestützte Anomalie-Erkennung, die deine typischen Performance-Muster lernt und dich bei signifikanten Abweichungen benachrichtigt.' },
        ],
        benefits: ['Reagiere sofort auf viralen Content', 'Identifiziere schwache Posts', 'Optimiere Engagement in Echtzeit', 'Verpasse keine wichtigen Metriken'],
        requirements: ['Mindestens 1 verbundene Plattform', 'Historische Daten (30+ Posts)', 'Beliebiger Bezahlplan'],
        timeToSetup: '5 Minuten',
      },
    },
    'engagement-booster': {
      en: {
        title: 'Engagement Booster',
        subtitle: 'Maximize reach and engagement automatically',
        description: 'Automatically resurface top-performing content and promote it to maximize reach and engagement. This playbook identifies your best content and gives it a second life.',
        stepsCount: '4 Automation Steps',
        useCase: 'Ideal for: Maximizing ROI',
        icon: 'M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0',
        steps: [
          { title: 'Define Top Performer Criteria', description: 'Set the metrics that define your best content: engagement rate thresholds, minimum reach, or sentiment scores.' },
          { title: 'Configure Boost Rules', description: 'Decide how top content should be promoted: cross-posting, story highlights, paid promotion triggers, or email newsletter inclusion.' },
          { title: 'Set Timing Rules', description: 'Define minimum time gaps between original post and boost, optimal boost windows, and maximum boost frequency per content piece.' },
          { title: 'Enable Automated Boosting', description: 'Activate the system and watch your best content get automatically amplified across your channels.' },
        ],
        benefits: ['Maximize content ROI', 'Automatic best content identification', 'Smart republishing strategy', 'Increased overall engagement'],
        requirements: ['30+ published posts', 'Multiple platform connections', 'Professional or Enterprise plan'],
        timeToSetup: '10 minutes',
      },
      de: {
        title: 'Engagement-Booster',
        subtitle: 'Maximiere Reichweite und Engagement automatisch',
        description: 'Bringe automatisch Top-Content wieder hervor und bewirb ihn, um Reichweite und Engagement zu maximieren. Dieses Playbook identifiziert deinen besten Content und gibt ihm ein zweites Leben.',
        stepsCount: '4 Automatisierungsschritte',
        useCase: 'Ideal für: ROI maximieren',
        icon: 'M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0',
        steps: [
          { title: 'Top-Performer-Kriterien definieren', description: 'Lege die Metriken fest, die deinen besten Content definieren: Engagement-Rate-Schwellenwerte, Mindestreichweite oder Sentiment-Scores.' },
          { title: 'Boost-Regeln konfigurieren', description: 'Entscheide, wie Top-Content beworben werden soll: Cross-Posting, Story-Highlights, bezahlte Promotion-Trigger oder Newsletter-Einbindung.' },
          { title: 'Timing-Regeln festlegen', description: 'Definiere Mindestabstände zwischen Original-Post und Boost, optimale Boost-Fenster und maximale Boost-Frequenz pro Content.' },
          { title: 'Automatisches Boosting aktivieren', description: 'Aktiviere das System und beobachte, wie dein bester Content automatisch über alle Kanäle verstärkt wird.' },
        ],
        benefits: ['Maximiere Content-ROI', 'Automatische Best-Content-Identifikation', 'Smarte Republishing-Strategie', 'Erhöhtes Gesamt-Engagement'],
        requirements: ['30+ veröffentlichte Posts', 'Mehrere Plattform-Verbindungen', 'Professional oder Enterprise Plan'],
        timeToSetup: '10 Minuten',
      },
    },
    'cross-platform': {
      en: {
        title: 'Cross-Platform Publishing',
        subtitle: 'Publish everywhere with platform-specific optimization',
        description: 'Publish content simultaneously on multiple platforms with platform-specific optimizations. Each platform gets content tailored to its format and audience expectations.',
        stepsCount: '6 Automation Steps',
        useCase: 'Ideal for: Multi-Platform Reach',
        icon: 'M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z',
        steps: [
          { title: 'Connect All Platforms', description: 'Link every platform where you want to publish. Each connection unlocks platform-specific features and optimizations.' },
          { title: 'Create Master Content', description: 'Create your content once in a universal format. The system will adapt it for each platform automatically.' },
          { title: 'Configure Platform Rules', description: 'Set preferences for each platform: aspect ratios, caption lengths, hashtag strategies, and posting formats.' },
          { title: 'Set Up Content Variations', description: 'Define how content should be modified per platform: shorter captions for Twitter, vertical crops for Stories, etc.' },
          { title: 'Enable Synchronized Publishing', description: 'Activate coordinated publishing that respects each platform\'s optimal timing while maintaining your brand consistency.' },
          { title: 'Monitor Cross-Platform Analytics', description: 'Track performance across all platforms in a unified dashboard and identify which adaptations work best.' },
        ],
        benefits: ['One-click multi-platform publishing', 'Platform-optimized content', 'Consistent brand presence', 'Time savings of 80%+'],
        requirements: ['3+ connected platforms', 'Content creation tools access', 'Professional or Enterprise plan'],
        timeToSetup: '20 minutes',
      },
      de: {
        title: 'Cross-Platform Publishing',
        subtitle: 'Veröffentliche überall mit plattformspezifischer Optimierung',
        description: 'Veröffentliche Content gleichzeitig auf mehreren Plattformen mit plattformspezifischen Optimierungen. Jede Plattform bekommt Content, der auf ihr Format und ihre Zielgruppen-Erwartungen zugeschnitten ist.',
        stepsCount: '6 Automatisierungsschritte',
        useCase: 'Ideal für: Multi-Plattform-Reichweite',
        icon: 'M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z',
        steps: [
          { title: 'Alle Plattformen verbinden', description: 'Verknüpfe jede Plattform, auf der du veröffentlichen möchtest. Jede Verbindung schaltet plattformspezifische Features und Optimierungen frei.' },
          { title: 'Master-Content erstellen', description: 'Erstelle deinen Content einmal in einem universellen Format. Das System passt ihn automatisch für jede Plattform an.' },
          { title: 'Plattform-Regeln konfigurieren', description: 'Setze Präferenzen für jede Plattform: Seitenverhältnisse, Caption-Längen, Hashtag-Strategien und Posting-Formate.' },
          { title: 'Content-Variationen einrichten', description: 'Definiere, wie Content pro Plattform modifiziert werden soll: kürzere Captions für Twitter, vertikale Zuschnitte für Stories, etc.' },
          { title: 'Synchronisiertes Publishing aktivieren', description: 'Aktiviere koordiniertes Publishing, das die optimalen Zeiten jeder Plattform respektiert und gleichzeitig Markenkonsistenz wahrt.' },
          { title: 'Cross-Platform Analytics überwachen', description: 'Verfolge Performance über alle Plattformen in einem einheitlichen Dashboard und identifiziere, welche Anpassungen am besten funktionieren.' },
        ],
        benefits: ['Ein-Klick Multi-Plattform-Publishing', 'Plattform-optimierter Content', 'Konsistente Markenpräsenz', 'Zeitersparnis von 80%+'],
        requirements: ['3+ verbundene Plattformen', 'Zugang zu Content-Creation-Tools', 'Professional oder Enterprise Plan'],
        timeToSetup: '20 Minuten',
      },
    },
    'ai-optimization': {
      en: {
        title: 'AI Content Optimization',
        subtitle: 'Let AI enhance your content automatically',
        description: 'Use AI to automatically suggest improvements and optimize content for each platform. From captions to hashtags, let artificial intelligence make your content perform better.',
        stepsCount: '4 Automation Steps',
        useCase: 'Ideal for: Content Quality',
        icon: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z',
        steps: [
          { title: 'Set Optimization Goals', description: 'Define what you want to optimize for: engagement, reach, conversions, or brand consistency. The AI will tailor its suggestions accordingly.' },
          { title: 'Train on Your Brand Voice', description: 'Feed the AI examples of your best-performing content and brand guidelines. It learns your unique style and tone.' },
          { title: 'Enable Auto-Suggestions', description: 'Activate real-time suggestions as you create content. Get instant feedback on captions, hashtags, and posting times.' },
          { title: 'Review & Apply', description: 'Review AI suggestions before they go live, or enable auto-apply for trusted optimization types.' },
        ],
        benefits: ['Improved content quality', 'Platform-specific optimization', 'Consistent brand voice', 'Data-driven suggestions'],
        requirements: ['100+ historical posts', 'Brand guidelines document', 'Professional or Enterprise plan'],
        timeToSetup: '30 minutes',
      },
      de: {
        title: 'KI-Content-Optimierung',
        subtitle: 'Lass KI deinen Content automatisch verbessern',
        description: 'Nutze KI, um automatisch Verbesserungen vorzuschlagen und Content für jede Plattform zu optimieren. Von Captions bis Hashtags - lass künstliche Intelligenz deinen Content besser performen.',
        stepsCount: '4 Automatisierungsschritte',
        useCase: 'Ideal für: Content-Qualität',
        icon: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z',
        steps: [
          { title: 'Optimierungsziele festlegen', description: 'Definiere, wofür du optimieren möchtest: Engagement, Reichweite, Conversions oder Markenkonsistenz. Die KI passt ihre Vorschläge entsprechend an.' },
          { title: 'Auf deine Markensprache trainieren', description: 'Füttere die KI mit Beispielen deines erfolgreichsten Contents und Markenrichtlinien. Sie lernt deinen einzigartigen Stil und Ton.' },
          { title: 'Auto-Vorschläge aktivieren', description: 'Aktiviere Echtzeit-Vorschläge während du Content erstellst. Erhalte sofortiges Feedback zu Captions, Hashtags und Posting-Zeiten.' },
          { title: 'Prüfen & anwenden', description: 'Prüfe KI-Vorschläge bevor sie live gehen, oder aktiviere Auto-Apply für vertrauenswürdige Optimierungstypen.' },
        ],
        benefits: ['Verbesserte Content-Qualität', 'Plattformspezifische Optimierung', 'Konsistente Markensprache', 'Datengestützte Vorschläge'],
        requirements: ['100+ historische Posts', 'Markenrichtlinien-Dokument', 'Professional oder Enterprise Plan'],
        timeToSetup: '30 Minuten',
      },
    },
    'evergreen-republishing': {
      en: {
        title: 'Evergreen Republishing',
        subtitle: 'Give your best content a longer life',
        description: 'Identify and automatically republish timeless content at optimal intervals. Your best evergreen content deserves to be seen by new audiences again and again.',
        stepsCount: '5 Automation Steps',
        useCase: 'Ideal for: Content Longevity',
        icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99',
        steps: [
          { title: 'Define Evergreen Criteria', description: 'Set rules for what makes content evergreen: topic categories, performance thresholds, and content age requirements.' },
          { title: 'Build Evergreen Library', description: 'The system automatically identifies and tags evergreen content from your archive based on your criteria.' },
          { title: 'Set Republishing Schedule', description: 'Define minimum intervals between republishes, preferred time slots, and maximum republish frequency per piece.' },
          { title: 'Configure Refresh Rules', description: 'Set how content should be refreshed: update stats/numbers, modify captions slightly, or republish as-is.' },
          { title: 'Enable Smart Republishing', description: 'Activate automated republishing that respects your schedule and optimizes for current audience activity.' },
        ],
        benefits: ['Extended content lifespan', 'Consistent content flow', 'Maximum value from creation', 'Reduced content creation pressure'],
        requirements: ['6+ months of content history', '50+ evergreen-eligible posts', 'Professional or Enterprise plan'],
        timeToSetup: '15 minutes',
      },
      de: {
        title: 'Evergreen-Republishing',
        subtitle: 'Gib deinem besten Content ein längeres Leben',
        description: 'Identifiziere und republiziere automatisch zeitlosen Content in optimalen Intervallen. Dein bester Evergreen-Content verdient es, von neuen Zielgruppen immer wieder gesehen zu werden.',
        stepsCount: '5 Automatisierungsschritte',
        useCase: 'Ideal für: Content-Langlebigkeit',
        icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99',
        steps: [
          { title: 'Evergreen-Kriterien definieren', description: 'Setze Regeln fest, was Content evergreen macht: Themenkategorien, Performance-Schwellenwerte und Content-Altersanforderungen.' },
          { title: 'Evergreen-Bibliothek aufbauen', description: 'Das System identifiziert und taggt automatisch Evergreen-Content aus deinem Archiv basierend auf deinen Kriterien.' },
          { title: 'Republishing-Zeitplan festlegen', description: 'Definiere Mindestintervalle zwischen Republishes, bevorzugte Zeitfenster und maximale Republish-Frequenz pro Stück.' },
          { title: 'Refresh-Regeln konfigurieren', description: 'Lege fest, wie Content aktualisiert werden soll: Statistiken/Zahlen updaten, Captions leicht modifizieren oder unverändert republizieren.' },
          { title: 'Smart Republishing aktivieren', description: 'Aktiviere automatisiertes Republishing, das deinen Zeitplan respektiert und für aktuelle Zielgruppen-Aktivität optimiert.' },
        ],
        benefits: ['Verlängerte Content-Lebensdauer', 'Konsistenter Content-Fluss', 'Maximaler Wert aus Erstellung', 'Reduzierter Content-Erstellungsdruck'],
        requirements: ['6+ Monate Content-Historie', '50+ Evergreen-fähige Posts', 'Professional oder Enterprise Plan'],
        timeToSetup: '15 Minuten',
      },
    },
  };

  const langKey = language === 'de' ? 'de' : 'en';
  return playbooks[slug]?.[langKey] || null;
}

export default function PlaybookDetailPage() {
  const params = useParams();
  const language = (params.lang as 'en' | 'de') || 'en';
  const l = (path: string) => `/${language}${path}`;
  const t = publicTranslations[language];
  const slug = params.slug as string;
  
  const playbook = getPlaybookContent(slug, language);
  
  if (!playbook) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <H1 className="mb-4">Playbook not found</H1>
          <Link href={l('/resources/automation-playbooks')}>
            <Button variant="primary">
              {language === 'de' ? 'Zurück zu Playbooks' : 'Back to Playbooks'}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-signal-muted/40 via-signal-muted/20 to-transparent" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-signal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-signal/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
          <FadeIn>
            <Link href={l('/resources/automation-playbooks')} className="inline-flex items-center gap-2 text-signal hover:text-signal/80 transition-colors mb-8">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              {language === 'de' ? 'Alle Playbooks' : 'All Playbooks'}
            </Link>
          </FadeIn>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <FadeIn delay={100}>
                <Overline className="text-signal mb-4">{playbook.useCase}</Overline>
              </FadeIn>
              <FadeIn delay={200}>
                <H1 className="mb-4">{playbook.title}</H1>
              </FadeIn>
              <FadeIn delay={300}>
                <Lead className="text-slate max-w-2xl mb-6">{playbook.subtitle}</Lead>
              </FadeIn>
              <FadeIn delay={400}>
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-signal/10 text-signal text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                    </svg>
                    {playbook.stepsCount}
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {language === 'de' ? 'Setup:' : 'Setup:'} {playbook.timeToSetup}
                  </span>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn delay={500} className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-signal to-signal/70 flex items-center justify-center shadow-lg shadow-signal/20">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={playbook.icon} />
                </svg>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Workflow Steps */}
          <div className="lg:col-span-2">
            <FadeIn>
              <H2 className="mb-8">{language === 'de' ? 'Workflow-Schritte' : 'Workflow Steps'}</H2>
            </FadeIn>
            <div className="space-y-2">
              {playbook.steps.map((step, index) => (
                <WorkflowStep
                  key={index}
                  step={index + 1}
                  title={step.title}
                  description={step.description}
                  delay={600 + index * 100}
                />
              ))}
            </div>
            
            {/* Description */}
            <FadeIn delay={1000} className="mt-12">
              <div className="bg-surface-2 rounded-xl p-6 border border-border">
                <H3 className="mb-4">{language === 'de' ? 'Über dieses Playbook' : 'About this Playbook'}</H3>
                <Body className="text-slate">{playbook.description}</Body>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <FadeIn delay={700}>
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-900/10 rounded-xl p-6 border border-green-200/50 dark:border-green-800/30">
                <H3 className="mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {language === 'de' ? 'Vorteile' : 'Benefits'}
                </H3>
                <ul className="space-y-3">
                  {playbook.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Requirements */}
            <FadeIn delay={800}>
              <div className="bg-surface-2 rounded-xl p-6 border border-border">
                <H3 className="mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  {language === 'de' ? 'Voraussetzungen' : 'Requirements'}
                </H3>
                <ul className="space-y-3">
                  {playbook.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate">
                      <svg className="w-4 h-4 text-slate flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={900}>
              <div className="bg-gradient-to-br from-signal to-signal/80 rounded-xl p-6 text-white">
                <H3 className="mb-3 text-white">{language === 'de' ? 'Bereit loszulegen?' : 'Ready to get started?'}</H3>
                <Body className="text-white/80 mb-4 text-sm">
                  {language === 'de' 
                    ? 'Aktiviere dieses Playbook in deinem Dashboard und starte die Automatisierung.'
                    : 'Activate this playbook in your dashboard and start automating.'}
                </Body>
                <Link href={l('/dashboard')}>
                  <Button variant="secondary" className="w-full bg-white text-signal hover:bg-white/90">
                    {language === 'de' ? 'Playbook aktivieren' : 'Activate Playbook'}
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <FadeIn delay={1100}>
          <Link href={l('/resources/automation-playbooks')} className="inline-flex items-center gap-2 text-signal hover:text-signal/80 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {language === 'de' ? 'Zurück zu allen Playbooks' : 'Back to all Playbooks'}
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
