'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import {
  getNotifySettings,
  initNotifications,
  isNativeApp,
  requestNotifyPermission,
  rescheduleDailyVerses,
  saveNotifySettings,
  type NotifyCollection,
  type NotifySettings as Settings,
} from '@/lib/notifications';

// Daily-notification settings card — Android app only; the web build
// renders nothing (web push needs a server, out of scope by design).
export default function NotifySettings() {
  const { t } = useLanguage();
  const [native, setNative] = useState(false);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    if (!isNativeApp()) return;
    initNotifications();
    setNative(true);
    setSettings(getNotifySettings());
  }, []);

  if (!native || !settings) return null;

  const apply = async (next: Settings) => {
    setSettings(next);
    saveNotifySettings(next);
    await rescheduleDailyVerses(next);
  };

  const toggle = async () => {
    if (!settings.enabled) {
      const granted = await requestNotifyPermission();
      setDenied(!granted);
      if (!granted) return;
    }
    await apply({ ...settings, enabled: !settings.enabled });
  };

  const time = `${String(settings.hour).padStart(2, '0')}:${String(settings.minute).padStart(2, '0')}`;

  return (
    <div className="notify-card">
      <label className="notify-toggle">
        <input type="checkbox" checked={settings.enabled} onChange={toggle} />
        <span>
          <strong>{t('notify.title')}</strong>
          <em>{t('notify.desc')}</em>
        </span>
      </label>
      {denied && <p className="notify-denied">{t('notify.denied')}</p>}
      {settings.enabled && (
        <div className="notify-opts">
          <label>
            {t('notify.time')}
            <input
              type="time"
              value={time}
              onChange={(e) => {
                const [h, m] = e.target.value.split(':').map(Number);
                if (!Number.isNaN(h)) apply({ ...settings, hour: h, minute: m || 0 });
              }}
            />
          </label>
          <label>
            {t('notify.collection')}
            <select
              value={settings.collection}
              onChange={(e) => apply({ ...settings, collection: e.target.value as NotifyCollection })}
            >
              <option value="subhashita">{t('notify.subhashita')}</option>
              <option value="mahavakya">{t('notify.mahavakya')}</option>
              <option value="both">{t('notify.both')}</option>
            </select>
          </label>
        </div>
      )}
    </div>
  );
}
