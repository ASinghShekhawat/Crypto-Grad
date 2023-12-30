import DashboardHome from '@/components/Dashboard/DashboardHome'
import Transactions from '@/components/Dashboard/Transactions'

export default function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="w-full p-4 md:p-8">
      {searchParams.tab === 'dashboard' && <DashboardHome />}
      {searchParams.tab === 'transactions' && <Transactions />}
    </div>
  )
}
