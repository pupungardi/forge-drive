import Link from "next/link"

export default function TermsPage() {
  return <InfoPage title="Terms" description="ForgeDrive is provided as a workspace for managing your own files. Use it responsibly, respect other people’s content, and keep your account secure." />
}

function InfoPage({ title, description }: { title: string; description: string }) {
  return <main className="min-h-screen bg-[#101214] px-5 py-10 text-white sm:px-8"><div className="mx-auto max-w-2xl"><Link href="/" className="text-sm text-orange-400 hover:text-orange-300">← Back to ForgeDrive</Link><div className="mt-16 rounded-3xl border border-white/[0.08] bg-[#15181b] p-8"><p className="text-xs font-medium uppercase tracking-[0.18em] text-orange-400">ForgeDrive</p><h1 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h1><p className="mt-4 leading-7 text-[#9aa2a9]">{description}</p></div></div></main>
}
