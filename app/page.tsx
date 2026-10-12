'use client'

import { useRef, useState } from 'react'
import {
  Archive, Bell, ChevronDown, Clock3, Cloud, FileArchive, FileCode2,
  FileImage, FileText, Folder, Grid2X2, HardDrive, HelpCircle, Home,
  LayoutList, MoreHorizontal, Plus, Search, Settings, ShieldCheck,
  Star, Trash2, Upload, UserRound, Users, Zap,
} from 'lucide-react'

const files: { name: string; type: string; size: string; date: string; color: string; sections: string[] }[] = []

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
  const uploadInputRef = useRef<HTMLInputElement>(null)
  const openUpload = () => uploadInputRef.current?.click()
  const sectionFiles = active === 'Search' || active === 'Profile'
    ? files
    : files.filter((file) => file.sections.includes(active))
  const filtered = sectionFiles.filter((file) => file.name.toLowerCase().includes(query.toLowerCase()))

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
          <div className="mt-auto rounded-xl border border-white/[0.07] bg-[#15181b] p-3.5"><div className="mb-2 flex items-center justify-between text-xs"><span className="text-[#9da4aa]">Storage used</span><span className="font-medium text-white">0%</span></div><div className="mb-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]"><div className="h-full w-0 rounded-full bg-orange-500" /></div><p className="text-[11px] text-[#646c73]">No storage used</p><button className="mt-3 text-xs font-medium text-orange-400 hover:text-orange-300">Manage storage →</button></div>
        </aside>
        <section className="min-w-0 flex-1">
          <header className="flex h-[74px] items-center justify-between border-b border-white/[0.07] px-5 sm:px-8"><div className="flex items-center gap-3 md:hidden"><div className="flex size-8 items-center justify-center rounded-lg bg-orange-500 text-[#111]"><Zap size={17} fill="currentColor" /></div><span className="font-semibold">Forge<span className="text-orange-500">Drive</span></span></div><div className="relative hidden w-full max-w-[430px] md:block"><Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#697178]" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search your files" className="h-10 w-full rounded-lg border border-white/[0.08] bg-[#171a1d] pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#626a72] focus:border-orange-500/60" /></div><div className="flex items-center gap-4"><button aria-label="Notifications" className="text-[#858d94] hover:text-white"><Bell size={18} /></button><button aria-label="Help" className="text-[#858d94] hover:text-white"><HelpCircle size={18} /></button><div className="size-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-700 md:hidden" /></div></header>
          <div className="mx-auto max-w-[1240px] px-5 py-8 sm:px-8 lg:px-12"><div className="mb-9 flex flex-wrap items-end justify-between gap-4"><div><div className="mb-2 flex items-center gap-2 text-xs text-[#717980]"><span>Workspace</span><span>/</span><span className="text-orange-400">{active}</span></div><h1 className="text-3xl font-semibold tracking-[-0.04em] text-white">{active}</h1><p className="mt-2 text-sm text-[#737b82]">Everything you&apos;re working on, in one place.</p></div><button className="flex items-center gap-2 rounded-lg border border-white/[0.1] bg-[#171a1d] px-3.5 py-2 text-sm font-medium text-[#d7dade] transition hover:border-orange-500/50 hover:text-white"><Upload size={16} /> Upload files</button></div>
            {active === 'Search' && <div className="mb-6 rounded-2xl border border-white/[0.08] bg-[#15181b] p-4"><label htmlFor="mobile-file-search" className="mb-2 block text-xs font-medium text-[#aeb5bb]">Search your files</label><div className="relative"><Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#697178]" /><input id="mobile-file-search" value={query} onChange={(e) => setQuery(e.target.value)} autoFocus placeholder="Try a file name" className="h-11 w-full rounded-xl border border-white/[0.08] bg-[#101214] pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#626a72] focus:border-orange-500/60" /></div></div>}
            {active === 'Profile' && <div className="mb-6 rounded-2xl border border-dashed border-white/[0.08] bg-[#15181b] p-8 text-center"><UserRound className="mx-auto text-[#737b82]" /><p className="mt-3 text-sm font-medium text-white">Profile is empty</p><p className="mt-1 text-xs text-[#737b82]">Your account details will appear here.</p></div>}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.08] bg-[#15181b] p-2"><div className="flex items-center gap-1"><button className="rounded-lg bg-white/[0.08] px-3 py-2 text-xs font-medium text-white">All files</button><button className="rounded-lg px-3 py-2 text-xs text-[#737b82] transition hover:bg-white/[0.05] hover:text-white">Folders</button></div><div className="flex items-center gap-2 text-xs text-[#737b82]"><span>{files.length} items</span><div className="flex items-center gap-1 rounded-lg border border-white/[0.08] p-1"><button onClick={() => setView('grid')} className={`rounded p-1.5 ${view === 'grid' ? 'bg-white/[0.1] text-orange-400' : 'text-[#727b82]'}`} aria-label="Grid view"><Grid2X2 size={15} /></button><button onClick={() => setView('list')} className={`rounded p-1.5 ${view === 'list' ? 'bg-white/[0.1] text-orange-400' : 'text-[#727b82]'}`} aria-label="List view"><LayoutList size={15} /></button></div></div></div>
            <div className="rounded-2xl border border-dashed border-white/[0.12] bg-[#131619] px-6 py-20 text-center"><div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/[0.08] text-orange-400"><Folder size={28} /></div><h2 className="mt-5 text-lg font-semibold text-white">This folder is empty</h2><p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#737b82]">Upload a file or create a folder to start organizing your work in ForgeDrive.</p><button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-[#16110c] transition hover:bg-orange-400"><Upload size={16} /> Upload files</button></div>
          </div>
        </section>
        <nav className="fixed bottom-4 left-1/2 z-20 flex h-[66px] w-[calc(100%-2rem)] max-w-[448px] -translate-x-1/2 items-center gap-1 rounded-[22px] border border-white/[0.16] bg-white/[0.08] px-1.5 shadow-[0_18px_50px_rgba(0,0,0,.5),inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-2xl md:hidden" aria-label="Mobile navigation">
          {[[Home, 'Browser'], [Search, 'Search'], [UserRound, 'Profile']].map(([Icon, label]) => <button key={label as string} onClick={() => handleMobileSection(label as string)} aria-current={mobileSection === label ? 'page' : undefined} className={`flex h-[56px] min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-[17px] px-2 text-[10px] font-medium transition ${mobileSection === label ? 'bg-white/[0.1] text-orange-300 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]' : 'text-[#aeb5bb] hover:text-white'}`}><Icon className="size-[18px]" /><span className="truncate">{label}</span></button>)}
        </nav>
        <input ref={uploadInputRef} type="file" className="sr-only" aria-label="Choose files to upload" multiple />
        <button type="button" onClick={openUpload} aria-label="New upload" className="fixed bottom-6 right-5 z-20 flex size-14 items-center justify-center rounded-full bg-orange-500 text-[#16110c] shadow-[0_10px_30px_rgba(249,115,22,.35)] transition hover:scale-105 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101214] md:bottom-8 md:right-8"><Plus size={24} strokeWidth={2.5} /><span className="sr-only">New upload</span></button>
      </div>
    </main>
  )
}

