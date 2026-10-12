'use client'

import { useState } from 'react'
import {
  Archive, Bell, ChevronDown, Clock3, Cloud, FileArchive, FileCode2,
  FileImage, FileText, Folder, Grid2X2, HardDrive, HelpCircle, Home,
  LayoutList, MoreHorizontal, Plus, Search, Settings, ShieldCheck,
  Star, Trash2, Upload, UserRound, Users, Zap,
} from 'lucide-react'

const files = [
  { name: 'Brand guidelines.pdf', type: 'pdf', size: '8.4 MB', date: 'Today, 10:42 AM', color: 'rose' },
  { name: 'Q4 Product Launch', type: 'folder', size: '12 items', date: 'Today, 9:18 AM', color: 'amber' },
  { name: 'dashboard-v2.fig', type: 'fig', size: '24.1 MB', date: 'Yesterday', color: 'violet' },
  { name: 'hero-dark.webp', type: 'image', size: '2.8 MB', date: 'Yesterday', color: 'sky' },
  { name: 'forge-api.ts', type: 'code', size: '14 KB', date: 'Oct 10, 2026', color: 'emerald' },
  { name: 'Archive 2025.zip', type: 'zip', size: '1.2 GB', date: 'Oct 8, 2026', color: 'orange' },
]

const iconFor = (type: string) => {
  if (type === 'folder') return Folder
  if (type === 'image') return FileImage
  if (type === 'code') return FileCode2
  if (type === 'zip') return FileArchive
  return FileText
}

