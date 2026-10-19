'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navigation = [
  { label: '브랜드 이야기', href: '/#story' },
  { label: '우리의 기준', href: '/#values' },
  { label: '지속가능성', href: '/#sustainability' },
  { label: '함께하기', href: '/#careers' },
  { label: '채용정보', href: '/careers' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="온결 홈">
        ONGYEOL<span className="wordmark-mark">®</span>
      </Link>
      <nav className="desktop-nav" aria-label="주요 메뉴">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? 'is-active' : undefined}
            aria-current={pathname === item.href ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-contact" href="/#contact">
        문의하기 <ArrowUpRight aria-hidden="true" />
      </Link>
      <button
        className="mobile-menu-button"
        type="button"
        aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="모바일 주요 메뉴">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>
            문의하기 <ArrowUpRight aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  )
}
