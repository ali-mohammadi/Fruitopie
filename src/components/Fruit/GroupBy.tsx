import React from "react";

interface GroupByProps {
    changeGroupHandler: (key: string) => void
}

const GroupBy: React.FC<GroupByProps> = ({changeGroupHandler}) => {
    return (
        <div className="mb-3">
            <label className="text-lg">Group By</label>
            <div className="relative">
                <select className="appearance-none block w-full h-8 px-2 bg-slate-100 border border-slate-500 focus:outline-none focus:shadow-outline text-lg" onChange={(e) => changeGroupHandler(e.target.value)}>
                    <option value="">None</option>
                    <option value="family">Family</option>
                    <option value="order">Order</option>
                    <option value="genus">Genus</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500 font-wide text-xs">
                    V
                </div>
            </div>
        </div>
    )
}

export default GroupBy;