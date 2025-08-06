"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { api } from '../../services/api';
import { getChangeText } from '@/utils/formatting';
import StatCard from '@/components/StatCard';
import RecentTransactions from '@/components/RecentTransactions';
import SpendingOverview from '@/components/SpendingOverview';

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        setLoading(true);
        const data = await api.getDashboard();
        
        console.log('Dashboard API Response:', data);
        console.log('Data type:', typeof data);
        console.log('Data keys:', Object.keys(data));
        console.log('Formatted data:', JSON.stringify(data, null, 2));
        
        setDashboardData(data);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  const handleRefreshData = async () => {
    try {
      const data = await api.getDashboard();
      console.log('Manual refresh - Dashboard data:', data);
      setDashboardData(data);
    } catch (err) {
      console.error('Error refreshing data:', err);
    }
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'var(--surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid var(--border)',
            borderTop: '4px solid var(--primary)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <p style={{ color: 'var(--text-secondary)' }}>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'var(--surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          background: 'var(--background)',
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid var(--danger)',
          textAlign: 'center',
          maxWidth: '400px'
        }}>
          <h2 style={{ color: 'var(--danger)', marginBottom: '16px' }}>Error</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>{error}</p>
          <button 
            onClick={handleRefreshData}
            style={{
              background: 'var(--primary)',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const { summary, recentTransactions, categoryBreakdown, monthlyTrend } = dashboardData || {};

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--surface)',
      padding: '32px 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ 
          marginBottom: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}>
          <div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '8px'
            }}>
              Welcome back, John!
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Here&#39;s what&#39;s happening with your money this month
            </p>
          </div>
          
          <button
            onClick={handleRefreshData}
            style={{
              background: 'var(--info)',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            🔄 Refresh Data
          </button>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          <StatCard
            title="Total Income"
            amount={summary?.totalIncome || 0}
            changeText={getChangeText(summary?.totalIncome, monthlyTrend?.[0]?.income, 'income')}
            changeColor="var(--success)"
            borderColor="var(--success)"
            icon="↑"
          />
          
          <StatCard
            title="Total Expenses"
            amount={summary?.totalExpenses || 0}
            changeText={summary?.totalExpenses > 0 ? getChangeText(summary?.totalExpenses, monthlyTrend?.[0]?.expenses, 'expense') : 'No expenses yet'}
            changeColor={summary?.totalExpenses > 0 ? 'var(--danger)' : 'var(--text-secondary)'}
            borderColor="var(--danger)"
            icon="↓"
          />
          
          <StatCard
            title="Remaining Balance"
            amount={summary?.remainingBalance || 0}
            changeText={summary?.remainingBalance > 0 ? '+18% from last month' : 'Track expenses to see balance'}
            changeColor={summary?.remainingBalance > 0 ? 'var(--success)' : 'var(--text-secondary)'}
            borderColor="var(--primary)"
            icon="💰"
          />
          
          <StatCard
            title="Budget Progress"
            amount={summary?.budgetProgress || 0}
            changeText={summary?.budgetProgress >= 80 ? 'On track this month' : 'Needs attention'}
            changeColor="var(--text-secondary)"
            borderColor="var(--warning)"
            icon="🎯"
            isPercentage={true}
          />
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
          <SpendingOverview categoryBreakdown={categoryBreakdown} />
          <RecentTransactions transactions={recentTransactions} />
        </div>
        
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
