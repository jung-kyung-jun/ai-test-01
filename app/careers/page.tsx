import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '채용정보 | 온결',
  description: '온결 상품기획 MD 채용 안내. 시즌 기획과 상품 운영을 함께할 MD의 자격 요건을 소개합니다.',
}

const duties = [
  '시즌별 상품 라인업을 기획하고, 카테고리와 가격대를 구성합니다.',
  '판매 데이터와 고객 반응을 읽어 발주량과 재고를 운영합니다.',
  '소재, 원가, 납기를 조율하며 오래 입을 수 있는 상품을 선별합니다.',
  '매장과 온라인에서 같은 기준으로 상품이 전달되도록 구성을 맞춥니다.',
  '디자인, 생산, 영업 부서와 시즌 일정을 함께 진행합니다.',
]

const requirements = [
  '패션 브랜드에서 상품기획(MD) 경력 3년 이상',
  '시즌 기획, 발주, 판매 분석을 직접 담당한 경험',
  '원가와 마진을 함께 보며 상품을 구성하는 수치 감각',
  '디자인·생산 부서와 협업해 상품을 완성한 경험',
  '엑셀 등 기본 데이터 도구로 판매와 재고를 정리할 수 있는 능력',
]

const preferred = [
  '컨템포러리, 데일리웨어 브랜드에서 일한 경험',
  '소량 생산과 지속가능 소재를 다루는 브랜드에 대한 이해',
  '해외 소싱 또는 협력 공장과 소통할 수 있는 영어 능력',
]

export default function CareersPage() {
  return (
    <main className="job-page">
      <p className="eyebrow"><span className="eyebrow-line" />채용정보</p>
      <div className="job-heading">
        <h1>상품기획 MD</h1>
        <p>유행의 속도보다 오래 입을 옷을 고르는 사람. 온결의 다음 시즌을 함께 기획할 MD를 찾습니다.</p>
      </div>

      <dl className="job-meta">
        <div><dt>직무</dt><dd>상품기획 MD</dd></div>
        <div><dt>고용 형태</dt><dd>정규직</dd></div>
        <div><dt>근무지</dt><dd>서울 성수 본사</dd></div>
        <div><dt>경력</dt><dd>3년 이상</dd></div>
      </dl>

      <section className="job-block" aria-labelledby="duties-title">
        <h2 id="duties-title">담당 업무</h2>
        <ul>
          {duties.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="job-block" aria-labelledby="requirements-title">
        <h2 id="requirements-title">자격 요건</h2>
        <ul>
          {requirements.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="job-block" aria-labelledby="preferred-title">
        <h2 id="preferred-title">우대 사항</h2>
        <ul>
          {preferred.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="job-apply" aria-labelledby="apply-title">
        <h2 id="apply-title">지원 방법</h2>
        <p>이력서와 경력기술서를 아래 메일로 보내 주세요. 메일 제목에 [상품기획 MD]와 성함을 적어 주시면 됩니다.</p>
        <a className="text-link" href="mailto:hello@ongyeol.kr?subject=%5B%EC%83%81%ED%92%88%EA%B8%B0%ED%9A%8D%20MD%5D%20%EC%A7%80%EC%9B%90">
          hello@ongyeol.kr <ArrowUpRight aria-hidden="true" />
        </a>
        <Link className="job-back" href="/">홈으로 돌아가기</Link>
      </section>
    </main>
  )
}
