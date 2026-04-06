import { MessageCircleMore } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/site-content';

export function FloatingWhatsappButton() {
  return (
    <a
      href={WHATSAPP_URL}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-green-400/25 bg-green-500 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white shadow-2xl shadow-green-950/20 transition hover:-translate-y-1 hover:bg-green-400"
    >
      <MessageCircleMore className="h-4 w-4" />
      WhatsApp
    </a>
  );
}
