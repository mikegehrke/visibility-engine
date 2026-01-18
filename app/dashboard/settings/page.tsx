'use client';

import { useState } from 'react';
import { useDashboard } from '@/lib/context/DashboardContext';
import { useLanguage } from '@/lib/context/LanguageContext';
import { H2, Body, Small, Overline } from '@/components/shared/Typography';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/shared/Card';
import Button from '@/components/shared/Button';

// Settings section component
function SettingsSection({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card variant="elevated">
      <CardHeader className="border-b border-border">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center text-signal flex-shrink-0">
            {icon}
          </div>
          <div>
            <CardTitle>{title}</CardTitle>
            <Small className="text-slate">{description}</Small>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}

// Toggle switch component
function Toggle({
  enabled,
  onChange,
  label,
  description,
}: {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  label: string;
  description?: string;
}) {
  const toggleId = `toggle-${label.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
      <div>
        <label htmlFor={toggleId}>
          <Body className="font-medium text-ink cursor-pointer">{label}</Body>
        </label>
        {description && <Small className="text-slate">{description}</Small>}
      </div>
      <label htmlFor={toggleId} className="relative inline-flex cursor-pointer">
        <input
          type="checkbox"
          id={toggleId}
          checked={enabled}
          onChange={() => onChange(!enabled)}
          className="sr-only peer"
          title={label}
        />
        <div className={`w-11 h-6 rounded-full transition-colors duration-fast peer-focus:ring-2 peer-focus:ring-signal/20 ${
          enabled ? 'bg-signal' : 'bg-surface-2'
        }`}>
          <span
            className={`absolute top-1 inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-fast ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </div>
      </label>
    </div>
  );
}

