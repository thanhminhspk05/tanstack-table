import { people } from "@/people";
import { columns } from "./columns";
import PeopleDataTable from "./data-table";

type Props = {};

const People = (props: Props) => {
  return <PeopleDataTable columns={columns} data={people} />;
};

export default People;
