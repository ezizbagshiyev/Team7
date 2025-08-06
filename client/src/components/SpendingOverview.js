export default function SpendingOverview({ categoryBreakdown = {} }) {
  const hasData = Object.keys(categoryBreakdown).length > 0;

  return (
    <div style={{
      background: 'var(--background)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '4px'
        }}>
          Spending Overview
        </h3>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '14px'
        }}>
          Your expenses by category this month
        </p>
      </div>
      
      <div style={{
        height: '300px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)'
      }}>
        {hasData ? (
          <div>Category breakdown chart would render here</div> //placeholder <PieChart data={categoryBreakdown} />
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
            <p>No expense data yet</p>
            <p style={{ fontSize: '12px', marginTop: '8px' }}>
              Start adding expenses to see your spending breakdown
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