// Select input component
function SelectInput({
  label,
  value,
  options,
  onChange,
  description,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  description?: string;
}) {
  return (
    <div className="py-3 border-b border-border last:border-0">
      <div className="flex items-center justify-between">
        <div>
          <Body className="font-medium text-ink">{label}</Body>
          {description && <Small className="text-slate">{description}</Small>}
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
          title={label}
          className="px-3 py-1.5 text-sm rounded-lg border border-border bg-surface-1 text-ink focus:border-signal focus:ring-1 focus:ring-signal outline-none transition-colors duration-fast"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  const { currentContext } = useDashboard();
  const { language, setLanguage, t } = useLanguage();
  
  // Settings state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [autoSync, setAutoSync] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [timezone, setTimezone] = useState('Europe/Berlin');
  
  const title = currentContext === 'creator' 
    ? t.pages.settings.creator 
    : t.pages.settings.company;
  
  const s = t.settingsPage;

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Page Header */}
      <div>
        <Overline className="mb-1 block text-slate">{s.configuration}</Overline>
        <H2>{title}</H2>
      </div>

      {/* Account Section */}
      <SettingsSection
        title={s.account.title}
        description={s.account.description}
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        }
      >
        <div className="py-3 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <Body className="font-medium text-ink">{s.account.email}</Body>
              <Small className="text-slate">user@example.com</Small>
            </div>
            <Button variant="ghost" size="sm">{s.account.change}</Button>
          </div>
        </div>
        <div className="py-3 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <Body className="font-medium text-ink">{s.account.password}</Body>
              <Small className="text-slate">{s.account.passwordLastChanged}</Small>
            </div>
            <Button variant="ghost" size="sm">{s.account.update}</Button>
          </div>
        </div>
        <div className="py-3">
          <div className="flex items-center justify-between">
            <div>
              <Body className="font-medium text-ink">{s.account.twoFactor}</Body>
              <Small className="text-slate">{s.account.twoFactorDesc}</Small>
            </div>
            <Button variant="secondary" size="sm">{s.account.enable}</Button>
          </div>
        </div>
      </SettingsSection>

      {/* Notifications Section */}
      <SettingsSection
        title={s.notifications.title}
        description={s.notifications.description}
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        }
      >
        <Toggle
          enabled={emailNotifications}
          onChange={setEmailNotifications}
          label={s.notifications.emailNotifications}
          description={s.notifications.emailNotificationsDesc}
        />
        <Toggle
          enabled={pushNotifications}
          onChange={setPushNotifications}
          label={s.notifications.pushNotifications}
          description={s.notifications.pushNotificationsDesc}
        />
        <Toggle
          enabled={weeklyDigest}
          onChange={setWeeklyDigest}
          label={s.notifications.weeklyDigest}
          description={s.notifications.weeklyDigestDesc}
        />
      </SettingsSection>

      {/* Preferences Section */}
      <SettingsSection
        title={s.preferences.title}
        description={s.preferences.description}
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>
        }
      >
        <SelectInput
          label={s.preferences.language}
          value={language}
          options={[
            { value: 'en', label: 'English' },
            { value: 'de', label: 'Deutsch' },
          ]}
          onChange={(val) => setLanguage(val as 'en' | 'de')}
          description={s.preferences.languageDesc}
        />
        <SelectInput
          label={s.preferences.timezone}
          value={timezone}
          options={[
            { value: 'Europe/Berlin', label: 'Europe/Berlin (GMT+1)' },
            { value: 'Europe/London', label: 'Europe/London (GMT)' },
            { value: 'America/New_York', label: 'America/New York (GMT-5)' },
            { value: 'America/Los_Angeles', label: 'America/Los Angeles (GMT-8)' },
            { value: 'Asia/Tokyo', label: 'Asia/Tokyo (GMT+9)' },
          ]}
          onChange={setTimezone}
          description={s.preferences.timezoneDesc}
        />
        <Toggle
          enabled={darkMode}
          onChange={setDarkMode}
          label={s.preferences.darkMode}
          description={s.preferences.darkModeDesc}
        />
      </SettingsSection>

      {/* Integrations Section */}
      <SettingsSection
        title={s.integrations.title}
        description={s.integrations.description}
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
        }
      >
        <div className="py-3 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#0A66C2] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <div>
                <Body className="font-medium text-ink">LinkedIn</Body>
                <Small className="text-slate">{s.integrations.notConnected}</Small>
              </div>
            </div>
            <Button variant="secondary" size="sm">{s.integrations.connect}</Button>
          </div>
        </div>
        <div className="py-3 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-black flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div>
                <Body className="font-medium text-ink">X (Twitter)</Body>
                <Small className="text-slate">{s.integrations.notConnected}</Small>
              </div>
            </div>
            <Button variant="secondary" size="sm">{s.integrations.connect}</Button>
          </div>
        </div>
        <div className="py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </div>
              <div>
                <Body className="font-medium text-ink">Instagram</Body>
                <Small className="text-slate">{s.integrations.notConnected}</Small>
              </div>
            </div>
            <Button variant="secondary" size="sm">{s.integrations.connect}</Button>
          </div>
        </div>
      </SettingsSection>

      {/* Data & Privacy Section */}
      <SettingsSection
        title={s.dataPrivacy.title}
        description={s.dataPrivacy.description}
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        }
      >
        <Toggle
          enabled={autoSync}
          onChange={setAutoSync}
          label={s.dataPrivacy.autoSync}
          description={s.dataPrivacy.autoSyncDesc}
        />
        <div className="py-3 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <Body className="font-medium text-ink">{s.dataPrivacy.exportData}</Body>
              <Small className="text-slate">{s.dataPrivacy.exportDataDesc}</Small>
            </div>
            <Button variant="ghost" size="sm">{s.dataPrivacy.export}</Button>
          </div>
        </div>
        <div className="py-3">
          <div className="flex items-center justify-between">
            <div>
              <Body className="font-medium text-danger">{s.dataPrivacy.deleteAccount}</Body>
              <Small className="text-slate">{s.dataPrivacy.deleteAccountDesc}</Small>
            </div>
            <Button variant="danger" size="sm">{s.dataPrivacy.delete}</Button>
          </div>
        </div>
      </SettingsSection>

      {/* Subscription Section */}
      <Card variant="glass" className="border border-border">
        <CardContent className="py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center text-signal">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <div>
                <Body className="font-medium text-ink">{s.subscription.currentPlan} <span className="text-signal">{s.subscription.starterFree}</span></Body>
                <Small className="text-slate">{s.subscription.upgradeText}</Small>
              </div>
            </div>
            <Button variant="primary" size="sm">{s.subscription.upgradePlan}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
