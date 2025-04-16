import { useProfileQuery } from "@/entities/auth";

const MainPage = () => {
  const { data } = useProfileQuery();

  return (
    <div>
      <h1>Привет {data?.username}!</h1>
    </div>
  );
};

export default MainPage;
