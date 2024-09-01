import { UserInfoContainer, Progress, NameText, UserPicture } from './styles';
import { IUserInfo } from './types';

const UserInfo = ({nome, imagem, percentual} : IUserInfo) => {
  return (
    <UserInfoContainer>
      <UserPicture src={ imagem }/>
      <div>
        <NameText>{ nome }</NameText>
        <Progress percentual={ percentual }/>
      </div>
    </UserInfoContainer>
  );
}

export default UserInfo;