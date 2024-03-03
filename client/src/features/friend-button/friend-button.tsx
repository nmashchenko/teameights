import { useAddFriend } from '@/entities/session/api/useAddFriend';
import { useRemoveFriend } from '@/entities/session/api/useRemoveFriend';
import { useGetFriends } from '@/entities/session';
import { Button } from '@/shared/ui';
import { UserPlusIcon } from '@/shared/assets';
import { useHandleFriendshipRequest } from '@/entities/session/api/useHandleFriendshipRequest';

interface FriendButtonProps {
  myId?: number;
  userId: number;
  short?: boolean;
  size?: 'm' | 'l' | 's';
  width?: string;
}

function getText(text: string, short: boolean) {
  if (short) return text;
  return text + ' friend';
}

export const FriendButton = ({ myId, userId, short = false, size = 'm', width }: FriendButtonProps) => {
  const { mutate: addFriend } = useAddFriend(myId, userId);
  const { mutate: removeFriend } = useRemoveFriend(userId);
  const { mutate: declineFriend } = useHandleFriendshipRequest(myId, userId, 'rejected');
  const { mutate: acceptFriend } = useHandleFriendshipRequest(myId, userId, 'accepted');
  const { data: friendships } = useGetFriends(userId);
  const isMyProfile = myId === userId;

  if (!myId || isMyProfile) {
    return null; // Hide friend button if user not logged in or it's their profile
  }

  const ourFriendshipIndex = friendships?.data.findIndex(
    friendship =>
      (friendship.creator.id === myId || friendship.receiver.id === myId) &&
      friendship.status !== 'rejected'
  );

  if (ourFriendshipIndex === undefined || ourFriendshipIndex === -1) {
    return (
      <Button width={width} onClick={() => addFriend()} size={size}>
        {getText('Add', short)}
        <UserPlusIcon />
      </Button>
    );
  }

  const ourFriendship = friendships!.data[ourFriendshipIndex];

  const { status } = ourFriendship;

  const renderFriendButton = (friendshipStatus: string) => {
    switch (friendshipStatus) {
      case 'accepted':
        return (
          <Button width={width} onClick={() => removeFriend()} size={size} typeBtn='danger'>
            {getText('Remove', short)}
          </Button>
        );
      case 'pending':
        return ourFriendship.creator.id !== myId ? (
          <>
            <Button width={width} onClick={() => acceptFriend()} size={size} typeBtn='primary'>
              {getText('Accept', short)}
            </Button>
            <Button width={width} onClick={() => declineFriend()} size={size} typeBtn='danger'>
              {getText('Reject', short)}
            </Button>
          </>
        ) : (
          <Button width={width} size={size} typeBtn='secondary'>
            Pending
          </Button>
        );
      default:
        return null;
    }
  };

  return renderFriendButton(status);
};
