'use client'

import { useRef, useState } from 'react'
import {
  Activity, Archive, Bell, ChevronDown, Clock3, Cloud, FileArchive, FileCode2,
  FileImage, FileText, Folder, Grid2X2, HardDrive, HelpCircle, Home,
  LayoutList, MoreHorizontal, Plus, Search, Settings, ShieldCheck,
  MessageSquareText, Star, Trash2, Upload, UserRound, Users, Zap,
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
  const folderInputRef = useRef<HTMLInputElement>(null)
  const openUpload = () => setMenuOpen((isOpen) => !isOpen)
  const chooseFiles = () => {
    setMenuOpen(false)
    uploadInputRef.current?.click()
  }
  const chooseFolder = () => {
    setMenuOpen(false)
    folderInputRef.current?.click()
  }
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
          <nav className="flex flex-col gap-1 text-sm" aria-label="Main navigation">
            {[[Home, 'My Drive'], [Users, 'Shared with me'], [Clock3, 'Recent'], [Star, 'Starred']].map(([Icon, label]) => <button key={label as string} onClick={() => setActive(label as string)} className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-left transition ${active === label ? 'bg-orange-500/10 font-medium text-orange-400' : 'text-[#899099] hover:bg-white/[0.05] hover:text-white'}`}><Icon size={17} />{label}</button>)}
          </nav>
          <div className="mt-8 border-t border-white/[0.07] pt-6">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#60676e]">Workspace</p>
            {[[HardDrive, 'Storage'], [Activity, 'Activity'], [Users, 'People'], [ShieldCheck, 'Security'], [MessageSquareText, 'Feedback']].map(([Icon, label]) => <button key={label as string} onClick={() => setActive(label as string)} className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition ${active === label ? 'bg-orange-500/10 font-medium text-orange-400' : 'text-[#899099] hover:bg-white/[0.05] hover:text-white'}`}><Icon size={17} />{label}</button>)}
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-[#1a1d20] to-[#121416] p-3.5 shadow-[0_12px_30px_rgba(0,0,0,.16)]"><div className="flex items-start justify-between"><div className="flex items-center gap-2.5"><div className="flex size-8 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400"><HardDrive size={15} /></div><div><p className="text-xs font-medium text-white">Storage</p><p className="mt-0.5 text-[10px] text-[#737b82]">Your workspace</p></div></div><span className="rounded-full bg-white/[0.07] px-2 py-1 text-[10px] font-medium text-[#aeb5bb]">0%</span></div><div className="mt-4"><div className="mb-1.5 flex items-center justify-between text-[10px] text-[#737b82]"><span>0 GB used</span><span>Free</span></div><div className="h-2 overflow-hidden rounded-full bg-white/[0.08] p-px"><div className="h-full w-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-300" /></div></div><button className="mt-3 inline-flex items-center text-[11px] font-medium text-orange-400 transition hover:text-orange-300">Manage storage <span aria-hidden="true" className="ml-1">→</span></button></div>
            <footer className="flex flex-wrap gap-x-3 gap-y-1 px-2 text-[10px] text-[#626a72]" aria-label="ForgeDrive information">
              <a href="https://www.google.com/drive/" target="_blank" rel="noreferrer" className="transition hover:text-white">About us</a>
              <a href="https://support.google.com/drive/" target="_blank" rel="noreferrer" className="transition hover:text-white">Help center</a>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="transition hover:text-white">Privacy</a>
              <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="transition hover:text-white">Terms</a>
            </footer>
          </div>
        </aside>
        <section className="min-w-0 flex-1">
          <header className="flex h-[74px] items-center justify-between border-b border-white/[0.07] px-5 sm:px-8"><div className="flex items-center gap-3 md:hidden"><div className="flex size-8 items-center justify-center rounded-lg bg-orange-500 text-[#111]"><Zap size={17} fill="currentColor" /></div><span className="font-semibold">Forge<span className="text-orange-500">Drive</span></span></div><div className="relative hidden w-full max-w-[430px] md:block"><Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#697178]" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search your files" className="h-10 w-full rounded-lg border border-white/[0.08] bg-[#171a1d] pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#626a72] focus:border-orange-500/60" /></div><div className="flex items-center gap-4"><button aria-label="Notifications" className="text-[#858d94] hover:text-white"><Bell size={18} /></button><button aria-label="Help" className="text-[#858d94] hover:text-white"><HelpCircle size={18} /></button><div className="size-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-700 md:hidden" /></div></header>
          <div className="mx-auto max-w-[1240px] px-5 py-8 sm:px-8 lg:px-12"><div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><div className="mb-2 flex items-center gap-2 text-xs text-[#717980]"><span className="text-orange-400">{active}</span></div><h1 className="text-3xl font-semibold tracking-[-0.04em] text-white">{active}</h1><p className="mt-2 text-sm text-[#737b82]">Everything you&apos;re working on, in one place.</p></div><button className="flex items-center gap-2 rounded-lg border border-white/[0.1] bg-[#171a1d] px-3.5 py-2 text-sm font-medium text-[#d7dade] transition hover:border-orange-500/50 hover:text-white"><Upload size={16} /> Upload files</button></div>
            {active === 'Search' && <div className="mb-6 rounded-2xl border border-white/[0.08] bg-[#15181b] p-4"><label htmlFor="mobile-file-search" className="mb-2 block text-xs font-medium text-[#aeb5bb]">Search your files</label><div className="relative"><Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#697178]" /><input id="mobile-file-search" value={query} onChange={(e) => setQuery(e.target.value)} autoFocus placeholder="Try a file name" className="h-11 w-full rounded-xl border border-white/[0.08] bg-[#101214] pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#626a72] focus:border-orange-500/60" /></div></div>}
            {active === 'Profile' && <div className="mb-6 rounded-2xl border border-dashed border-white/[0.08] bg-[#15181b] p-8 text-center"><UserRound className="mx-auto text-[#737b82]" /><p className="mt-3 text-sm font-medium text-white">Profile is empty</p><p className="mt-1 text-xs text-[#737b82]">Your account details will appear here.</p></div>}
            {active === 'Feedback' && <div className="mb-6 rounded-2xl border border-white/[0.08] bg-[#15181b] p-6"><div className="flex items-start gap-3"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400"><MessageSquareText size={19} /></div><div><h2 className="text-base font-semibold text-white">Help us improve ForgeDrive</h2><p className="mt-1 text-sm leading-6 text-[#737b82]">Tell us what works well or what you would like to see next.</p></div></div><textarea aria-label="Your feedback" placeholder="Share your feedback..." className="mt-5 min-h-28 w-full resize-none rounded-xl border border-white/[0.08] bg-[#101214] p-3 text-sm text-white outline-none placeholder:text-[#626a72] focus:border-orange-500/60" /><button type="button" className="mt-3 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-[#16110c] transition hover:bg-orange-400">Send feedback</button></div>}
            {active === 'My Drive' && <div className="mb-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.08] bg-[#15181b] p-4"><div className="mb-4 flex items-center justify-between"><span className="text-xs font-medium text-[#aeb5bb]">Storage overview</span><HardDrive size={16} className="text-orange-400" /></div><p className="text-2xl font-semibold text-white">0 GB</p><p className="mt-1 text-xs text-[#737b82]">No files stored yet</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.08]"><div className="h-full w-0 rounded-full bg-orange-500" /></div></div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#15181b] p-4"><div className="mb-4 flex items-center justify-between"><span className="text-xs font-medium text-[#aeb5bb]">Recent activity</span><Clock3 size={16} className="text-orange-400" /></div><p className="text-2xl font-semibold text-white">0</p><p className="mt-1 text-xs text-[#737b82]">No activity to show</p><p className="mt-3 text-[11px] text-[#60676e]">Uploads and changes will appear here</p></div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#15181b] p-4"><div className="mb-4 flex items-center justify-between"><span className="text-xs font-medium text-[#aeb5bb]">Workspace health</span><ShieldCheck size={16} className="text-orange-400" /></div><p className="text-2xl font-semibold text-white">Ready</p><p className="mt-1 text-xs text-[#737b82]">Your workspace is ready</p><p className="mt-3 text-[11px] text-[#60676e]">Security checks will appear here</p></div>
            </div>}
            <div className="mb-6 flex flex-wrap items-center justify-end gap-3 rounded-2xl border border-white/[0.08] bg-[#15181b] p-2"><div className="flex items-center gap-2 text-xs text-[#737b82]"><span>{files.length} items</span><div className="flex items-center gap-1 rounded-lg border border-white/[0.08] p-1"><button onClick={() => setView('grid')} className={`rounded p-1.5 ${view === 'grid' ? 'bg-white/[0.1] text-orange-400' : 'text-[#727b82]'}`} aria-label="Grid view"><Grid2X2 size={15} /></button><button onClick={() => setView('list')} className={`rounded p-1.5 ${view === 'list' ? 'bg-white/[0.1] text-orange-400' : 'text-[#727b82]'}`} aria-label="List view"><LayoutList size={15} /></button></div></div></div>
            <div className="rounded-2xl border border-dashed border-white/[0.12] bg-[#131619] px-6 py-20 text-center"><div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/[0.08] text-orange-400"><Folder size={28} /></div><h2 className="mt-5 text-lg font-semibold text-white">This folder is empty</h2><p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#737b82]">Upload a file or create a folder to start organizing your work in ForgeDrive.</p><button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-[#16110c] transition hover:bg-orange-400"><Upload size={16} /> Upload files</button></div>
          </div>
        </section>
        <nav className="fixed bottom-4 left-1/2 z-20 flex h-[66px] w-[calc(100%-2rem)] max-w-[448px] -translate-x-1/2 items-center gap-1 rounded-[22px] border border-white/[0.16] bg-white/[0.08] px-1.5 shadow-[0_18px_50px_rgba(0,0,0,.5),inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-2xl md:hidden" aria-label="Mobile navigation">
          {[[Home, 'Browser'], [Search, 'Search'], [UserRound, 'Profile']].map(([Icon, label]) => <button key={label as string} onClick={() => handleMobileSection(label as string)} aria-current={mobileSection === label ? 'page' : undefined} className={`flex h-[56px] min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-[17px] px-2 text-[10px] font-medium transition ${mobileSection === label ? 'bg-white/[0.1] text-orange-300 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]' : 'text-[#aeb5bb] hover:text-white'}`}><Icon className="size-[18px]" /><span className="truncate">{label}</span></button>)}
        </nav>
        <input ref={uploadInputRef} type="file" className="sr-only" aria-label="Choose files to upload" multiple />
        <input ref={folderInputRef} type="file" className="sr-only" aria-label="Choose a folder to upload" {...({ webkitdirectory: '', directory: '' } as React.InputHTMLAttributes<HTMLInputElement>)} />
        {menuOpen && <div className="fixed bottom-40 right-5 z-30 w-44 overflow-hidden rounded-2xl border border-white/[0.14] bg-[#1b1e21]/95 p-1.5 shadow-[0_16px_40px_rgba(0,0,0,.5)] backdrop-blur-xl md:bottom-24 md:right-8" role="menu" aria-label="New upload options"><button type="button" onClick={chooseFiles} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-white transition hover:bg-white/[0.1]" role="menuitem"><FileText size={17} className="text-orange-400" />Files</button><button type="button" onClick={chooseFolder} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-white transition hover:bg-white/[0.1]" role="menuitem"><Folder size={17} className="text-orange-400" />Folders</button></div>}
        <button type="button" onClick={openUpload} aria-expanded={menuOpen} aria-haspopup="menu" aria-label="New upload" className="fixed bottom-24 right-5 z-20 flex size-14 items-center justify-center rounded-full bg-orange-500 text-[#16110c] shadow-[0_10px_30px_rgba(249,115,22,.35)] transition hover:scale-105 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101214] md:bottom-8 md:right-8"><Plus size={24} strokeWidth={2.5} /><span className="sr-only">New upload</span></button>
      </div>
    </main>
  )
}

