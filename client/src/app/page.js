import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 16px' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: '700',
            color: 'var(--primary)',
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Take Control of Your Finances
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px auto',
            lineHeight: '1.6'
          }}>
            Track expenses, set budgets, and receive AI-powered recommendations to achieve your financial goals with ease.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ 
        padding: '80px 16px', 
        background: 'var(--surface)' 
      }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              Everything you need to manage your money
            </h2>
            <p style={{
              fontSize: '20px',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Simple, powerful tools to track spending, create budgets, and make smarter financial decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Smart Analytics */}
            <div style={{
              background: 'var(--background)',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid var(--border)',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'var(--primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto'
              }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '16px'
              }}>
                Smart Analytics
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Visualize your spending patterns with beautiful charts and get insights into your financial habits.
              </p>
            </div>

            {/* AI Recommendations */}
            <div style={{
              background: 'var(--background)',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid var(--border)',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'var(--primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto'
              }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '16px'
              }}>
                AI Recommendations
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Get personalized budgeting advice and spending recommendations powered by advanced AI.
              </p>
            </div>

            {/* Bank-Level Security */}
            <div style={{
              background: 'var(--background)',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid var(--border)',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'var(--primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto'
              }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '16px'
              }}>
                Bank-Level Security
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Your financial data is protected with enterprise-grade security and encryption.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
