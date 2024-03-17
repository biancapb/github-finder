import { useState } from "react";
import { UserProps } from "../../types/user";
import Search from "../../components/Search/Search.tsx";

import User from "../../components/User/User.tsx";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    const { avatar_url, login, location, followers, following } = data;
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    setUser(userData);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
    </div>
  );
};

export default Home;