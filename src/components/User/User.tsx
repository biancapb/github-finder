import { UserProps } from "../../types/user";
import {
  Container,
  ImageAvatar,
  Name,
  Location,
  ContainerFollow,
  ResultFollowers,
  ContainerFollowers,
  ContainerFollowing,
} from "../User/User";

import { MdLocationPin } from "react-icons/md";

import { Link } from "react-router-dom";

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <Container>
      <ImageAvatar src={avatar_url} alt={login} />
      <Name>{login}</Name>
      <Location>
        <MdLocationPin />
        {location}
      </Location>
      <ContainerFollow>
        <ContainerFollowers>
          <ResultFollowers>Seguidores:</ResultFollowers>
          <ResultFollowers>{followers}:</ResultFollowers>
        </ContainerFollowers>
        <ContainerFollowing>
          <ResultFollowers>Seguindo:</ResultFollowers>
          <ResultFollowers>{following}</ResultFollowers>
        </ContainerFollowing>
      </ContainerFollow>
      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </Container>
  );
};

export default User;
