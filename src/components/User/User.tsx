import { UserProps } from "../../types/user";
import {
  Container,
  ImageAvatar,
  Name,
  Location,
  ContainerFollow,
  ResultFollowers,
  LinkProjects,
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
      {location && (
        <Location>
          <MdLocationPin />
          <span>{location}</span>
        </Location>
      )}
      <ContainerFollow>
        <div>
          <span>Seguidores:</span>
          <ResultFollowers>{followers}</ResultFollowers>
        </div>
        <div>
          <span>Seguindo:</span>
          <ResultFollowers>{following}</ResultFollowers>
        </div>
      </ContainerFollow>
      <LinkProjects>
        <Link to={`/repos/${login}`}>
          <span>Ver melhores projetos</span>
        </Link>
      </LinkProjects>
    </Container>
  );
};

export default User;
