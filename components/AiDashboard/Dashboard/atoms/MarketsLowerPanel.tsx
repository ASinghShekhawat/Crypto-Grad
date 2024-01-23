import LineChartData from '@/components/charts/LineChartData'
import Button from '@/components/shared/Button'
import Chart from '../../TradingViewCharts/Chart'

const MarketLowerPanel = ({ pair }: { pair: string }) => {
  return (
    <div className="col-span-6 flex flex-col gap-4 md:col-span-3">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <p className="text-2xl font-bold leading-[140%] text-white/80 ">
            Bitcoin to USD Chart
          </p>
          {/* <div className="flex h-fit gap-2 rounded bg-[#20222B]">
            <Button className="h-6 w-fit text-sm font-normal">1D</Button>
            <Button className="h-6 w-fit bg-none text-sm font-normal">
              1W
            </Button>
            <Button className="h-6 w-fit bg-none text-sm font-normal">
              1M
            </Button>
            <Button className="h-6 w-fit bg-none text-sm font-normal">
              1Y
            </Button>
            <Button className="h-6 w-fit bg-none text-sm font-normal">
              5Y
            </Button>
          </div> */}
        </div>
        <div className="h-[230px] overflow-hidden bg-[#20222B] md:h-[470px]">
          {/* <LineChartData color="#6754F8" /> */}
          <Chart pair={pair} />
        </div>
      </div>
      <div className="flex flex-col  gap-6">
        <p className="text-2xl font-medium leading-[140%] text-white/80 ">
          Key Metrics
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium leading-[140%] text-white/80 ">
              $41,463.87
            </p>
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              Price
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium leading-[140%] text-white/80 ">
              $787,869,354,519
            </p>
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              Market Cap
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium leading-[140%] text-white/80 ">
              $25,094,658,751
            </p>
            <p className="text-sm font-normal leading-[140%] text-gray-400 ">
              Volume (24H)
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium leading-[140%] text-white/80 ">
              $19,016,668 BTC
            </p>
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              Circulating Supply
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketLowerPanel
