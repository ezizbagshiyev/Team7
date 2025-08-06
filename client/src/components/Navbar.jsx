import Link from "next/link";

export default function Navbar({ 
  title = "Dashboard", 
  description = "Dashboard component rendered above the page",
  className = "" 
}) {
  return (
    <div className={`bg-white ${className}`}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div style={{ 
                fontSize: '24px', 
                fontWeight: '700', 
                color: 'var(--primary)', 
                display: 'flex', 
                alignItems: 'center' 
              }}>
                <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                FinanceFlow
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-secondary hover:text-primary font-medium transition-colors">
                Dashboard
              </Link>
              <Link href="/expenses" className="text-secondary hover:text-primary font-medium transition-colors">
                Expenses  
              </Link>
              <Link href="/reports" className="text-secondary hover:text-primary font-medium transition-colors">
                Reports
              </Link>
            </nav>

            {/* Auth buttons */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/signin" 
                className="text-secondary hover:text-primary font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/get-started" 
                style={{
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  display: 'inline-block'
                }}
                className="hover:opacity-90 hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}