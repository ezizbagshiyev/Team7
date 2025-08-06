import { formatCurrency } from '../utils/formatting';

export default function StatCard({ 
  title, 
  amount, 
  changeText, 
  changeColor, 
  borderColor, 
  icon,
  isPercentage = false
}) {
  return (
    <div style={{
      background: 'var(--background)',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid var(--border)',
      borderLeft: `4px solid ${borderColor}`,
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      transition: 'box-shadow 0.2s'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      }}>
        <span style={{
          fontSize: '14px',
          fontWeight: '500',
          color: 'var(--text-secondary)'
        }}>
          {title}
        </span>
        <div style={{
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: borderColor
        }}>
          {icon}
        </div>
      </div>
      <div style={{
        fontSize: '32px',
        fontWeight: '700',
        color: 'var(--text-primary)',
        marginBottom: '4px'
      }}>
        {isPercentage ? `${amount}%` : formatCurrency(amount)}
      </div>
      <div style={{
        fontSize: '12px',
        fontWeight: '500',
        color: changeColor
      }}>
        {changeText}
      </div>
    </div>
  );
}
