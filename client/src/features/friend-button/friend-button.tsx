import { useAddFriend } from '@/entities/session/api/useAddFriend';
import { useRemoveFriend } from '@/entities/session/api/useRemoveFriend';
import { Button } from '@/shared/ui';
import { UserPlusIcon } from '@/shared/assets';
import { useHandleFriendshipRequest } from '@/entities/session/api/useHandleFriendshipRequest';
import { useGetFriendshipStatus } from '@/entities/session/api/useGetFriendshipStatus';

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

export const FriendButton = ({
  myId,
  userId,
  short = false,
  size = 'm',
  width,
}: FriendButtonProps) => {
  const { mutate: addFriend } = useAddFriend(myId, userId);
  const { mutate: removeFriend } = useRemoveFriend(userId);
  const { mutate: declineFriend } = useHandleFriendshipRequest(myId, userId, 'rejected');
  const { mutate: acceptFriend } = useHandleFriendshipRequest(myId, userId, 'accepted');
  const isMyProfile = myId === userId;
  const { data } = useGetFriendshipStatus(userId);

  const friendStatus = data?.status;

  if (!myId || isMyProfile) {
    return null; // Hide friend button if user not logged in or it's their profile
  }

  switch (friendStatus) {
    case 'none': {
      return (
        <Button width={width} onClick={() => addFriend()} size={size}>
          {getText('Add', short)}
          <UserPlusIcon />
        </Button>
      );
    }
    case 'requested': {
      return (
        <Button width={width} size={size} typeBtn='secondary'>
          Pending
        </Button>
      );
    }
    case 'toRespond': {
      return (
        <>
          <Button width={width} onClick={() => acceptFriend()} size={size} typeBtn='primary'>
            {getText('Accept', short)}
          </Button>
          <Button width={width} onClick={() => declineFriend()} size={size} typeBtn='danger'>
            {getText('Reject', short)}
          </Button>
        </>
      );
    }
    case 'friends': {
      return (
        <Button width={width} onClick={() => removeFriend()} size={size} typeBtn='danger'>
          {getText('Remove', short)}
        </Button>
      );
    }
    default:
      return null;
  }
};
