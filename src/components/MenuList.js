import { CDN_URL } from "../utils/constants";

const MenuList = (props) => {
    console.log(props);
    debugger;
  return (
    <div classNameName="p-4 m-4">
            <div classNameName="text-xl font-extrabold">
                Available Menu's For the day   
            </div>

      <ul role="list" className="divide-y my-4 divide-gray-100">
        {props.props.map((item) => (
            <li key={item.card.info.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={CDN_URL + item.card.info.imageId}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{item.card.info.name} - {item.card.info.defaultPrice/100 || item.card.info.price/100}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
              {item.description}
              </p>
            </div>
          </li>
        ))};

        
      </ul>
    </div>
  );
};

export default MenuList;
