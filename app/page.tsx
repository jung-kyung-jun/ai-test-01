import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" />옷을 짓고, 일상을 잇다</p>
          <h1 id="hero-title">오래 입을수록<br />더 좋아지는 옷.</h1>
          <div className="hero-bottom">
            <p>좋은 옷은 삶의 리듬을 존중합니다.<br />온결은 오래 곁에 남을 옷을 만듭니다.</p>
            <a className="text-link" href="#story">우리의 이야기 <ArrowDown aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <Image
            src="/images/atelier-hero.png"
            alt="자연광이 드는 공간에서 온결의 옷을 입고 있는 모델들"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 62vw"
            className="hero-image"
          />
          <span className="image-caption">2025 AUTUMN / WINTER — MADE TO STAY</span>
        </div>
        <div className="hero-index" aria-hidden="true">01 — 04</div>
      </section>

      <section className="intro-section" id="story" aria-labelledby="story-title">
        <div className="section-label"><span>01</span><span>OUR STORY</span></div>
        <div className="intro-content">
          <p className="eyebrow">옷의 본질을 생각합니다</p>
          <h2 id="story-title">덜 만들고,<br /><em>더 오래 함께.</em></h2>
          <div className="intro-description">
            <p>온결은 유행보다 사람을, 속도보다 시간을 먼저 생각하는 컨템포러리 패션 브랜드입니다. 소재를 고르는 순간부터 옷이 당신의 일상에 스며들기까지, 모든 과정에 오래 입을 이유를 담습니다.</p>
            <a className="round-link" href="#values" aria-label="온결의 기준 알아보기"><ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="intro-stat">
          <span className="stat-number">2014</span>
          <span className="stat-caption">서울에서 시작된<br />우리의 첫 번째 계절</span>
        </div>
      </section>

      <section className="values-section" id="values" aria-labelledby="values-title">
        <div className="values-heading">
          <div className="section-label"><span>02</span><span>WHAT WE BELIEVE</span></div>
          <h2 id="values-title">좋은 옷을 만드는<br />세 가지 약속.</h2>
          <p>매일 입는 옷이 더 나은 선택이 되도록,<br />우리가 지키는 기준을 소개합니다.</p>
        </div>
        <div className="values-list">
          <article className="value-item">
            <span className="value-number">01</span>
            <div><h3>정직한 소재</h3><p>피부에 닿는 순간부터 편안하도록. 검증된 천연 섬유와 책임 있게 생산된 소재를 우선합니다.</p></div>
            <span className="value-mark" aria-hidden="true">↗</span>
          </article>
          <article className="value-item">
            <span className="value-number">02</span>
            <div><h3>변하지 않는 디자인</h3><p>계절이 바뀌어도 손이 가는 균형과 실루엣. 유행의 속도 대신 옷의 수명을 디자인합니다.</p></div>
            <span className="value-mark" aria-hidden="true">↗</span>
          </article>
          <article className="value-item">
            <span className="value-number">03</span>
            <div><h3>사람을 위한 제작</h3><p>만드는 사람과 입는 사람 모두를 생각하며, 투명한 파트너십과 책임 있는 생산을 이어갑니다.</p></div>
            <span className="value-mark" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>

      <section className="sustainability-section" id="sustainability" aria-labelledby="sustainability-title">
        <div className="sustainability-image">
          <Image src="/images/atelier-material.png" alt="작업자가 천연 섬유 원단의 질감을 살펴보는 모습" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span className="image-caption">MATERIALS, WITH CARE</span>
        </div>
        <div className="sustainability-copy">
          <div className="section-label"><span>03</span><span>A MORE CONSIDERED WAY</span></div>
          <p className="eyebrow">지속가능한 내일을 위해</p>
          <h2 id="sustainability-title">옷의 다음 계절까지<br />생각합니다.</h2>
          <p className="sustainability-description">좋은 선택은 오래 이어질 때 의미가 있습니다. 생산량을 신중하게 계획하고, 재활용과 재사용이 가능한 소재를 넓혀가며 옷이 만들어지고 순환하는 모든 순간을 다시 살핍니다.</p>
          <a className="text-link" href="#contact">지속가능성 리포트 <ArrowUpRight aria-hidden="true" /></a>
          <div className="impact-stat"><strong>68%</strong><span>2025 컬렉션에 사용된<br />저영향 소재 비율</span></div>
        </div>
      </section>

      <section className="space-section" aria-labelledby="space-title">
        <div className="space-copy">
          <div className="section-label"><span>04</span><span>COME BY, STAY A WHILE</span></div>
          <h2 id="space-title">옷과 사람이<br />만나는 공간.</h2>
          <p>한 벌을 천천히 살펴보고, 온결의 이야기를 직접 경험할 수 있도록. 서울 성수의 플래그십 스토어에서 기다립니다.</p>
          <a className="text-link" href="#contact">매장 안내 보기 <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="space-image">
          <Image src="/images/atelier-store.png" alt="자연 소재와 햇살이 어우러진 온결 플래그십 스토어" fill sizes="(max-width: 760px) 100vw, 60vw" />
        </div>
        <span className="space-coordinate">SEOUL, SEONGSU — 37°32&apos;N 127°03&apos;E</span>
      </section>

      <section className="careers-section" id="careers" aria-labelledby="careers-title">
        <p className="eyebrow">GROW WITH US</p>
        <h2 id="careers-title">좋은 옷의 다음을<br /><em>함께 만들어가요.</em></h2>
        <Link href="/careers" className="careers-link">채용정보 보기 <ArrowUpRight aria-hidden="true" /></Link>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-top">
          <a className="wordmark footer-wordmark" href="#top">ONGYEOL<span className="wordmark-mark">®</span></a>
          <p>매일의 옷, 오래 곁에.<br />우리는 온결입니다.</p>
          <a className="footer-email" href="mailto:hello@ongyeol.kr">hello@ongyeol.kr <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom">
          <span>© 2025 ONGYEOL. ALL RIGHTS RESERVED.</span>
          <span>서울특별시 성동구 연무장길 00</span>
          <a href="#top">맨 위로 ↑</a>
        </div>
      </footer>
    </main>
  )
}
