import Item from "./Address";
import { Address1, Address2 } from "./Items";
const AddressContainer = () => {
  return (
<div className="">
<div className="columns-2">
<Item Links={Address1} title="ADDRESS 1" />
<Item Links={Address2} title="ADDRESS 2" />
</div>
</div>
  );
};

export default AddressContainer;
