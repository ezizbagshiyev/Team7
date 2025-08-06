import Link from 'next/link';
import { formatCurrency, formatDate, getCategoryIcon } from '../utils/formatting';

export default function RecentTransactions({ transactions = [] }) {
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
          Recent Transactions
        </h3>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '14px'
        }}>
          Latest expense entries
        </p>
      </div>
      
      <div style={{
        background: 'var(--background)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        {transactions.length > 0 ? (
          transactions.map((expense, index) => (
            <div key={expense._id || index} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: index < transactions.length - 1 ? '1px solid var(--border)' : 'none',
              transition: 'background-color 0.2s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  background: '#fef3c7',
                  color: '#d97706'
                }}>
                  {getCategoryIcon(expense.category)}
                </div>
                <div>
                  <h4 style={{ fontWeight: '500', marginBottom: '2px' }}>
                    {expense.comment || `${expense.category} expense`}
                  </h4>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '12px'
                  }}>
                    {formatDate(expense.date)} • {expense.category}
                  </p>
                </div>
              </div>
              <div style={{
                fontWeight: '600',
                color: 'var(--danger)'
              }}>
                -{formatCurrency(expense.amount)}
              </div>
            </div>
          ))
        ) : (
          <div style={{
            padding: '48px 24px',
            textAlign: 'center',
            color: 'var(--text-secondary)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>💳</div>
            <p style={{ marginBottom: '8px' }}>No transactions yet</p>
            <p style={{ fontSize: '12px' }}>
              Start tracking your expenses to see them here
            </p>
          </div>
        )}
      </div>
      
      <div style={{ marginTop: '16px' }}>
        <Link 
          href="/add-expense"
          style={{
            display: 'block',
            width: '100%',
            padding: '12px 24px',
            background: 'var(--surface)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '14px',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.background = 'var(--border)'}
          onMouseLeave={(e) => e.target.style.background = 'var(--surface)'}
        >
          Add New Expense
        </Link>
      </div>
    </div>
  );
}