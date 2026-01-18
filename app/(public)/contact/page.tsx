'use client';

import { useState } from 'react';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const t = {
    en: {
      overline: 'Get in Touch',
      title: 'Contact Us',
      subtitle: 'Have questions about Visibility Engine? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Your name',
        email: 'Email Address',
        emailPlaceholder: 'you@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'How can we help?',
        message: 'Message',
        messagePlaceholder: 'Tell us more about your inquiry...',
        submit: 'Send Message',
        submitting: 'Sending...',
      },
      success: {
        title: 'Message Sent!',
        message: 'Thank you for reaching out. We\'ll get back to you within 24 hours.',
        another: 'Send another message',
      },
      error: 'Something went wrong. Please try again.',
      info: {
        title: 'Other Ways to Reach Us',
        email: {
          label: 'Email',
          value: 'hallo@visibility-engine.com',
        },
        response: {
          label: 'Response Time',
          value: 'Within 24 hours',
        },
        support: {
          label: 'Support Hours',
          value: 'Mon-Fri, 9am-6pm CET',
        },
      },
      topics: {
        title: 'Common Topics',
        items: [
          'Product demos & trials',
          'Enterprise pricing',
          'Technical support',
          'Partnership inquiries',
          'Custom playbook requests',
          'API integration help',
        ],
      },
    },
    de: {
      overline: 'Kontakt aufnehmen',
      title: 'Kontaktiere uns',
      subtitle: 'Hast du Fragen zu Visibility Engine? Wir freuen uns von dir zu hören. Sende uns eine Nachricht und wir antworten so schnell wie möglich.',
      form: {
        name: 'Vollständiger Name',
        namePlaceholder: 'Dein Name',
        email: 'E-Mail-Adresse',
        emailPlaceholder: 'du@beispiel.de',
        subject: 'Betreff',
        subjectPlaceholder: 'Wie können wir helfen?',
        message: 'Nachricht',
        messagePlaceholder: 'Erzähle uns mehr über dein Anliegen...',
        submit: 'Nachricht senden',
        submitting: 'Wird gesendet...',
      },
      success: {
        title: 'Nachricht gesendet!',
        message: 'Vielen Dank für deine Nachricht. Wir melden uns innerhalb von 24 Stunden.',
        another: 'Weitere Nachricht senden',
      },
      error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
      info: {
        title: 'Weitere Kontaktmöglichkeiten',
        email: {
          label: 'E-Mail',
          value: 'hallo@visibility-engine.com',
        },
        response: {
          label: 'Antwortzeit',
          value: 'Innerhalb von 24 Stunden',
        },
        support: {
          label: 'Support-Zeiten',
          value: 'Mo-Fr, 9-18 Uhr MEZ',
        },
      },
      topics: {
        title: 'Häufige Themen',
        items: [
          'Produktdemos & Testversionen',
          'Enterprise-Preise',
          'Technischer Support',
          'Partnerschaftsanfragen',
          'Individuelle Playbook-Anfragen',
          'API-Integrationshilfe',
        ],
      },
    },
  };

  const content = language === 'de' ? t.de : t.en;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/maqqevqn', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setError(content.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-signal-muted/40 via-signal-muted/20 to-transparent" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-signal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-signal/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <Overline className="text-signal mb-4">{content.overline}</Overline>
            <H1 className="mb-6">{content.title}</H1>
            <Lead className="text-slate">{content.subtitle}</Lead>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card variant="elevated" padding="spacious">
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <H2 className="mb-4">{content.success.title}</H2>
                    <Body className="text-slate mb-8">{content.success.message}</Body>
                    <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
                      {content.success.another}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          {content.form.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder={content.form.namePlaceholder}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-surface-1 text-foreground placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          {content.form.email}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder={content.form.emailPlaceholder}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-surface-1 text-foreground placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        {content.form.subject}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder={content.form.subjectPlaceholder}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-surface-1 text-foreground placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        {content.form.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder={content.form.messagePlaceholder}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-surface-1 text-foreground placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-colors resize-none"
                      />
                    </div>

                    {error && (
                      <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? content.form.submitting : content.form.submit}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card variant="outlined" padding="default">
              <CardContent>
                <H3 className="mb-6">{content.info.title}</H3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{content.info.email.label}</p>
                      <p className="text-sm text-signal">{content.info.email.value}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{content.info.response.label}</p>
                      <p className="text-sm text-slate">{content.info.response.value}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{content.info.support.label}</p>
                      <p className="text-sm text-slate">{content.info.support.value}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Topics */}
            <Card variant="outlined" padding="default">
              <CardContent>
                <H3 className="mb-4">{content.topics.title}</H3>
                <ul className="space-y-2">
                  {content.topics.items.map((topic, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-slate">
                      <svg className="w-4 h-4 text-signal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
