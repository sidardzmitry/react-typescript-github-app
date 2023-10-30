import { useState } from "react";
import { Container } from "components/Container";
import { Header } from "components/Header";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import { UserGithub, UserLocalGithub, ErrorGithub } from "types";

import { defaultUser } from "./mock/index";
import { isGitHubUser } from "utils/typeguards";
import { extractLocalUser } from "utils/exract-local-user";

const BASE_URL = "https://api.github.com/users/";

const App = () => {
  const [user, setUser] = useState<UserLocalGithub | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const response = await fetch(url);
    const user = (await response.json()) as UserGithub | ErrorGithub;

    if (isGitHubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };
  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
};

export {App};
