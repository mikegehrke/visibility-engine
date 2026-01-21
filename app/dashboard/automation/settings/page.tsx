'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { currentAccount } from '@/lib/models/account';
import { 
  defaultAutoModeSettings, 
  ownerAutoModeSettings,
  autoModeLevelInfo,
  type AutoModeLevel,
} from '@/lib/models/automation-engine';
import { useState } from 'react';

export default function AutoModeSettingsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Use owner settings if owner, otherwise default
  const initialSettings = currentAccount.isOwner ? ownerAutoModeSettings : defaultAutoModeSettings;
  
  const [settings, setSettings] = useState(initialSettings);
  const [killSwitch, setKillSwitch] = useState(settings.killSwitchActive);

  const handleLevelChange = (level: AutoModeLevel) => {
    setSettings({ ...settings, level });
  };

  const handleKillSwitch = () => {
    const newValue = !killSwitch;
    setKillSwitch(newValue);
    setSettings({ ...settings, killSwitchActive: newValue });
  };

  const getLevelBadgeColor = (level: AutoModeLevel) => {
    switch (level) {
      case 'assisted':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'guarded':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'full-auto':
        return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-ink mb-2">{t.autoMode.title}</h1>
        <p className="text-slate">{t.autoMode.subtitle}</p>
      </div>

      {/* Owner Notice */}
      {currentAccount.isOwner && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.018-4.018A9.953 9.953 0 0122 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.953 9.953 0 014.018.782" />
            </svg>
            <div>
              <p className="text-sm font-medium text-green-800">{t.autoMode.ownerAccount}</p>
              <p className="text-xs text-green-700 mt-1">{t.autoMode.ownerPrivileges}</p>
            </div>
          </div>
        </div>
      )}

      {/* Add-on Required (Non-Owner) */}
      {!currentAccount.isOwner && !currentAccount.automationAddOn.enabled && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-amber-800">{t.autoMode.requiresAddon}</p>
              <p className="text-xs text-amber-700 mt-1">{t.autoMode.addonRequired}</p>
            </div>
          </div>
        </div>
      )}

      {/* Kill Switch */}
      <div className="bg-canvas border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-medium text-ink">{t.autoMode.killSwitch}</h2>
            <p className="text-sm text-slate mt-1">
              {killSwitch ? t.autoMode.killSwitchActive : t.autoMode.killSwitchInactive}
            </p>
          </div>
          <button
            onClick={handleKillSwitch}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
              killSwitch
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {killSwitch ? t.autoMode.deactivateKillSwitch : t.autoMode.activateKillSwitch}
          </button>
        </div>
      </div>

      {/* Auto Mode Level */}
      <div className="bg-canvas border border-border rounded-lg p-6">
        <h2 className="text-lg font-medium text-ink mb-4">{t.autoMode.level}</h2>
        <div className="grid grid-cols-3 gap-4">
          {(['assisted', 'guarded', 'full-auto'] as AutoModeLevel[]).map((level) => {
            const isSelected = settings.level === level;
            const isDisabled = level === 'full-auto' && !currentAccount.isOwner && !currentAccount.automationAddOn.enabled;
            
            return (
              <button
                key={level}
                onClick={() => !isDisabled && handleLevelChange(level)}
                disabled={isDisabled}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  isSelected
                    ? 'border-ink bg-surface-1'
                    : isDisabled
                    ? 'border-border bg-surface-1 opacity-50 cursor-not-allowed'
                    : 'border-border hover:border-slate'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getLevelBadgeColor(level)}`}>
                    {t.autoMode.levels[level]}
                  </span>
                  {isSelected && (
                    <svg className="w-4 h-4 text-ink" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <p className="text-sm text-slate">
                  {t.autoMode.levelDescriptions[level]}
                </p>
                {isDisabled && (
                  <p className="text-xs text-amber-700 mt-2">{t.autoMode.requiresAddon}</p>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Caps */}
      <div className="bg-canvas border border-border rounded-lg p-6">
        <h2 className="text-lg font-medium text-ink mb-4">{t.autoMode.actionCaps}</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-sm font-medium text-slate block mb-2">{t.autoMode.dailyLimit}</span>
            <div className="p-3 bg-surface-1 border border-border rounded-lg">
              <span className="text-lg font-semibold text-ink">
                {settings.actionCaps.dailyLimit === -1 ? t.autoMode.unlimited : `${settings.actionCaps.dailyLimit} ${t.autoMode.actionsPerDay}`}
              </span>
            </div>
          </div>
          <div>
            <span className="text-sm font-medium text-slate block mb-2">{t.autoMode.ruleCooldown}</span>
            <div className="p-3 bg-surface-1 border border-border rounded-lg">
              <span className="text-lg font-semibold text-ink">
                {settings.actionCaps.perRuleCooldownHours === 0 ? t.autoMode.unlimited : `${settings.actionCaps.perRuleCooldownHours} ${t.autoMode.hours}`}
              </span>
            </div>
          </div>
          <div>
            <span className="text-sm font-medium text-slate block mb-2">{t.autoMode.channelLimit}</span>
            <div className="p-3 bg-surface-1 border border-border rounded-lg">
              <span className="text-lg font-semibold text-ink">
                {settings.actionCaps.perChannelDailyLimit === -1 ? t.autoMode.unlimited : `${settings.actionCaps.perChannelDailyLimit} ${t.autoMode.actionsPerDay}`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Automation Windows */}
      <div className="bg-canvas border border-border rounded-lg p-6">
        <h2 className="text-lg font-medium text-ink mb-4">{t.autoMode.automationWindows}</h2>
        {settings.automationWindows.enabled ? (
          <div className="space-y-3">
            {settings.automationWindows.allowedHours.map((window, idx) => (
              <div key={idx} className="p-3 bg-surface-1 border border-border rounded-lg">
                <span className="text-sm text-slate">
                  {t.autoMode.allowedHours}: {window.start}:00 - {window.end}:00
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">{t.autoMode.alwaysOn}</p>
          </div>
        )}
      </div>

      {/* Confidence Threshold */}
      <div className="bg-canvas border border-border rounded-lg p-6">
        <h2 className="text-lg font-medium text-ink mb-4">{t.autoMode.confidenceThreshold}</h2>
        <div className="p-4 bg-surface-1 border border-border rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-slate">Minimum score for auto execution</span>
            <span className="text-2xl font-semibold text-ink">{settings.confidenceThreshold}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
