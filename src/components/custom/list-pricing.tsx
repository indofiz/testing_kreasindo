import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface ListPricingProps {
  title: string
  isDefault?: boolean
}

const ListPricing: React.FC<ListPricingProps> = ({ title, isDefault }) => {
  return (
    <div className="flex items-center gap-3 md:gap-0">
      <div
        className={cn(
          'size-5 md:size-6 flex justify-center items-center rounded-full',
          !isDefault
            ? 'bg-indigo-400 text-white'
            : 'bg-slate-200 text-slate-700'
        )}
      >
        <Check className="w-3.5 h-3.5 md:w-4 md:h-4" />
      </div>
      <div
        className={cn(
          'text-xs md:text-sm font-light ml-2 md:ml-4',
          !isDefault ? 'text-slate-100' : 'text-slate-700'
        )}
      >
        {title}
      </div>
    </div>
  )
}

export default ListPricing