export default function Page() {
  const [active, setActive] = useState('My Drive')
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const mobileSection = active === 'My Drive' ? 'Browser' : active
  const handleMobileSection = (section: string) => setActive(section === 'Browser' ? 'My Drive' : section)
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const filtered = files.filter((file) => file.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <main className="min-h-screen bg-[#101214] pb-24 text-[#eef0f2] selection:bg-orange-500/30 md:pb-0">
      <div className="flex min-h-screen">
        <aside className="hidden w-[232px] shrink-0 border-r border-white/[0.07] bg-[#0c0e10] p-4 md:flex md:flex-col">
          <div className="mb-10 flex items-center gap-2.5 px-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-orange-500 text-[#111] shadow-[0_0_24px_rgba(249,115,22,.2)]"><Zap size={17} fill="currentColor" /></div>
            <span className="text-[17px] font-semibold tracking-[-0.03em]">Forge<span className="text-orange-500">Drive</span></span>
          </div>
          <button className="mb-7 flex h-10 items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 text-sm font-semibold text-[#16110c] transition hover:bg-orange-400"><Plus size={16} /> New upload</button>
          <nav className="flex flex-col gap-1 text-sm" aria-label="Main navigation">
            {[[Home, 'My Drive'], [Users, 'Shared with me'], [Clock3, 'Recent'], [Star, 'Starred']].map(([Icon, label]) => <button key={label as string} onClick={() => setActive(label as string)} className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-left transition ${active === label ? 'bg-orange-500/10 font-medium text-orange-400' : 'text-[#899099] hover:bg-white/[0.05] hover:text-white'}`}><Icon size={17} />{label}</button>)}
          </nav>
          <div className="mt-8 border-t border-white/[0.07] pt-6">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#60676e]">Workspace</p>
            {[[HardDrive, 'Storage'], [ShieldCheck, 'Security']].map(([Icon, label]) => <button key={label as string} className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm text-[#899099] transition hover:bg-white/[0.05] hover:text-white"><Icon size={17} />{label}</button>)}
          </div>
          <div className="mt-auto rounded-xl border border-white/[0.07] bg-[#15181b] p-3.5"><div className="mb-2 flex items-center justify-between text-xs"><span className="text-[#9da4aa]">Storage used</span><span className="font-medium text-white">68%</span></div><div className="mb-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]"><div className="h-full w-[68%] rounded-full bg-orange-500" /></div><p className="text-[11px] text-[#646c73]">68.2 GB of 100 GB</p><button className="mt-3 text-xs font-medium text-orange-400 hover:text-orange-300">Manage storage →</button></div>
          <div className="mt-5 flex items-center gap-3 border-t border-white/[0.07] pt-4"><div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-orange-700 text-xs font-bold text-[#21140c]">JD</div><div className="min-w-0 flex-1"><p className="truncate text-xs font-medium">Jordan Davis</p><p className="truncate text-[11px] text-[#687078]">jordan@forge.co</p></div><Settings size={15} className="text-[#687078]" /></div>
        </aside>
        <section className="min-w-0 flex-1">
          <header className="flex h-[74px] items-center justify-between border-b border-white/[0.07] px-5 sm:px-8"><div className="flex items-center gap-3 md:hidden"><div className="flex size-8 items-center justify-center rounded-lg bg-orange-500 text-[#111]"><Zap size={17} fill="currentColor" /></div><span className="font-semibold">Forge<span className="text-orange-500">Drive</span></span></div><div className="relative hidden w-full max-w-[430px] md:block"><Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#697178]" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search your files" className="h-10 w-full rounded-lg border border-white/[0.08] bg-[#171a1d] pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#626a72] focus:border-orange-500/60" /></div><div className="flex items-center gap-4"><button aria-label="Notifications" className="text-[#858d94] hover:text-white"><Bell size={18} /></button><button aria-label="Help" className="text-[#858d94] hover:text-white"><HelpCircle size={18} /></button><div className="size-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-700 md:hidden" /></div></header>
          <div className="mx-auto max-w-[1240px] px-5 py-8 sm:px-8 lg:px-12"><div className="mb-9 flex flex-wrap items-end justify-between gap-4"><div><div className="mb-2 flex items-center gap-2 text-xs text-[#717980]"><span>Workspace</span><span>/</span><span className="text-orange-400">{active}</span></div><h1 className="text-3xl font-semibold tracking-[-0.04em] text-white">{active}</h1><p className="mt-2 text-sm text-[#737b82]">Everything you&apos;re working on, in one place.</p></div><button className="flex items-center gap-2 rounded-lg border border-white/[0.1] bg-[#171a1d] px-3.5 py-2 text-sm font-medium text-[#d7dade] transition hover:border-orange-500/50 hover:text-white"><Upload size={16} /> Upload files</button></div>
            {active === 'Search' && <div className="mb-6 rounded-2xl border border-white/[0.08] bg-[#15181b] p-4"><label htmlFor="mobile-file-search" className="mb-2 block text-xs font-medium text-[#aeb5bb]">Search your files</label><div className="relative"><Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#697178]" /><input id="mobile-file-search" value={query} onChange={(e) => setQuery(e.target.value)} autoFocus placeholder="Try a file name" className="h-11 w-full rounded-xl border border-white/[0.08] bg-[#101214] pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#626a72] focus:border-orange-500/60" /></div></div>}
            {active === 'Profile' && <div className="mb-6 rounded-2xl border border-white/[0.08] bg-[#15181b] p-5"><div className="flex items-center gap-3"><div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-orange-700 text-sm font-bold text-[#21140c]">JD</div><div><p className="font-medium text-white">Jordan Davis</p><p className="text-xs text-[#737b82]">jordan@forge.co</p></div></div><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/[0.04] p-3"><p className="text-xs text-[#737b82]">Plan</p><p className="mt-1 text-sm font-medium">Pro workspace</p></div><div className="rounded-xl bg-white/[0.04] p-3"><p className="text-xs text-[#737b82]">Storage</p><p className="mt-1 text-sm font-medium">68.2 GB used</p></div></div></div>}
            <div className="mb-10 grid gap-4 sm:grid-cols-3"><div className="rounded-xl border border-white/[0.07] bg-[#15181b] p-4"><div className="mb-5 flex items-center justify-between"><span className="text-xs text-[#7e878e]">Total files</span><FileText size={16} className="text-orange-400" /></div><p className="text-2xl font-semibold tracking-tight">248</p><p className="mt-1 text-[11px] text-emerald-400">+12 this week</p></div><div className="rounded-xl border border-white/[0.07] bg-[#15181b] p-4"><div className="mb-5 flex items-center justify-between"><span className="text-xs text-[#7e878e]">Shared with you</span><Users size={16} className="text-sky-400" /></div><p className="text-2xl font-semibold tracking-tight">18</p><p className="mt-1 text-[11px] text-[#7e878e]">Across 6 workspaces</p></div><div className="rounded-xl border border-white/[0.07] bg-[#15181b] p-4"><div className="mb-5 flex items-center justify-between"><span className="text-xs text-[#7e878e]">Storage used</span><Cloud size={16} className="text-violet-400" /></div><p className="text-2xl font-semibold tracking-tight">68.2 <span className="text-sm font-normal text-[#737b82]">GB</span></p><p className="mt-1 text-[11px] text-[#7e878e]">31.8 GB available</p></div></div>
            <div className="mb-4 flex items-center justify-between"><div><h2 className="text-base font-semibold">Recent files</h2><p className="mt-1 text-xs text-[#737b82]">Updated in the last 7 days</p></div><div className="flex items-center gap-1 rounded-lg border border-white/[0.08] bg-[#15181b] p-1"><button onClick={() => setView('grid')} className={`rounded p-1.5 ${view === 'grid' ? 'bg-white/[0.1] text-orange-400' : 'text-[#727b82]'}`} aria-label="Grid view"><Grid2X2 size={15} /></button><button onClick={() => setView('list')} className={`rounded p-1.5 ${view === 'list' ? 'bg-white/[0.1] text-orange-400' : 'text-[#727b82]'}`} aria-label="List view"><LayoutList size={15} /></button></div></div>
            <div className={view === 'grid' ? 'grid gap-3 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-2'}>{filtered.map((file) => { const Icon = iconFor(file.type); return <button key={file.name} onClick={() => setMenuOpen(file.name === menuOpen ? false : file.name)} className={`group relative text-left transition hover:-translate-y-0.5 ${view === 'grid' ? 'rounded-xl border border-white/[0.07] bg-[#15181b] p-4 hover:border-orange-500/40 hover:bg-[#191c1f]' : 'flex items-center gap-4 rounded-lg border border-white/[0.06] bg-[#15181b] px-4 py-3 hover:border-orange-500/40'}`}><div className={`flex items-center justify-center rounded-lg ${view === 'grid' ? 'mb-5 size-11' : 'size-10 shrink-0'} bg-${file.color}-500/10 text-${file.color}-400`}><Icon size={20} /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium text-[#e7e9eb]">{file.name}</p><div className="mt-1.5 flex items-center gap-2 text-[11px] text-[#737b82]"><span>{file.size}</span><span className="size-0.5 rounded-full bg-[#596067]" /><span>{file.date}</span></div></div><MoreHorizontal size={17} className="absolute right-3 top-3 text-[#5f676e] opacity-0 transition group-hover:opacity-100" /></button> })}</div>
            {filtered.length === 0 && <div className="rounded-xl border border-dashed border-white/10 py-16 text-center text-sm text-[#737b82]">No files match &quot;{query}&quot;</div>}
            <div className="mt-10 flex items-center gap-3 rounded-xl border border-orange-500/15 bg-orange-500/[0.04] p-4"><Archive size={18} className="text-orange-400" /><div className="flex-1"><p className="text-sm font-medium">Your files are protected</p><p className="mt-1 text-xs text-[#7b7771]">ForgeDrive encrypts your data at rest and in transit.</p></div><ShieldCheck size={17} className="text-[#8a6343]" /></div>
          </div>
        </section>
        <nav className="fixed bottom-4 left-1/2 z-20 flex h-[66px] w-[calc(100%-2rem)] max-w-[448px] -translate-x-1/2 items-center gap-1 rounded-[22px] border border-white/[0.16] bg-white/[0.08] px-1.5 shadow-[0_18px_50px_rgba(0,0,0,.5),inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-2xl md:hidden" aria-label="Mobile navigation">
          {[[Home, 'Browser'], [Search, 'Search'], [UserRound, 'Profile']].map(([Icon, label]) => <button key={label as string} onClick={() => handleMobileSection(label as string)} aria-current={mobileSection === label ? 'page' : undefined} className={`flex h-[56px] min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-[17px] px-2 text-[10px] font-medium transition ${mobileSection === label ? 'bg-white/[0.1] text-orange-300 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]' : 'text-[#aeb5bb] hover:text-white'}`}><Icon className="size-[18px]" /><span className="truncate">{label}</span></button>)}
        </nav>
      </div>
    </main>
  )
}

