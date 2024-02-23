import { useAddFriend } from '@/entities/session/api/useAddFriend';
import { useRemoveFriend } from '@/entities/session/api/useRemoveFriend';
import { useGetFriends } from '@/entities/session';
import { Button } from '@/shared/ui';
import { UserPlusIcon } from '@/shared/assets';
import { useHandleFriendshipRequest } from '@/entities/session/api/useHandleFriendshipRequest';

interface FriendButtonProps {
  myId?: number;
  userId: number;
}

export const FriendButton = ({ myId, userId }: FriendButtonProps) => {
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

  if (!ourFriendshipIndex || ourFriendshipIndex === -1) {
    return (
      <Button onClick={() => addFriend()} size={'m'}>
        Add friend
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
          <Button onClick={() => removeFriend()} size={'m'} typeBtn='danger'>
            Remove friend
          </Button>
        );
      case 'pending':
        return ourFriendship.creator.id !== myId ? (
          <>
            <Button onClick={() => acceptFriend()} size={'m'} typeBtn='primary'>
              Accept friend
            </Button>
            <Button onClick={() => declineFriend()} size={'m'} typeBtn='danger'>
              Reject friend
            </Button>
          </>
        ) : (
          <Button size='m' typeBtn='secondary'>
            Pending
          </Button>
        );
      default:
        return null;
    }
  };

  return renderFriendButton(status);
};
