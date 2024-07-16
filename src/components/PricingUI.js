const PricingUI = (props) => {

    // const {restData} = props;
    const {
        name,
        costForTwoMessage,
        cuisines,
        avgRatingString,
        totalRatingsString, 
        areaName,
        sla,
        feeDetails
      } = props.props;
  return (
    <div className="grid h-screen place-items-center bg-white">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {name}
          </h2>
      
        </div>
        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none shadow-2xl">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {avgRatingString} -  ({totalRatingsString}) - {costForTwoMessage}  
            </h3>

            <h3 className="text-2xl font-bold tracking-tight text-gray-800">
              Outlet -  {areaName}  
            </h3>
           
            <p className="font-bold text-red-900 text-lg my-2">{cuisines.join(",")}</p>
            <h4>Delivery Time - {sla.slaString}</h4> 
            <div className="mt-10 flex items-center gap-x-4">
              <h2 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
              </h2>
              <div className="h-px flex-auto bg-gray-950"></div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-gray-800">
              Delivery -  {feeDetails.message}  
            </h3>
          </div>
        </div>
      </div>
  )
};

export default PricingUI;