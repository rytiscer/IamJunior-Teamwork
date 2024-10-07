import { useParams } from "react-router-dom";
import { useBusiness } from "@/components/business/hooks";
import ErrorPage from "./ErrorPage";

const BusinessPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useBusiness(params.id ?? "");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorPage />;

  console.log(data);
  return <div></div>;
};

export default BusinessPage;
